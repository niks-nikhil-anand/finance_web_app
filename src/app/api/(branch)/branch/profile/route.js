import { NextResponse } from 'next/server';
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';
import connectDB from "@/lib/dbConnect";
import partnerApplication from "@/models/partnerApplication";
import branchModel from '@/models/branchModel';

export const GET = async (req) => {
  try {
    await connectDB();

    const cookieStore = cookies();
    const authToken = cookieStore.get("authBranchToken");

    if (!authToken) {
      throw new Error("User authentication token is missing.");
    }

    const decodedToken = jwt.decode(authToken.value);
    if (!decodedToken || !decodedToken.id) {
      throw new Error("Invalid token.");
    }
    const email = decodedToken.email;
    const Partner = await partnerApplication.findOne({ email });
    if (!Partner) {
      throw new Error('Partner not found.');
    }

    const wallet = await branchModel.find({ partner: Partner._id });
   

    return NextResponse.json({ Partner, wallet }, {
      status: 200,
    });
  } catch (error) {
    console.error("Error retrieving Partner:", error);
    return NextResponse.json({ msg: "Error retrieving Partner", error: error.message }, {
      status: 500,
    });
  }
};
