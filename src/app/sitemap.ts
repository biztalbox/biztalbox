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
    '/best-seo-agency',
    '/graphic-designing',
    '/website-development',
    '/motion-graphics',
    '/content-writing',
    '/social-media-marketing',
    '/google-ads-service',
    '/facebook-ads-service',
    '/analysis-algorithm'
    

  ].map((route) => ({
    // Construct the full URL for each route
    url: `${baseUrl}${route}`, // The full URL for the route
    lastModified: new Date(), // The last modified date for the route
    changeFrequency: 'daily' as const, // The change frequency for the route
    priority: route === '' ? 1 : 0.8, // The priority of the route
  }))

  return routes
} 