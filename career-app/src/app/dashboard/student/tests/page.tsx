// app/dashboard/student/page.tsx
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
        if (!session?.user?.id) {
            router.push("/auth/login");
            return;
        }
        const fetchTests = async () => {

            try {
                // Fetch the user's tests via the API
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
    }, [session]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Your Tests</h1>
            {tests.length > 0 ? (
                <ul>
                    {tests.map((test, index) => (
                        <li key={index} className="mb-4">
                            <h2 className="text-lg font-medium">{test.title}</h2>
                            <p>{test.description}</p>
                            <p>Results: {test.results.join(', ')}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tests taken yet.</p>
            )}
        </div>
    );
}