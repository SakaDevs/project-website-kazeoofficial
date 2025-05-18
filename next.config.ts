import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "static.wikia.nocookie.net",
      "yt3.googleusercontent.com",
      "assets.tako.id",
    ],
  },
  env: {
    REACT_APP_YOUTUBE_API: process.env.REACT_APP_YOUTUBE_API,
  },
};
export default nextConfig;
