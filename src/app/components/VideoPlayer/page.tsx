"use client";

import React from "react";

type VideoPlayerProps = {
  videoId: string;
};

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  return (
    <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
