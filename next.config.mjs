import { readFileSync } from "node:fs";

/**
 * Base paths of the CMS location pages (seo / video / graphic). When a route
 * folder is renamed, its old base goes into legacyBasePaths and every old URL
 * 301s to the new base. See src/lib/location-pages/base-paths.json.
 */
const locationBasePaths = JSON.parse(
    readFileSync(new URL("./src/lib/location-pages/base-paths.json", import.meta.url), "utf8")
);

function locationLegacyRedirects() {
    const rules = [];
    for (const [key, cfg] of Object.entries(locationBasePaths)) {
        if (key.startsWith("_") || !cfg || !Array.isArray(cfg.legacyBasePaths)) continue;
        for (const legacy of cfg.legacyBasePaths) {
            if (!legacy || legacy === cfg.basePath) continue;
            rules.push({ source: legacy, destination: cfg.basePath, permanent: true });
            rules.push({ source: `${legacy}/:path*`, destination: `${cfg.basePath}/:path*`, permanent: true });
        }
    }
    return rules;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return locationLegacyRedirects();
    },
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
