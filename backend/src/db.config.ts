import mongoose, { mongo } from "mongoose";
import { DB_URL } from "./constants";

export async function connectDB(){
    await mongoose.connect(DB_URL)
}