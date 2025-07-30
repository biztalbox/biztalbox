import nodemailer from 'nodemailer';    
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { name, email, message, number } = await req.json();

        if (!name || name.length < 3) {
            throw new Error('Name is Invalid');
        }
        if (!number) throw new Error('Phone number is required');

        // Remove any non-digit characters
        const cleanedNumber = number.replace(/\D/g, '');

        // Check if the cleaned number is valid
        if (cleanedNumber.length < 10 || cleanedNumber.length > 15) {
            throw new Error('Invalid phone number');
        }

        if (!message || message == '') {
            throw new Error('Message is required');
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER || 'info@biztalbox.com',
                pass: process.env.SMTP_PASS || 'rwdp cubk cmkq iozt',
            },
        });

        const mailOptions = {
            from: email,
            to: 'info@biztalbox.com',
            subject: `Contact Form Submission from ${name}`,
            html: `
            <h2>New Contact Form Submission</h2>
            <p>You have received a new message from your website contact form.</p>
            <hr>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${number}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        };
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Your message sent successfully.' }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
