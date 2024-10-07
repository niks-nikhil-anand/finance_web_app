import connectDB from "@/lib/dbConnect";
import jobApplicationModel from "@/models/jobApplicationModel";
import { NextResponse } from "next/server";

// DELETE API - Delete a job application by ID
export const DELETE = async (req, { params }) => {
  try {
    // Connect to the database
    await connectDB();

    // Extract the ID from the request query using req.nextUrl.searchParams
    const { id } = params;

    if (!id) {
      return NextResponse.json({ msg: "Job application ID is required" }, { status: 400 });
    }

    // Find and delete the job application by ID
    const deletedApplication = await jobApplicationModel.findByIdAndDelete(id);

    if (!deletedApplication) {
      return NextResponse.json({ msg: "Job application not found" }, { status: 404 });
    }

    return NextResponse.json({ msg: "Job application deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting job application:", error);
    return NextResponse.json({ msg: "Error deleting job application", error: error.message }, { status: 500 });
  }
};

// PUT API - Edit a job application by ID
export const PUT = async (req) => {
  try {
    // Connect to the database
    await connectDB();

    // Extract the ID from the request query using req.nextUrl.searchParams
    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ msg: "Job application ID is required" }, { status: 400 });
    }

    // Parse the request body to get the updated data
    const updatedData = await req.json();

    // Find and update the job application by ID
    const updatedApplication = await jobApplicationModel.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedApplication) {
      return NextResponse.json({ msg: "Job application not found" }, { status: 404 });
    }

    return NextResponse.json({ msg: "Job application updated successfully", application: updatedApplication }, { status: 200 });
  } catch (error) {
    console.error("Error updating job application:", error);
    return NextResponse.json({ msg: "Error updating job application", error: error.message }, { status: 500 });
  }
};
