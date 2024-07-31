import connectDB from "@/lib/dbConnect";
import groceryRationCard from "@/models/groceryRationCard";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
      await connectDB();
      console.log("Database connected");
  
      const formData = await req.formData();
      console.log(formData)
      const fieldName = formData.get("fieldName");
      const userId = formData.get("userId");
  
      console.log("Received", { fieldName, userId });
  
      if (!fieldName || !userId) {
        console.log("Field name or user ID missing");
        return NextResponse.json({ msg: "Field name and user ID are required" }, { status: 400 });
      }
  
      const document = await groceryRationCard.findOne({ _id: userId });
      console.log("Document found:", document);
  
      if (!document) {
        console.log("No document found with the given ID");
        return NextResponse.json({ msg: "No document found with the given ID" }, { status: 404 });
      }
  
      const fileUrl = document[fieldName];
      console.log("File URL:", fileUrl);
  
      if (!fileUrl) {
        console.log("No file found for the given field");
        return NextResponse.json({ msg: "No file found for the given field" }, { status: 404 });
      }
  
      
  
      const updateField = {};
      updateField[fieldName] = null;
      console.log("Update field:", updateField);
  
      const updateResult = await groceryRationCard.updateOne(
        { _id: userId },
        { $unset: updateField }
      );
      console.log("Update result:", updateResult);
  
      console.log("Successfully deleted file and updated application");
      return NextResponse.json({ msg: "Successfully deleted file and updated application" }, { status: 200 });
    } catch (error) {
      console.error('Error deleting file:', error);
      return NextResponse.json({ msg: "Error deleting file", error: error.message }, { status: 500 });
    }
  };