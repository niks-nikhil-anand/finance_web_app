import connectDB from "@/lib/dbConnect";
import partnerApplication from "@/models/partnerApplication";
import { NextResponse } from 'next/server';

export const GET = async (req) => {
  try {
    await connectDB();
    const url = new URL(req.url);
    const pinCode = url.searchParams.get('pinCode');

    if (!pinCode) {
      return NextResponse.json({ msg: "Pin code is required" }, { status: 400 });
    }

    const PincodeDetails = await partnerApplication.find({ pinCode: pinCode, role: { $in: ['CSP', 'Branch', 'DSA'] }, status: 'Active' });

    if (!PincodeDetails || PincodeDetails.length === 0) {
      return NextResponse.json({ msg: "No active partners found for this pin code" }, { status: 404 });
    }

    return NextResponse.json({ status: 200, data: PincodeDetails });
  } catch (error) {
    console.error("Error checking service availability:", error);
    return NextResponse.json({ msg: "Error checking service availability", error: error.message }, { status: 500 });
  }
};
