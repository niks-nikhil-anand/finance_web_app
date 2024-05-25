const mongoose = require('mongoose');

const LoanApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  mobileNumber: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  employmentType: {
    type: String,
    required: true
  },
  monthlyIncome: {
    type: Number,
    required: true
  },
  requiredLoanAmount: {
    type: String,
    required: true
  },
  pinCode: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  maritalStatus: {
    type: String,
    required: true
  },
  loanYear: {
    type: String,
    required: true
  },
  employmentType: {
    type: String,
    required: true
  },
  loanType: {
    type: String,
    required: true
  },
  aadhaarCard: {
    type: String,
    required: true
  },
  panCard: {
    type: String,
    required: true
  },
  bankPassbook: {
    type: String,
    required: true
  },
  bankStatements: {
    type: String,
    required: true
  },
  itrFile: {
    type: String,
    required: true
  },
  msmeCertificate: {
    type: String,
    required: true
  },
  tradeLicense: {
    type: String,
    required: true
  },
  gstCertificate: {
    type: String,
    required: true
  }
});


export default mongoose.models.LoanApplication || mongoose.model('LoanApplication', LoanApplicationSchema);
