"use client";

import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";

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
        setVideos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <p className="flex justify-center items-center text-center w-full">
        Loading videos...
      </p>
    );

  return (
    <div
      className={`${poppins.className} p-6 flex flex-col text-center items-center`}
    >
      <h1 className="text-2xl font-bold mb-6">Video Terbaru</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl h-screen">
        {videos.map((video) => (
          <div
            key={video.videoId}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-102 transition-all"
          >
            <iframe
              width="100%"
              height="185"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            ></iframe>
            <div className="p-4 text-left">
              <h2 className="font-semibold">{video.title}</h2>
              <p className="text-sm text-gray-600">
                Published: {new Date(video.publishedAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
