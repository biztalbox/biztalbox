import nodemailer from 'nodemailer';    
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { 
            name, 
            email, 
            phone, 
            website, 
            budget, 
            service, 
            message, 
            pageUrl, 
            userAgent, 
            timestamp 
        } = await req.json();

        // Validation
        if (!name || name.length < 3) {
            throw new Error('Name must be at least 3 characters long');
        }

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error('Valid email address is required');
        }

        if (!budget) {
            throw new Error('Budget selection is required');
        }

        if (!service) {
            throw new Error('Service selection is required');
        }

        if (!message || message.trim() === '') {
            throw new Error('Message is required');
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'info@biztalbox.com',
                pass: 'rwdp cubk cmkq iozt',
            },
        });

        const mailOptions = {
            from: email,
            to: 'info@biztalbox.com',
            cc: 'ish@biztalbox.com',
            replyTo: email,
            subject: `New Lead Form Submission from ${name}`,
            html: `
            <h2>New Lead Form Submission</h2>
            <p>You have received a new lead from your website.</p>
            <hr>
            <h3>Contact Information:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Website:</strong> ${website || 'Not provided'}</p>
            <hr>
            <h3>Service Details:</h3>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Budget:</strong> ${budget}</p>
            <hr>
            <h3>Message:</h3>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <h3>Technical Information:</h3>
            <p><strong>Page URL:</strong> ${pageUrl || 'Not available'}</p>
            <p><strong>User Agent:</strong> ${userAgent || 'Not available'}</p>
            <p><strong>Submission Time:</strong> ${timestamp || new Date().toLocaleString("en-IN")}</p>
        `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ 
            success: true, 
            message: 'We have recieved your enquiry. We will contact you soon!' 
        }, { status: 200 });

    } catch (error: any) {
        console.error('Lead form error:', error);
        return NextResponse.json({ 
            success: false, 
            message: error.message || 'An error occurred while submitting your form. Please try again.' 
        }, { status: 500 });
    }
}