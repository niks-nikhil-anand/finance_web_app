const mongoose = require('mongoose');

const rationCardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  pin: {
    type: String,
    required: true,
  },
  whatNumber: {
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
    // Assuming you handle file storage separately, this could be a file path or other reference
    type: String,
    required: true,
  },
});



export default mongoose.models.RationCard || mongoose.model('RationCard' , rationCardSchema )
