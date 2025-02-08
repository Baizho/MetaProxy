// import dbConnect from '@/utils/db';
import mongoose, { Schema, Document } from 'mongoose';

interface IEvent extends Document {
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    location: string;
    url?: string; // Optional URL for more information
}

const eventSchema: Schema<IEvent> = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    location: { type: String, required: true },
    url: String,
});

// Use `mongoose.models` to prevent re-registering the model
const EventModel = mongoose.models.Event || mongoose.model<IEvent>('Event', eventSchema);

export default EventModel;
