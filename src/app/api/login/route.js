import connectDB from "@/lib/dbConnect";
import partnerApplication from "@/models/partnerApplication";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';


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
        const isMatch = await bcrypt.compare(password, partner.password);  // Access the partner's password
        if (!isMatch) {
            return NextResponse.json({ msg: "Invalid email or password" }, {
                status: 408
            });
        }

       
        
        console.log(applicationData);
        console.log(partner);

        return NextResponse.json({
            msg:"Form is working fine"
        },{
            status:200
        })       
    } catch (error) {
        return NextResponse.json({ msg: "Error submitting application", error: error.message || error }, {
            status: 500
        });
    }
};
