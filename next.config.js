const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self' *.fairform.com;
              script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vercel-insights.com *.googletagmanager.com;
              style-src 'self' 'unsafe-inline' *.googleapis.com;
              img-src 'self' data: blob: *.vercel.com lh3.googleusercontent.com;
              font-src 'self' *.gstatic.com;
              connect-src 'self' *.fairform.com api.legislation.nsw.gov.au;
              frame-src 'self' accounts.google.com;
              base-uri 'self';
              form-action 'self';
              object-src 'none'
            `.replace(/\s{2,}/g, ' ').trim()
          },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ]
      }
    ];
  },

  // Performance and production settings
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  compress: true,

  // Image optimization
  images: {
    domains: [
      'images.unsplash.com',
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com'
    ],
    minimumCacheTTL: 86400
  },

  // Environment variables
  env: {
    SCRAPER_SCHEDULE: process.env.SCRAPER_SCHEDULE || '0 3 * * *',
    AUSTRALIAN_TIMEZONE: 'Australia/Sydney',
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    NEXT_PUBLIC_GITHUB_CLIENT_ID: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
  },

  // Webpack customizations
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'pdf-lib': path.resolve(__dirname, 'node_modules/pdf-lib/dist/pdf-lib.min.js')
    };
    return config;
  }
};

module.exports = nextConfig;
