import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/dbConnect';
import partnerApplication from '@/models/partnerApplication';


export const POST = async (req) => {
  try {
    await connectDB();

    const { otp } = await req.json();

    const cookieStore = cookies(req.headers);
    const authToken = cookieStore.get('userAuthToken');
    console.log('Auth Token:', authToken);

    if (!authToken) {
      throw new Error('User authentication token is missing.');
    }

    const decodedToken = jwt.decode(authToken.value);

    console.log('Decoded Token:', decodedToken);
    if (!decodedToken || !decodedToken.username) {
      throw new Error('Invalid token.');
    }



    const email = decodedToken.email;

    const partnerApplications = await partnerApplication.find({ email });
    const partner = partnerApplications[0]

    if (!partner) {
      throw new Error('OTP not found.');
    }

    if (partner.isVerifiedOTP !== otp) {
        throw new Error('Invalid OTP.');
      }


   
    const currentTime = new Date();
    console.log('OTP Expiry:', partner.isVerifiedExpires);
    if (currentTime > partner.isVerifiedExpires) {
      throw new Error('OTP expired.');
    }

    

 // Update the isVerified field to true
 partner.isVerified = true;
 await partner.save();

 

    return NextResponse.json({ isVerified: true }, {
      status: 200,
    });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return NextResponse.json(
      { msg: 'Error verifying OTP', error: error.message },
      {
        status: 500,
      }
    );
  }
};
