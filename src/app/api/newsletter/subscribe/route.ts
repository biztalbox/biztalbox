import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();

        // Validate email
        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { success: false, message: 'Valid email address is required' },
                { status: 400 }
            );
        }

        // For WordPress + Mailpoet integration
        if (process.env.NEWSLETTER_SERVICE === 'mailpoet') {
            const response = await subscribeToMailpoet(email);
            return response;
        }

        // For Mailchimp integration
        if (process.env.NEWSLETTER_SERVICE === 'mailchimp') {
            const response = await subscribeToMailchimp(email);
            return response;
        }

        // Default: Store in database and send confirmation email
        const response = await subscribeToDatabase(email);
        return response;

    } catch (error: any) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to subscribe. Please try again.' },
            { status: 500 }
        );
    }
}

// Mailpoet WordPress Integration
async function subscribeToMailpoet(email: string) {
    try {
        // Call WordPress REST API endpoint for Mailpoet
        const wpResponse = await fetch(`${process.env.WORDPRESS_BASE_URL}/wp-json/mailpoet/v1/subscribers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.WORDPRESS_API_TOKEN}`, // You'll need to set this up
            },
            body: JSON.stringify({
                email: email,
                lists: [1], // Default list ID - you'll configure this in WordPress
                status: 'subscribed'
            }),
        });

        if (wpResponse.ok) {
            return NextResponse.json({
                success: true,
                message: 'Successfully subscribed to newsletter!'
            });
        } else {
            throw new Error('WordPress subscription failed');
        }
    } catch (error) {
        console.error('Mailpoet subscription error:', error);
        
        // Fallback to email notification
        await sendSubscriptionNotification(email);
        
        return NextResponse.json({
            success: true,
            message: 'Subscription request received. You will be added to our newsletter shortly.'
        });
    }
}

// Mailchimp Integration
async function subscribeToMailchimp(email: string) {
    try {
        const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
        const LIST_ID = process.env.MAILCHIMP_LIST_ID;
        const DATACENTER = MAILCHIMP_API_KEY?.split('-')[1];

        const response = await fetch(
            `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email_address: email,
                    status: 'subscribed',
                }),
            }
        );

        if (response.ok) {
            return NextResponse.json({
                success: true,
                message: 'Successfully subscribed to newsletter!'
            });
        } else {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Mailchimp subscription failed');
        }
    } catch (error) {
        console.error('Mailchimp subscription error:', error);
        return NextResponse.json(
            { success: false, message: 'Subscription failed. Please try again.' },
            { status: 500 }
        );
    }
}

// Database storage (fallback or custom solution)
async function subscribeToDatabase(email: string) {
    // This would require a database setup (Prisma, MongoDB, etc.)
    // For now, we'll send an email notification to admin
    await sendSubscriptionNotification(email);
    
    return NextResponse.json({
        success: true,
        message: 'Subscription request received. You will be added to our newsletter shortly.'
    });
}

// Send email notification to admin about new subscription
async function sendSubscriptionNotification(email: string) {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: 'New Newsletter Subscription',
        html: `
            <h2>New Newsletter Subscription</h2>
            <p>A new user has subscribed to the newsletter:</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            <p>Please add this email to your newsletter list in WordPress admin.</p>
        `,
    };

    await transporter.sendMail(mailOptions);
} 