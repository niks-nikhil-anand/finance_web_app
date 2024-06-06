import { NextResponse } from 'next/server';
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';
import connectDB from "@/lib/dbConnect";

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
    const services = decodedToken.services;

    const data = {
        username ,
        services
    }
    console.log(data)
    return NextResponse.json(data, {
      status: 200,
    });
    console.log(data)

  } catch (error) {
    console.error("Error retrieving Partner:", error);
    return NextResponse.json({ msg: "Error retrieving Partner", error: error.message }, {
      status: 500,
    });
  }
};
