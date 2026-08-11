const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_S, },
});

const sendEmail = async ({ to, subject, html }) => {
  return transporter.sendMail({
    from: `"SmartPea Admin" <${process.env.EMAIL_ADDRESS}>`,
    to,
    subject,
    html,
  });
};

module.exports = { sendEmail };
