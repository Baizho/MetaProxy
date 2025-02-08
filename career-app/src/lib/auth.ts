import NextAuth, { AuthOptions, DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/utils/db";
import User, { IUser } from "@/models/User";
import bcrypt from "bcrypt";

// Define custom types for NextAuth
declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            email: string;
            name: string;
            role: IUser["role"];
            testsTaken: IUser["testsTaken"];
            children: IUser["children"];
            notifications: IUser["notifications"];
        } & DefaultSession["user"];
    }

    interface User {
        id: string;
        email: string;
        name: string;
        role: IUser["role"];
        testsTaken: IUser["testsTaken"];
        children: IUser["children"];
        notifications: IUser["notifications"];
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        email: string;
        name: string;
        role: IUser["role"];
        testsTaken: IUser["testsTaken"];
        children: IUser["children"];
        notifications: IUser["notifications"];
    }
}

if (!process.env.NEXTAUTH_SECRET) {
    throw new Error("NEXTAUTH_SECRET is not defined");
}

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                console.log("here");
                if (!credentials?.email || !credentials.password) {
                    throw new Error("Invalid credentials");
                }
                await dbConnect();
                const user = await User.findOne({ email: credentials.email });

                if (!user) {
                    throw new Error("User not found");
                }

                const isPasswordValid = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                if (!isPasswordValid) {
                    throw new Error("Invalid password");
                }

                return {
                    id: user._id.toString(),
                    email: user.email,
                    name: user.name,
                    role: user.role,
                    testsTaken: user.testsTaken,
                    children: user.children,
                    notifications: user.notifications,
                } as any; // Type assertion needed because of NextAuth's internal types
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        jwt: async ({ token, user, trigger, session }) => {
            if (trigger === "update" && session) {
                // Handle session updates
                return { ...token, ...session.user };
            }

            if (user) {
                // Only update token data when user object is present (usually on sign-in)
                return {
                    ...token,
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                    testsTaken: user.testsTaken,
                    children: user.children,
                    notifications: user.notifications,
                };
            }
            return token;
        },

        session: async ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    email: token.email,
                    name: token.name,
                    role: token.role,
                    testsTaken: token.testsTaken,
                    children: token.children,
                    notifications: token.notifications,
                },
            };
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);