// pages/api/rationCard.js

import { NextResponse } from 'next/server';
import connectDB from '@/lib/dbConnect'; // Ensure to replace with your database connection setup
import uploadImage from '@/lib/uploadImages'; // Make sure this utility function is properly defined
import groceryRationCard from '@/models/groceryRationCard';

export const POST = async (req) => {

  try {
    await connectDB(); 
    console.log("Database connected")

   
    const formData = await req.formData();
    const photoCopy = formData.get("photoCopy");
    const profilePhoto = formData.get("profilePhoto");

    console.log(profilePhoto)
    console.log(photoCopy)

    
    const formValues = {};
    for (const [key, value] of formData.entries()) {
      formValues[key] = value;
    }

    console.log(formValues)


   
    
    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
