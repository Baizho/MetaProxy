import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import dbConnect from '@/utils/db';
import User from '@/models/User'; // Your User model

export async function GET(req: Request) {
    await dbConnect();
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const user = await User.findById(session.user.id).select('testsTaken');

        return NextResponse.json(user?.testsTaken || []);
    } catch (error) {
        console.error('Error fetching completed tests:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
