import connectDB from "@/lib/dbConnect";
import uploadImage from "@/lib/uploadImages";
import groceryRationCard from "@/models/groceryRationCard";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDB();
    console.log("Database connected");

    const formData = await req.formData();
    console.log("Form data received:", formData);

    const file = formData.get("file");
    const fieldName = formData.get("field");
    const userId = formData.get("userId");

    console.log("file:", file);
    console.log("fieldName:", fieldName);
    console.log("userId:", userId);

    if (!fieldName || !userId) {
      console.log("Field name or user ID missing");
      return NextResponse.json({ msg: "Field name and user ID are required" }, { status: 400 });
    }

    const fileUploadResult = file ? await uploadImage(file, "file") : null;
    const url = fileUploadResult ? fileUploadResult.secure_url : null;
    console.log("File upload result:", fileUploadResult);
    console.log("URL:", url);

    const updateField = {};
    updateField[fieldName] = url;
    console.log("Update field:", updateField);

    const result = await groceryRationCard.updateOne(
      { _id: userId },
      { $set: updateField }
    );
    console.log("Update result:", result);

    if (result.modifiedCount === 0) {
      console.log("No document found with the given ID");
      return NextResponse.json({ msg: "No document found with the given ID" }, { status: 404 });
    }

    console.log("Successfully updated application");
    return NextResponse.json({ msg: "Successfully updated application" }, { status: 200 });
  } catch (error) {
    console.error('Error updating application:', error);
    return NextResponse.json({ msg: "Error updating application", error: error.message }, { status: 500 });
  }
};


