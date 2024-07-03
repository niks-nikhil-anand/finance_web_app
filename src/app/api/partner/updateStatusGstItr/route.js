import connectDB from '@/lib/dbConnect';
import gstUserModel from '@/models/gstUserModel';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    const { userId, status } = await req.json();
    console.log('userId:', userId);
    console.log('status:', status);

    if (!userId ||  !status) {
      return NextResponse.json({ msg: 'User ID and services are required' }, { status: 400 });
    }

    await connectDB();
    const result = await gstUserModel.updateOne(
      { _id: userId },
      { $set: { status } }
    );

    return NextResponse.json({ msg: 'Role and services updated successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: 'Internal server error' }, { status: 500 });
  }
};
