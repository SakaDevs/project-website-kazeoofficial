"use client";

import { useState } from "react";
import Image from "next/image";

type VideoPlayerProps = {
  videoId: string;
};

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-xl">
      {!isPlaying ? (
        <button
          onClick={() => setIsPlaying(true)}
          className="absolute top-0 left-0 w-full h-full group"
        >
          <Image
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="YouTube Thumbnail"
            fill
            className="object-cover transition-transform group-hover:scale-105 duration-300"
            priority
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-md transform transition-all duration-300 group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-red-600 ml-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      ) : (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoPlayer;
  