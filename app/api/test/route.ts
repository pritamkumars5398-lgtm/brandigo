import { NextResponse } from "next/server";

const candidates = [
  "3196618",
  "3255275",
  "3130284",
  "3141208",
  "3129671"
];

export async function GET() {
  const active: any[] = [];
  
  for (const id of candidates) {
    const url = `https://videos.pexels.com/video-files/${id}/${id}-hd_1920_1080_30fps.mp4`;
    try {
      const res = await fetch(url, { method: "HEAD" });
      if (res.ok) {
        active.push({ id, url });
      }
    } catch (err) {
      // ignore
    }
  }
  
  return NextResponse.json({ ok: true, active });
}

export const dynamic = "force-dynamic";
