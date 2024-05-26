import connectDB from "@/lib/dbConnect";
import uploadImage from "@/lib/uploadImages";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDB();

    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const mobileNumber = formData.get("phone");
    const password = formData.get("password");
    const city = formData.get("city");
    const state = formData.get("state");
    const partnerType = formData.get("partnerType");
    const interest = formData.get("interest");
    const message = formData.get("message");

    // Check if required fields are present in the form data
    if (!name || !email || !mobileNumber || !password) {
      throw new Error("Please provide name, email, mobile number, and password.");
    }

    const aadhaarCard = formData.get("aadhaarCard");
    const panCard = formData.get("panCard");
    const photo = formData.get("shopPhotoCopy");
    const bankPassbook = formData.get("bankPassbook");
    const bankStatement = formData.get("msmeCertificate");

    const aadhaarUploadResult = aadhaarCard ? await uploadImage(aadhaarCard, "aadhaarCard") : null;
    const panUploadResult = panCard ? await uploadImage(panCard, "panCard") : null;
    const passbookUploadResult = bankPassbook ? await uploadImage(bankPassbook, "bankPassbook") : null;
    const photoUploadResult = photo ? await uploadImage(photo, "shopPhotoCopy") : null;
    const bankStatementUploadResult = bankStatement ? await uploadImage(bankStatement, "msmeCertificate") : null;

    // Prepare application data for database insertion
    const applicationData = {
      name,
      email,
      mobileNumber,
      password,
      city,
      state,
      partnerType,
      interest,
      message,
      aadhaarCard: aadhaarUploadResult ? aadhaarUploadResult.secure_url : null,
      panCard: panUploadResult ? panUploadResult.secure_url : null,
      bankPassbook: passbookUploadResult ? passbookUploadResult.secure_url : null,
      shopPhotoCopy: photoUploadResult ? photoUploadResult.secure_url : null,
      msmeCertificate: bankStatementUploadResult ? bankStatementUploadResult.secure_url : null,
    };

    console.log(applicationData);

    // Here you would normally save `applicationData` to your database
    // For example:
    // const result = await ApplicationModel.create(applicationData);

    return NextResponse.json({ msg: "Application submitted successfully", data: applicationData }, {
      status: 200
    });
  } catch (error) {
    // Handle errors
    console.error("Error submitting application:", error);
    return NextResponse.json({ msg: "Error submitting application", error: error.message }, {
      status: 500
    });
  }
};
