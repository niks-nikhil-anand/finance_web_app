const mongoose = require('mongoose');

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
});

export default mongoose.models.GstUser || mongoose.model('GstUser', gstUserSchema);



