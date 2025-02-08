import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/utils/db";
import EventModel from "@/models/Event";

export async function GET(request: NextRequest) {
    try {
        // Connect to the database
        await dbConnect();

        // Fetch upcoming events sorted by startDate
        const events = await EventModel.find({ startDate: { $gte: new Date() } })
            .sort({ startDate: 1 })
            .limit(3);

        return NextResponse.json(events, { status: 200 });
    } catch (error) {
        console.error("Error fetching events:", error);
        return NextResponse.json(
            { message: "Failed to fetch events" },
            { status: 500 }
        );
    }
}