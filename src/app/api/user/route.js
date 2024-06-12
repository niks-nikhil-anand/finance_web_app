import connectDB from "@/lib/dbConnect";
import partnerApplication from "@/models/partnerApplication";
import { NextResponse } from "next/server";


export const GET = async (req, res) => {
    try {
      await connectDB();
  
      const applications = await partnerApplication.find();
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