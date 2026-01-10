import mongoose from "mongoose";

const connectDB = async ()=> {

    try {
    // process.env.MONGO_URI :- chache memory se data la rahe hai  
       const conn = await mongoose.connect(process.env.MONGO_URI);  // Connecting the MongoDB 
       
       console.log(`MongoDB Connected at : ${conn.connection.host} :${conn.connection.port}`);
       //                                  OR
       console.log("MongoDB Connected at" ,  conn.connection.host , ":" , conn.connection.port);
       // in the "" wali line due to {comma} we get an extra space so we used 
       
       console.log("Database Name : ", conn.connection.name);
    
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
    // Adarsh Gupta
}

export default connectDB;