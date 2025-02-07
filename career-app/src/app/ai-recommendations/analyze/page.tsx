// app/ai-recommendations/analyze/page.tsx
'use client'
import { useState, useEffect } from "react";
import { getCareerRecommendations } from "@/utils/ai";
import dbConnect from "@/utils/db";
import User from "@/models/User";

export default function AnalyzePage() {
    const [recommendations, setRecommendations] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                await dbConnect();
                const user = await User.findById("your_user_id_here"); // Replace with actual user ID retrieval logic

                if (!user) {
                    setLoading(false);
                    setRecommendations("User not found.");
                    return;
                }

                const testResults = user.testsTaken; // Assuming testsTaken is an array of test results
                const recommendations = await getCareerRecommendations(testResults);

                setRecommendations(recommendations);
            } catch (error) {
                console.error("Error fetching recommendations:", error);
                setRecommendations("Failed to fetch recommendations.");
            } finally {
                setLoading(false);
            }
        };

        fetchRecommendations();
    }, []);

    return (
        <div className="flex flex-col space-y-4 p-8">
            <h1 className="text-2xl font-bold">Career Recommendations</h1>
            {loading ? (
                <p>Loading...</p>
            ) : recommendations ? (
                <div dangerouslySetInnerHTML={{ __html: recommendations }}></div>
            ) : (
                <p>No recommendations available.</p>
            )}
        </div>
    );
}