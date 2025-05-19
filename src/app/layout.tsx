import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kazeo Official",
  description: "Kazeo Official Website",
  keywords: ["Kazeo Official", "Kazeo Official Script", "MLBB"],
  icons: {
    icon: "/profile.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Optional: OG Meta Tags untuk lebih baik di social media dan Google */}
        <meta property="og:title" content="Kazeo Official" />
        <meta property="og:description" content="Situs resmi Kazeo Official" />
        <meta property="og:image" content="/profile.ico" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {" "}
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
