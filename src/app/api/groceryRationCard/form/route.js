import { NextResponse } from 'next/server';
import connectDB from '@/lib/dbConnect';
import uploadImage from '@/lib/uploadImages';
import groceryRationCard from '@/models/groceryRationCard';

// Function to generate a unique 7-digit number
const generateUniqueNumber = async () => {
  let uniqueNumber;
  let isUnique = false;

  while (!isUnique) {
    uniqueNumber = Math.floor(1000000 + Math.random() * 9000000).toString();
    console.log(`Generated unique number: ${uniqueNumber}`);
    const existingRecord = await groceryRationCard.findOne({ uniqueNumber });
    if (!existingRecord) {
      isUnique = true;
    }
  }
  
  return uniqueNumber;
};

export const POST = async (req) => {
  try {
    await connectDB();
    console.log("Database connected");

    const formData = await req.formData();
    console.log("FormData received");

    const photoCopy = formData.get("photoCopy");
    const profilePhoto = formData.get("profilePhoto");
    console.log("Photo Copy:", photoCopy);
    console.log("Profile Photo:", profilePhoto);

    const formValues = {};
    for (const [key, value] of formData.entries()) {
      formValues[key] = value;
    }
    console.log("Form Values:", formValues);

    const photoCopyUploadResult = photoCopy ? await uploadImage(photoCopy, "photoCopy") : null;
    const profilePhotoUploadResult = profilePhoto ? await uploadImage(profilePhoto, "profilePhoto") : null;
    console.log("Photo Copy Upload Result:", photoCopyUploadResult);
    console.log("Profile Photo Upload Result:", profilePhotoUploadResult);

    // Generate date of issue and unique 7-digit number
    const dateOfIssue = new Date();
    const uniqueNumber = await generateUniqueNumber();
    console.log("Date of Issue:", dateOfIssue);
    console.log("Unique Number:", uniqueNumber);

    const applicationData = {
      name: formValues.name,
      email: formValues.email,
      fatherName: formValues.fatherName,
      address: formValues.address,
      district: formValues.district,
      panchayatName: formValues.panchayatName,
      blockName: formValues.blockName,
      wardNumber: formValues.wardNumber,
      pinCode: formValues.pinCode,
      whatsAppNumber: formValues.whatsAppNumber,
      mobileNumber: formValues.mobileNumber,
      gender: formValues.gender,
      widowStatus: formValues.widowStatus,
      handicapStatus: formValues.handicapStatus,
      dob: formValues.dob,
      state: formValues.state,
      seniorCitizen: formValues.seniorCitizen,
      aadhaarNumber: formValues.aadhaarNumber,
      panNumber: formValues.panNumber,
      bankAccountNumber: formValues.bankAccountNumber,
      ifscCode: formValues.ifscCode,
      bankName: formValues.bankName,
      photoCopy: photoCopyUploadResult ? photoCopyUploadResult.secure_url : null,
      profilePhoto: profilePhotoUploadResult ? profilePhotoUploadResult.secure_url : null,
      dateOfIssue: dateOfIssue,
      uniqueNumber: uniqueNumber,
    };

    console.log("Application Data:", applicationData);

    await groceryRationCard.create(applicationData);
    console.log("Application submitted successfully");
    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
};

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
