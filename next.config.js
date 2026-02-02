/** @type {import('next').NextConfig} */

// Security Headers - Balanced for Portfolio Website
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains' // 1 year HSTS (no preload untuk flexibility)
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN' // Prevent clickjacking
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff' // Prevent MIME type sniffing
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block' // Enable browser XSS protection
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin' // Privacy-friendly referrer
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()' // Disable unnecessary permissions
  }
]

const nextConfig = {
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  
  // Apply security headers to all routes
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
