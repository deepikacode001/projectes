import mongoose, { connection } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){

     await mongoose.connect(connectionSrt)
     const data = await product.find();
     console.log(data)

    return NextResponse.json({result:data})
}