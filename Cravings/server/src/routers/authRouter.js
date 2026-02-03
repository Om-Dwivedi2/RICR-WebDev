import express from "express";
import { OtpProtect } from "../middlewares/authMiddleware.js";
import {
  UserRegister,
  UserLogin,
  UserLogout,
  UserGenOTP,
  UserVerifyOtp,
  UserForgetPassword,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", UserRegister);
router.post("/login", UserLogin);
router.post("/logout", UserLogout);

router.post("/genOtp", UserGenOTP);
router.post("/verifyOtp", UserVerifyOtp);
router.post("/forgetPasword", OtpProtect, UserForgetPassword);

export default router;
