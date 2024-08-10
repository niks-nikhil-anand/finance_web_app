const mongoose = require('mongoose');

const rationCardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, 'Email already exists'], 
  },
  fatherName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  district: {
    type: String,
  },
  pinCode: {
    type: String,
    required: true,
  },
  panchayatName: {
    type: String    ,
  },
  blockName: {
    type: String    ,
  },
  wardNumber: {
    type: String    ,
  },
  whatsAppNumber: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  aadhaarNumber: {
    type: String,
    required: true,
  },
  panNumber: {
    type: String,
    required: true,
  },
  bankAccountNumber: {
    type: String,
    required: true,
  },
  ifscCode: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  photoCopy: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
    required: true,
  },
  dateOfIssue:{
    type: String,
    required: true,
  },
  gender:{
    type: String,
    required: true,
  },
  widowStatus:{
    type: String,
  },
  handicapStatus:{
    type: String,
  },
  seniorCitizen:{
    type: String,
  },
  dob:{
    type: Date
  },
  status: { 
    type: String,
    enum: {
      values: ['Active', 'Blocked'],
      message: 'Approval status must be one of Blocked, Active'
    },
    default: 'Active'
  },
  uniqueNumber:{
    type: String,
    required: true,
  },
  partner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PartnerApplication',
    required: false
},
});



export default mongoose.models.RationCard || mongoose.model('RationCard' , rationCardSchema )
