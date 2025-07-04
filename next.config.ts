import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    BUILD_TIME: new Date().toISOString(),
  },
};

export default nextConfig;
