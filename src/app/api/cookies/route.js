import { NextResponse } from 'next/server';
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';
import connectDB from "@/lib/dbConnect";
import partnerApplication from "@/models/partnerApplication";

export const GET = async (req) => {
  try {
    await connectDB();

    const cookieStore = cookies();
    const authToken = cookieStore.get("userAuthToken");

    if (!authToken) {
      throw new Error("User authentication token is missing.");
    }

    const decodedToken = jwt.decode(authToken.value);
    if (!decodedToken || !decodedToken.username) {
      throw new Error("Invalid token.");
    }

    const username = decodedToken.username;

    const Partner = await partnerApplication.find({ username });
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
