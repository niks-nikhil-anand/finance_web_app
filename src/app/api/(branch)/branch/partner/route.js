import bcrypt from "bcrypt";
import connectDB from "@/lib/dbConnect";
import uploadImage from "@/lib/uploadImages";
import { NextResponse } from "next/server";
import partnerApplication from "@/models/partnerApplication";

import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';


export const POST = async (req) => {
  try {
    await connectDB();

    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const username = formData.get("username");
    const mobileNumber = formData.get("phone");
    const plainPassword = formData.get("password");
    const city = formData.get("city");
    const state = formData.get("state");
    const partnerType = formData.get("partnerType");
    const interest = formData.get("interest");
    const message = formData.get("message");
    

    const cookieStore = cookies();
    const authToken = cookieStore.get("authBranchToken");

    if (!authToken) {
      throw new Error("User authentication token is missing.");
    }

    const decodedToken = jwt.decode(authToken.value);
    if (!decodedToken || !decodedToken.branchId) {
      throw new Error("Invalid token.");
    }

    const branch = decodedToken.branchId;

    // Check if required fields are present in the form data
    if (!name || !email || !mobileNumber || !plainPassword) {
      throw new Error("Please provide name, email, mobile number, and password.");
    }

     const hashedPassword = await bcrypt.hash(plainPassword, 10);



    const aadhaarCard = formData.get("aadhaarCard");
    const panCard = formData.get("panCard");
    const photo = formData.get("shopPhotoCopy");
    const bankPassbook = formData.get("bankPassbook");
    const bankStatement = formData.get("msmeCertificate");
    const photoCopy = formData.get("photoCopy");
    const tradeLicence = formData.get("tradeLicence");

    

    const aadhaarUploadResult = aadhaarCard ? await uploadImage(aadhaarCard, "aadhaarCard") : null;
    const panUploadResult = panCard ? await uploadImage(panCard, "panCard") : null;
    const passbookUploadResult = bankPassbook ? await uploadImage(bankPassbook, "bankPassbook") : null;
    const photoUploadResult = photo ? await uploadImage(photo, "shopPhotoCopy") : null;
    const bankStatementUploadResult = bankStatement ? await uploadImage(bankStatement, "msmeCertificate") : null;

    const photoCopyUploadResult = msmeCertificate ? await uploadImage(photoCopy, "photoCopy") : null;
    const tradeLicenceUploadResult = tradeLicence ? await uploadImage(tradeLicence, "tradeLicence") : null;

    // Prepare application data for database insertion
    const applicationData = {
      name,
      email,
      username,
      mobileNumber,
     password: hashedPassword,
      city,
      state,
      partnerType,
      interest,
      message,
      branch,
      aadhaarCard: aadhaarUploadResult ? aadhaarUploadResult.secure_url : null,
      panCard: panUploadResult ? panUploadResult.secure_url : null,
      bankPassbook: passbookUploadResult ? passbookUploadResult.secure_url : null,
      shopPhotoCopy: photoUploadResult ? photoUploadResult.secure_url : null,
      msmeCertificate: bankStatementUploadResult ? bankStatementUploadResult.secure_url : null,
      photoCopy: photoCopyUploadResult ? photoCopyUploadResult.secure_url : null,
      tradeLicense: tradeLicenceUploadResult ? tradeLicenceUploadResult.secure_url : null,
    };

    await partnerApplication.create(applicationData);
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
