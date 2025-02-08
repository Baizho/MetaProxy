
import { Schema, model, models, Document, Types } from 'mongoose';


export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: 'student' | 'teacher' | 'parent' | 'admin';
    testsTaken: {
        testId: Types.ObjectId;
        results: string[];
    }[];
    children: Types.ObjectId[]; // References to User documents
    notifications: {
        message: string;
        timestamp: Date;
    }[];
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'teacher', 'parent', 'admin'], required: true },
    testsTaken: [
        {
            testId: { type: Schema.Types.ObjectId, ref: 'Test', required: true },
            results: { type: [{ type: String }], required: true },
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
