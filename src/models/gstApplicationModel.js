const mongoose = require('mongoose');

const gstRegistrationSchema = new mongoose.Schema({
    name: {
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
    partnerID: {
        type: String,
        required: false,
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

export default mongoose.models.GstRegistration || mongoose.model('GstRegistration', gstRegistrationSchema);



