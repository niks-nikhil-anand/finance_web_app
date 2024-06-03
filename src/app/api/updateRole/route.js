import connectDB from '@/lib/dbConnect';
import partnerApplication from '@/models/partnerApplication';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    const { userId, role, isApproved, services } = await req.json();
    console.log('userId:', userId);
    console.log('role:', role);
    console.log('isApproved:', isApproved);
    console.log('services:', services);

    if (!userId || !role || !services) {
      return NextResponse.json({ msg: 'User ID, role, and services are required' }, { status: 400 });
    }

    await connectDB();
    const result = await partnerApplication.updateOne(
      { _id: userId },
      { $set: { role, isApproved: isApproved === 'Yes', services } }
    );

    return NextResponse.json({ msg: 'Role and services updated successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: 'Internal server error' }, { status: 500 });
  }
};
