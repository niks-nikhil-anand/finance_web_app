import connectDB from "@/lib/dbConnect";
import partnerApplication from "@/models/partnerApplication";
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  const { email: email } = params; // Adjusted destructuring to match 'username'
  console.log('email:', email); // Should log the email parameter

  try {
    await connectDB();

    const applications = await partnerApplication.find({ email });
    console.log(applications)
    return NextResponse.json(applications, {
      status: 200
    });
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json({ msg: "Error fetching applications", error: error.message }, {
      status: 500
    });
  }
};
