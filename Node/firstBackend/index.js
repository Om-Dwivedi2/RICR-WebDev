import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./src/config/db.js"
import AuthRouter from "./src/routers/myRouter.js"

const app = express();

app.use("/auth" , AuthRouter);

app.use(express.json())  // frontend se data bheje hai usse readable form me convert kar rahe hai.



// frontEnd se
app.get("/", (req, res) => {
  console.log("Server is Running");
  res.json({ message: "Server is running successfully" });
});


app.use((err,req,res, next)) => {
  const ErrorMessage = err.message || "Internal Server Error";
  const StatusCode = err.statucCode || 500;

};

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server Started at Port", port);
  connectDB();
});
 