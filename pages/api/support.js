import nodemailer from "nodemailer";

// {email, text}

export default async function supportEmail(req, res) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
  var mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };
  transporter.sendMail(mailOptions, function mailSent(error, info) {
    if (error) {
      res.send(error);
    } else {
      res.send(`Email sent: ${info.response}`);
    }
  });
}
