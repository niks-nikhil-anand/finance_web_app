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
    const partnerID = formData.get("partnerID");
    const registrationType = formData.get("registrationType");

    // Check if required fields are present in the form data
    if (!name || !email || !mobileNumber || !registrationType) {
      throw new Error("Please provide name, email, mobile number, and registration type.");
    }

    const aadhaarCard = formData.get("aadhaar");
    const panCard = formData.get("pan");
    const photo = formData.get("photo");
    const bankPassbook = formData.get("bankPassbook");
    const electricityBill = formData.get("electricityBill");
    console.log(aadhaarCard)

    const aadhaarUploadResult = aadhaarCard ? await uploadImage(aadhaarCard, "aadhaarCard") : null;
    const panUploadResult = panCard ? await uploadImage(panCard, "panCard") : null;
    const passbookUploadResult = bankPassbook ? await uploadImage(bankPassbook, "bankPassbook") : null;
    const electricityBillUploadResult = electricityBill ? await uploadImage(electricityBill, "electricityBill") : null;
    const photoUploadResult = photo ? await uploadImage(photo, "photo") : null;

    console.log(photoUploadResult)

    // Prepare application data for database insertion
    const applicationData = {
      name,
      email,
      mobileNumber,
      partnerID,
      registrationType,
      aadhaarCard: aadhaarUploadResult ? aadhaarUploadResult.secure_url : null,
      panCard: panUploadResult ? panUploadResult.secure_url : null,
      bankPassbook: passbookUploadResult ? passbookUploadResult.secure_url : null,
      electricityBill: electricityBillUploadResult ? electricityBillUploadResult.secure_url : null,
      photo: photoUploadResult ? photoUploadResult.secure_url : null,
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
