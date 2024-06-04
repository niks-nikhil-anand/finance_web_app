import mongoose from "mongoose";

const microLoanApplicationSchema = new mongoose.Schema(
  {
    aadhaarCard: { type: String, required: false },
    panCard: { type: String, required: false },
    bankPassbook: { type: String, required: false },
    bankStatements: { type: String, required: false },
    photoCopy: { type: String, required: false },
    nominee: {
      name: { type: String, required: true },
      email: { type: String, required: false },
      mobile: { type: String, required: false },
      village: { type: String, required: false },
      relation: { type: String, required: false },
      dob: { type: Date, required: false },
      panCardNumber: { type: String, required: false },
      aadhaarCardNumber: { type: String, required: false },
    },
    guarantor: {
      name: { type: String, required: true },
      email: { type: String, required: false },
      mobile: { type: String, required: false },
      village: { type: String, required: false },
      relation: { type: String, required: false },
      dob: { type: Date, required: false },
      panCardNumber: { type: String, required: false },
      aadhaarCardNumber: { type: String, required: false },
    },
  },
  {
    timestamps: true,
  }
);

// export default mongoose.models.MicroLoanApplication || mongoose.model('MicroLoanApplication', microLoanApplicationSchema);


export default mongoose.models.MicroLoanApplication || mongoose.model('MicroLoanApplication' , microLoanApplicationSchema)