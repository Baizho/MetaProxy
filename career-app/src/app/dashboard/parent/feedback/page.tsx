// app/dashboard/parent/feedback/page.tsx
'use client'
import { useState } from "react";
import dbConnect from "@/utils/db";
import User from "@/models/User";

export default function FeedbackPage() {
    const [feedback, setFeedback] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await dbConnect();
        const parentId = "your_parent_id_here"; // Replace with actual parent ID retrieval logic
        const parent = await User.findById(parentId);

        if (parent) {
            parent.notifications.push({ message: feedback });
            await parent.save();
            setSubmitted(true);
        }
    };

    if (submitted) {
        return (
            <div className="p-8">
                <h1 className="text-2xl font-bold mb-4">Feedback Submitted</h1>
                <p>Thank you for your feedback!</p>
            </div>
        );
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Submit Feedback</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={4}
                    className="w-full p-2 border rounded-md mb-4"
                    placeholder="Enter your feedback or suggestions here..."
                ></textarea>
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit Feedback
                </button>
            </form>
        </div>
    );
}