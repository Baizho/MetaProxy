// app/events/[eventId]/page.tsx
'use client'
import { useState, useEffect } from "react";
import dbConnect from "@/utils/db";
import EventModel from "@/models/Event";
import { Event } from "@/types/Event";

export default function EventDetailsPage({ params }: { params: { eventId: string } }) {
    const [event, setEvent] = useState<Event | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                await dbConnect();
                const event = await EventModel.findById(params.eventId);
                setEvent(event);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching event:", error);
                setLoading(false);
            }
        };

        fetchEvent();
    }, [params.eventId]);

    if (loading) {
        return <div className="p-8">Loading...</div>;
    }

    if (!event) {
        return <div className="p-8">Event not found.</div>;
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <div className="mb-4">
                <strong>Start Date:</strong> {new Date(event.startDate).toLocaleDateString()}
            </div>
            <div className="mb-4">
                <strong>End Date:</strong> {new Date(event.endDate).toLocaleDateString()}
            </div>
            <div className="mb-4">
                <strong>Location:</strong> {event.location}
            </div>
            {event.url && (
                <div className="mb-4">
                    <strong>More Information:</strong>{" "}
                    <a href={event.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Visit Event Website
                    </a>
                </div>
            )}
        </div>
    );
}