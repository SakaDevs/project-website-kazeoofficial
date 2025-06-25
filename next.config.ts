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
      "upload.wikimedia.org",
      "pngimg.com",
      "static.vecteezy.com",
      "img.favpng.com",
      "i.pinimg.com",
      "www.kazeoofficial.my.id",
      "kazeoofficial.my.id",
      "res.cloudinary.com",
      "img.youtube.com",
    ],
  },
  async headers() {
    return [
      {
        // Untuk semua file statis
        source: "/(.*)\\.(jpg|jpeg|png|svg|ico|woff2?)$",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1 tahun
          },
        ],
      },
      {
        // Untuk favicon secara spesifik
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400", // 1 hari
          },
        ],
      },
    ];
  },
};

export default nextConfig;
