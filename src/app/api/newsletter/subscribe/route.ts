import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();

        // Validate email
        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { success: false, message: 'Please provide a valid email address' },
                { status: 400 }
            );
        }

        // Mailchimp configuration
        const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
        const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
        const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;

        if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_SERVER_PREFIX) {
            console.error('Missing Mailchimp configuration');
            return NextResponse.json(
                { success: false, message: 'Newsletter service is not configured properly' },
                { status: 500 }
            );
        }

        // Mailchimp API endpoint
        const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

        // Prepare data for Mailchimp
        const data = {
            email_address: email,
            status: 'subscribed',
            tags: ['website-newsletter']
        };

        // Make request to Mailchimp
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            return NextResponse.json(
                { success: true, message: 'Successfully subscribed to newsletter!' },
                { status: 200 }
            );
        } else {
            // Handle different Mailchimp errors
            if (result.title === 'Member Exists') {
                return NextResponse.json(
                    { success: false, message: 'You are already subscribed!' },
                    { status: 400 }
                );
            } else if (result.title === 'Invalid Resource') {
                return NextResponse.json(
                    { success: false, message: 'Please provide a valid email address' },
                    { status: 400 }
                );
            } else {
                console.error('Mailchimp error:', result);
                return NextResponse.json(
                    { success: false, message: 'Failed to subscribe. Please try again later.' },
                    { status: 500 }
                );
            }
        }

    } catch (error: any) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { success: false, message: 'An unexpected error occurred. Please try again later.' },
            { status: 500 }
        );
    }
}