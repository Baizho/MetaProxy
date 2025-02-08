// app/professions/[name]/page.tsx
'use client';
import { useParams } from 'next/navigation';
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
    const params = useParams<{ name: string }>()
    let { name } = params;
    name = decodeURIComponent(name);
    console.log("yolo", name);
    const [profession, setProfession] = useState<Profession | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!name) return;

        // Find the profession data based on the name
        const selectedProfession = universities.find((p) => p.name.toLowerCase() === name.toString().toLowerCase());
        if (selectedProfession) {
            setProfession(selectedProfession);
        } else {
            console.error('Profession not found');
        }
        setLoading(false);
    }, [name]);

    if (loading) return <p>Loading...</p>;
    if (!profession) return <p>Profession not found.</p>;

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">{profession.name}</h1>
            <p className="mt-4 text-lg">Field of Study: {profession.studyField}</p>
            <Image src="/human.jpeg" width={200} height={370} alt="human" />
            {/* Subjects to Study */}
            <div className="mt-6">
                <h2 className="text-xl font-medium">Subjects to Study</h2>
                <ul className="list-disc pl-6 mt-2">
                    {/* Example subjects (you can replace this with actual data) */}
                    <li>Mathematics</li>
                    <li>Physics</li>
                    <li>Programming</li>
                </ul>
            </div>

            {/* Universities Section */}
            <div className="mt-6">
                <h2 className="text-xl font-medium">Top Universities for a {profession.name}</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                    {profession.universities.map((uni, index) => (
                        <li key={index} className="bg-white shadow-md rounded-lg p-4">
                            {/* <img src={uni.logoLink} alt={uni.name} className="w-20 h-20 object-contain mx-auto" /> */}
                            <Image src="/university.jpeg" width={80} height={80} alt={uni.name} className="object-cover mx-auto" />
                            <p className="mt-2 text-center font-medium">{uni.name}</p>
                            <p className="text-sm text-gray-500 text-center">Recommended course: {uni.recommendedCourse}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}