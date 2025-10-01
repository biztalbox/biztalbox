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

  // Fetch blog posts from WordPress API with cache busting
  let blogPosts: WordPressPost[] = []
  try {
    console.log('Fetching blog posts for sitemap...')
    
    // Add cache busting and force fresh data
    const cacheBuster = new Date().getTime()
    const apiUrl = `https://blog.biztalbox.com/wp-json/wp/v2/posts?per_page=100&_=${cacheBuster}`
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
      // Force fresh data, no caching
      cache: 'no-store',
      next: { revalidate: 0 }
    })
    
    console.log(`API Response Status: ${response.status}`)
    
    if (response.ok) {
      blogPosts = await response.json()
      console.log(`Successfully fetched ${blogPosts.length} blog posts for sitemap`)
    } else {
      console.error(`WordPress API returned status ${response.status}`)
      const errorText = await response.text()
      console.error('Error response:', errorText)
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
    
    // Log more detailed error information
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
  }

  // Add blog post routes to sitemap
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Add USA sitemap reference
  const usaSitemapRoute = {
    url: `${baseUrl}/usa-sitemap.xml`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }

  console.log(`Generated sitemap with ${routes.length} static routes, ${blogRoutes.length} blog routes, and 1 USA sitemap reference`)

  return [...routes, ...blogRoutes, usaSitemapRoute]
}

// Force the sitemap to be dynamically generated on each request
export const dynamic = 'force-dynamic'
export const revalidate = 0 
