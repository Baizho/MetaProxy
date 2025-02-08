// app/profile/page.tsx
'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function ProfilePage() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <p>You are not logged in. Please{' '}
                    <Link href="/auth/login" className="text-blue-600 hover:text-blue-800">
                        log in
                    </Link>{' '}
                    to view your profile.
                </p>
            </div>
        );
    }

    const { name, email, role, testsTaken, children, notifications } = session.user;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Welcome, {name}!
                </h2>
                <p className="text-center text-sm text-gray-600">Your role: {role}</p>

                {/* Role-Specific Content */}
                {role === 'student' && (
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">Student Profile</h3>
                        <p>Email: {email}</p>
                        <p>Tests Taken: {testsTaken?.length || 0}</p>
                        <p>Notifications: {notifications?.length || 0}</p>
                    </div>
                )}

                {role === 'teacher' && (
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">Teacher Profile</h3>
                        <p>Email: {email}</p>
                        <p>Tests Created: {testsTaken?.length || 0}</p>
                        <p>Students: {children?.length || 0}</p>
                    </div>
                )}

                {role === 'parent' && (
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">Parent Profile</h3>
                        <p>Email: {email}</p>
                        <p>Children: {children?.length || 0}</p>
                        <p>Notifications: {notifications?.length || 0}</p>
                    </div>
                )}

                {/* Back to Dashboard */}
                <div className="flex justify-center">
                    <Link
                        href="/"
                        className="font-medium text-blue-600 hover:text-blue-500"
                    >
                        Back to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
}