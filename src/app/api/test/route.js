import  connectDB  from "@/lib/dbConnect"; 
import { NextResponse } from "next/server";

async function connectToDB() {
  await connectDB();
}

export  async function GET(req, res) {
  try {
    // Connect to MongoDB
    await connectToDB();
    return NextResponse.json({ msg: "Success" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.error({ msg: "Internal Server Error" }, { status: 500 });
  }
}
