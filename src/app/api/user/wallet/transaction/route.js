import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import walletModel from "@/models/walletModel";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const GET = async () => {
  try {
    await connectDB();

    const cookieStore = cookies();
    const authToken = cookieStore.get("userAuthToken");

    if (!authToken) {
      return NextResponse.json({ message: "User authentication token is missing." }, { status: 401 });
    }

    const decodedToken = jwt.decode(authToken.value);
    if (!decodedToken || !decodedToken.id) {
      return NextResponse.json({ message: "Invalid token." }, { status: 401 });
    }

    const userId = decodedToken.id;

    const wallet = await walletModel.findOne({ partner: userId });

    // If no wallet is found, return "No transaction"
    if (!wallet) {
      return NextResponse.json({ message: "No transaction" }, { status: 200 });
    }

    return NextResponse.json({ transactions: wallet.transactions }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error", error: error.message }, { status: 500 });
  }
};


