import { NextResponse } from "next/server";

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = "UCInWujvjdt8MDmtOxy_As1Q"; // Ganti sesuai Channel ID kamu

export async function GET() {
  try {
    const playlistRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
    );
    const playlistData = await playlistRes.json();
    const uploadsPlaylistId =
      playlistData.items[0].contentDetails.relatedPlaylists.uploads;

    const videosRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=10&key=${API_KEY}`
    );
    const videoData = await videosRes.json();

    const videos = videoData.items.map(
      (item: {
        snippet: {
          title: string;
          publishedAt: string;
          thumbnails: {
            high: { url: string };
          };
          resourceId: { videoId: string };
        };
      }) => ({
        title: item.snippet.title,
        videoId: item.snippet.resourceId.videoId,
        publishedAt: item.snippet.publishedAt,
        thumbnail: item.snippet.thumbnails.high.url,
      })
    );

    return NextResponse.json(videos);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch videos" },
      { status: 500 }
    );
  }
}
