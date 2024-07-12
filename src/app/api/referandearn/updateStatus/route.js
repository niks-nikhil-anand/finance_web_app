import connectDB from '@/lib/dbConnect';
import gstUserModel from '@/models/gstUserModel';
import referApplicationModel from '@/models/referApplicationModel';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    const { id, newStatus } = await req.json();
    console.log('id:', id);
    console.log('newStatus:', newStatus);

    if (!id || !newStatus) {
      return NextResponse.json({ msg: 'User ID and new status are required' }, { status: 400 });
    }

    await connectDB();
    const result = await referApplicationModel.updateOne(
      { _id: id },
      { $set: { status: newStatus } }
    );

    return NextResponse.json({ msg: 'Status updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating status:', error);
    return NextResponse.json({ msg: 'Internal server error' }, { status: 500 });
  }
};
