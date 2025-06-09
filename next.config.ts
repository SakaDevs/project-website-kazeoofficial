import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: [
      "static.wikia.nocookie.net",
      "yt3.googleusercontent.com",
      "assets.tako.id",
      "upload.wikimedia.org",
      "pngimg.com",
      "static.vecteezy.com",
      "img.favpng.com",
      "i.pinimg.com",
      "www.kazeoofficial.my.id",
      "kazeoofficial.my.id",
    ],
  },
  theme: {
    extend: {
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
};

export default nextConfig;
