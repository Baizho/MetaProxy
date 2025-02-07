import dbConnect from '@/utils/db';
import { Schema, model, models, Document, Types } from 'mongoose';

await dbConnect();

// 1. Define the Interface
interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: 'student' | 'teacher' | 'parent' | 'admin';
    testsTaken: {
        testId: Types.ObjectId;
        score: number;
        results: Record<string, unknown>;
    }[];
    children: Types.ObjectId[]; // References to User documents
    notifications: {
        message: string;
        timestamp: Date;
    }[];
}

// 2. Create the Schema
const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'teacher', 'parent', 'admin'], required: true },
    testsTaken: [
        {
            testId: { type: Schema.Types.ObjectId, ref: 'Test', required: true },
            score: { type: Number, required: true },
            results: { type: Schema.Types.Mixed, required: true },
        },
    ],
    children: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    notifications: [
        {
            message: { type: String, required: true },
            timestamp: { type: Date, default: Date.now },
        },
    ],
});

// 3. Compile the Model
const UserModel = models.User || model<IUser>('User', userSchema);

export default UserModel;
