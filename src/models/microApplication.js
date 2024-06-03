import mongoose from "mongoose"


const microLoanApplicationSchema = mongoose.Schema({
    nomineeName:{
        type: String,
        required: true,
    },
    guarantorName:{
        type: String,
        required: true,
    },
    nomineeEmail:{
        type: String,
    },
    guarantorEmail:{
        type: String,
    },
    loanType:{
        type: String,
    },
    nomineeMobile:{
        type: String,
        required: true,
    },
    guarantorMobile:{
        type: String,
        required: true,
    },
    nomineeVillage:{
        type: String,
    },
    guarantorVillage:{
        type: String,
    },
    nomineeDOB:{
        type: String,
    },
    guarantorDOB:{
        type: String,
    },
    nomineeRelation:{
        type: String,
    },
    guarantorRelation:{
        type: String,
    },
    guarantorPanCardNumber:{
        type: String,
    },
    nomineePanCardNumber:{
        type: String,
    },
    guarantorAadhaarCardNumber:{
        type: String,
    },
    nomineeAadhaarCardNumber:{
        type: String,
    },
    panCard:{
        type: String,
    },
    aadhaarCard:{
        type: String,
    },
    bankPassbook:{
        type: String,
    },
    bankStatement:{
        type: String,
    },
    photoCopy:{
        type: String,
    },
})



export default mongoose.models.MicroLoanApplication || mongoose.model('MicroLoanApplication' , microLoanApplicationSchema)