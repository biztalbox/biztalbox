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

        // Check if environment variables are set
        if (!process.env.EMAIL_USER) {
            throw new Error('EMAIL_USER environment variable is not set');
        }
        
        if (!process.env.EMAIL_PASSWORD) {
            throw new Error('EMAIL_PASSWORD environment variable is not set');
        }

        console.log('Email User:', process.env.EMAIL_USER ? 'Set' : 'Not set');
        console.log('Email Password:', process.env.EMAIL_PASSWORD ? 'Set' : 'Not set');

        // Configure transporter based on EMAIL_SERVICE env variable or default to Gmail
        const emailService = process.env.EMAIL_SERVICE || 'gmail';
        
        let transporterConfig: any = {
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        };

        if (emailService === 'gmail') {
            transporterConfig.service = 'gmail';
        } else if (emailService === 'smtp') {
            // For custom SMTP servers (like SendGrid, Mailgun, etc.)
            transporterConfig = {
                host: process.env.SMTP_HOST,
                port: parseInt(process.env.SMTP_PORT || '587'),
                secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD,
                },
            };
        }

        const transporter = nodemailer.createTransport(transporterConfig);

        // Verify the transporter configuration
        try {
            await transporter.verify();
            console.log('SMTP connection verified successfully');
        } catch (verifyError: any) {
            console.error('SMTP verification failed:', verifyError);
            throw new Error(`Email configuration error: ${verifyError.message}`);
        }

        const mailOptions = {
            from: process.env.EMAIL_USER, // Use authenticated email as sender
            replyTo: email, // Set reply-to as the contact form submitter
            to: process.env.EMAIL_USER,
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
        console.error('Email sending error:', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
