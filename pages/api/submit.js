import Deals from "../../db/deals";
import nodemailer from "nodemailer";

export default async function submitDeal(req, res) {
  try {
    await Deals.create(req.body);
  } catch (err) {
    console.log("err: ", err);
    res.status(500);
    res.json({});
  }
  sendSubmissionEmail(req.body);
  res.status(201);
  res.json({});
}

function sendSubmissionEmail(submitObj) {
  const {
    establishment,
    address,
    image,
    website,
    deal,
    category,
    neighborhood,
    date,
  } = submitObj;

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
    subject: `Submission Request - ${establishment}`,
    html: `<h1>Submission Request</h1>
            <h3>Date</h3>
                <p>${date}</p>
            <h3>Establishment</h3>    
                <p>${establishment}</p>
            <h3>Website</h3>
                <p>${website}</p>
            <h3>Neighborhood</h3>
                <p>${neighborhood}</p>
            <h3>Address</h3>
                <p>${address}</p>
            <h3>Category</h3>
                <p>${category}</p>
            <h3>Deal</h3>
                <p>${deal}</p>
            <h3>Photo</h3>
                <img src=${image} height=400 width=400></img>
    `,
  };
  transporter.sendMail(mailOptions, function mailSent(error, info) {
    if (error) console.log("Error sending email: ", error);
    else console.log(`Email sent: ${info.response}`);
  });
}
