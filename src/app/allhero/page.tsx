"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import scripts from "@/app/components/Scripts/scripts.json";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { LessThan } from "@phosphor-icons/react/dist/ssr";
import PageWrapper from "../components/PageAnimation/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Cardscript = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const itemsPerPage = 10;

  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? parseInt(pageParam) : 1;

  const totalPages = Math.ceil(scripts.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentData = scripts.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page: number) => {
    router.push(`/allhero?page=${page}`);
  };

  return (
    <PageWrapper>
      <div className={`${poppins.className} p-6 flex flex-col gap-2`}>
        <div className="flex flex-col gap-5 outline p-4 rounded">
          <div className="flex justify-between items-center text-center">
            <h3 className="font-bold md:text-lg text-sm">Semua Hero</h3>
            <Link
              href="/"
              className="flex flex-row font-bold md:text-lg text-sm underline "
            >
              <LessThan size={16} />
              <LessThan size={16} />
              <LessThan size={16} />
            </Link>
          </div>
          <ul className="grid md:grid-cols-5 grid-cols-2 gap-4">
            {currentData.map((script) => (
              <li
                key={script.id}
                className="bg-white rounded shadow hover:scale-105 duration-100 transition-all"
              >
                <Link href={`/heroonly/${script.slug}`} className="flex">
                  <div className="cursor-pointer rounded">
                    <Image
                      src={script.image}
                      height={100}
                      width={300}
                      alt={script.title}
                      className=""
                      unoptimized={true}
                    />
                    <div className="flex flex-col py-4 px-2">
                      <span className="text-xs font-thin">{script.date}</span>
                      <span className="md:text-base text-sm">
                        {script.title}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          {/* PAGINATION ADVANCED */}
          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            {/* First */}
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className="px-2 py-1 text-sm rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              ⏪
            </button>

            {/* Prev */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-2 py-1 text-sm rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              ◀
            </button>

            {/* Pages Around */}
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(
                (page) =>
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 2 && page <= currentPage + 2)
              )
              .map((page, idx) => (
                <button
                  key={`page-${page}-${idx}`}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 text-sm rounded ${
                    currentPage === page
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {page}
                </button>
              ))}

            {/* Next */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-2 py-1 text-sm rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              ▶
            </button>

            {/* Last */}
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              className="px-2 py-1 text-sm rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              ⏩
            </button>

            {/* Jump To Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const pageInput = parseInt(
                  (
                    e.currentTarget.elements.namedItem(
                      "pageJump"
                    ) as HTMLInputElement
                  ).value
                );
                if (
                  !isNaN(pageInput) &&
                  pageInput >= 1 &&
                  pageInput <= totalPages
                ) {
                  handlePageChange(pageInput);
                }
              }}
              className="flex items-center gap-2"
            >
              <input
                type="number"
                name="pageJump"
                min={1}
                max={totalPages}
                placeholder="Go"
                className="w-16 px-2 py-1 text-sm border border-gray-300 rounded"
              />
              <span className="text-sm text-gray-600">
                of {scripts.length} items
              </span>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Cardscript;
