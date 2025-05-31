"use client";

import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import PageWrapper from "../components/PageAnimation/page";

type VideoData = {
  title: string;
  videoId: string;
  publishedAt: string;
  thumbnail: string;
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function CommunityPage() {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [subs, setSubs] = useState<string>("...");

  useEffect(() => {
    fetch("/api/youtube-subs")
      .then((res) => res.json())
      .then((data) => setSubs(data.subscribers));
  }, []);

  useEffect(() => {
    fetch("/api/youtube/latest")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setVideos(data);
        } else {
          console.error("API response is not an array:", data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch failed:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <p
        className={`${poppins.className} flex justify-center items-center text-center w-full h-screen`}
      >
        Loading videos...
      </p>
    );

  return (
    <PageWrapper>
      <main className={`${poppins.className} p-6`}>
        <div className="md:text-lg text-sm mb-4 outline p-4">
          <div className="flex flex-row justify-between font-bold">
            <h1 className="mb-5">Video Terbaru</h1>
            <h1 className="md:text-base text-xs mt-0.5">🎥 Subs : {subs}</h1>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 rounded">
            {videos.map((video) => (
              <li
                key={video.videoId}
                className="bg-white shadow-lg overflow-hidden hover:hover:scale-105 duration-100 transition-all flex flex-col rounded"
              >
                <iframe
                  width="200"
                  height="150"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full"
                ></iframe>
                <div className="py-4 px-2 text-left flex-1 flex flex-col justify-between">
                  <h2 className="text-sm mb-2">{video.title}</h2>
                  <p className="text-xs font-thin mt-auto">
                    Diupload: {new Date(video.publishedAt).toLocaleString()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </PageWrapper>
  );
}
