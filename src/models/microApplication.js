import mongoose from "mongoose";

const microLoanSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
    },
    mobile:{
        type: String,
        required: true,
    },
    village:{
        type: String,
    },
    DOB:{
        type: String,
    },
    nominee:{
        type: String,
    },
    relation:{
        type: String,
    },
    panCard:{
        type: String,
    },
    aadhaarCard:{
        type: String,
    },
})


export default mongoose.models.MicroLoan || mongoose.model('MicroLoan',
    microLoanSchema
)