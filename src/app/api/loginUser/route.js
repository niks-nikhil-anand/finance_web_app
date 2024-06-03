import connectDB from "@/lib/dbConnect";
import partnerApplication from "@/models/partnerApplication";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const POST = async (req) => {
    try {
        await connectDB();
        const formData = await req.formData();
        const email = formData.get("email");
        const password = formData.get("password");
        const applicationData = {
            email,
            password
        };

        const partner = await partnerApplication.findOne({ email });

        if (!partner) {
            return NextResponse.json({ msg: "User Not Found" }, {
                status: 401
            });
        }

        const isMatch = await bcrypt.compare(password, partner.password);
        if (!isMatch) {
            return NextResponse.json({ msg: "Invalid email or password" }, {
                status: 408
            });
        }

        // Generate a JWT token
        const token = generateToken({ id: partner._id, email: partner.email , username: partner.username });
        console.log('Generated token:', token);

        const response = NextResponse.json({
            msg: "Form is working fine"
        }, {
            status: 200
        });

        // Set the cookie with the token
        response.cookies.set('userAuthToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Ensure secure cookies in production
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/'
        });

        console.log('Response with cookie:', response);

        return response;

    } catch (error) {
        return NextResponse.json({ msg: "Error submitting application", error: error.message || error }, {
            status: 500
        });
    }
};

// Function to generate a JWT token
function generateToken(user) {
    return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1w' });
}
