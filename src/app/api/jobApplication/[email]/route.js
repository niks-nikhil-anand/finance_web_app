import connectDB from "@/lib/dbConnect";
import jobApplicationModel from "@/models/jobApplicationModel";
import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
  const { email: email } = params; 
  console.log('email:', email); 

  try {
    await connectDB();

    const applications = await jobApplicationModel.find({ email });
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



