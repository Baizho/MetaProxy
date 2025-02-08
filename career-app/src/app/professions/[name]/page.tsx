'use client';

import { useParams } from 'next/navigation';
import professions from '@/lib/data/professions';
import universities from '@/lib/data/universities';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Profession {
    name: string;
    studyField: string;
    universities: {
        name: string;
        logoLink: string;
        recommendedCourse: string;
    }[];
}

export default function ProfessionPage() {
    const params = useParams<{ name: string }>();
    let { name } = params;
    name = decodeURIComponent(name);

    const [profession, setProfession] = useState<Profession | null>(null);
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(true);
    const [courses, setCourses] = useState<string[]>(Array(4).fill("Loading..."));

    const professionData = professions.find((p) => p.name.toLowerCase() === name.toLowerCase());
    const professionImage = professionData ? professionData.link : '/human.jpeg';

    useEffect(() => {
        const getSubjects = async () => {
            try {
                const response = await fetch('/api/openai/ask', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ question: `What subjects should I study in depth in the field of ${name}` }),
                });
                if (!response.ok) throw new Error('Failed to get a response from the AI');
                const data = await response.json();
                setAnswer(data.answer);
            } catch (error) {
                console.error('Error asking AI:', error);
                setAnswer('An error occurred while fetching the response.');
            }
        };
        getSubjects();
    }, [name]);

    useEffect(() => {
        const fetchCourses = async () => {
            if (!profession) return;
            try {
                const results = await Promise.all(
                    profession.universities.slice(0, 4).map(async (uni) => {
                        const response = await fetch('/api/openai/ask', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ question: `I want to attend ${uni.name}, give me 6 courses great for my field: ${name}` }),
                        });
                        if (!response.ok) throw new Error('Failed to get a response from the AI');
                        const data = await response.json();
                        return data.answer;
                    })
                );
                setCourses(results);
            } catch (error) {
                console.error('Error fetching courses:', error);
                setCourses(Array(4).fill('Error fetching courses'));
            }
        };
        fetchCourses();
    }, [profession]);

    useEffect(() => {
        if (!name) return;
        const selectedProfession = universities.find((p) => p.name.toLowerCase() === name.toLowerCase());
        if (selectedProfession) {
            setProfession(selectedProfession);
        } else {
            console.error('Profession not found');
        }
        setLoading(false);
    }, [name]);

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (!profession) return <p className="text-center mt-10">Profession not found.</p>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center">{profession.name}</h1>
            <p className="mt-4 text-lg text-center text-gray-700">Field of Study: {profession.studyField}</p>
            <div className="flex justify-center mt-6">
                <img src={professionImage} width={250} height={400} alt={profession.name} className="rounded-lg shadow-lg" />
            </div>

            <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold">What subjects should I study?</h2>
                <p className="mt-2 text-gray-700">{answer}</p>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-center">Top Universities for a {profession.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {profession.universities.slice(0, 4).map((uni, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                            <Image src="/university.jpeg" width={200} height={200} alt={uni.name} className="object-cover rounded-full" />
                            <p className="mt-4 text-lg font-medium text-center">{uni.name}</p>
                            <p className="text-sm text-gray-700 text-center mt-2">{courses[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
