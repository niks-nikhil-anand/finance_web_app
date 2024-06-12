import connectDB from "@/lib/dbConnect";
import availablePincode from "@/models/availablePincode";
import { NextResponse } from 'next/server';

export const GET = async (req) => {
  try {
    await connectDB();
    const url = new URL(req.url);
    const pinCode = url.searchParams.get('pinCode');
    console.log(pinCode);

    if (!pinCode) {
      return NextResponse.json({ msg: "Pin code is required" }, { status: 400 });
    }

    const PincodeDetails = await availablePincode.findOne({ pinCode: pinCode });

    if (!PincodeDetails) {
      return NextResponse.json({ msg: "Pin code not found" }, { status: 404 });
    }

    return NextResponse.json({ status: 200, data: PincodeDetails });
  } catch (error) {
    console.error("Error checking service availability:", error);
    return NextResponse.json({ msg: "Error checking service availability", error: error.message }, { status: 500 });
  }
};
