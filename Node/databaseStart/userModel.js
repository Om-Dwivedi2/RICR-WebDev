import mongoose from "mongoose";

mongoose.connect(`mongodb://127.0.0.1:27017/dbName`);

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

// MongoDB me user's' (plural) name ka model banega  {Model = Collection  eg:- Sales, customer, user}
const om = mongoose.model("user", userSchema);

export default om;
