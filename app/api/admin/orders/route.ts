import { connectToDatabase } from "@/lib/db";
import Order from "@/models/Order";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectToDatabase();
    const orders = await Order.find({}).sort({ createdAt: -1 });
    return Response.json({ ok: true, orders });
  } catch (err: any) {
    console.error("Failed to fetch orders:", err);
    return Response.json({ ok: false, error: err.message || "Failed to fetch orders" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, paymentStatus } = await request.json();

    if (!id || !paymentStatus) {
      return Response.json({ ok: false, error: "ID and paymentStatus are required" }, { status: 400 });
    }

    await connectToDatabase();
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { paymentStatus },
      { new: true }
    );

    if (!updatedOrder) {
      return Response.json({ ok: false, error: "Order not found" }, { status: 404 });
    }

    return Response.json({ ok: true, order: updatedOrder });
  } catch (err) {
    console.error("Failed to update order:", err);
    return Response.json({ ok: false, error: "Failed to update order" }, { status: 500 });
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
    await Order.findByIdAndDelete(id);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Failed to delete order:", err);
    return Response.json({ ok: false, error: "Failed to delete order" }, { status: 500 });
  }
}
