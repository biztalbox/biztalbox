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

  // Function to fetch all blog posts with pagination
  async function fetchAllBlogPosts(): Promise<WordPressPost[]> {
    const allPosts: WordPressPost[] = []
    let page = 1
    let hasMorePosts = true

    while (hasMorePosts) {
      try {
        const response = await fetch(
          `https://blog.biztalbox.com/wp-json/wp/v2/posts?per_page=100&page=${page}&_fields=id,slug,date`,
          {
            // Use force-cache for static generation during build time
            cache: 'force-cache',
            // Add headers for better compatibility
            headers: {
              'User-Agent': 'Mozilla/5.0 (compatible; Next.js Sitemap)',
              'Accept': 'application/json',
            },
            // Set timeout
            signal: AbortSignal.timeout(15000), // 15 second timeout for build
          }
        )

        if (!response.ok) {
          console.error(`Error fetching blog posts: ${response.status} ${response.statusText}`)
          break
        }

        const posts: WordPressPost[] = await response.json()
        
        if (posts.length === 0) {
          hasMorePosts = false
        } else {
          allPosts.push(...posts)
          page++
          
          // Safety check to prevent infinite loops
          if (page > 50) { // Maximum 5000 posts (50 pages * 100 per page)
            console.warn('Reached maximum page limit for blog posts')
            break
          }
        }
      } catch (error) {
        console.error('Error fetching blog posts for sitemap:', error)
        // Don't break the build, just stop fetching more posts
        hasMorePosts = false
      }
    }

    console.log(`Fetched ${allPosts.length} blog posts for sitemap`)
    return allPosts
  }

  // Fetch blog posts from WordPress API with error handling
  let blogPosts: WordPressPost[] = []
  try {
    blogPosts = await fetchAllBlogPosts()
  } catch (error) {
    console.error('Failed to fetch blog posts for sitemap, continuing with static routes only:', error)
    // Continue with empty blog posts array if fetch fails completely
    blogPosts = []
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