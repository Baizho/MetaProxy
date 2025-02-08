'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

interface ITest {
    _id: string;
    title: string;
    description: string;
}

export default function TestsPage() {
    const [tests, setTests] = useState<ITest[]>([]);
    const [completedTests, setCompletedTests] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTests = async () => {
            try {
                const response = await fetch('/api/tests');
                if (!response.ok) throw new Error('Failed to fetch tests');
                const data = await response.json();
                setTests(data);
            } catch (error) {
                console.error('Error fetching tests:', error);
            }
        };

        const fetchCompletedTests = async () => {
            try {
                const response = await fetch('/api/tests/completed');
                if (!response.ok) throw new Error('Failed to fetch completed tests');
                const data = await response.json();
                setCompletedTests(data);
            } catch (error) {
                console.error('Error fetching completed tests:', error);
            }
        };

        fetchTests();
        fetchCompletedTests();
        setLoading(false);
    }, []);

    if (loading) return <p>Loading tests...</p>;

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Available Tests</h1>
            <ul className="mt-4 space-y-4">
                {tests.map((test, index) => {
                    console.log(completedTests);
                    return (
                        <li key={index} className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-lg font-medium">{test.title}</h2>
                            <p>{test.description}</p>

                            {completedTests.includes(test._id) ? (
                                <div className="mt-2 flex items-center space-x-2">
                                    <button className="px-4 py-2 bg-gray-400 text-gray-700 rounded cursor-not-allowed">
                                        Take Test
                                    </button>
                                    <span className="text-sm text-gray-600">Already done</span>
                                </div>
                            ) : (
                                <Link href={`/tests/${test._id}`}>
                                    <button className="mt-2 px-4 py-2 bg-blue-800 text-gray-200 rounded hover:bg-blue-600">
                                        Take Test
                                    </button>
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
