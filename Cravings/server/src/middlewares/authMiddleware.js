// iska kaam hai jo user aya hai vo sahi hai yaa nahi matlab user ki taraf se  _id  ko backend ki _id se match karo
// so isme JWT ki processing hogi

import jwt from "jsonwebtoken";
import User from "../models/userModel";

export const Protect = async (req, res, next) => {
  try {
    const biscuit = req.cookies.parleG;
    console.log("Token recieved in Cookies: ", biscuit);
    const tea = jwt.verify(biscuit, process.env.JWT_SECRET);
    console.log(tea);

    if (!tea) {
        const error = new eRROR("Unautorized User !!!");
        error.statusCode = 401;
        return next(error);
    } 

    const verifiedUser = await User.findById(tea.id);

    if (!verifiedUser) {
        const error = new eRROR("Unautorized User !!!");
        error.statusCode = 401;
        return next(error);
    }

    req.user =  verifiedUser;
    

    next();
  } catch (error) {
    next(error);
  }
};
