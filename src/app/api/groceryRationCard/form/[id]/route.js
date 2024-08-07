import connectDB from "@/lib/dbConnect";
import groceryRationCard from "@/models/groceryRationCard";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
  const { id } = params;
  console.log(`PUT request received for id: ${id}`);

  try {
    const body = await req.json();
    console.log('Request body:', body);

    // Ensure that the request body is not empty
    if (!body || Object.keys(body).length === 0) {
      throw new Error("Request body is empty.");
    }

    // Connect to the database
    await connectDB();
    console.log('Connected to database');

    // Update the grocery ration card application
    const updatedRationCard = await groceryRationCard.findByIdAndUpdate(
      id,
      { $set: body }, // Use the entire request body for updating
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


export const DELETE = async (req, { params }) => {
  const { id } = params;
  console.log(`DELETE request received for id: ${id}`);

  try {
    // Connect to the database
    await connectDB();
    console.log('Connected to database');

    // Delete the grocery ration card application
    const deletedRationCard = await groceryRationCard.findByIdAndDelete(id);
    console.log('Deleted ration card:', deletedRationCard);

    if (!deletedRationCard) {
      throw new Error("Grocery Ration Card application not found.");
    }

    return NextResponse.json({ success: true, data: deletedRationCard }, { status: 200 });
  } catch (error) {
    console.error('Error deleting grocery ration card application:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
};
