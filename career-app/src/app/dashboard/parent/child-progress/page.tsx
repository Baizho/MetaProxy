// app/dashboard/parent/child-progress/page.tsx
'use client'
import { useState, useEffect } from "react";
import dbConnect from "@/utils/db";
import User from "@/models/User";

export default function ChildProgressPage() {
    const [child, setChild] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChildData = async () => {
            await dbConnect();
            const parentId = "your_parent_id_here"; // Replace with actual parent ID retrieval logic
            const parent = await User.findById(parentId).populate("children.testsTaken.testId");

            if (parent && parent.children.length > 0) {
                setChild(parent.children[0]); // Assuming the parent has at least one child
            }

            setLoading(false);
        };

        fetchChildData();
    }, []);

    if (loading) {
        return <div className="p-8">Loading...</div>;
    }

    if (!child) {
        return <div className="p-8">No child data available.</div>;
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Child Progress</h1>
            <div className="mb-4">
                <h2 className="text-lg font-bold">Name: {child.name}</h2>
                <p>Email: {child.email}</p>
            </div>
            <div className="mb-4">
                <h2 className="text-lg font-bold">Tests Taken</h2>
                <ul className="list-disc pl-4">
                    {child.testsTaken.map((test: any) => (
                        <li key={test.testId._id}>
                            <strong>{test.testId.title}</strong>: Score {test.score}
                            <p>{test.results}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <h2 className="text-lg font-bold">Recommended Careers</h2>
                <ul className="list-disc pl-4">
                    {child.recommendedCareers?.map((career: any) => (
                        <li key={career._id}>{career.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}