import mongoose from 'mongoose';

const referAndEarnSchema = new mongoose.Schema({
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
  whatsappNo: {
    type: String,
    required: true,
    trim: true,
  },
  loanType: {
    type: String,
    trim: true, // Added trim to ensure no leading or trailing spaces
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt fields
});

// Export the ReferEarn model, creating it if it doesn't already exist
export default mongoose.models.ReferEarn || mongoose.model('ReferEarn', referAndEarnSchema);
