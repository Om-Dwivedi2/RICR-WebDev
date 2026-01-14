// Mongoose helps to connect Node and MongoDB
import mongoose from "mongoose";

mongoose.connect(`mongodb://127.0.0.1:27017/dbName`);


// Schema batata hai har document ke andar kya-kya hoga
const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

// MongoDB me user's' (plural) name ka model banega  {Model = Collection  eg:- Sales, customer, user}
const om = mongoose.model("user", userSchema);

export default om;









