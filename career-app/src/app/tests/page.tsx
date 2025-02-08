// app/tests/page.tsx
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useSession } from 'next-auth/react';

interface ITest {
    _id: string;
    title: string;
    description: string;
}

export default function TestsPage() {
    const router = useRouter();
    const [tests, setTests] = useState<ITest[]>([]);
    const [loading, setLoading] = useState(true);
    const { data: session } = useSession();

    useEffect(() => {
        if (!session?.user?.id) {
            router.push("/auth/login");
            return;
        }
        const fetchTests = async () => {
            try {
                const response = await fetch('/api/tests');
                if (!response.ok) {
                    throw new Error('Failed to fetch tests');
                }
                const data = await response.json();
                setTests(data);
            } catch (error) {
                console.error('Error fetching tests:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTests();
    }, []);

    if (loading) return <p>Loading tests...</p>;

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Available Tests</h1>
            <ul className="mt-4 space-y-4">
                {tests.map((test) => (
                    <li key={test._id} className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-medium">{test.title}</h2>
                        <p>{test.description}</p>
                        <Link href={`/tests/${test._id}`}>
                            <button className="mt-2 px-4 py-2 bg-blue-800 text-gray-200 rounded hover:bg-blue-600">
                                Take Test
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}