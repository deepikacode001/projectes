import mongoose from "mongoose";
import { stringify } from "querystring";

const productModel= new mongoose.Schema({
    name:string,
    price:string,

});
export const product =  mongoose.model.producs || mongoose.model("producs",productModel);