import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import uploadImage from "@/lib/uploadImages";
import jwt from 'jsonwebtoken';
import gstUserModel from "@/models/gstUserModel";

export const POST = async (req) => {
  try {
    await connectDB();

    const formData = await req.formData();
    const cookieStore = cookies();
    const authToken = cookieStore.get("userAuthToken");

    if (!authToken) {
      throw new Error("User authentication token is missing.");
    }

    const id = jwt.decode(authToken.value)?.id;
    const name = formData.get("name");
    const email = formData.get("email");
    const mobileNumber = formData.get("mobileNumber");
    const registrationType = formData.get("registrationType");

    // Check if required fields are present in the form data
    if (!name || !email || !mobileNumber || !registrationType) {
      throw new Error("Please provide name, email, mobile number, and registration type.");
    }

    const aadhaarCard = formData.get("aadhaarCard");
    const panCard = formData.get("panCard");
    const photo = formData.get("photocopy");
    const bankPassbook = formData.get("bankPassbook");
    const bankStatement = formData.get("bankStatements");
    const electricityBill = formData.get("electricityBill");



    const aadhaarUploadResult = aadhaarCard ? await uploadImage(aadhaarCard, "aadhaarCard") : null;
    const panUploadResult = panCard ? await uploadImage(panCard, "panCard") : null;
    const bankPassbookUploadResult = bankPassbook ? await uploadImage(bankPassbook, "bankPassbook") : null;
    const bankStatementUploadResult = bankStatement ? await uploadImage(bankStatement, "bankStatement") : null;
    const electricityBillUploadResult = electricityBill ? await uploadImage(electricityBill, "electricityBill") : null;
    const photoUploadResult = photo ? await uploadImage(photo, "photo") : null;

   

    const applicationData = {
      name,
      email,
      mobileNumber,
      registrationType,
      aadhaarCard: aadhaarUploadResult ? aadhaarUploadResult.secure_url : null,
      panCard: panUploadResult ? panUploadResult.secure_url : null,
      electricityBill: electricityBillUploadResult ? electricityBillUploadResult.secure_url : null,
      photoCopy: photoUploadResult ? photoUploadResult.secure_url : null,
      bankStatement: bankStatementUploadResult ? bankStatementUploadResult.secure_url : null,
      bankPassbook: bankPassbookUploadResult ? bankPassbookUploadResult.secure_url : null,
      partner : id
    };

    await gstUserModel.create(applicationData);
    return NextResponse.json({ msg: "Application submitted successfully" }, {
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



// GET request handler
export const GET = async (req) => {
  try {
    await connectDB();

    // Retrieve all GST registration records
    const gstRegistrations = await gstUserModel.find();

    // Respond with the retrieved data
    return NextResponse.json(gstRegistrations, {
      status: 200
    });
  } catch (error) {
    // Handle errors
    console.error("Error retrieving GST registrations:", error);
    return NextResponse.json({ msg: "Error retrieving GST registrations", error: error.message }, {
      status: 500
    });
  }
};

