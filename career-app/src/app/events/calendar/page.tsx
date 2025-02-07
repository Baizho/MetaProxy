// app/events/calendar/page.tsx
import { useState, useEffect } from "react";
import dbConnect from "@/utils/db";
import EventModel from "@/models/Event";
import Calendar from "@/components/Calendar";
import { Event } from "@/types/Event";

export default function CalendarPage() {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            await dbConnect();
            const events = await EventModel.find({ startDate: { $gte: new Date() } }).sort({ startDate: 1 });
            setEvents(events);
        };

        fetchEvents();
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Career Events Calendar</h1>
            <Calendar events={events} />
        </div>
    );
}