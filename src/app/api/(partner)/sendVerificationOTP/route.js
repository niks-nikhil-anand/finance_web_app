import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/dbConnect';
import partnerApplication from '@/models/partnerApplication';
import { Resend } from 'resend';
import OTPEmail from '@/emails/verifyUserEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit OTP
};

export const POST = async (req) => {
  try {
    console.log('Connecting to the database...');
    await connectDB();
    console.log('Connected to the database.');

    const cookieStore = cookies();
    const authToken = cookieStore.get('userAuthToken');
    console.log('AuthToken:', authToken);

    if (!authToken) {
      throw new Error('User authentication token is missing.');
    }

    const decodedToken = jwt.decode(authToken.value);
    console.log('Decoded Token:', decodedToken);

    if (!decodedToken || !decodedToken.email) {
      throw new Error('Invalid token.');
    }

    const email = decodedToken.email;
    console.log('Email:', email);

    const partner = await partnerApplication.findOne({ email });
    console.log('Partner:', partner);

    if (!partner) {
      throw new Error('Partner not found.');
    }

    const otp = generateOTP();
    console.log('Generated OTP:', otp);

    const expirationTime = new Date(Date.now() + 5 * 60000); // 5 minutes from now
    console.log('Expiration Time:', expirationTime);

    partner.isVerifiedOTP = otp;
    partner.isVerifiedExpires = expirationTime;
    await partner.save();
    console.log('Partner updated with OTP and expiration time.');

    await resend.emails.send({
        from: 'no-reply@legal257.in',
        to: email,
        subject: 'Your OTP Code',
        react: <OTPEmail username={partner.username} otp={otp} />,
      });


    console.log('OTP email sent.');

    return NextResponse.json(partner, {
      status: 200,
    });
  } catch (error) {
    console.error('Error retrieving Partner:', error);
    return NextResponse.json({ msg: 'Error retrieving Partner', error: error.message }, {
      status: 500,
    });
  }
};
