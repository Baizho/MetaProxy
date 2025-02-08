'use client';
import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);

    const linkStyle = "hover:text-gray-100 hover:scale-110 active:scale-105 transition-all duration-200";
    const buttonStyle = "inline-flex items-center px-4 py-2 rounded-lg transition-all duration-200 hover:scale-110 active:scale-105 transform";

    const isAuthenticated = !!session?.user;

    return (
        <nav className="bg-blue-900 text-gray-200 shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-gray-200 text-2xl font-bold hover:text-gray-100 hover:scale-110 active:scale-105 transition-all duration-200">
                        Pro Career
                    </Link>

                    <button className="md:hidden text-gray-200 focus:outline-none hover:scale-110 active:scale-105 transition-all duration-200" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    <ul className="hidden md:flex items-center space-x-6">
                        <li><Link href={isAuthenticated ? "/tests" : "/auth/login"} className={linkStyle}>Tests</Link></li>
                        <li><Link href={isAuthenticated ? "/career" : "/auth/login"} className={linkStyle}>Recommendations</Link></li>

                        {session ? (
                            <>
                                {session.user.role === "student" && (
                                    <li><Link href="/dashboard/student/tests" className={linkStyle}>Student Dashboard</Link></li>
                                )}
                                {session.user.role === "teacher" && (
                                    <li><Link href="/dashboard/teacher/students" className={linkStyle}>Teacher Dashboard</Link></li>
                                )}
                                {session.user.role === "parent" && (
                                    <li><Link href="/dashboard/parent/child-progress" className={linkStyle}>Parent Dashboard</Link></li>
                                )}

                                <li>
                                    <Link href="/profile" className={`${buttonStyle} border border-gray-100`}>Profile</Link>
                                </li>
                                <li>
                                    <button onClick={() => signOut()} className={`${buttonStyle} bg-red-600 hover:bg-red-500 text-white `}>Logout</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link href="/auth/login" className={`${buttonStyle} bg-green-600 hover:bg-green-500 text-white`}>Login</Link>
                                </li>
                                <li>
                                    <Link href="/auth/register" className={`${buttonStyle} border border-gray-100`}>Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                {isOpen && (
                    <div className="md:hidden py-4 space-y-4">
                        <Link href={isAuthenticated ? "/tests" : "/auth/login"} className={linkStyle}>Tests</Link>
                        <Link href={isAuthenticated ? "/career" : "/auth/login"} className={linkStyle}>Recommendations</Link>

                        {session ? (
                            <>
                                {session.user.role === "student" && (
                                    <Link href="/dashboard/student/tests" className={linkStyle}>Student Dashboard</Link>
                                )}
                                {session.user.role === "teacher" && (
                                    <Link href="/dashboard/teacher/students" className={linkStyle}>Teacher Dashboard</Link>
                                )}
                                {session.user.role === "parent" && (
                                    <Link href="/dashboard/parent/child-progress" className={linkStyle}>Parent Dashboard</Link>
                                )}

                                <Link href="/profile" className={`block ${buttonStyle} border border-gray-100 text-center`}>Profile</Link>
                                <button onClick={() => signOut()} className={`w-full ${buttonStyle} bg-red-600 hover:bg-red-500 text-white`}>Logout</button>
                            </>
                        ) : (
                            <>
                                <Link href="/auth/login" className={`block ${buttonStyle} bg-green-600 hover:bg-green-500 text-white text-center`}>Login</Link>
                                <Link href="/auth/register" className={`block ${buttonStyle} border border-gray-100 text-center`}>Register</Link>
                            </>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
}
