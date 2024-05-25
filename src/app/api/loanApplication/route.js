import connectDB from "@/lib/dbConnect";
import uploadImage from "@/lib/uploadImages";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDB();

    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const mobileNumber = formData.get("mobileNumber");
    const gender = formData.get("gender");
    const city = formData.get("city");
    const purposeOfLoan = formData.get("purposeOfLoan");
    const employmentType = formData.get("employmentType");
    const monthlyIncome = formData.get("monthlyIncome");
    const requiredLoanAmount = formData.get("requiredLoanAmount");
    const pinCode = formData.get("pinCode");
    const state = formData.get("state");
    const maritalStatus = formData.get("maritalStatus");
    const loanYear = formData.get("loanYear");
    const employerStatus = formData.get("employerStatus");
    const loanType = formData.get("loanType");

    const aadhaarCard = formData.get("aadhaarCard");
    const panCard = formData.get("panCard");
    const bankPassbook = formData.get("bankPassbook");
    const bankStatements = formData.get("bankStatements");
    const itrFile = formData.get("itrFile");
    const msmeCertificate = formData.get("msmeCertificate");
    const tradeLicense = formData.get("tradeLicense");
    const gstCertificate = formData.get("gstCertificate");

    // Check if required fields are present in the form data
    if (!name || !email || !mobileNumber) {
      throw new Error("Please provide name, email, and mobile number.");
    }

    // Upload files and get their URLs
    const aadhaarUploadResult = aadhaarCard ? await uploadImage(aadhaarCard, "aadhaarCard") : null;
    const panUploadResult = panCard ? await uploadImage(panCard, "panCard") : null;
    const passbookUploadResult = bankPassbook ? await uploadImage(bankPassbook, "bankPassbook") : null;
    const statementsUploadResult = bankStatements ? await uploadImage(bankStatements, "bankStatements") : null;
    const itrUploadResult = itrFile ? await uploadImage(itrFile, "itrFile") : null;
    const msmeUploadResult = msmeCertificate ? await uploadImage(msmeCertificate, "msmeCertificate") : null;
    const tradeUploadResult = tradeLicense ? await uploadImage(tradeLicense, "tradeLicense") : null;
    const gstUploadResult = gstCertificate ? await uploadImage(gstCertificate, "gstCertificate") : null;

    // Prepare application data for database insertion
    const applicationData = {
      name,
      email,
      mobileNumber,
      gender,
      city,
      purposeOfLoan,
      employmentType,
      monthlyIncome,
      requiredLoanAmount,
      pinCode,
      state,
      maritalStatus,
      loanYear,
      employerStatus,
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
    
    console.log(applicationData);

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
