import mongoose from "mongoose";
const gstUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
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
    bankStatement: {
        type: String,  
    },
    electricityBill: {
        type: String,
        
    },
    status: {
      type : String,
      enum: ['Details Pending', 'Under Processing', 'Approved' , 'Rejected'],
      default: 'Details Pending'
    },
    partner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PartnerApplication',
        required: true
    },
    

});

export default mongoose.models.GstUser || mongoose.model('GstUser', gstUserSchema);



