import jwt from "jsonwebtoken";

export const getToken = async (user, res) => {
  try {
    // payload = actual samaan  isko JWT_SECRET se encrypt kar dege
    const payload = {
      id: user._id,
      role: user.role || "admin",
    };
    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    console.log(token);
    res.cookie("parleG", token, {
      maxAge: 100 * 60 * 60 * 24,
      httpOnly: true,
      secure: false,
      // it is a mode which can be used in thunder Client
      sameSite: "lax",
    });
  } catch (error) {
    throw error;
  }
};
