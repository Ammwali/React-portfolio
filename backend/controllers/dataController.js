const User = require("../model/dataModel");
const nodemailer = require("nodemailer");

envConfig();
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
});

async function envConfig() {
  const requiredVars = [
    "EMAIL_HOST",
    "EMAIL_PORT",
    "EMAIL_SECURE",
    "EMAIL_USER",
    "EMAIL_PASS",
    "ADMIN_EMAIL",
  ];
  requiredVars.forEach((key) => {
    if (!process.env[key]) {
      console.warn(`Environment variable ${key} is not defined.`);
    }
  });
}

const addUser = async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  try {
    const user = await User.create({ firstName, lastName, email, phone, message });
    if (!user) {
      return res.status(400).json({ message: "Failed to submit form. Please try again" });
    }

    const mailOptions = {
      from: `"Your Portfolio Website" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL, 
      subject: "New Form Submission",
      html: `
        <h3>Hey! Ammara Memon, You have a new form submission on your Portfolio:</h3>
        <ul>
          <li><strong>Name:</strong> ${firstName} ${lastName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(201).json({ message: "Form submission successful", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error. Try again later", error });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(400).json({ message: "Users not found" });
    }
    return res.status(200).json({ users });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error. Try again later", err });
  }
};

module.exports = { addUser, getUsers };
