import connectDB from "@/lib/dbConnect";
import partnerApplication from "@/models/partnerApplication";
import { NextResponse } from "next/server";
import { ForgotPasswordEmail } from "@/lib/emailTemplates"; // Assuming ForgotPasswordEmail is a function that generates the email HTML
import { Resend } from "resend";
import { generateRandomToken, generateResetLink } from "@/lib/forgotPasswordToken";
const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req) => {
  try {
    await connectDB();
    const { email } = req.body;

    if (!email) {
      throw new Error("Email is required");
    }

    const partner = await partnerApplication.findOne({ email });
    if (!partner) {
      throw new Error("Partner Not Found");
    }

    const token = generateRandomToken(); 
    const expiration = new Date(Date.now() + 3600000);

    partner.resetPasswordToken = token;
    partner.resetPasswordExpires = expiration;
    await partner.save();

    const resetLink = generateResetLink(token);

    // Send password reset email
    const emailHtml = ForgotPasswordEmail({ username: partner.username, resetLink });
    await Resend.emails.send({
      from: "no-reply@legal257.in", // Replace with your sender email
      to: email,
      subject: "Password Reset Request",
      html: emailHtml,
    });
    return NextResponse.json({ msg: "Password reset email sent" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "Error requesting password reset", error: error.message }, { status: 500 });
  }
};
