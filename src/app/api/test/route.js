import uploadImage from "@/lib/uploadImages";
import { NextResponse } from "next/server";

export const POST = async (req)=>{
    const formData = await req.formData();
    const image = formData.get("resume") 
    console.log({image})
    const data = await uploadImage(image , "nikhil")
    return NextResponse.json({msg:data},{
        status:200
    })
}