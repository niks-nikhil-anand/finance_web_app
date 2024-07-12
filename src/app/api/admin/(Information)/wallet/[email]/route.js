import connectDB from "@/lib/dbConnect";
import walletModel from "@/models/walletModel";
import { NextResponse } from 'next/server';
import PartnerApplication from "@/models/partnerApplication"; // Assuming this is your Partner model

export const GET = async (request, { params }) => {
  const { email } = params; // Destructure email directly from params
  console.log('Email:', email); // Log the email parameter

  try {
    await connectDB();

    // Assuming PartnerApplication is your model for partners
    const partner = await PartnerApplication.findOne({ email });

    if (!partner) {
      return NextResponse.json({ msg: "Partner not found" }, { status: 404 });
    }

    const userId = partner.id;

    // Assuming walletModel is your model for wallets associated with partners
    const wallet = await walletModel.findOne({ partner: userId });

    if (!wallet) {
      return NextResponse.json({ msg: "Wallet not found" }, { status: 404 });
    }

    console.log('Wallet:', wallet);
    return NextResponse.json(wallet, { status: 200 });
  } catch (error) {
    console.error('Error fetching wallet:', error);
    return NextResponse.json({ msg: "Error fetching wallet", error: error.message }, { status: 500 });
  }
};
