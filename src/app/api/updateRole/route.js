// pages/api/updateRole.js
import connectDB from '@/lib/dbConnect';
import partnerApplication from '@/models/partnerApplication';
import { NextResponse } from 'next/server';

export const POST =  async (req, res) => {
  
    const { userId, role, isApproved } = req.body;
    console.log(userId)
    console.log(role)
    console.log(isApproved)

    if (!userId || !role) {
        console.log(userId)
    console.log(role)
    console.log(isApproved)
        return NextResponse.json({ msg: "User ID and role are required" }, {
            status: 400
          });  
    }

    try {
        await connectDB();
      const result = await partnerApplication.updateOne(
        { _id: userId },
        { $set: { role, isApproved: isApproved === 'Yes' } }
      );

      return NextResponse.json({ msg: "Role updated successfully" }, {
        status: 200
      });
    } catch (error) {
        return NextResponse.json({ msg: "Internal server error" }, {
            status: 500
          });
    }
  }

