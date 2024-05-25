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
        required: false,
    },
    panCard: {
        type: String,
        required: false,
    },
    photo: {
        type: String,
        required: false,
    },
    bankPassbook: {
        type: String,
        required: false,
    },
    electricityBill: {
        type: String,
        required: false,
    },
});

export default mongoose.models.GstRegistration || mongoose.model('GstRegistration', gstRegistrationSchema);



