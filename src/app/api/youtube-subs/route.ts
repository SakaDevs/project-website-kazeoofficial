// app/api/youtube-subs/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = "UCInWujvjdt8MDmtOxy_As1Q";

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
  );

  const data = await res.json();
  const subs = data.items?.[0]?.statistics?.subscriberCount || "0";

  return NextResponse.json({ subscribers: subs });
}
