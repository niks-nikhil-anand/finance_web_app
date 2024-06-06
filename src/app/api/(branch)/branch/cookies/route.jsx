import { NextResponse } from 'next/server';
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';
import connectDB from "@/lib/dbConnect";
import partnerApplication from "@/models/partnerApplication";

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
    console.log(decodedToken)
    const email = decodedToken.email;
    console.log(email)

    const Partner = await partnerApplication.find({ email });
    console.log(Partner)
    return NextResponse.json(Partner, {
      status: 200,
    });
  } catch (error) {
    console.error("Error retrieving Partner:", error);
    return NextResponse.json({ msg: "Error retrieving Partner", error: error.message }, {
      status: 500,
    });
  }
};
