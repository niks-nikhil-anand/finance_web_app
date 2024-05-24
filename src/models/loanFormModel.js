import mongoose from 'mongoose';

const loanFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Ensure no leading or trailing spaces
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'], // Email validation
  },
  mobile: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    enum: ['male' , 'female' , 'other'],
  },
  city: {
    type: String,
  },
  pincode: {
    type: Number,
  },
  state: {
    type: String,
  },
  maritalStatus: {
    type: String,
    enum: ['Single' , 'Married' , 'Divorced' , 'Widowed'],
  },
  loanType: {
    type: String,
  },
  loanDuration:{
    type: String,
  },
  employerStatus:{
    type: String,
  },
  purposeOfLoan:{
    type: String,
  },
  monthlyIncome:{
   type : String
  },
  requiredLoanAmount:{
   type : String
  },
  aadhaarCard: {
    type: String,
  },
  panCard: {
    type: String,
  },
  bankPassbook: {
    type: String,
  },
  bankStatement: {
    type: String,
  },
  itrFile: {
    type: String,
  },
  msmeCertificate: {
    type: String,
  },
  tradeLicense: {
    type: String,
  },
  gstCertificate: {
    type: String,
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt fields
});

// Export the JobApplication model, creating it if it doesn't already exist
export default mongoose.models.LoanForm || mongoose.model('LoanForm', loanFormSchema);
