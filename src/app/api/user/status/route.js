import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/dbConnect';
import gstUserModel from '@/models/gstUserModel';
import loanUserModel from '@/models/loanUserModel';
import microLoanUserModel from '@/models/microLoanUserModel';

export const GET = async (req) => {
  try {
    await connectDB();

    const cookieStore = cookies();
    const authToken = cookieStore.get("userAuthToken");

    if (!authToken) {
      throw new Error("User authentication token is missing.");
    }

    const decodedToken = jwt.decode(authToken.value);
    if (!decodedToken || !decodedToken.id) {
      throw new Error("Invalid token.");
    }

    const gstApplications = await gstUserModel.find({ _id: decodedToken.id });
    const loanApplications = await loanUserModel.find({ _id: decodedToken.id });
    const microLoanApplications = await microLoanUserModel.find({ _id: decodedToken.id });

    const data = {
      gstApplications,
      loanApplications,
      microLoanApplications
    };

    

    return NextResponse.json(data, {
      status: 200,
    });
  } catch (error) {
    console.error("Error retrieving data:", error);
    return NextResponse.json({ msg: "Error retrieving data", error: error.message }, {
      status: 500,
    });
  }
};
