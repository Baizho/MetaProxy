// app/dashboard/layout.tsx
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <div className="flex space-x-4 mb-4">
                    <Link href="/dashboard/student/tests" className="text-blue-500 hover:underline">
                        Tests
                    </Link>
                    <Link href="/ai-recommendations/analyze" className="text-blue-500 hover:underline">
                        Recommendations
                    </Link>
                    <Link href="/events/calendar" className="text-blue-500 hover:underline">
                        Events
                    </Link>
                    <Link href="/dashboard/parent/child-progress" className="text-blue-500 hover:underline">
                        Parent Dashboard
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}