import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        // Verify webhook secret for security
        const signature = req.headers.get('x-webhook-signature');
        const expectedSignature = process.env.WORDPRESS_WEBHOOK_SECRET;
        
        if (!signature || signature !== expectedSignature) {
            return NextResponse.json(
                { error: 'Unauthorized webhook' },
                { status: 401 }
            );
        }

        const payload = await req.json();
        
        // Verify this is a new post publication
        if (payload.action !== 'publish_post' || payload.post_type !== 'post') {
            return NextResponse.json({ message: 'Not a blog post publication' });
        }

        const post = payload.post;
        
        // Send newsletter email to subscribers
        await sendNewsletterEmail({
            postTitle: post.title,
            postExcerpt: post.excerpt,
            postUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
            postImage: post.featured_image_url,
            publishDate: post.date
        });

        return NextResponse.json({ 
            success: true, 
            message: 'Newsletter sent successfully' 
        });

    } catch (error: any) {
        console.error('Webhook processing error:', error);
        return NextResponse.json(
            { error: 'Webhook processing failed', details: error.message },
            { status: 500 }
        );
    }
}

interface NewsletterData {
    postTitle: string;
    postExcerpt: string;
    postUrl: string;
    postImage?: string;
    publishDate: string;
}

async function sendNewsletterEmail(data: NewsletterData) {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    // Get subscriber list (this depends on your chosen method)
    const subscribers = await getSubscriberList();

    const emailTemplate = getNewsletterTemplate(data);

    // Send to all subscribers
    for (const subscriber of subscribers) {
        try {
            await transporter.sendMail({
                from: {
                    name: 'Biztal Box',
                    address: process.env.SMTP_USER!
                },
                to: subscriber.email,
                subject: `New Blog Post: ${data.postTitle}`,
                html: emailTemplate,
            });
        } catch (error) {
            console.error(`Failed to send email to ${subscriber.email}:`, error);
        }
    }
}

async function getSubscriberList() {
    // This implementation depends on your newsletter service choice
    
    if (process.env.NEWSLETTER_SERVICE === 'mailpoet') {
        return await getMailpoetSubscribers();
    }
    
    if (process.env.NEWSLETTER_SERVICE === 'mailchimp') {
        return await getMailchimpSubscribers();
    }
    
    // Fallback: return admin email for testing
    return [{ email: process.env.SMTP_USER }];
}

async function getMailpoetSubscribers() {
    try {
        const response = await fetch(`${process.env.WORDPRESS_BASE_URL}/wp-json/mailpoet/v1/subscribers`, {
            headers: {
                'Authorization': `Bearer ${process.env.WORDPRESS_API_TOKEN}`,
            },
        });
        
        if (response.ok) {
            const data = await response.json();
            return data.filter((sub: any) => sub.status === 'subscribed');
        }
    } catch (error) {
        console.error('Failed to fetch Mailpoet subscribers:', error);
    }
    
    return [];
}

async function getMailchimpSubscribers() {
    try {
        const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
        const LIST_ID = process.env.MAILCHIMP_LIST_ID;
        const DATACENTER = MAILCHIMP_API_KEY?.split('-')[1];

        const response = await fetch(
            `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members?status=subscribed`,
            {
                headers: {
                    'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
                },
            }
        );

        if (response.ok) {
            const data = await response.json();
            return data.members.map((member: any) => ({ email: member.email_address }));
        }
    } catch (error) {
        console.error('Failed to fetch Mailchimp subscribers:', error);
    }
    
    return [];
}

function getNewsletterTemplate(data: NewsletterData): string {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Blog Post from Biztal Box</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
            .header { background: #19191A; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .post-image { width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin: 15px 0; }
            .btn { display: inline-block; background: #19191A; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 15px 0; }
            .footer { background: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666; }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>Biztal Box</h1>
            <p>Digital Marketing & Development Solutions</p>
        </div>
        
        <div class="content">
            <h2>New Blog Post Published!</h2>
            <h3>${data.postTitle}</h3>
            
            ${data.postImage ? `<img src="${data.postImage}" alt="${data.postTitle}" class="post-image">` : ''}
            
            <p>${data.postExcerpt}</p>
            
            <a href="${data.postUrl}" class="btn">Read Full Article</a>
            
            <p><small>Published on ${new Date(data.publishDate).toLocaleDateString()}</small></p>
        </div>
        
        <div class="footer">
            <p>You're receiving this email because you subscribed to the Biztal Box newsletter.</p>
            <p>
                <a href="${process.env.NEXT_PUBLIC_BASE_URL}/unsubscribe">Unsubscribe</a> | 
                <a href="${process.env.NEXT_PUBLIC_BASE_URL}">Visit Website</a>
            </p>
            <p>© ${new Date().getFullYear()} Biztal Box. All rights reserved.</p>
        </div>
    </body>
    </html>
    `;
} 