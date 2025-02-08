'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { ITest } from "@/models/Test";

export default function TestsPage() {
    const { data: session } = useSession();
    const [tests, setTests] = useState<ITest[]>([]);
    // const [completedTests, setCompletedTests] = useState<ITest["_id"][]>([]);
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
            } finally {
                setLoading(false);
            }
        };

        fetchTests();
    }, []);

    if (loading) return <p>Loading tests...</p>;

    // console.log(session?.user);
    // if (session?.user?.testsTaken.map((e) => e.testId)) setCompletedTests(session?.user?.testsTaken.map((e) => e.testId));

    // console.log(completedTests);
    console.log(tests);
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Available Tests</h1>
            <ul className="mt-4 space-y-4">
                {tests.map((test, index) => {
                    // const isCompleted = completedTests.includes(test._id);

                    return (
                        <li key={index} className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-lg font-medium">{test.title}</h2>
                            <p>{test.description}</p>

                            {/* {isCompleted ? (
                                <div className="mt-2 flex items-center space-x-2">
                                    <button className="px-4 py-2 bg-gray-400 text-gray-700 rounded cursor-not-allowed">
                                        Take Test
                                    </button>
                                    <span className="text-sm text-gray-600">Already done</span>
                                </div>
                            ) : ( */}
                            <Link href={`/tests/${test._id}`}>
                                <button className="mt-2 px-4 py-2 bg-blue-800 text-gray-200 rounded hover:bg-blue-600">
                                    Take Test
                                </button>
                            </Link>
                            {/* )} */}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
