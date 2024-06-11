
import connectDB from "@/lib/dbConnect";
import availablePincode from "@/models/availablePincode";
import { NextResponse } from "next/server";



export const POST = async (req) => {
  try {
    await connectDB();

    const formData = await req.formData();

    const pinCode = formData.get("pinCode");
    const availableServices = formData.get("availableServices");
    const message = formData.get("message");
   

    // Check if required fields are present in the form data
    if (!pinCode || !availableServices ) {
      throw new Error("Please provide PinCode and availableServices.");
    }

    

    // Prepare application data for database insertion
    const applicationData = {
        pinCode,
        availableServices,
        message,
    };

    await availablePincode.create(applicationData);
    return NextResponse.json({ msg: "Application submitted successfully" }, {
      status: 200
    });
  } catch (error) {
    // Handle errors
    console.error("Error submitting AvailablePincode:", error);
    return NextResponse.json({ msg: "Error submitting AvailablePincode", error: error.message }, {
      status: 500
    });
  }
};





  export const GET = async (req) => {
    try {
      await connectDB();
  
      // Fetch all available pincode entries from the database
      const entries = await availablePincode.find();
      console.log(entries)
  
      return NextResponse.json( entries ,{
             status: 200 
            
        });
    } catch (error) {
      // Handle errors
      console.error("Error fetching AvailablePincode entries:", error);
      return NextResponse.json(
        { msg: "Error fetching AvailablePincode entries", error: error.message },
        { status: 500 }
      );
    }
  };