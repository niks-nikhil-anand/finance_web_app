import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
      await connectDB();
      console.log("Database connected");
  
      // Fetch all records from the groceryRationCard model
      const data = await groceryRationCard.find({});
      console.log("Fetched data:", data);
  
      return NextResponse.json(data, { status: 200 });
    } catch (error) {
      console.error('Error fetching data:', error);
      return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
  };