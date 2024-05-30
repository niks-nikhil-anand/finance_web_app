import connectDB from "@/lib/dbConnect";
import referApplicationModel from "@/models/referApplicationModel";
import { NextResponse } from "next/server";


export const POST =  async (req, res) => {
  try {
    await connectDB();

    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const mobileNumber = formData.get("mobileNumber");
    const service = formData.get("service");
    const referMobileNumber = formData.get("referMobileNumber");
    const contactNumber = formData.get("contactNumber");

    const applicationData = {
      name,
      email,
      mobileNumber,
      service,
      referMobileNumber,
      contactNumber
      
    };
    await referApplicationModel.create(applicationData);
    console.log(applicationData)
    return NextResponse.json({ msg: "Application submitted successfully" }, {
      status: 200
    });
    } catch (error) {
    console.error('Error handling the request:', error);
    return NextResponse.json({ msg: "Error submitting application", error: error.message }, {
      status: 500
    });
  }
}
export const GET = async (req, res) => {
  try {
    await connectDB();

    const applications = await referApplicationModel.find();
    console.log(applications)

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

