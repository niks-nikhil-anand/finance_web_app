import mongoose from 'mongoose';

// Define the job application schema
const jobApplicationSchema = new mongoose.Schema({
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
  hello: {
    type: Boolean,
    default: true,
  },
  resume: {
    type: String,
    trim: true,
  },
  aadhaarCard: {
    type: String,
    trim: true,
  },
  panCard: {
    type: String,
    trim: true,
  },
  qualificationCertificate: {
    type: String,
    trim: true,
  },
  experienceCertificate: {
    type: String,
    trim: true,
  },
  computerCertificate: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt fields
});

// Export the JobApplication model, creating it if it doesn't already exist
export default mongoose.models.JobApplication || mongoose.model('JobApplication', jobApplicationSchema);
