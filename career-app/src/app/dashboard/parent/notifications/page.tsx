// app/dashboard/parent/notifications/page.tsx
'use client'
import { useState, useEffect } from "react";
import dbConnect from "@/utils/db";
import User from "@/models/User";

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotifications = async () => {
            await dbConnect();
            const parentId = "your_parent_id_here"; // Replace with actual parent ID retrieval logic
            const parent = await User.findById(parentId);

            if (parent) {
                setNotifications(parent.notifications);
            }

            setLoading(false);
        };

        fetchNotifications();
    }, []);

    if (loading) {
        return <div className="p-8">Loading...</div>;
    }

    if (notifications.length === 0) {
        return <div className="p-8">No notifications available.</div>;
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Notifications</h1>
            <ul className="space-y-4">
                {notifications.map((notification: any, index: number) => (
                    <li key={index} className="bg-gray-100 p-4 rounded-md">
                        <p>{notification.message}</p>
                        <small className="text-gray-600">
                            {new Date(notification.timestamp).toLocaleDateString()}
                        </small>
                    </li>
                ))}
            </ul>
        </div>
    );
}