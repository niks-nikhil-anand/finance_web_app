import connectDB from "@/lib/dbConnect";
import availablePincode from "@/models/availablePincode";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
  const id = params.pincodeEdit;
  console.log(id)

  try {
    // Parse the request body to get the data to update
    const body = await req.json();

    // Connect to the database
    await connectDB();

    // Update the partner application status
    const updatedAvailablePincode = await availablePincode.findByIdAndUpdate(id, body, { new: true });

    if (!updatedAvailablePincode) {
      throw new Error("AvailablePincode not found.");
    }


    return NextResponse.json({ success: true, data: updatedAvailablePincode }, { status: 200 });
  } catch (error) {
    console.error('Error updating partner application status:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
};

export const DELETE = async (req, { params }) => {
  const id = params.pincodeEdit;

  try {
    // Connect to the database
    await connectDB();

    // Delete the partner application status
    const deletedAvailablePincode = await AvailablePincode.findByIdAndDelete(id);

    if (!deletedAvailablePincode) {
      throw new Error("Partner not found.");
    }

    return NextResponse.json({ success: true, data: deletedPartner }, { status: 200 });
  } catch (error) {
    console.error('Error deleting partner application status:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
};
