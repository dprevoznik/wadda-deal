import nodemailer from "nodemailer";

export default async function supportEmail(req, res) {
  const { email, text, _id, deal } = req.body;
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
    subject: `Customer Service Request - Post ID #${_id}`,
    html: `<h1>Customer Service Request</h1>
            <h3>Date</h3>
                <p>${new Date()}</p>
            <h3>Post ID</h3>    
                <p>#${_id}</p>
            <h3>Deal</h3>
                <p>${deal}</p>
            <h3>Message</h3>
                <p>${text}</p>
            <h3>Contact</h3>
                <p>${email}</p>
    `,
  };
  transporter.sendMail(mailOptions, function mailSent(error, info) {
    if (error) {
      res.json(error);
    } else {
      res.json(`Email sent: ${info.response}`);
    }
  });
}
