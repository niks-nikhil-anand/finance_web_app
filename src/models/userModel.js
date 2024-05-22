import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  pincode: {
    type: Number,
  },
  profilePicture: {
    type: String,
    default: '',
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  partnertype: {
    type: Boolean,
    default: false,
  },
  interestedin: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ['admin', 'CSP', 'DSA', 'Branch', 'user'],
    default: 'user',
  },
  aadhaarCard: {
    type: String,
    default: '',
  },
  panCard: {
    type: String,
    default: '',
  },
  bankPassbook: {
    type: String,
    default: '',
  },
  photoCopy: {
    type: String,
    default: '',
  },
  shopPhotoCopy: {
    type: String,
    default: '',
  },
  msmeCertificate: {
    type: String,
    default: '',
  },
  tradeLicense: {
    type: String,
    default: '',
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
