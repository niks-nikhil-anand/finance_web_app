import connectDB from "@/lib/dbConnect";
import partnerApplication from "@/models/partnerApplication";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { generateRandomToken, generateResetLink } from "@/lib/forgotPasswordToken";
import ForgotPasswordEmail from "@/emails/forgotPasswordEmail";


const resend = new Resend(process.env.RESEND_API_KEY);


export const POST = async (req) => {
  try {
    console.log("Connecting to database...");
    await connectDB();
    console.log("Database connected.");
    const formData = await req.formData();
    const email = formData.get("email");
    console.log("Received email:", email);

    if (!email) {
      console.error("Email is required");
      throw new Error("Email is required");
    }

    const partner = await partnerApplication.findOne({ email });
    if (!partner) {
      console.error("Partner not found");
      throw new Error("Partner Not Found");
    }

    const token = generateRandomToken();
    const expiration = new Date(Date.now() + 3600000);

    partner.resetPasswordToken = token;
    partner.resetPasswordExpires = expiration;
    await partner.save();

    const resetLink = generateResetLink(token);
    console.log("Generated reset link:", resetLink);

   
    console.log("Sending password reset email to:", email);
    await resend.emails.send({
      from: "no-reply@legal257.in",
      to: email,
      subject: "Password Reset Request",
      react: ForgotPasswordEmail({ username: partner.username, resetLink }),
    });

    console.log("Password reset email sent.");
    return NextResponse.json({ msg: "Password reset email sent" }, { status: 200 });
  } catch (error) {
    console.error("Error requesting password reset:", error);
    return NextResponse.json({ msg: "Error requesting password reset", error: error.message }, { status: 500 });
  }
};
