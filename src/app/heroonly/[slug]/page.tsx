import React from "react";
import scripts from "@/app/components/Scripts/scripts.json";
import { Poppins } from "next/font/google";
import Link from "next/link";
import PageWrapper from "@/app/components/PageAnimation/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

type PageProps = {
  params: {
    slug: string;
  };
};

const Page = async ({ params }: PageProps) => {
  const slug = await params?.slug;
  const getVideoIdFromUrl = (url: string) => {
    const match = url.match(/(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };
  const selectedScript = scripts.find((script) => script.slug === slug);

  if (!selectedScript) {
    return <div className="p-4 text-red-500">Tidak ditemukan.</div>;
  }
  const videoId = getVideoIdFromUrl(selectedScript.video);

  return (
    <PageWrapper>
      <div className={`${poppins.className} p-6`}>
        <div className="outline p-4 gap-5">
          <div>
            <h1 className="text-xl font-bold text-center">
              {selectedScript.title}
            </h1>
            <h1 className="text-xs font-bold mb-2 text-center">
              (Download Dibawah)
            </h1>
          </div>
          <p className="font-bold text-center underline">Short Story</p>
          <p className="mb-4 md:text-base text-xs text-center">
            {selectedScript.shortStory}
          </p>
          <div className="text-center text-sm italic m-3 text-red-500 animate-marquee">
            Video preview ada di youtube.
          </div>
        </div>

        <h2 className="font-bold md:text-xl text-lg text-center mt-5">Featured</h2>
        <div className="md:text-base text-xs flex flex-row justify-around gap-10 mb-3">
          <div>
            <p className="md:text-left">Support Voice</p>
            <li>Indonesia</li>
            <li>English</li>
            <li>English PH</li>
            <li>Japan</li>
            <li>Arabic</li>
            <li>Espanol</li>
            <li>Portuguse</li>
            <li>Rusia</li>
            <li>Turkie</li>
          </div>
          <div>
            <p className="md:text-left">Kelebihan Lainnya</p>
            <li>Support untuk grafik low</li>
            <li>Head Icon</li>
            <li>Skill Icon</li>
            <li>Share Background</li>
            <li>File sudah dikompres</li>
            <li>Audio Replay</li>
            <li>Work Classic & Rank</li>
            <li>No Bug</li>
            <li>File dibuat sendiri</li>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="items-center border border-blue-500 p-3 font-bold text-center w-full italic mb-2 mt-2">
            <h3 className=" text-blue-500 md:text-base text-xs">
              *File dari unity3d dan .bnk dari ini sudah terisi WM(Watermark)
              dari Kazeo Official, semua file saya buat sendiri jadi tidak ada
              nama orang lain, jadi jangan{" "}
              <span className="text-blue-900">reupload</span> ya~
            </h3>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="items-center border border-red-600 p-3 font-bold text-center w-full italic mb-2 mt-2">
            <h3 className=" text-red-500 md:text-base text-xs">
              Jika ada kerusakan/bug seperti tidak ada suara, tidak ada efek
              skill dan lain lain, silahkan lapor ke admin{" "}
              <Link
                href="https://t.me/kazeoofficial"
                className="underline font-bold cursor-pointer text-red-900"
              >
                disini
              </Link>
            </h3>
          </div>
        </div>

        {/* Table Heading and Container */}
        <div className="w-full mt-6">
          <h2 className="md:text-xl text-base font-semibold text-center mb-2">
            Table List {selectedScript.title}
          </h2>
          <h4 className="text-center text-sm mb-4">
            Last Updated{" "}
            <span className="underline">{selectedScript.date}</span>
          </h4>

          {/* Full-width table with symmetric columns */}
          <div className="w-full">
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm rounded-lg overflow-hidden table-fixed">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="w-1/2 py-3 px-4 text-center border-b border-gray-300">
                      Replace
                    </th>
                    <th className="w-1/2 py-3 px-4 text-center border-b border-gray-300">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectedScript.download.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition">
                      <td className="w-1/2 py-3 px-4 text-center border-b border-gray-200">
                        {item.label}
                      </td>
                      <td className="w-1/2 py-3 px-4 text-center border-b border-gray-200">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 border border-blue-500 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition whitespace-nowrap"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-left mt-2">
              <h4 className="italic text-xs">
                🗣️ Pilih sesuai dengan yang dibutuhkan.
              </h4>
              <h4 className="italic text-xs">
                ❌ Jika download malah balik kesini, berarti filenya belum ada.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Page;
