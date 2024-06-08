import { NextResponse } from 'next/server';
import connectDB from "@/lib/dbConnect";
import partnerApplication from '@/models/partnerApplication';

export const GET = async (req) => {
  try {
    await connectDB();
    const url = new URL(req.url)
    const email = url.searchParams.get('email');
    console.log(email)
    if (!email) {
      return NextResponse.json({ error: 'Search term is required' }, {
        status: 400,
      });
    }
    
    // Construct a query object to search for a specific field
    const applications = await partnerApplication.find({ email });
    return NextResponse.json(applications, {
      status: 200
    });
  } catch (error) {
    console.error("Error retrieving Partner:", error);
    return NextResponse.json({ msg: "Error retrieving Partner", error: error.message }, {
      status: 500,
    });
  }
};
