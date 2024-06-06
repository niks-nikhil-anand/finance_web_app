import mongoose from "mongoose";

const loanUserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      username:{
        type:String,
        required:true
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
      },
      city: {
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
        
      },
      status: {
        type : String,
      enum: ['Pending', 'Processing', 'Completed' , 'Reject'],
      default: 'Pending'
      },
      partner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PartnerApplication',
        required: true
    },
})

export default mongoose.models.LoanUser || mongoose.model('LoanUser', loanUserSchema);