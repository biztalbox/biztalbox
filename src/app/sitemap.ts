import { MetadataRoute } from 'next'

interface WordPressPost {
  id: number;
  slug: string;
  date: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://biztalbox.com' // Replace with your actual domain

  // Add your static routes
  const routes = [
    '',
    '/about',
    '/services',
    '/blog',
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

  // Fetch blog posts from WordPress API
  let blogPosts: WordPressPost[] = []
  try {
    const response = await fetch('https://blog.biztalbox.com/wp-json/wp/v2/posts?per_page=100')
    if (response.ok) {
      blogPosts = await response.json()
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  // Add blog post routes to sitemap
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...routes, ...blogRoutes]
} 
