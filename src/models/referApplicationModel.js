import mongoose from "mongoose";

const referApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  service: {
    type: String,
    required: true,
  },
  referMobileNumber: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.ReferApplication || mongoose.model("ReferApplication" , referApplicationSchema);