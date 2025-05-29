import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/data/posts.json");

function readPosts() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

function writePosts(posts: any) {
  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));
}

export async function GET() {
  const posts = readPosts();
  return NextResponse.json(posts);
}

export async function PUT(req: NextRequest) {
  const { id, type } = await req.json();
  const posts = readPosts();
  const post = posts.find((p: any) => p.id === id);
  if (!post)
    return NextResponse.json({ error: "Post not found" }, { status: 404 });

  if (type === "like") post.likes++;
  if (type === "dislike") post.dislikes++;

  writePosts(posts);
  return NextResponse.json({ success: true });
}

export async function POST(req: NextRequest) {
  const { id, comment } = await req.json();
  const posts = readPosts();
  const post = posts.find((p: any) => p.id === id);
  if (!post)
    return NextResponse.json({ error: "Post not found" }, { status: 404 });

  post.comments.push({ text: comment, createdAt: new Date().toISOString() });
  writePosts(posts);

  return NextResponse.json({ success: true });
}
