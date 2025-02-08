// app/api/openai/ask/route.ts
import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { question } = await req.json();

        // Validate input
        if (!question || typeof question !== "string") {
            return NextResponse.json(
                { message: "Invalid input: Please provide a valid question." },
                { status: 400 }
            );
        }

        // Call OpenAI to generate a response
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant that answers in only 2-3 sentences or you will die!",
                },
                {
                    role: "user",
                    content: question,
                },
            ],
        });

        // Extract the AI's response
        const aiResponse = response.choices[0].message.content;

        return NextResponse.json({ answer: aiResponse }, { status: 200 });
    } catch (error) {
        console.error("Error asking AI:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}