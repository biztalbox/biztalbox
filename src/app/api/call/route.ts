import nodemailer from 'nodemailer';    
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { 
            name, 
            website,
            email, 
            phone, 
            date,
            time,
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
            subject: `Consultation Request from ${name}`,
            html: `
            <h2>Consultation Call Request</h2>
            <p>You have received a new consultation request from your website.</p>
            <hr>
            <h3>Contact Information:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Website:</strong> ${website}</p>
            <p><strong>Preferred Date:</strong> ${date}</p>
            <p><strong>Preferred Time:</strong> ${time}</p>
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
            message: 'We have recieved your request. We will contact you soon!' 
        }, { status: 200 });

    } catch (error: any) {
        console.error('Lead form error:', error);
        return NextResponse.json({ 
            success: false, 
            message: error.message || 'An error occurred while submitting your form. Please try again.' 
        }, { status: 500 });
    }
}