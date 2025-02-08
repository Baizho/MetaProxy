'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function StudentDashboard() {
    const router = useRouter();
    const { data: session } = useSession();
    const [tests, setTests] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTests = async () => {
            if (!session?.user?.id) {
                router.push("/auth/login");
                return;
            }
            try {
                const response = await fetch(`/api/user-tests/${session.user.id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch tests');
                }
                const userTests = await response.json();
                setTests(userTests);
            } catch (error) {
                console.error('Error fetching tests:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTests();
    }, []);

    if (loading) {
        return (
            <div className="p-8 flex justify-center items-center h-screen">
                <p className="text-lg font-medium text-gray-500 animate-pulse">Loading your tests...</p>
            </div>
        );
    }

    return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 min-h-screen bg-gray-100">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Tests</h1>
                {tests.length > 0 ? (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tests.map((test, index) => (
                            <li key={index} className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-xl transition duration-300">
                                <h2 className="text-xl font-semibold text-gray-800">{test.title}</h2>
                                <p className="text-gray-600 mt-2">{test.description}</p>
                                <p className="mt-3 text-sm text-gray-500">
                                    <span className="font-medium text-gray-700">Results:</span> {test.results.join(', ')}
                                </p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-500 text-lg mt-4">No tests taken yet.</p>
                )}
            </div>
        </div>
    );
}
