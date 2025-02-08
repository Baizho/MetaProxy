// utils/ai.ts
import { ITest } from "@/models/Test";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

/**
 * Fetches career recommendations based on test results using OpenAI's GPT model.
 * @param testResults - An array of test results with categories and scores.
 * @param professions - An array of professions with names and image links.
 * @returns A sorted array of recommended professions.
 */
export async function getCareerRecommendations(
    testResults: (ITest & { results: string[] })[],
    professions: { name: string; link: string }[]
): Promise<{ name: string; link: string }[]> {
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
                    content: `
                        Based on the following test results, recommend suitable careers from the provided list:

                        Test Results:
                        ${JSON.stringify(testResults)}

                        Professions:
                        ${JSON.stringify(professions)}
                    `,
                },
            ],
        });

        // Parse the AI's response into an array of recommended professions
        const recommendedProfessions = JSON.parse(response.choices[0].message.content || "[]");

        // Match the recommendations with the professions array
        return professions.filter((profession) =>
            recommendedProfessions.includes(profession.name)
        );
    } catch (error) {
        console.error("Error getting career recommendations:", error);
        return [];
    }
}