import React from "react";
import scripts from "@/app/components/Scripts/scripts.json";
import Link from "next/link";
import Image from "next/image";

const Randomscript = () => {
  const shuffled = [...scripts].sort(() => Math.random() - 0.5);
  const latestScript = shuffled.slice(0, 8);

  return (
    <div className="flex flex-col gap-5 outline p-4 rounded">
      <div className="flex justify-between items-center">
        <h3 className="font-bold md:text-lg text-sm">Random Script</h3>
      </div>
      <ul className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {latestScript.map((script) => (
          <li
            key={script.id}
            className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden"
          >
            <Link href={`/script-all/${script.slug}`} className="flex">
              <div className="cursor-pointer rounded">
                <Image
                  src={script.image}
                  height={100}
                  width={300}
                  alt=""
                  className="rounded"
                />{" "}
                <div className="flex flex-col py-4 px-2">
                  <span className="text-xs font-thin">{script.date}</span>
                  <span className="md:text-base text-sm">{script.title}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Randomscript;
