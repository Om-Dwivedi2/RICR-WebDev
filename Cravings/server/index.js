import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.js";
import AuthRouter from "./src/routers/authRouter.js";
import PublicRouter from "./src/routers/pubicRouter.js"
import morgan from 'morgan';

const app = express();

// Ye sare Middlewares hai

// Mera backend sirf localhost:5173 se aane wali browser requests ko allow kare
app.use(cors({ origin: "http://localhost:5173" }));   
app.use(express.json());
app.use(morgan("dev"));

//Mera backend /auth se start hone wali saari requests ko AuthRouter ko handle karne dega.
app.use("/auth", AuthRouter);

app.use("/public" , PublicRouter)



app.get("/", (req, res) => {
  console.log("Server is Working");
});

app.use((err, req, res, next) => {
  const ErrorMessage = err.message || "Internal Server Error";
  const StatusCode = err.statusCode || 500;

  res.status(StatusCode).json({ message: ErrorMessage });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server Started at Port: ", port);
  connectDB();
});
