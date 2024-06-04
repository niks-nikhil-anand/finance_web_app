import connectDB from "@/lib/dbConnect";
import partnerApplication from "@/models/partnerApplication";
import walletModel from "@/models/walletModel";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

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

    const user = await partnerApplication.findById(userId);
    if (!user) {
      console.log("User not found.");
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    if (user.role !== 'Admin') {
      console.log("Access denied.");
      return NextResponse.json({ message: 'Access denied' }, { status: 403 });
    }

    const { amount } = await req.json();
    if (!amount || amount <= 0) {
      console.log("Invalid amount.");
      return NextResponse.json({ message: 'Invalid amount' }, { status: 400 });
    }

    let wallet = await walletModel.findOne({ partner: userId });
    if (!wallet) {
      console.log("Creating a new wallet...");
      wallet = new walletModel({ partner: userId, totalAmount: 0, availableToWithdraw: 0, transactions: [] });
    }

    wallet.totalAmount += amount;
    wallet.availableToWithdraw += amount; // Adjust based on your business logic
    wallet.transactions.push({ type: 'credit', amount, date: new Date() });

    await wallet.save();
    console.log("Wallet updated successfully.");

    return NextResponse.json({ newBalance: wallet.totalAmount, transactions: wallet.transactions }, { status: 200 });
  } catch (error) {
    console.error("Internal server error:", error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
};
