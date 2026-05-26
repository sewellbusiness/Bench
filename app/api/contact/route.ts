import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  if (!name || !email || !message) return NextResponse.json({ error:"Missing required fields." }, { status:400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error:"Invalid email address." }, { status:400 });
  const port = Number(process.env.SMTP_PORT) || 465;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    tls: { rejectUnauthorized: false },
  });
  try {
    await transporter.sendMail({
      from: `"bench.sewelllabs.com" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO, replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><hr /><p>${message.replace(/\n/g,"<br />")}</p>`,
    });
  } catch (err) {
    console.error("SMTP error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
  return NextResponse.json({ ok:true });
}
