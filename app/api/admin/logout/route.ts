import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("admin_session");
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Admin logout error:", err);
    return Response.json({ ok: false, error: "Something went wrong" }, { status: 500 });
  }
}
