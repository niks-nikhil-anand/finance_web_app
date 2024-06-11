import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/dbConnect';
import complaintUser from '@/models/complaintUser';

export const POST = async (req) => {
  try {
    await connectDB();

    const cookieStore = cookies();
    const authToken = cookieStore.get('userAuthToken');

    if (!authToken) {
      return NextResponse.json({ msg: 'User authentication token is missing.' }, { status: 401 });
    }

    const decodedToken = jwt.decode(authToken.value);
    if (!decodedToken || !decodedToken.id) {
      return NextResponse.json({ msg: 'Invalid or expired token.' }, { status: 401 });
    }

    const id = decodedToken.id;
    const formData = await req.formData();

    // Applicant data
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    // Validate form data
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ msg: 'All fields are required.' }, { status: 400 });
    }

    const data = { partner:id, name, email, phoneNumber:phone, message };
    const complaint = await complaintUser.create(data );

    return NextResponse.json(complaint, { status: 200 });
  } catch (error) {
    console.error('Error retrieving:', error);
    return NextResponse.json({ msg: 'Error retrieving complaint', error: error.message }, { status: 500 });
  }
};


export const GET = async (req, res) => {
  try {
    await connectDB();

    const complaint = await complaintUser.find();

    return NextResponse.json(complaint, {
      status: 200
    });
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json({ msg: "Error fetching applications", error: error.message }, {
      status: 500
    });
  }
};
