import connectDB from "../config/db.js";
import dotenv from "dotenv";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { DummyAdmin } from "./dummy.js";

dotenv.config();

const seedAdmin = async () => {
  await connectDB();
  const salt = await bcrypt.genSalt(10);

  const existingAdmin = await User.findOne({ email: DummyAdmin.email });


  if(existingAdmin){
    if ( existingAdmin.role == "admin") {
        User.delete({ email: DummyAdmin.email });
    } else {
        
    }
  }




};
