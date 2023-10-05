import mongoose from "mongoose";

const cartCollection = "carts";

const cartSchema = new mongoose.Schema({
    products:{
        type:[
            {
                productId:String,
                quantity:{
                    type:Number,
                    required:true
                }
            }
        ],
        default:[]
    }
});

export const cartsModel = mongoose.Model(cartCollection,cartSchema);