import { NextRequest, NextResponse } from 'next/server';
import UserModel, { IUser } from '@/models/User';
import Test from '@/models/Test';

type Params = {
    params: Promise<{
        userId: string
    }>
}

export async function GET(
    request: NextRequest,
    { params }: Params
) {
    try {
        const { userId } = await params;

        // Fetch the user document
        const user = await UserModel.findById(userId);
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        // Extract the testsTaken field from the user
        const { testsTaken } = user;

        // Extract test IDs from testsTaken
        const testIds = testsTaken.map((test: IUser['testsTaken'][0]) => test.testId);

        // Fetch all test documents using the test IDs
        const tests = await Test.find({ _id: { $in: testIds } });

        // Combine test details with the user's results
        console.log(tests);
        const testsWithResults = tests.map((test) => {
            const testTaken = testsTaken.find((t: IUser['testsTaken'][0]) => t.testId.equals(test._id));
            return {
                ...test.toObject(),
                results: testTaken?.results || [],
            };
        });

        // Return the combined data as a JSON response
        console.log(testsWithResults);
        return NextResponse.json(testsWithResults, { status: 200 });
    } catch (error) {
        console.error('Error fetching user tests:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}