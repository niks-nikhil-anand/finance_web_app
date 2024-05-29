const mongoose = require('mongoose');

const LoanApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    
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
    
  },
  employmentType: {
    type: String,
   
  },
  monthlyIncome: {
    type: Number,
   
  },
  requiredLoanAmount: {
    type: String,
    
  },
  pinCode: {
    type: String,
    
  },
  state: {
    type: String,
    
  },
  maritalStatus: {
    type: String,
    
  },
  loanYear: {
    type: String,
   
  },
  employmentType: {
    type: String,
    
  },
  loanType: {
    type: String,
   
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
  bankStatements: {
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
    
  }
});


export default mongoose.models.LoanApplication || mongoose.model('LoanApplication', LoanApplicationSchema);
