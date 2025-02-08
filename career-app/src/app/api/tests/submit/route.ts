// app/api/tests/submit/route.ts
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth'; // Import your authOptions configuration
import UserModel from '@/models/User';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        // Get the session to retrieve the user ID
        const session = await getServerSession(authOptions);

        if (!session?.user?.id) {
            return NextResponse.json({ message: 'User not authenticated' }, { status: 401 });
        }

        const userId = session.user.id;

        // Parse the request body
        const { testId, answers } = await req.json();

        // Validate input
        if (!testId || !answers) {
            return NextResponse.json({ message: 'Invalid input' }, { status: 400 });
        }

        // Save the test results to the user's document
        await UserModel.findByIdAndUpdate(userId, {
            $push: {
                testsTaken: {
                    testId,
                    results: Object.values(answers),
                },
            },
        });

        return NextResponse.json({ message: 'Test results saved successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error saving test results:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}