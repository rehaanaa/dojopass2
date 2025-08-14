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
      'dummyimage.com',
      'mbzxsvhuswrowjlujhco.supabase.co'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dojopass.store',
        port: '',
        pathname: '/storage/v1/object/sign/**',
      },
      {
        protocol: 'https',
        hostname: 'mbzxsvhuswrowjlujhco.supabase.co',
        port: '',
        pathname: '/storage/v1/object/sign/**',
      }
    ],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  webpack: (config, { isServer }) => {
    // Suppress Supabase Realtime critical dependency warning
    config.ignoreWarnings = [
      { module: /node_modules\/@supabase\/realtime-js/ },
      { message: /Critical dependency: the request of a dependency is an expression/ }
    ];
    
    return config;
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
}

module.exports = nextConfig 