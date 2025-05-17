import React from "react";
import scripts from "@/app/components/Scripts/scripts.json"; // pastikan path ini benar
import Image from "next/image";
import { Poppins } from "next/font/google";
import VideoPlayer from "@/app/components/VideoPlayer/page";

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
    return <div className="p-4 text-red-500">Script tidak ditemukan.</div>;
  }
  const videoId = getVideoIdFromUrl(selectedScript.video);

  return (
    <div className={`${poppins.className} p-6`}>
      <div className="outline p-4 gap-5">
        <h1 className="text-xl font-bold mb-2">{selectedScript.title}</h1>
        <p className="font-bold">Cerita singkat</p>
        <p className="mb-4 md:text-base text-xs">{selectedScript.shortStory}</p>

        <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-center">
          <div className="w-full md:w-1/2">
            <Image
              src={selectedScript.image}
              alt={selectedScript.title}
              width={640}
              height={360}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          {videoId && (
            <div className="w-100 md:w-1/2  aspect-video">
              <VideoPlayer videoId={videoId} />
            </div>
          )}
        </div>
        <h2 className="font-bold">Featured : </h2>
        <ul>
          Support Voice
          <li>- Indonesia</li>
          <li>- English</li>
          <li>- English PH</li>
          <li>- Japan</li>
          <li>- Arabic</li>
          <li>- Espanol</li>
          <li>- Portuguse</li>
          <li>- Rusia</li>
          <li>- Turkie</li>
          Kelebihan Lainnya
          <li>- Support untuk grafik low</li>
          <li>- Head Icon</li>
          <li>- Skill Icon</li>
          <li>- Share Background</li>
          <li>
            - File sudah dikompres(tidak akan membuat pengalaman bermain ngelag)
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Link Download</h2>
        <div className="w-full overflow-x-auto">
          <table className="min-w-[400px] w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2 px-3 text-center whitespace-nowrap">
                  Replace
                </th>
                <th className="py-2 px-3 text-center whitespace-nowrap">
                  Icon
                </th>
                <th className="py-2 px-3 text-center whitespace-nowrap">
                  Download
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedScript.download.map((item, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="py-2 px-3 text-center">{item.label}</td>
                  <td className="py-2 px-3 flex justify-center">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </td>
                  <td className="py-2 px-3 text-center">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2 py-1 border border-emerald-300 rounded-full text-emerald-500 hover:bg-emerald-500 hover:text-white transition whitespace-nowrap"
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
      </div>
    </div>
  );
};

export default Page;
