import connectDB from "@/lib/dbConnect";
import partnerApplication from "@/models/partnerApplication";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";


export const POST = async (req) => {
  try {
    console.log("Connecting to database...");
    await connectDB();
    console.log("Database connected.");

    const formData = await req.formData();
    const newPassword = formData.get("newPassword");
    const token = formData.get("token");

    if (!newPassword) {
      console.error("newPassword is required");
      throw new Error("newPassword is required");
    }
    if (!token) {
      console.error("token is required");
      throw new Error("token is required");
    }

    const partner = await partnerApplication.find({resetPasswordToken: token });

    if (!partner) {
      console.error("Invalid or expired token");
      return NextResponse.json({ msg: "Invalid or expired token" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    // Assuming you have a method to hash passwords

    await partnerApplication.updateOne(
      { resetPasswordToken: token },
      { $set: { password: hashedPassword ,
        resetPasswordToken: "",
        resetPasswordExpires: ""
      } }
    );
    console.log("Password reset successfully");
    return NextResponse.json({ msg: "Password reset successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error resetting password:", error);
    return NextResponse.json({ msg: "Error resetting password", error: error.message }, { status: 500 });
  }
};
