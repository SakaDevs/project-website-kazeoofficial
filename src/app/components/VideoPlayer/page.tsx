"use client";

import React from "react";

type VideoPlayerProps = {
  videoId: string;
};

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  return (
    <div className="w-full aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-xl"
      />
    </div>
  );
};

export default VideoPlayer;
