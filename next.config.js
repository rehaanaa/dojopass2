/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      '127.0.0.1',
      'cdn.example.com',
      'images.unsplash.com',
      'via.placeholder.com',
      'picsum.photos',
      'placehold.co',
      'placehold.it',
      'dummyimage.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
}

module.exports = nextConfig 