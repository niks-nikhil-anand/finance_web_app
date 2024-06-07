import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';
import microLoanUserModel from "@/models/microLoanUserModel";

// GET request handler
export const GET = async (req) => {
  try {
    await connectDB();
    const cookieStore = cookies();
    const authToken = cookieStore.get("authBranchToken");
    console.log(authToken)
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

    const microLoanUsers = await microLoanUserModel.find();

    return NextResponse.json(microLoanUsers, {
      status: 200
    });
  } catch (error) {
    // Handle errors
    console.error("Error retrieving micro loan users:", error);
    return NextResponse.json({ msg: "Error retrieving micro loan users", error: error.message }, {
      status: 500
    });
  }
};
