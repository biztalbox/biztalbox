/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'blog.biztalbox.com',
            },
            {
                protocol: 'https',
                hostname: 'secure.gravatar.com',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
            },
            {
                protocol: 'https',
                hostname: 'biztalbox.com',
            },
        ],
    },
    async headers() {
        // Long-lived immutable caching for static assets served from /public.
        // These files only change when their content is replaced in a deploy,
        // so repeat visits stop re-downloading models/fonts/media entirely.
        const immutable = [
            {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable',
            },
        ];
        return [
            { source: '/assets/:path*', headers: immutable },
            { source: '/models/:path*', headers: immutable },
            { source: '/clients/:path*', headers: immutable },
            {
                source:
                    '/:file(hero_video.mp4|split_video.mp4|location.webm|map.webm|top_curve.png|bottom_curve.png|whychooseus.webp)',
                headers: immutable,
            },
        ];
    },
};

export default nextConfig;
