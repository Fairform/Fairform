/** @type {import('next').NextConfig} */
const nextConfig = {
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Content Security Policy
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
          // Other security headers
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ]
      }
    ];
  },
  
  // Production optimizations
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  compress: true,
  
  // Image optimization
  images: {
    domains: [
      'images.unsplash.com', 
      'lh3.googleusercontent.com', // Google avatars
      'avatars.githubusercontent.com' // GitHub avatars
    ],
    minimumCacheTTL: 86400, // 24 hours
  },
  
  // Environment variables exposure
  env: {
    SCRAPER_SCHEDULE: process.env.SCRAPER_SCHEDULE || '0 3 * * *',
    AUSTRALIAN_TIMEZONE: 'Australia/Sydney',
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    NEXT_PUBLIC_GITHUB_CLIENT_ID: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
  },
  
  // Webpack optimizations
  webpack: (config, { isServer }) => {
    // Reduce PDF-lib size
    config.resolve.alias = {
      ...config.resolve.alias,
      'pdf-lib': path.resolve(__dirname, 'node_modules/pdf-lib/dist/pdf-lib.min.js')
    };
    
    // Add Brotli compression in production
    if (isServer) {
      config.plugins.push(
        new BrotliPlugin({
          asset: '[path].br[query]',
          test: /\.(js|css|html|svg)$/,
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
    
    return config;
  }
};

// Required plugins
const BrotliPlugin = require('brotli-webpack-plugin');
const path = require('path');

module.exports = nextConfig;
