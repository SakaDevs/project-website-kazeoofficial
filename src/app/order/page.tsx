import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

type CardProps = {
  title: string;
  price: string;
  description: string;
  details: string;
  link: string;
};

const Card: React.FC<CardProps> = ({
  title,
  price,
  description,
  details,
  link,
}) => (
  <div className="bg-white shadow flex flex-col">
    <Image
      src="/bg.jpg"
      alt=""
      width={600}
      height={100}
      className="object-cover overflow-hidden rounded"
    />
    <div className="flex flex-col h-full p-4">
      <div>
        <h3 className="pt-2 font-bold">{title}</h3>
        <div className="mb-2">
          <h3 className="text-sm">{price}</h3>
        </div>
        <p className="text-xs font-thin italic">{description}</p>
        <p className="text-sm">{details}</p>
      </div>
      <div className="text-center mt-auto">
        <Link href={link}>
          <button className="py-2 px-4 border border-blue-500 hover:bg-blue-500 hover:text-white transition-all cursor-pointer rounded-lg">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const Page: React.FC = () => {
  return (
    <main className={`${poppins.className}`}>
      <div className="grid md:grid-cols-3 grid-cols-1 p-6 gap-4">
        <Card
          link="https://wa.me/6282124043617?text=Halo%2C%20Min%20Mau%20Order%20Script%20Skin"
          title="Order Script Skin"
          price="Cuman Rp.15000!"
          description="Apa yang kamu bisa dapat?"
          details="Kamu bisa pilih mau dibuatin script skin apapun tanpa ada audio/sfx dari hero tersebut. Sebagai contoh Pharsa Collector replace Pharsa Default, contoh lainnya Franco Luckybox replace Franco Special"
        />
        <Card
          link="https://wa.me/6282124043617?text=Halo%2C%20Min%20Mau%20Order%20Full%20Audio"
          title="Order Full Audio"
          price="Cuman Rp.10000!"
          description="Apa yang kamu bisa dapat?"
          details="Kamu dapat memilih dibuatkan audio seperti sfx/vo, sudah pastinya full support semua bahasa, dan yang terpenting sudah include dengan audio replay, dan juga audio dapat didengar oleh kita ketika musuh memakai hero tersebut atau teman kita."
        />
        <Card
          link="https://wa.me/6282124043617?text=Halo%2C%20Min%20Mau%20Order%20Full%20Script"
          title="Order Full Script"
          price="Cuman Rp.25000!"
          description="Apa yang kamu bisa dapat?"
          details="Ini singkatnya adalah gabungan dari dua paket sebelumnya, kamu bisa memilih script apapun, dan tentu mirip 100%, no bug, gabikin ngelag, yang pastinya sudah full audio."
        />
      </div>
    </main>
  );
};

export default Page;
