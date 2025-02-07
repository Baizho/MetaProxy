// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link href="/" className="text-blue-500 text-xl font-bold">
                    Career Guidance App
                </Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/dashboard/student/tests" className="text-gray-700 hover:text-blue-500">
                            Tests
                        </Link>
                    </li>
                    <li>
                        <Link href="/ai-recommendations/analyze" className="text-gray-700 hover:text-blue-500">
                            Recommendations
                        </Link>
                    </li>
                    <li>
                        <Link href="/events/calendar" className="text-gray-700 hover:text-blue-500">
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/parent/child-progress" className="text-gray-700 hover:text-blue-500">
                            Parent Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/auth/login" className="text-gray-700 hover:text-blue-500">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link href="/auth/register" className="text-gray-700 hover:text-blue-500">
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}