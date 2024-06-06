import connectDB from "@/lib/dbConnect";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import walletModel from "@/models/walletModel";

export const POST = async () => {
  try {
   
    await connectDB();
    console.log("Database connected.");

    const cookieStore = cookies();
    const authToken = cookieStore.get("authBranchToken");

    if (!authToken) {
     
      return NextResponse.json({ message: "User authentication token is missing." }, { status: 401 });
    }

    const decodedToken = jwt.decode(authToken.value);
    if (!decodedToken || !decodedToken.id) {
     
      return NextResponse.json({ message: "Invalid token." }, { status: 401 });
    }

    const userId = decodedToken.id;
    

    let wallet = await walletModel.findOne({ partner: userId });

    // If wallet already exists, return "OK"
    if (wallet) {
      console.log("Wallet already exists.");
      return NextResponse.json({ msg: "Wallet already exists." }, {
        status: 200
      });
    }

    // Initialize the wallet if it doesn't exist
   
    wallet = new walletModel({ partner: userId, totalAmount: 0, availableToWithdraw: 0, transactions: [] });
    await wallet.save();
    console.log("Wallet created successfully.");
    return NextResponse.json({ msg: "Wallet created successfully." }, {
      status: 200
    });

  
  } catch (error) {
    console.error("Internal server error:", error);
    return NextResponse.json({ message: "Internal server error", error: error.message }, { status: 500 });
  }
};
