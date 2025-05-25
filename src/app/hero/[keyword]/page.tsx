import React from "react";
import scripts from "@/app/components/Scripts/scripts.json";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import PageWrapper from "@/app/components/PageAnimation/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

type SearchPageProps = {
  params: {
    keyword: string;
  };
};

const SearchPage = ({ params }: SearchPageProps) => {
  const { keyword } = params;
  const decodedUri = decodeURI(keyword);

  const filteredScripts = (() => {
    const keywords = keyword.toLowerCase().split(/\s+/);

    if (keywords.length > 1) {
      const exactMatch = scripts.find((script) => {
        const combined = `${script.title} ${script.slug}`
          .toLowerCase()
          .replace(/-/g, " ");
        return keywords.every((kw) => combined.includes(kw));
      });

      if (exactMatch) {
        return [exactMatch];
      }
    }
    return scripts.filter((script) =>
      `${script.title} ${script.slug}`
        .toLowerCase()
        .includes(keyword.toLowerCase())
    );
  })();

  return (
    <PageWrapper>
      <div className={`${poppins.className} p-6 flex flex-col gap-2`}>
        <div className="flex flex-col gap-5 outline p-4 rounded">
          <h3 className="font-bold md:text-lg text-sm">
            Hasil untuk: {decodedUri}
          </h3>
          <ul className="grid md:grid-cols-5 grid-cols-2 gap-4">
            {filteredScripts.map((script) => (
              <li
                key={script.id}
                className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden"
              >
                <Link href={`/heroonly/${script.slug}`} className="flex">
                  <div className="cursor-pointer rounded">
                    <Image
                      src={script.image}
                      height={100}
                      width={600}
                      alt={script.title}
                      className="round"
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
          {filteredScripts.length === 0 && (
            <p className="text-center text-gray-500">
              Tidak ada hasil ditemukan.
            </p>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default SearchPage;
