import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import partnerApplication from "@/models/partnerApplication";
import walletModel from "@/models/walletModel";
import connectDB from "@/lib/dbConnect";

export const POST = async (req) => {
  try {
    console.log("Connecting to the database...");
    await connectDB();
    console.log("Database connected.");

    const cookieStore = cookies();
    const authToken = cookieStore.get("authToken");

    if (!authToken) {
      console.log("User authentication token is missing.");
      return NextResponse.json({ message: "User authentication token is missing." }, { status: 401 });
    }

    const decodedToken = jwt.decode(authToken.value);
    if (!decodedToken || !decodedToken.id) {
      console.log("Invalid token.");
      return NextResponse.json({ message: "Invalid token." }, { status: 401 });
    }

    const userId = decodedToken.id;
    console.log(`User ID decoded from token: ${userId}`);

    const { email, amount } = await req.json();
    console.log(email); // Corrected logging from mobileNumber to email
    console.log(amount);

    const partner = await partnerApplication.findOne({ email });
    if (!partner) {
      console.log("Partner not found.");
      return NextResponse.json({ message: 'Partner not found' }, { status: 404 });
    }

    const userWallet = await walletModel.findOne({ partner: userId });
    if (!userWallet) {
      console.log("User wallet not found.");
      return NextResponse.json({ message: 'User wallet not found' }, { status: 404 });
    }

    let partnerWallet = await walletModel.findOne({ partner: partner._id });
    if (!partnerWallet) {
      console.log("Partner wallet not found.");
      return NextResponse.json({ message: 'Partner wallet not found' }, { status: 404 });
    }

    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      console.log("Invalid amount.");
      return NextResponse.json({ message: 'Invalid amount' }, { status: 400 });
    }

    if (numericAmount > partnerWallet.totalAmount) {
      console.log("Insufficient balance in partner's wallet.");
      return NextResponse.json({ message: 'Insufficient balance in partner\'s wallet' }, { status: 400 });
    }

    // Deduct amount from the partner wallet
    partnerWallet.totalAmount -= numericAmount;
    partnerWallet.availableToWithdraw -= numericAmount;
    partnerWallet.transactions.push({ type: 'debit', amount: numericAmount, date: new Date() });

    // Add amount to the user wallet
    userWallet.totalAmount += numericAmount;
    userWallet.transactions.push({ type: 'credit', amount: numericAmount, date: new Date() });

    await partnerWallet.save();
    await userWallet.save();
    console.log("Wallets updated successfully.");

    return NextResponse.json({ newBalance: userWallet.totalAmount, transactions: userWallet.transactions }, { status: 200 });
  } catch (error) {
    console.error("Internal server error:", error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
};
