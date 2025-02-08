'use client'; // Required for using useSession
import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-900 text-gray-200 shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* App Logo */}
                <Link href="/" className="text-gray-200 text-2xl font-bold hover:text-gray-100 transition-all">
                    Pro Career
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-200 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Navigation Links */}
                <ul className={`md:flex space-x-6 hidden`}>
                    <li>
                        <Link href="/tests" className="hover:text-gray-100 transition-all">
                            Tests
                        </Link>
                    </li>
                    <li>
                        <Link href="/career" className="hover:text-gray-100 transition-all">
                            Recommendations
                        </Link>
                    </li>

                    {session ? (
                        <>
                            {session.user.role === "student" && (
                                <li>
                                    <Link href="/dashboard/student/tests" className="hover:text-gray-100 transition-all">
                                        Student Dashboard
                                    </Link>
                                </li>
                            )}
                            {session.user.role === "teacher" && (
                                <li>
                                    <Link href="/dashboard/teacher/students" className="hover:text-gray-100 transition-all">
                                        Teacher Dashboard
                                    </Link>
                                </li>
                            )}
                            {session.user.role === "parent" && (
                                <li>
                                    <Link href="/dashboard/parent/child-progress" className="hover:text-gray-100 transition-all">
                                        Parent Dashboard
                                    </Link>
                                </li>
                            )}
                            <li>
                                <Link href="/profile" className="hover:text-gray-100 transition-all">
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <button onClick={() => signOut()} className="hover:text-red-400 transition-all">
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href="/auth/login" className="hover:text-gray-100 transition-all">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href="/auth/register" className="hover:text-gray-100 transition-all">
                                    Register
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-blue-900 text-gray-200 py-4 px-6 space-y-4">
                    <Link href="/tests" className="block hover:text-gray-100 transition-all">
                        Tests
                    </Link>
                    <Link href="/career" className="block hover:text-gray-100 transition-all">
                        Recommendations
                    </Link>
                    {session ? (
                        <>
                            {session.user.role === "student" && (
                                <Link href="/dashboard/student/tests" className="block hover:text-gray-100 transition-all">
                                    Student Dashboard
                                </Link>
                            )}
                            {session.user.role === "teacher" && (
                                <Link href="/dashboard/teacher/students" className="block hover:text-gray-100 transition-all">
                                    Teacher Dashboard
                                </Link>
                            )}
                            {session.user.role === "parent" && (
                                <Link href="/dashboard/parent/child-progress" className="block hover:text-gray-100 transition-all">
                                    Parent Dashboard
                                </Link>
                            )}
                            <Link href="/profile" className="block hover:text-gray-100 transition-all">
                                Profile
                            </Link>
                            <button onClick={() => signOut()} className="block hover:text-red-400 transition-all">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/auth/login" className="block hover:text-gray-100 transition-all">
                                Login
                            </Link>
                            <Link href="/auth/register" className="block hover:text-gray-100 transition-all">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}
