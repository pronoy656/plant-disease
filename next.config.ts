import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // @ts-ignore - allowedDevOrigins is required for network access but missing in some Next.js type definitions
  allowedDevOrigins: ['10.10.7.99'],
  experimental: {
    // Other experimental features would go here
  },
};

export default nextConfig;
