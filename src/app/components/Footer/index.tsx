"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { WhatsappLogo, YoutubeLogo, TelegramLogo } from "@phosphor-icons/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${poppins.className} bg-white shadow-md mt-8`}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-200">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="cursor-pointer">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/icon.jpg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded"
                />
                <div className="flex gap-1">
                  <h3 className="font-bold text-lg">Kazeo</h3>
                  <h3 className="font-bold text-lg text-blue-600">Official</h3>
                </div>
              </div>
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Tempat script terbaik sepanjang masa!
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.youtube.com/channel/UCInWujvjdt8MDmtOxy_As1Q/"
                className="text-gray-600 hover:text-blue-600 transition-all"
              >
                <YoutubeLogo size={24} />
              </Link>
              <Link
                href="https://t.me/kazeoopsional"
                className="text-gray-600 hover:text-blue-600 transition-all"
              >
                <TelegramLogo size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-lg mb-4">Quick Link</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 transition-all"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/allscript"
                  className="text-gray-600 hover:text-blue-600 transition-all"
                >
                  All Script
                </Link>
              </li>
              <li>
                <Link
                  href="/order"
                  className="text-gray-600 hover:text-blue-600 transition-all"
                >
                  Order
                </Link>
              </li>
              <li>
                <Link
                  href="/social"
                  className="text-gray-600 hover:text-blue-600 transition-all"
                >
                  Social
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Scripts */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-lg mb-4">Popular Scripts</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/script-all/xavier-jujutsu-kaisen"
                  className="text-gray-600 hover:text-blue-600 transition-all"
                >
                  Xavier Jujutsu
                </Link>
              </li>
              <li>
                <Link
                  href="/script-all/harith-hxh"
                  className="text-gray-600 hover:text-blue-600 transition-all"
                >
                  Harith HXH
                </Link>
              </li>
              <li>
                <Link
                  href="/script-all/granger-exorcist"
                  className="text-gray-600 hover:text-blue-600 transition-all"
                >
                  Granger Exorcist
                </Link>
              </li>
              <li>
                <Link
                  href="/script-all/fanny-aspirants"
                  className="text-gray-600 hover:text-blue-600 transition-all"
                >
                  Fanny Aspirants
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <div className="space-y-3">
              <div className="flex flex-col gap-2 justify-between">
                <Link href="https://saweria.co/kazeoofficial">
                  <p className="flex items-center gap-2 text-gray-600">
                    <Image
                      src="https://yt3.googleusercontent.com/ytc/AIdro_l4piIgNt6jLBZYvXiEd-rShtm8lfeQqfDNoN04qwkmhQ=s900-c-k-c0x00ffffff-no-rj"
                      alt=""
                      width={32}
                      height={32}
                    />{" "}
                    Saweria
                  </p>
                </Link>
                <Link href="https://tako.id/KazeoOfficial">
                  <p className="flex items-center gap-2 text-gray-600">
                    <Image
                      src="https://assets.tako.id/login.png"
                      alt=""
                      width={32}
                      height={32}
                    />{" "}
                    Tako ID
                  </p>
                </Link>
              </div>
              <p className="text-sm text-gray-600">
                kalo ada lebihan, boleh lah.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="py-6 text-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Kazeo Official. Moonton All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
