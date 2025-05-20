"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google";
import InputSearch from "./InputSearch";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={poppins.className}>
      <div className="w-full bg-white shadow relative z-50">
        {/* NAVBAR UTAMA */}
        <nav className="flex items-center justify-between px-6 py-4">
          {/* LEFT: Logo */}
          <Link href="/" className="cursor-pointer">
            <div className="flex items-center gap-2">
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

          {/* RIGHT: Desktop Nav + Hamburger */}
          <div className="flex items-center gap-4">
            {/* Hamburger (Mobile) */}
            <button
              className="md:hidden block"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <List size={24} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 font-bold">
              <Link href="/" className="hover:text-blue-600 transition-all">
                Home
              </Link>

              <Link
                href="/category"
                className="hover:text-blue-600 transition-all"
              >
                Category
              </Link>

              <Link
                href="/order"
                className="hover:text-blue-600 transition-all"
              >
                Order
              </Link>
              <Link
                href="/social"
                className="hover:text-blue-600 transition-all"
              >
                Social
              </Link>
              <InputSearch />
            </div>
          </div>
        </nav>

        {/* ✅ Tambahan: Search bar mobile, hanya muncul saat menu tertutup */}
        {!menuOpen && (
          <div className="md:hidden px-6 pb-4">
            <InputSearch />
          </div>
        )}

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-start px-6 gap-2 font-bold pb-4">
            <Link href="/">
              Home
            </Link>

            {/* Kategori Dropdown Mobile */}
            <Link href="/category">
            Category</Link>

            <Link href="/order">
              Order
            </Link>
            <Link
              href="/social"
            >
              Social
            </Link>
            <InputSearch />
          </div>
        )}
      </div>
    </main>
  );
};

export default Navbar;
