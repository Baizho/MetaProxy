// utils/auth.ts
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET;

export function generateToken(user: any) {
    return jwt.sign({ id: user._id, role: user.role }, JWT_SECRET!, { expiresIn: "1h" });
}

interface JwtPayload {
    _id: string,
    role: { type: String, enum: ["student", "teacher", "parent", "admin"] },
}

export function verifyToken(token: string) {
    try {
        return jwt.verify(token, JWT_SECRET!) as JwtPayload;
    } catch (error) {
        return null;
    }
}

export async function middleware(req: NextRequest, res: NextResponse, role: string) {
    const token = req.cookies.get("token")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    const decoded: JwtPayload | null = verifyToken(token);

    if (!decoded || decoded.role !== role) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    return null; // No error, proceed
}