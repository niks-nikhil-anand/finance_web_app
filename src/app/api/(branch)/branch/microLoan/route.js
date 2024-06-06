import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';
import microLoanUserModel from "@/models/microLoanUserModel";





// GET request handler
export const GET = async (req) => {
  try {
    await connectDB();

    // Retrieve all GST registration records

    const cookieStore = cookies();
    const authToken = cookieStore.get("authBranchToken");

    if (!authToken) {
      throw new Error("User authentication token is missing.");
    }

    const id = jwt.decode(authToken.value)?.id;

    const MicroLoanUser = await microLoanUserModel.find({partner: id});


    // Respond with the retrieved data
    return NextResponse.json(MicroLoanUser, {
      status: 200
    });
  } catch (error) {
    // Handle errors
    console.error("Error retrieving GST registrations:", error);
    return NextResponse.json({ msg: "Error retrieving GST registrations", error: error.message }, {
      status: 500
    });
  }
};

