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
      console.log("Partner wallet not found. Creating new wallet...");
      partnerWallet = new walletModel({ partner: partner._id, totalAmount: 0, availableToWithdraw: 0, transactions: [] });
      await partnerWallet.save();
    }

    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      console.log("Invalid amount.");
      return NextResponse.json({ message: 'Invalid amount' }, { status: 400 });
    }

    if (numericAmount > userWallet.availableToWithdraw) {
      console.log("Insufficient balance.");
      return NextResponse.json({ message: 'Insufficient balance' }, { status: 400 });
    }

    userWallet.totalAmount -= numericAmount;
    userWallet.availableToWithdraw -= numericAmount;
    userWallet.transactions.push({ type: 'debit', amount: numericAmount, date: new Date() });

    partnerWallet.totalAmount += numericAmount;
    partnerWallet.transactions.push({ type: 'credit', amount: numericAmount, date: new Date() });

    await userWallet.save();
    await partnerWallet.save();
    console.log("Wallets updated successfully.");

    return NextResponse.json({ newBalance: userWallet.totalAmount, transactions: userWallet.transactions }, { status: 200 });
  } catch (error) {
    console.error("Internal server error:", error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
};
