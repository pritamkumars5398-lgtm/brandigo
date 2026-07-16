import { connectToDatabase } from "@/lib/db";
import Lead from "@/models/Lead";
import fs from "fs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectToDatabase();
    const leads = await Lead.find({}).sort({ createdAt: -1 });
    return Response.json({ ok: true, leads });
  } catch (err: any) {
    console.error("Failed to fetch leads:", err);
    try {
      fs.appendFileSync("db_error.log", `${new Date().toISOString()} - GET leads fetch error: ${err.stack || err.message || err}\n`);
    } catch (fsErr) {}
    return Response.json({ ok: false, error: err.message || "Failed to fetch leads" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return Response.json({ ok: false, error: "ID is required" }, { status: 400 });
    }

    await connectToDatabase();
    await Lead.findByIdAndDelete(id);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Failed to delete lead:", err);
    return Response.json({ ok: false, error: "Failed to delete lead" }, { status: 500 });
  }
}
