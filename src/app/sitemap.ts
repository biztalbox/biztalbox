import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://biztalbox.com' // Replace with your actual domain

  // Add your static routes
  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/contact',
    '/google-ads-service',
    '/facebook-ads-service',
    '/content-marketing',
    '/analysis-algorithm',
    '/social-media-marketing',
    '/best-seo-agency'
  ].map((route) => ({
    // Construct the full URL for each route
    url: `${baseUrl}${route}`, // The full URL for the route
    lastModified: new Date(), // The last modified date for the route
    changeFrequency: 'daily' as const, // The change frequency for the route
    priority: route === '' ? 1 : 0.8, // The priority of the route
  }))

  return routes
} 