import React from "react";
import { Poppins } from "next/font/google";
import scripts from "@/app/components/Scripts/scripts.json";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Page = () => {
  const latestScript = scripts;

  return (
    <div className={`${poppins.className} p-6 flex flex-col gap-2`}>
      <div className="flex flex-col gap-2 outline p-4 rounded">
        <div className="flex justify-between items-center">
          <h3 className="font-bold md:text-lg text-sm">Semua Script</h3>
        </div>
        <ul className="grid md:grid-cols-5 grid-cols-2 gap-4">
          {latestScript.map((script) => (
            <li
              key={script.id}
              className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="shadow cursor-pointer rounded">
                <Image
                  src={script.image}
                  height={100}
                  width={300}
                  alt=""
                  className="round"
                />
                <Link href={`/script-all/${script.slug}`} className="flex">
                  <div className="flex flex-col py-4 px-2">
                    <span className="text-xs font-thin">{script.date}</span>
                    <span className="md:text-base text-sm">{script.title}</span>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
