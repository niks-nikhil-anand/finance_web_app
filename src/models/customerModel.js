const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    partnerId: {
        type: String,
        default: null
    },
    registrationType: {
        type: String,
        required: true
    },
    aadhaarCard: {
        type: String,
        default: null
    },
    panCard: {
        type: String,
        default: null
    },
    bankPassbook: {
        type: String,
        default: null
    },
    bankStatements: {
        type: String,
        default: null
    },
    photoCopy: {
        type: String,
        default: null
    },
    electricityBill: {
        type: String,
        default: null
    },
    rentAgreement: {
        type: String,
        default: null
    },
    gender: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    purposeOfLoan: {
        type: String,
        default: ''
    },
    employmentType: {
        type: String,
        default: ''
    },
    monthlyIncome: {
        type: String,
        default: ''
    },
    requiredLoanAmount: {
        type: String,
        default: ''
    },
    itrFile: {
        type: String,
        default: null
    },
    msmeCertificate: {
        type: String,
        default: null
    },
    tradeLicense: {
        type: String,
        default: null
    },
    gstCertificate: {
        type: String,
        default: null
    },
    pinCode: {
        type: String,
        default: ''
    },
    state: {
        type: String,
        default: ''
    },
    maritalStatus: {
        type: String,
        default: ''
    },
    loanYear: {
        type: String,
        default: ''
    },
    employerStatus: {
        type: String,
        default: ''
    },
    loanType: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
