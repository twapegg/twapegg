import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request) => {
  const { email, full_name, message } = await request.json();

  // get first name from full name
  const firstName = full_name.split(" ")[0];

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  console.log("email", email);
  console.log("full_name", full_name);
  console.log("message", message);

  // // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"John Stanley Altonaga" <johntaltonaga@gmail.com>', // sender address
    to: email, // list of receivers
    subject: `Message from Stanley`, // Subject line
    text: `Thanks for reaching out, ${toTitleCase(
      firstName
    )}. Your message has been received.`, // plain text body
  });

  let adminInfo = await transporter.sendMail({
    from: '"John Stanley Altonaga" <johntaltonaga@gmail.com>', // sender address
    to: "johntaltonaga@gmail.com", // list of receivers
    subject: `Message from ${full_name}`, // Subject line
    text: message, // plain text body
  });

  return NextResponse.json(
    { message: "Message sent successfully!" },
    { status: 201 }
  );
};

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}
