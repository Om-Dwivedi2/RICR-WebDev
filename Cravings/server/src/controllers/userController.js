import User from "../models/userModel.js";
import cloudinary from cl

export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber } = req.body;
    const currentUser = req.user;

    if (!fullName || !email || !mobileNumber) {
      const error = new Error("All Field Required");
      error.statusCode = 400;
      return next(error);
    }

    console.log(currentUser); // old data user in JSON format

    // First Way

    // currentUser.fullName = fullName;
    // currentUser.email = email;
    // currentUser.mobileNumber = mobileNumber;
    // await currentUser.save();

    // console.log("NewData: " , currentUser);

    // Second Way

    const updatedUser = await User.findByIdAndUpdate(
      { _id: currentUser._id },
      {
        fullName,
        email,
        mobileNumber,
      },
      { new: true },
    );

    console.log("Updated User: ", updatedUser);
    res
      .status(200)
      .json({ message: "User Updated Sucessfully", data: updatedUser });

      
  } catch (error) {
    next(error);
  }
};





if(!dp){Error("Profile Picture Required");
  error.statusCode = 400;
  return next(error);
}

if(currentUser.photo.publicID){
  await cloudinary.uploader.destroy(currentUser.photo.publicID);
}

const b64 = Buffer.from(dp.buffer).toString("base64");
console.log(b64.slice(0,100));
const dataURI = `data:${dp.mimetype};base64,${b64}`;
console.log("DataURI", data.URI.slice(0, 100));

const result = await cloudinary.uploader.upload(dataURI,{
  folder: "Cravings/User",
  width:500,
  height:500,
  crop:"fill"
})

console.log("Image Uploaded Successfully: " , result);
currentUser.photo.url = result.secure_url;
currentUser.
