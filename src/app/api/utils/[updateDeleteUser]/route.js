import connectDB from "@/lib/dbConnect";
import partnerApplication from "@/models/partnerApplication";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
  const id = params.updateDeleteUser;

  try {
    // Parse the request body to get the data to update
    const body = await req.json();

    // Connect to the database
    await connectDB();

    // Update the partner application status
    const updatedPartner = await partnerApplication.findByIdAndUpdate(id, body, { new: true });

    if (!updatedPartner) {
      throw new Error("Partner not found.");
    }


    return NextResponse.json({ success: true, data: updatedPartner }, { status: 200 });
  } catch (error) {
    console.error('Error updating partner application status:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
};

export const DELETE = async (req, { params }) => {
  const id = params.updateDeleteUser;

  try {
    // Connect to the database
    await connectDB();

    // Delete the partner application status
    const deletedPartner = await partnerApplication.findByIdAndDelete(id);

    if (!deletedPartner) {
      throw new Error("Partner not found.");
    }

    return NextResponse.json({ success: true, data: deletedPartner }, { status: 200 });
  } catch (error) {
    console.error('Error deleting partner application status:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
};
