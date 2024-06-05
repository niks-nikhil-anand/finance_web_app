import mongoose from "mongoose";

const branchSchema = new mongoose.Schema({
    branchName:{
        type: String ,
        required : true
    },
    location:{
        type : String,
        required: true
    },
    partner:[{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'PartnerApplication'
    }]
},{
    timestamps:true
})

export default mongoose.models.Branch || mongoose.model('Branch' , branchSchema)



