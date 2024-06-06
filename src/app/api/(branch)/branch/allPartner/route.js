import connectDB from "@/lib/dbConnect";
import partnerApplication from "@/models/partnerApplication";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';

export const GET = async (req, res) => {
    try {
      await connectDB();
      const cookieStore = cookies();
      const authToken = cookieStore.get("authBranchToken");
  
      if (!authToken) {
        throw new Error("User authentication token is missing.");
      }
  
      const decodedToken = jwt.decode(authToken.value);
      if (!decodedToken || !decodedToken.branchId) {
        throw new Error("Invalid token.");
      }
  
      const branchId = decodedToken.branchId;

        const applications = await partnerApplication.find({ branch: branchId });
        console.log(applications);
  
      return NextResponse.json(applications, {
        status: 200
      });
    } catch (error) {
      console.error('Error fetching applications:', error);
      return NextResponse.json({ msg: "Error fetching applications", error: error.message }, {
        status: 500
      });
    }
  };