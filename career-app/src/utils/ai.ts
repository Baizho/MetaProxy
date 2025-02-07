// utils/ai.ts
import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function getCareerRecommendations(testResults: any) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: "You are a career guidance expert.",
                },
                {
                    role: "user",
                    content: `Based on the following test results, recommend suitable careers: ${JSON.stringify(testResults)}`,
                },
            ],
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error("Error getting career recommendations:", error);
        return null;
    }
}