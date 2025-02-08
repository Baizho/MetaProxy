// app/api/tests/[testId]/route.ts
import Test from '@/models/Test';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
    params: Promise<{
        testId: string
    }>
}

export async function GET(
    request: NextRequest,
    { params }: Params
) {
    try {
        const { testId } = await params;
        const test = await Test.findById(testId);
        if (!test) {
            return NextResponse.json({ message: 'Test not found' }, { status: 404 });
        }
        return NextResponse.json(test, { status: 200 });
    } catch (error) {
        console.error('Error fetching test:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}