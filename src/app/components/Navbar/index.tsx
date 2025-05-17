"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google";
import InputSearch from "./InputSearch";
import scripts from "@/app/components/Scripts/scripts.json";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = Array.from(new Set(scripts.map((s) => s.category)));

  return (
    <main className={poppins.className}>
      <div className="w-full bg-white shadow relative z-50">
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

              {/* Dropdown Kategori */}
              <div className="relative">
                <button
                  className="hover:text-blue-600 transition-all"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Category
                </button>
                {dropdownOpen && (
                  <ul className="absolute bg-white shadow-md rounded mt-2 py-2 z-50 w-44">
                    {categories.map((cat) => (
                      <li key={cat}>
                        <Link
                          href={`/category/${cat}`}
                          className="block px-4 py-2 hover:bg-blue-100 text-sm capitalize"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {cat.replace(/script-skin-/, "").replace("-", " ")}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Link
                href="/order"
                className="hover:text-blue-600 transition-all"
              >
                Order
              </Link>
              <Link
                href="/sosial"
                className="hover:text-blue-600 transition-all"
              >
                Social
              </Link>
              <InputSearch />
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-start px-6 gap-2 font-bold pb-4">
            <Link href="/" className="hover:text-blue-600 transition-all">
              Home
            </Link>

            {/* Kategori Dropdown Mobile */}
            <details className="w-full">
              <summary className="cursor-pointer hover:text-blue-600">
                Category
              </summary>
              <ul className="pl-4 pt-2 flex flex-col gap-1">
                {categories.map((cat) => (
                  <li key={cat}>
                    <Link
                      href={`/category/${cat}`}
                      className="block hover:text-blue-600 capitalize"
                      onClick={() => setMenuOpen(false)}
                    >
                      {cat.replace(/script-skin-/, "").replace("-", " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>

            <Link href="/order" className="hover:text-blue-600 transition-all">
              Order
            </Link>
            <Link href="/sosial" className="hover:text-blue-600 transition-all">
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
