"use client";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const userSearch = searchRef.current.value;
    if (!userSearch) return;
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      const normalized = userSearch.toLowerCase().replace(/\s+/g, "-");
      router.push(`/hero/${normalized}`);
    }
  };
  return (
    <div className="flex items-center gap-2 border px-2 py-1 rounded md:w-50 w-full relative">
      <input
        type="text"
        placeholder="Search disini..."
        className="outline-none text-sm font-thin"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute right-2" onClick={handleSearch}>
        <MagnifyingGlass size={20} className="cursor-pointer" />
      </button>
    </div>
  );
};

export default InputSearch;
