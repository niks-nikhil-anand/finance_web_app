import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  partner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PartnerApplication'
  }
}, {
  timestamps: true
});

export default mongoose.models.Complaint || mongoose.model('Complaint', complaintSchema);
