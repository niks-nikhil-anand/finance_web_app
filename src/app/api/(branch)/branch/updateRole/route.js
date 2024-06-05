import connectDB from "@/lib/dbConnect";
import branchModel from "@/models/branchModel";
import partnerApplication from "@/models/partnerApplication";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        // Destructure the required fields from the request body
        const formData = await req.formData();
        const branchName = formData.get("branchName");
        const branchLocation = formData.get("branchLocation");
        const emailId = formData.get("emailId");

        console.log("Received form data:", branchName, branchLocation, emailId);

        // Check if all required fields are present
        if (!branchName || !branchLocation || !emailId) {
            console.log("Missing required fields");
            return NextResponse.json({ msg: "All fields are required" }, { status: 400 });
        }

        // Connect to the database
        connectDB();

        console.log("Connected to database");

        // Find the partner application based on the provided email
        const partner = await partnerApplication.findOne({ email:emailId });

        console.log("Found partner:", partner);

        // If partner not found, return a 404 response
        if (!partner) {
            console.log("Partner not found");
            return NextResponse.json({ msg: "Partner Not Found" }, { status: 404 });
        }

        // Create a new Branch instance with the provided data
        const newBranch = new branchModel({
            branchName,
            location: branchLocation,
            partner: [partner._id], // Assuming partner is an array of partner IDs in Branch model
        });

        console.log("New branch created:", newBranch);

        // Save the new branch to the database
        const savedBranch = await newBranch.save();

        console.log("Saved branch:", savedBranch);

        // Update the partner's branch ID with the newly created branch
        partner.branch = savedBranch._id;

        console.log("Updated partner:", partner);

        // Update the role of the partner to the branch (Assuming you have a 'role' variable defined)
        const result = await partnerApplication.updateOne(
            { _id: partner._id }, // Assuming partner._id is the ID of the partner
            { $set: { role: 'Branch' } } // Update the role to 'branch'
        );

        console.log("Partner role updated:", result);

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
