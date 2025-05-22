import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Page = () => {
  return (
    <div className={`${poppins.className} p-6 `}>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 p-4 outline">
        <div className="flex flex-col shadow md:shadow-2xl items-center text-center gap-4 hover:scale-105 duration-700 transition-all">
          <h3 className="font-bold text-lg md:text-lg">Main Channel</h3>
          <Image
            src="https://yt3.googleusercontent.com/AoXDCzZQHVcfkVgGA-KV5zQbB7w6_wxi7OrFZHKZs11X-jTXrHelMYjLF-nxwsQeyI5zxWRRqQ=s160-c-k-c0x00ffffff-no-rj"
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
        {/* <div className="flex flex-col shadow md:shadow-2xl items-center text-center gap-4 hover:scale-105 duration-700 transition-all">
          <h3 className="font-bold text-lg md:text-lg">Second Channel</h3>
          <Image
            src="https://yt3.googleusercontent.com/o8tcypHovBQLCbOyJxJ90WJ839zRlWwqF6ZtFejTa_fAK7IYAhwK1bvHmyA29y9hJFCANejOBTQ=s160-c-k-c0x00ffffff-no-rj"
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
            <h3>Kazeo Jr</h3>
          </div>

          <Link
            href="https://www.youtube.com/@kazeoofficialnew"
            className="mb-4 border px-4 py-2 border-blue-500 rounded hover:text-white hover:bg-blue-500 transition-all"
          >
            <h3>Subscribe Now</h3>
          </Link>
        </div> */}
        <div className="flex flex-col shadow md:shadow-2xl items-center text-center gap-4 hover:scale-105 duration-700 transition-all">
          <h3 className="font-bold text-lg md:text-lg">Telegram Channel</h3>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
            alt=""
            height={400}
            width={200}
            className="rounded-full items-center text-center"
          />
          <div className="flex flex-row gap-1 items-center text-center">
            <Image
              src="https://pngimg.com/uploads/telegram/telegram_PNG12.png"
              alt=""
              width={30}
              height={100}
              className=""
            />
            <h3>Kazeo Opsional Universe</h3>
          </div>

          <Link
            href="https://t.me/kazeoopsional"
            className="mb-4 border px-4 py-2 border-blue-500 rounded hover:text-white hover:bg-blue-500 transition-all"
          >
            <h3>Join Now</h3>
          </Link>
        </div>
        <div className="flex flex-col shadow md:shadow-2xl items-center text-center gap-4 hover:scale-105 duration-700 transition-all">
          <h3 className="font-bold text-lg md:text-lg">Whatsapp Community</h3>
          <Image
            src="https://static.vecteezy.com/system/resources/previews/016/716/480/non_2x/whatsapp-icon-free-png.png"
            alt=""
            height={400}
            width={200}
            className="items-center text-center"
          />
          <div className="flex flex-row gap-1 items-center text-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
              alt=""
              width={30}
              height={100}
              className=""
            />
            <h3>Kazeo Opsional Universe</h3>
          </div>

          <Link
            href="https://chat.whatsapp.com/F3jUoAUdaAU6c0fmseGarZ"
            className="mb-4 border px-4 py-2 border-blue-500 rounded hover:text-white hover:bg-blue-500 transition-all"
          >
            <h3>Join Now</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
