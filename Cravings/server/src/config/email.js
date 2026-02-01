import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// dotenv.config();

const sendEmail = async (to, subject, message) => {
  try {
    console.log("Started Sending Email");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSCODE,
      },
    });

    console.log("3....2....1....");

    const mailOption = {
      from: process.env.GMAIL_USER,
      to,
      subject,
      html: message,
    };

    console.log("Sending Email");

    const res = await transporter.sendMail(mailOption);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;

sendEmail(
  "dwivediom2005@gmail.com",
  "test Email",
  "<p style='color:green;'> Hng kyal haal chal</p>",
);