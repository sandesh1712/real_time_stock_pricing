import mongoose from 'mongoose';

const coinSchema = new mongoose.Schema({
   name: String,
   symbol: String,
   price: Number,
   currency: String,
   color: String,
},{
    timestamps:true
})

export const Coin = mongoose.model("Coin",coinSchema);