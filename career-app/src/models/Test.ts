// models/Test.ts
import mongoose, { Schema, Document, Types } from "mongoose";

export interface ITest extends Document {
    _id: Types.ObjectId;
    title: string;
    description: string;
    questions: {
        question: string;
        options: string[];
        correctAnswer: string;
    }[];
}

const testSchema = new Schema<ITest>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    questions: [
        {
            question: { type: String, required: true },
            options: [{ type: String, required: true }],
            correctAnswer: { type: String, required: true },
        },
    ],
});

export default mongoose.models.Test || mongoose.model<ITest>("Test", testSchema);