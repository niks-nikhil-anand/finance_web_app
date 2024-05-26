import mongoose from "mongoose";

// Define Schema
const partnerApplicationSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
 },
  mobileNumber: { 
    type: String, 
    required: true 
},
  password: { 
    type: String, 
    required: true 
},
  city: { 
    type: String
 },
  state: { 
    type: String
 },
  partnerType: { 
    type: String,
    enum: ['CSP', 'Branch', 'DSA'],
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
role:{
    type : String,
    enum: ['CSP', 'Branch', 'DSA' , 'User' , 'Admin'],
    default: 'User'
},
  isApproved: { 
    type: Boolean, 
    default: false 
}, 
});

export default mongoose.models.PartnerApplication || mongoose.model('PartnerApplication' , partnerApplicationSchema )

