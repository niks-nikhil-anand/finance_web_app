import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import uploadImage from "@/lib/uploadImages";
import jobApplicationModel from "@/models/jobApplicationModel";
export const POST = async (req) => {
  try {
    await connectDB();
    console.log("Database connected");

    const formData = await req.formData();

    const file = formData.get("file");
    const fieldName = formData.get("field");
    const userId = formData.get("userId");

    const fileUploadResult = file ? await uploadImage(file, "file") : null;
    const url = fileUploadResult ? fileUploadResult.secure_url : null;
    console.log(url);

    const updateField = {};
    updateField[fieldName] = url;

    const result = await jobApplicationModel.updateOne(
      { _id: userId },
      { $set: updateField }
    );

    return NextResponse.json({ msg: "Successfully updated application" }, {
      status: 200
    });
  } catch (error) {
    console.error('Error updating application:', error);
    return NextResponse.json({ msg: "Error updating application", error: error.message }, {
      status: 500
    });
  }
};
