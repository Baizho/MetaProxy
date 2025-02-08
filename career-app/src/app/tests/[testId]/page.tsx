// app/tests/[testId]/page.tsx
'use client';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

interface ITest {
    _id: string;
    title: string;
    description: string;
    questions: {
        question: string;
        options: string[];
        correctAnswer: string;
    }[];
}

export default function TestPage() {
    const router = useRouter();
    const params = useParams<{ testId: string }>();
    const { testId } = params;
    const [test, setTest] = useState<ITest | null>(null);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(true);
    const { data: session } = useSession();

    useEffect(() => {
        const fetchTest = async () => {
            try {
                if (!testId) return;

                const response = await fetch(`/api/tests/${testId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch test');
                }
                const data = await response.json();
                setTest(data);
            } catch (error) {
                console.error('Error fetching test:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTest();
    }, [testId]);

    if (loading) return <p>Loading test...</p>;
    if (!test) return <p>Test not found.</p>;

    const handleAnswerChange = (question: string, answer: string) => {
        setAnswers((prev) => ({
            ...prev,
            [question]: answer,
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/tests/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    testId,
                    answers,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to save test results');
            }

            alert('Test submitted successfully!');
            router.push('/dashboard/student/tests'); // Redirect to dashboard after submission
        } catch (error) {
            console.error('Error submitting test:', error);
            alert('An error occurred while saving your results.');
        }
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">{test.title}</h1>
            <p className="mt-2">{test.description}</p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
                {test.questions.map((q, index) => (
                    <div key={index}>
                        <p className="font-medium">{q.question}</p>
                        {q.options.map((option, idx) => (
                            <label key={idx} className="block mt-2">
                                <input
                                    type="radio"
                                    name={q.question}
                                    value={option}
                                    onChange={() => handleAnswerChange(q.question, option)}
                                    className="mr-2"
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                ))}

                <button
                    onClick={handleSubmit}
                    className="mt-4 px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900"
                >
                    Submit Test
                </button>
            </form>
        </div>
    );
}