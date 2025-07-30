import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { success: false, message: 'Valid email address is required' },
                { status: 400 }
            );
        }

        // Handle unsubscribe based on newsletter service
        if (process.env.NEWSLETTER_SERVICE === 'mailpoet') {
            const response = await unsubscribeFromMailpoet(email);
            return response;
        }

        if (process.env.NEWSLETTER_SERVICE === 'mailchimp') {
            const response = await unsubscribeFromMailchimp(email);
            return response;
        }

        // Default: Just return success (manual removal)
        return NextResponse.json({
            success: true,
            message: 'Unsubscribe request received. You will be removed from our newsletter shortly.'
        });

    } catch (error: any) {
        console.error('Newsletter unsubscribe error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to unsubscribe. Please try again.' },
            { status: 500 }
        );
    }
}

async function unsubscribeFromMailpoet(email: string) {
    try {
        const wpResponse = await fetch(`${process.env.WORDPRESS_BASE_URL}/wp-json/mailpoet/v1/subscribers/${email}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.WORDPRESS_API_TOKEN}`,
            },
            body: JSON.stringify({
                status: 'unsubscribed'
            }),
        });

        if (wpResponse.ok) {
            return NextResponse.json({
                success: true,
                message: 'Successfully unsubscribed from newsletter.'
            });
        } else {
            throw new Error('WordPress unsubscribe failed');
        }
    } catch (error) {
        console.error('Mailpoet unsubscribe error:', error);
        return NextResponse.json({
            success: true,
            message: 'Unsubscribe request received. You will be removed from our newsletter shortly.'
        });
    }
}

async function unsubscribeFromMailchimp(email: string) {
    try {
        const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
        const LIST_ID = process.env.MAILCHIMP_LIST_ID;
        const DATACENTER = MAILCHIMP_API_KEY?.split('-')[1];
        
        // Create MD5 hash of email for Mailchimp subscriber ID
        const crypto = require('crypto');
        const subscriberHash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');

        const response = await fetch(
            `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members/${subscriberHash}`,
            {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    status: 'unsubscribed',
                }),
            }
        );

        if (response.ok) {
            return NextResponse.json({
                success: true,
                message: 'Successfully unsubscribed from newsletter.'
            });
        } else {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Mailchimp unsubscribe failed');
        }
    } catch (error) {
        console.error('Mailchimp unsubscribe error:', error);
        return NextResponse.json(
            { success: false, message: 'Unsubscribe failed. Please try again.' },
            { status: 500 }
        );
    }
} 