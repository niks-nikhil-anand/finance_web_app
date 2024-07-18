import { NextResponse } from 'next/server';
import connectDB from '@/lib/dbConnect'; 
import uploadImage from '@/lib/uploadImages'; 
import groceryRationCard from '@/models/groceryRationCard';

export const POST = async (req) => {

  try {
    await connectDB(); 
    console.log("Database connected")

   
    const formData = await req.formData();
    const photoCopy = formData.get("photoCopy");
    const profilePhoto = formData.get("profilePhoto");
    const formValues = {};
    for (const [key, value] of formData.entries()) {
      formValues[key] = value;
    }

    const photoCopyUploadResult = photoCopy ? await uploadImage(photoCopy, "photoCopy") : null;
    const profilePhotoUploadResult = profilePhoto ? await uploadImage(profilePhoto, "profilePhoto") : null;

    const applicationData = {
      name: formValues.name,
      email: formValues.email,
      fatherName: formValues.fatherName,
      address: formValues.address,
      district: formValues.district,
      pinCode: formValues.pinCode,
      whatsAppNumber: formValues.whatsAppNumber,
      mobileNumber: formValues.mobileNumber,
      state: formValues.state,
      aadhaarNumber: formValues.aadhaarNumber,
      panNumber: formValues.panNumber,
      bankAccountNumber: formValues.bankAccountNumber,
      ifscCode: formValues.ifscCode,
      bankName: formValues.bankName,
      photoCopy: photoCopyUploadResult ? photoCopyUploadResult.secure_url : null,
      profilePhoto: profilePhotoUploadResult ? profilePhotoUploadResult.secure_url : null,
    };
    await groceryRationCard.create(applicationData);    
    console.log(applicationData)
    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}


export const GET = async (req) => {
  try {
    await connectDB();
    console.log("Database connected");

    // Fetch all records from the groceryRationCard model
    const data = await groceryRationCard.find({});
    
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}