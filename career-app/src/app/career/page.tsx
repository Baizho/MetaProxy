// app/careers/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import professions from '@/lib/data/professions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CareersPage() {
    const router = useRouter();
    const { data: session } = useSession();
    const [recommendations, setRecommendations] = useState<{ name: string; link: string, explanation: string }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                if (!session?.user?.id) {
                    throw new Error('User session not found.');
                }

                // Fetch the user's tests with their results via the API
                const response = await fetch(`/api/user-tests/${session.user.id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch user tests');
                }
                const testsWithResults = await response.json();

                // Transform test results for AI
                const testResults = testsWithResults.map((test: any) => ({
                    category: 'interests', // Adjust based on the test type
                    score: test.results.length, // Example: Use the number of answers as a score
                }));

                // Call the career recommendations API
                const recommendationResponse = await fetch('/api/career-recommendations', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ testResults, professions }),
                });

                if (!recommendationResponse.ok) {
                    throw new Error('Failed to fetch career recommendations');
                }

                const recs = await recommendationResponse.json();
                setRecommendations(recs);
            } catch (error) {
                console.error('Error fetching recommendations:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecommendations();
    }, []);

    if (loading) return <p>Loading recommendations...</p>;

    if (!recommendations.length) {
        return <p>No recommendations available. Try taking more tests!</p>;
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Your Career Recommendations</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendations.map((profession, index) => (
                    <li key={index} className="bg-white shadow-md rounded-xl p-4 hover:scale-105 active:scale-105 transition-all duration-200">
                        <Link href={`/professions/${encodeURIComponent(profession.name)}`}>
                            <img src={profession.link} alt={profession.name} className="w-full h-48 object-scale-down rounded-xl" />
                            {/* <img src="human.jpeg" alt={profession.name} className="w-full h-48 object-cover rounded-t-lg" /> */}
                            <p className="mt-2 text-lg font-medium">{profession.name}</p>
                            <p className="mt-2 text-md font-medium">{profession.explanation}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}