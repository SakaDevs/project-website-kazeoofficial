// app/layout.tsx (atau lokasi layout.tsx Anda)
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";
import RunningText from "./components/Announcement/page";
import PageWrapper from "./components/PageAnimation/page";
import AutoPopUp from "./components/PopUp/index"; // Import komponen AutoPopUp

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

        {/* Cukup panggil AutoPopUp di sini */}
        <AutoPopUp
          popupId="welcomePopup" // Berikan ID unik untuk pop-up ini
          text="(males banget direupload mulu jirr, thumbnail diambil, script diambil, hehe sehat selalu bang semoga rejekinya nambah terus ya!)"
        />
      </body>
    </html>
  );
}