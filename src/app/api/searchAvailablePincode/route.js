// /pages/api/searchAvailablePincode.js
import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDB();
    const { pinCode } = req.body;
    console.log(pinCode)

    // Simulate serviceability check based on pin code
    const isServiceable = pinCode === '123456'; // Change this to your actual logic

    return NextResponse.json({ serviceable: isServiceable }, {
      status: 200,
    });
  } catch (error) {
    console.error("Error checking service availability:", error);
    return NextResponse.json({ msg: "Error checking service availability", error: error.message }, {
      status: 500,
    });
  }
};
