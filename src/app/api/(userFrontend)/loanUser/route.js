import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';
import uploadImage from "@/lib/uploadImages";
import connectDB from "@/lib/dbConnect";
import loanUserModel from "@/models/loanUserModel";


export const POST = async (req) => {
    
  try {
    await connectDB();

    const formData = await req.formData();
    const cookieStore = cookies();
    const authToken = cookieStore.get("userAuthToken");

    if (!authToken) {
      throw new Error("User authentication token is missing.");
    }

    const username = jwt.decode(authToken.value)?.username;
    const name = formData.get("name");
    const email = formData.get("email");
    const mobileNumber = formData.get("mobileNumber");
    const gender = formData.get("gender");
    const city = formData.get("city");
    const employmentType = formData.get("employmentType");
    const monthlyIncome = formData.get("monthlyIncome");
    const requiredLoanAmount = formData.get("requiredLoanAmount");
    const pinCode = formData.get("pinCode");
    const state = formData.get("state");
    const maritalStatus = formData.get("maritalStatus");
    const loanYear = formData.get("loanYear");
    const loanType = formData.get("loanType");
    const aadhaarCard = formData.get("aadhaarCard");
    const panCard = formData.get("panCard");
    const bankPassbook = formData.get("bankPassbook");
    const bankStatements = formData.get("bankStatements");
    const itrFile = formData.get("itrFile");
    const msmeCertificate = formData.get("msmeCertificate");
    const tradeLicense = formData.get("tradeLicense");
    const gstCertificate = formData.get("gstCertificate");

    if (!name || !email || !mobileNumber) {
      throw new Error("Please provide name, email, and mobile number.");
    }

    const aadhaarUploadResult = aadhaarCard ? await uploadImage(aadhaarCard, "aadhaarCard") : null;
    const panUploadResult = panCard ? await uploadImage(panCard, "panCard") : null;
    const passbookUploadResult = bankPassbook ? await uploadImage(bankPassbook, "bankPassbook") : null;
    const statementsUploadResult = bankStatements ? await uploadImage(bankStatements, "bankStatements") : null;
    const itrUploadResult = itrFile ? await uploadImage(itrFile, "itrFile") : null;
    const msmeUploadResult = msmeCertificate ? await uploadImage(msmeCertificate, "msmeCertificate") : null;
    const tradeUploadResult = tradeLicense ? await uploadImage(tradeLicense, "tradeLicense") : null;
    const gstUploadResult = gstCertificate ? await uploadImage(gstCertificate, "gstCertificate") : null;

    const applicationData = {
      name,
      email,
      username,
      mobileNumber,
      gender,
      city,
      employmentType,
      monthlyIncome,
      requiredLoanAmount,
      pinCode,
      state,
      maritalStatus,
      loanYear,
      loanType,
      aadhaarCard: aadhaarUploadResult ? aadhaarUploadResult.secure_url : null,
      panCard: panUploadResult ? panUploadResult.secure_url : null,
      bankPassbook: passbookUploadResult ? passbookUploadResult.secure_url : null,
      bankStatements: statementsUploadResult ? statementsUploadResult.secure_url : null,
      itrFile: itrUploadResult ? itrUploadResult.secure_url : null,
      msmeCertificate: msmeUploadResult ? msmeUploadResult.secure_url : null,
      tradeLicense: tradeUploadResult ? tradeUploadResult.secure_url : null,
      gstCertificate: gstUploadResult ? gstUploadResult.secure_url : null,
    };
    await loanUserModel.create(applicationData)
    return NextResponse.json({ msg: "Application submitted successfully" }, {
      status: 200
    });

   
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json({ msg: "Error submitting application", error: error.message }, {
      status: 500
    });
  }
};

export const GET = async (req) => {
  try {
    await connectDB();
    const applications = await loanUserModel.find();

    return NextResponse.json(applications, {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching loan applications:", error);
    return NextResponse.json({ msg: "Error fetching loan applications", error: error.message }, {
      status: 500,
    });
  }
};
