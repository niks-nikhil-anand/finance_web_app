import mongoose from 'mongoose';

const TestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  partnerID: { type: String },
  registrationType: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

export default mongoose.models.TestSchema || mongoose.model('TestSchema', TestSchema);
