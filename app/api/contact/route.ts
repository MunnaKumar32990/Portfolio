import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // 1. Replace these with your SMTP credentials
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // e.g., 'smtp.gmail.com'
      port: 465, // or 587
      secure: true, // true for 465, false for 587
      auth: {
        user: 'munnakushw7@gmail.com', // your email address
        pass: 'ekow mnxr ewnx xzgr', // your email password or app password
      },
    });

    // 2. Replace 'YOUR_EMAIL_ADDRESS' with your email (recipient)
    await transporter.sendMail({
      from: 'Portfolio Contact Form <munnakushw7@gmail.com>',
      to: 'munnakushw7@gmail.com',
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email.' }, { status: 500 });
  }
} 