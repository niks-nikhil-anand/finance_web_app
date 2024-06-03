import mongoose from "mongoose";
const gstUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username :{
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
    registrationType: {
        type: String,
        required: true,
    },
    aadhaarCard: {
        type: String,
       
    },
    panCard: {
        type: String,
        
    },
    photoCopy: {
        type: String,
       
    },
    bankPassbook: {
        type: String,
       
    },
    electricityBill: {
        type: String,
        
    },
    status: {
      type : String,
      enum: ['Pending', 'Processing', 'Completed' , 'Reject'],
      default: 'Pending'
      }
});

export default mongoose.models.GstUser || mongoose.model('GstUser', gstUserSchema);



