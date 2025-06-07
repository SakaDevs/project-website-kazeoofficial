import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "../components/PageAnimation/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Page = () => {
  return (
    <PageWrapper>
      <div className={`${poppins.className} p-6 `}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-4 outline">
          <div className="flex flex-col shadow md:shadow-2xl items-center text-center gap-4 hover:scale-102 duration-700 transition-all">
            <h3 className="font-bold text-lg md:text-lg">Main Channel</h3>
            <Image
              src="https://yt3.googleusercontent.com/b6WjkWqyoXOwf0j2iOnpJfaMoDgvgHidMPajLTWoHpoNEXg-SjDl9ChdrU_leZ0O3Urq_GxT=s160-c-k-c0x00ffffff-no-rj"
              alt=""
              height={400}
              width={200}
              className="rounded-full items-center text-center"
            />
            <div className="flex flex-row gap-1 items-center text-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
                alt=""
                width={30}
                height={100}
                className=""
              />
              <h3>Kazeo Official</h3>
            </div>

            <Link
              href="https://www.youtube.com/channel/UCInWujvjdt8MDmtOxy_As1Q/"
              className="mb-4 border px-4 py-2 border-blue-500 rounded hover:text-white hover:bg-blue-500 transition-all"
            >
              <h3>Subscribe Now</h3>
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Page;
