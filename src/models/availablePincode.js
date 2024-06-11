import mongoose from "mongoose";

const availablePincodeSchema = mongoose.Schema({
    availableServices:{
        type:String,
    },
    pinCode:{
        type:Number,
        required: true,  
    },
    message:{
        type:String
    }
},{
    timestamps:true
})

export default mongoose.models.AvailablePincode || mongoose.model('AvailablePincode' , availablePincodeSchema)

