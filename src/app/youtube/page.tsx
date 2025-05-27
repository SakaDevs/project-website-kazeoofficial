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
      <div
        className={`${poppins.className} p-6 flex flex-col text-center items-center `}
      >
        <h1 className="text-2xl font-bold mb-6">Video Terbaru</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-9xl p-4 outline rounded">
          {videos.map((video) => (
            <div
              key={video.videoId}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-102 transition-all"
            >
              <iframe
                width="200"
                height="170"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full"
              ></iframe>
              <div className="p-4 text-left">
                <h2 className="font-semibold text-sm">{video.title}</h2>
                <p className="text-sm text-gray-600">
                  Published: {new Date(video.publishedAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
