// app/api/tests/route.ts
import Test from '@/models/Test';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const tests = await Test.find({});
        return NextResponse.json(tests, { status: 200 });
    } catch (error) {
        console.error('Error fetching tests:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}