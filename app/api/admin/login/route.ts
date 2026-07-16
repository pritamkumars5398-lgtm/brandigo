import { cookies } from "next/headers";
import { initEnv } from "@/lib/env";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  initEnv();
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

    if (password === adminPassword) {
      // Set secure HTTP-only cookie
      const cookieStore = await cookies();
      cookieStore.set("admin_session", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });

      return Response.json({ ok: true });
    }

    return Response.json({ ok: false, error: "Incorrect password" }, { status: 401 });
  } catch (err) {
    console.error("Admin login error:", err);
    return Response.json({ ok: false, error: "Something went wrong" }, { status: 500 });
  }
}
