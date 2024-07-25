import connectDB from "@/lib/dbConnect";
import groceryRationCard from "@/models/groceryRationCard";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
  const { id } = params;
  console.log(`PUT request received for id: ${id}`);

  try {
    // Parse the request body to get the data to update
    const body = await req.json();
    console.log('Request body:', body);

    // Ensure that 'status' is included in the body
    if (!body.status) {
      throw new Error("Status field is missing in the request body.");
    }

    // Connect to the database
    await connectDB();
    console.log('Connected to database');

    // Update the grocery ration card application
    const updatedRationCard = await groceryRationCard.findByIdAndUpdate(
      id,
      { $set: { status: body.status } }, // Explicitly setting the status field
      { new: true }
    );
    console.log('Updated ration card:', updatedRationCard);

    if (!updatedRationCard) {
      throw new Error("Grocery Ration Card application not found.");
    }

    return NextResponse.json({ success: true, data: updatedRationCard }, { status: 200 });
  } catch (error) {
    console.error('Error updating grocery ration card application:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
};