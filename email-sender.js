const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yahiadjouadi7@gmail.com",
    pass: "okfk hvwo hobf ogps",
  },
});

let mailOptions = {
  from: "yahiadjouadi7@gmail.com",
  to: "recipient-email@gmail.com",
  subject: "Hello from Node.js",
  text: "im ur second version bro be cerful !!",
  html: "<b>This is a test email sent from Node.js!</b>",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Email sent: " + info.response);
});
