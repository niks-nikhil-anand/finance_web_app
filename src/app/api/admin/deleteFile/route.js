// Import necessary modules
import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import partnerApplication from "@/models/partnerApplication";

// Handle POST request
export const POST = async (req) => {
  try {
    // Connect to the database
    await connectDB();
    console.log("Database connected");

    // Extract data from the request body
    const formData = await req.formData();
    const fieldName = formData.get("fieldName");
    const userId = formData.get("userId");

   

    // Example of how you might use this data in your logic
    console.log("Received userId:", userId);
    console.log("Received field:", fieldName);

    

    // Example update operation:
    const updatedApplication = await partnerApplication.findByIdAndUpdate(
      userId,
      { [fieldName]: null }, // Update the field to null
      { new: true } // Return the updated document
    );

    // Respond with a success message and status code
    return NextResponse.json({ msg: "Successfully updated application", updatedApplication }, {
      status: 200
    });
  } catch (error) {
    // Handle errors
    console.error('Error updating application:', error);
    return NextResponse.json({ msg: "Error updating application", error: error.message }, {
      status: 500
    });
  }
};
