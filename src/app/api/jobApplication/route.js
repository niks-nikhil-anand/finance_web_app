import connectDB from "@/lib/dbConnect";
import uploadImage from "@/lib/uploadImages";
import JobApplication from "@/models/jobApplicationModel";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDB();

    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const resume = formData.get("resume");
    const aadhaarCard = formData.get("aadhaarCard");
    const panCard = formData.get("panCard");
    const qualificationCertificate = formData.get("qualificationCertificate");
    const experienceCertificate = formData.get("experienceCertificate");
    const computerCertificate = formData.get("computerCertificate");

    // Check if name, email, and mobile are present in the form data
    if (!name || !email || !mobile) {
      throw new Error("Please provide name, email, and mobile.");
    }

    // Upload files and get their URLs
    const resumeUploadResult = resume ? await uploadImage(resume, "resume") : null;
    const aadhaarUploadResult = aadhaarCard ? await uploadImage(aadhaarCard, "aadhaarCard") : null;
    const panUploadResult = panCard ? await uploadImage(panCard, "panCard") : null;
    const qualificationUploadResult = qualificationCertificate ? await uploadImage(qualificationCertificate, "qualificationCertificate") : null;
    const experienceUploadResult = experienceCertificate ? await uploadImage(experienceCertificate, "experienceCertificate") : null;
    const computerUploadResult = computerCertificate ? await uploadImage(computerCertificate, "computerCertificate") : null;

    // Prepare application data for database insertion
    const applicationData = {
      name,
      email,
      mobile,
      resume: resumeUploadResult ? resumeUploadResult.secure_url : null,
      aadhaarCard: aadhaarUploadResult ? aadhaarUploadResult.secure_url : null,
      panCard: panUploadResult ? panUploadResult.secure_url : null,
      qualificationCertificate: qualificationUploadResult ? qualificationUploadResult.secure_url : null,
      experienceCertificate: experienceUploadResult ? experienceUploadResult.secure_url : null,
      computerCertificate: computerUploadResult ? computerUploadResult.secure_url : null,
    };

await JobApplication.create(applicationData);
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
