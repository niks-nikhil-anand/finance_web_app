import connectDB from "@/lib/dbConnect";
import branchModel from "@/models/branchModel";
import partnerApplication from "@/models/partnerApplication";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        // Parse the request body as JSON
        const formData = await req.formData();
        const emailId = formData.get("emailId");

        // Check if emailId is provided
        if (!emailId) {
            console.log("Missing Email fields");
            return NextResponse.json({ msg: "All fields are required" }, { status: 400 });
        }

        // Connect to the database
        await connectDB();
        console.log("Connected to database");

        // Find the partner application based on the provided email
        const partner = await partnerApplication.findOne({ email: emailId });
        console.log("Found partner:", partner);

        // If partner not found, return a 404 response
        if (!partner) {
            console.log("Partner not found");
            return NextResponse.json({ msg: "Partner Not Found" }, { status: 404 });
        }

        // Update the role of the partner to 'Admin'
        partner.role = 'Admin';

        // Save the updated partner data
        await partner.save();

        // Return a success message
        console.log("Branch created and partner updated successfully");
        return NextResponse.json({ msg: "Branch created and partner updated successfully" }, { status: 200 });
    } catch (error) {
        // Handle internal server error
        console.log("Internal server error:", error);
        return NextResponse.json({ msg: "Internal server error" }, { status: 500 });
    }
};
