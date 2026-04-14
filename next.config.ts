import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Base path configuration
  basePath: "",

  // Server configuration
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.NODE_ENV === 'development' 
              ? 'http://localhost:3000' 
              : 'https://travelpay.com, https://www.travelpay.com, https://dev.travelpay.com',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
  
  // Build configuration
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  
  // Host configuration (Next.js 13+)
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ];
  },
  
  // Output configuration (using default .next directory)
  // distDir: 'dist', // Commented out to use default .next directory
  
  // Source maps in development
  productionBrowserSourceMaps: process.env.NODE_ENV === 'development',
  
  // Webpack configuration for custom build settings
  webpack: (config, { dev, isServer }) => {
    // Custom webpack configuration if needed
    return config;
  },
  
  // Turbopack configuration (Next.js 16+)
  turbopack: {},
};

export default nextConfig;
