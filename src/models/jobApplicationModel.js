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
  city: {
    type: String,
    required: true,
  },
  address:{
    type:String,
  },
  state: {
    type: String,
  },
  pinCode: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  resume: {
    type: String,
    
  },
  aadhaarCard: {
    type: String,
    
  },
  panCard: {
    type: String,
    
  },
  paymentReceipt:{
    type:String,
  },
  bankPassbook:{
    type:String,
  },
  qualificationCertificate: {
    type: String,
    
  },
  experienceCertificate: {
    type: String,
    
  },
  computerCertificate: {
    type: String,
    
  },
 
}, {
  timestamps: true, 
});

// Export the JobApplication model, creating it if it doesn't already exist
export default mongoose.models.JobApplication || mongoose.model('JobApplication', jobApplicationSchema);
