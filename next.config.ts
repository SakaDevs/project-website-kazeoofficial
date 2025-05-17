import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  // Keep any existing configuration options
  // Add them here if you had any in your original config
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["static.wikia.nocookie.net"],
  },
  /* config options here */
};

export default nextConfig;
