// components/Calendar.tsx
import dayjs from "dayjs";
import "dayjs/locale/en-gb";
import { useState } from "react";
import { Event } from "@/types/Event";

interface CalendarProps {
    events: Event[];
}

export default function Calendar({ events }: CalendarProps) {
    const [currentMonth, setCurrentMonth] = useState(dayjs());

    const daysInMonth = currentMonth.daysInMonth();
    const firstDayOfMonth = currentMonth.startOf("month").day();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(<div key={`empty-${i}`} className="w-full h-10"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const day = currentMonth.date(i);
        const dayEvents = events.filter((event: Event) =>
            dayjs(event.startDate).isSame(day, "day")
        );

        days.push(
            <div key={i} className="w-full h-10 border-b">
                <div className="flex items-center justify-between p-1">
                    <span>{i}</span>
                    {dayEvents.length > 0 && (
                        <div className="flex flex-col space-y-1">
                            {dayEvents.map((event: Event) => (
                                <div key={event._id} className="bg-blue-500 text-white p-1 rounded">
                                    {event.title}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white shadow-md rounded-md p-4">
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
                    className="px-2 py-1 bg-gray-200 text-black rounded"
                >

                </button>
                <h2 className="text-lg font-bold">
                    {currentMonth.format("MMMM YYYY")}
                </h2>
                <button
                    onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
                    className="px-2 py-1 bg-gray-200 text-black rounded"
                >

                </button>
            </div>
            <div className="grid grid-cols-7 gap-1">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center font-bold">
                        {day}
                    </div>
                ))}
                {days}
            </div>
        </div>
    );
}