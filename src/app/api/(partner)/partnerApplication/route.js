import bcrypt from "bcrypt";
import connectDB from "@/lib/dbConnect";
import uploadImage from "@/lib/uploadImages";
import { NextResponse } from "next/server";
import partnerApplication from "@/models/partnerApplication";

export const POST = async (req) => {
  try {
    await connectDB();

    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const username = formData.get("username");
    const mobileNumber = formData.get("phone");
    const plainPassword = formData.get("password");
    const pinCode = formData.get("pinCode");
    const city = formData.get("city");
    const state = formData.get("state");
    const wantPartnerType = formData.get("partnerType");
    const interest = formData.get("interest");
    const message = formData.get("message");
    const shopAddress = formData.get("shopAddress");

    if (!name || !email || !mobileNumber || !plainPassword) {
      throw new Error("Please provide name, email, mobile number, and password.");
    }

     const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const aadhaarCard = formData.get("aadhaarCard");
    const paymentReceipt = formData.get("paymentReceipt");
    const panCard = formData.get("panCard");
    const photo = formData.get("shopPhotoCopy");
    const bankPassbook = formData.get("bankPassbook");
    const msmeCertificate = formData.get("msmeCertificate");
    const photoCopy = formData.get("photoCopy");
    const foodLicence = formData.get("foodLicence");
    const tradeLicence = formData.get("tradeLicence");



    const aadhaarUploadResult = aadhaarCard ? await uploadImage(aadhaarCard, "aadhaarCard") : null;
    const paymentReceiptUploadResult = paymentReceipt ? await uploadImage(paymentReceipt, "paymentReceipt") : null;
    const panUploadResult = panCard ? await uploadImage(panCard, "panCard") : null;
    const passbookUploadResult = bankPassbook ? await uploadImage(bankPassbook, "bankPassbook") : null;
    const photoUploadResult = photo ? await uploadImage(photo, "shopPhotoCopy") : null;
    const msmeCertificateUploadResult = msmeCertificate ? await uploadImage(msmeCertificate, "msmeCertificate") : null;
    const photoCopyUploadResult = msmeCertificate ? await uploadImage(photoCopy, "photoCopy") : null;
    const foodLicenceUploadResult = foodLicence ? await uploadImage(foodLicence, "foodLicence") : null;
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
      pinCode,
      shopAddress,
      wantPartnerType,
      interest,
      message,
      aadhaarCard: paymentReceiptUploadResult ? paymentReceiptUploadResult.secure_url : null,
      paymentReceipt: aadhaarUploadResult ? aadhaarUploadResult.secure_url : null,
      panCard: panUploadResult ? panUploadResult.secure_url : null,
      bankPassbook: passbookUploadResult ? passbookUploadResult.secure_url : null,
      shopPhotoCopy: photoUploadResult ? photoUploadResult.secure_url : null,
      msmeCertificate: msmeCertificateUploadResult ? msmeCertificateUploadResult.secure_url : null,
      photoCopy: photoCopyUploadResult ? photoCopyUploadResult.secure_url : null,
      foodLicence: foodLicenceUploadResult ? foodLicenceUploadResult.secure_url : null,
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


export const GET = async (req, res) => {
  try {
    await connectDB();

    const applications = await partnerApplication.find();
    return NextResponse.json(applications, {
      status: 200
    });
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json({ msg: "Error fetching applications", error: error.message }, {
      status: 500
    });
  }
};
