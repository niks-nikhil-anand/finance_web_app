import connectDB from "@/lib/dbConnect";
import uploadImage from "@/lib/uploadImages";
import microLoanUserModel from "@/models/microLoanUserModel";



export const POST = async (req) => {
  try {
    await connectDB();
    const formData = await req.formData(); // Ensures formData is awaited

    // Applicant data
    const aadhaarCard = formData.get("aadhaarCard");
    const panCard = formData.get("panCard");
    const bankPassbook = formData.get("bankPassbook");
    const bankStatements = formData.get("bankStatements");
    const photoCopy = formData.get("photoCopy");

    // extra field 
    const loanType = formData.get("loanType")
    const employmentType = formData.get("employmentType")
    const monthlyIncome = formData.get("monthlyIncome")
    const requiredLoanAmount = formData.get("requiredLoanAmount")
    const maritalStatus = formData.get("maritalStatus")
    const loanYear = formData.get("loanYear")
   
    // Nominee data
    const nomineeName = formData.get("nomineeName");
    const nomineeEmail = formData.get("nomineeEmail");
    const nomineeMobile = formData.get("nomineeMobile");
    const nomineeVillage = formData.get("nomineeVillage");
    const nomineeRelation = formData.get("nomineeRelation");
    const nomineeDOB = formData.get("nomineeDOB");
    const nomineePanCardNumber = formData.get("nomineePanCardNumber");
    const nomineeAadhaarCardNumber = formData.get("nomineeAadhaarCardNumber");

    // Customer data
    const customerName = formData.get("customerName");
    const customerEmail = formData.get("customerEmail");
    const customerMobile = formData.get("customerMobile");
    const customerCity = formData.get("customerCity");
    const customerGender = formData.get("customerGender");
    const customerPinCode = formData.get("customerPinCode");
    const customerState = formData.get("customerState");
    const customerDOB = formData.get("customerDOB");



    // Guarantor data
    const guarantorName = formData.get("guarantorName");
    const guarantorEmail = formData.get("guarantorEmail");
    const guarantorMobile = formData.get("guarantorMobile");
    const guarantorVillage = formData.get("guarantorVillage");
    const guarantorRelation = formData.get("guarantorRelation");
    const guarantorDOB = formData.get("guarantorDOB");
    const guarantorPanCardNumber = formData.get("guarantorPanCardNumber");
    const guarantorAadhaarCardNumber = formData.get("guarantorAadhaarCardNumber");





    if (!nomineeName || !guarantorName) {
      throw new Error("Please provide nominee and guarantor names.");
    }

    const aadhaarUploadResult = aadhaarCard ? await uploadImage(aadhaarCard, "aadhaarCard") : null;
    const panUploadResult = panCard ? await uploadImage(panCard, "panCard") : null;
    const passbookUploadResult = bankPassbook ? await uploadImage(bankPassbook, "bankPassbook") : null;
    const statementsUploadResult = bankStatements ? await uploadImage(bankStatements, "bankStatements") : null;
    const photoCopyUploadResult = photoCopy ? await uploadImage(photoCopy, "photoCopy") : null;

    const applicationData = {
      aadhaarCard: aadhaarUploadResult ? aadhaarUploadResult.secure_url : null,
      panCard: panUploadResult ? panUploadResult.secure_url : null,
      bankPassbook: passbookUploadResult ? passbookUploadResult.secure_url : null,
      bankStatements: statementsUploadResult ? statementsUploadResult.secure_url : null,
      photoCopy: photoCopyUploadResult ? photoCopyUploadResult.secure_url : null,
      nominee: {
        name: nomineeName,
        email: nomineeEmail,
        mobile: nomineeMobile,
        village: nomineeVillage,
        relation: nomineeRelation,
        dob: nomineeDOB,
        panCardNumber: nomineePanCardNumber,
        aadhaarCardNumber: nomineeAadhaarCardNumber,
      },
      guarantor: {
        name: guarantorName,
        email: guarantorEmail,
        mobile: guarantorMobile,
        village: guarantorVillage,
        relation: guarantorRelation,
        dob: guarantorDOB,
        panCardNumber: guarantorPanCardNumber,
        aadhaarCardNumber: guarantorAadhaarCardNumber,
      },
      customer:{
        name: customerName,
        email:customerEmail,
        mobile: customerMobile,
        city:customerCity,
        gender: customerGender,
        dob: customerDOB,
        pinCode: customerPinCode,
        state: customerState,
      },
      loanType ,
      employmentType,
      monthlyIncome ,
      requiredLoanAmount,
      maritalStatus,
      loanYear
    };

    console.log(applicationData)

    await microLoanUserModel.create(applicationData); // Corrected model usage

    return NextResponse.json({ msg: "Application submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json({ msg: "Error submitting application", error: error.message }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    await connectDB();
    const applications = await microLoanUserModel.find(); // Corrected model usage

    return NextResponse.json(applications, { status: 200 });
  } catch (error) {
    console.error("Error fetching loan applications:", error);
    return NextResponse.json({ msg: "Error fetching loan applications", error: error.message }, { status: 500 });
  }
};
