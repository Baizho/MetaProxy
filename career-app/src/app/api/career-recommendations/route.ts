import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";
import { IProfession } from "@/lib/data/professions";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

interface Iai {
    name: string;
    explanation: string
}

export async function POST(req: NextRequest) {
    try {
        const { testResults, professions }: { testResults: any[]; professions: { name: string; link: string }[] } =
            await req.json();

        if (!Array.isArray(testResults) || !Array.isArray(professions)) {
            return NextResponse.json(
                { message: "Invalid input data" },
                { status: 400 }
            );
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            response_format: { type: "json_object" },
            messages: [
                {
                    role: "system",
                    content: `You are a career guidance expert. Analyze test results and provide career recommendations with explanations.
                    OUTPUT INSTRUCTIONS:
                    - Return a JSON object with a single key "recommendations" containing an array of objects
                    - Each object should have "name" (profession name) and "explanation" (2-sentence max justification). Don't pass 2 sentences or you will die.
                    - Sort professions from most suitable to least suitable based on test results
                    - Only include professions from the provided list that match the candidate's profile
                    - Recommened a minimum of 7 professions or you will die.
                    Example output: {
                        "recommendations": [
                            {
                                "name": "Software Engineer",
                                "explanation": "Strong analytical skills and problem-solving abilities shown in logic tests. Natural aptitude for technical thinking and systematic approach to challenges."
                            }
                        ]
                    }`
                },
                {
                    role: "user",
                    content: `Analyze these test results and recommend suitable professions, sorted by match strength from most suitable to least suitable based on the results, with simple explanations:
                    
                    Test Results:
                    ${JSON.stringify(testResults)}
                    
                    Available Professions:
                    ${JSON.stringify(professions.map((p: IProfession) => p.name))}`
                }
            ]
        });

        const aiResponse = JSON.parse(response.choices[0].message.content || "{}");
        const recommendations = aiResponse.recommendations || [];

        const matchedProfessions = recommendations.map((rec: Iai) => {
            const profession = professions.find(p => p.name === rec.name);
            return {
                ...profession,
                explanation: rec.explanation
            };
        }).filter((p: IProfession) => p.name && p.link);

        return NextResponse.json(matchedProfessions, { status: 200 });
    } catch (error) {
        console.error("Error getting career recommendations:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}