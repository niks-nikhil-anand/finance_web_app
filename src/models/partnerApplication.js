import mongoose from "mongoose";

// Define Schema
const partnerApplicationSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required']
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    unique: [true, 'Email already exists'],
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  username: {
    type: String, 
    required: [true, 'Username is required'],
    unique: [true, 'Username already exists']
  },
  mobileNumber: { 
    type: String, 
    unique: [true, 'Mobile number already exists'], 
    required: [true, 'Mobile number is required']
  },
  password: { 
    type: String, 
    required: [true, 'Password is required']
  },
  services: { 
    type: String, 
    enum: {
      values: ['GST/ITR Services', 'Fintech Services', 'Finance Services-Loan' , 'All Services' , 'JonoJivan Micro Loan'],
      message: 'Service must be one of GST/ITR Services, Fintech Services, Finance Services-Loan, All Services, JonoJivan Micro Loan'
    },
    default: 'GST/ITR Services'
  },
  city: { 
    type: String
  },
  state: { 
    type: String
  },
  pinCode:{
    type:String
  },
  shopAddress:{
    type:String
  },
  wantPartnerType: { 
    type: String,
    enum: {
      values: ['CSP', 'Branch', 'DSA'],
      message: 'Partner type must be one of CSP, Branch, DSA'
    }
  },
  interest: { 
    type: String 
  },
  message: { 
    type: String 
  },
  aadhaarCard: { 
    type: String 
  },
  panCard: { 
    type: String 
  },
  bankPassbook: { 
    type: String 
  },
  shopPhotoCopy: { 
    type: String 
  },
  msmeCertificate: { 
    type: String 
  },
  photoCopy: { 
    type: String 
  },
  tradeLicense: { 
    type: String 
  },
  role: {
    type: String,
    enum: {
      values: ['CSP', 'Branch', 'DSA' , 'User' , 'Admin'],
      message: 'Role must be one of CSP, Branch, DSA, User, Admin'
    },
    default: 'User'
  },
  status: { 
    type: String,
    enum: {
      values: ['Blocked', 'Active', 'Pending' , 'inReview'],
      message: 'Approval status must be one of Blocked, Active, Pending, inReview'
    },
    default: 'Pending'
  }, 
  isVerified: {
    type: Boolean,
    default: false
  },
  branch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Branch',
    required: false
  },
  resetPasswordToken:{
    type:String
  },
  resetPasswordExpires:{
    type : Date
  },
  isVerifiedToken:{
    type:String
  },
  isVerifiedExpires:{
    type : Date
  }
} ,{
  timestamps:true
});

export default mongoose.models.PartnerApplication || mongoose.model('PartnerApplication', partnerApplicationSchema);
