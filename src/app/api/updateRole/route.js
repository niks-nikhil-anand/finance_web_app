import connectDB from '@/lib/dbConnect';
import partnerApplication from '@/models/partnerApplication';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    const { userId, role, isApproved } = await req.json();
    console.log('userId:', userId);
    console.log('role:', role);
    console.log('isApproved:', isApproved);

    if (!userId || !role) {
      return NextResponse.json({ msg: 'User ID and role are required' }, { status: 400 });
    }

    await connectDB();
    const result = await partnerApplication.updateOne(
      { _id: userId },
      { $set: { role, isApproved: isApproved === 'Yes' } }
    );

    return NextResponse.json({ msg: 'Role updated successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: 'Internal server error' }, { status: 500 });
  }
};
