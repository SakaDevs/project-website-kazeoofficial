// app/layout.tsx (atau lokasi layout.tsx Anda)
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";
import RunningText from "./components/Announcement/page";
import PageWrapper from "./components/PageAnimation/page";

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
  keywords: ["Kazeo Official", "MLBB"],
  icons: {
    icon: "/profile.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RunningText />
        <Navbar />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
