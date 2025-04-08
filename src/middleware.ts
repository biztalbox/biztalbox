import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the current pathname
  const url = request.nextUrl.clone()
  
  // Create canonical URL
  const domain = process.env.NEXT_PUBLIC_DOMAIN || 'https://yourwebsite.com'
  const path = url.pathname
  const canonicalPath = path === '/' ? path : path.replace(/\/$/, '')
  const canonicalUrl = `${domain}${canonicalPath}`
  
  // Add canonical URL to headers
  const response = NextResponse.next()
  response.headers.set('x-canonical-url', canonicalUrl)
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 