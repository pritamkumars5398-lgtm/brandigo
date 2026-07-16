import { connectToDatabase } from "@/lib/db";
import Lead from "@/models/Lead";
import Order from "@/models/Order";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectToDatabase();

    const totalLeads = await Lead.countDocuments();
    const totalOrders = await Order.countDocuments();
    const successfulOrders = await Order.countDocuments({ paymentStatus: "success" });
    const failedOrders = await Order.countDocuments({ paymentStatus: "failed" });
    const pendingOrders = await Order.countDocuments({ paymentStatus: "pending" });

    // Calculate total revenue from successful orders
    const allSuccessfulOrders = await Order.find({ paymentStatus: "success" }, "amount");
    let totalRevenue = 0;
    for (const order of allSuccessfulOrders) {
      // Remove symbols like ₹, comma, spaces, etc.
      const cleanAmountStr = order.amount.replace(/[^\d.]/g, "");
      const amt = parseFloat(cleanAmountStr);
      if (!isNaN(amt)) {
        totalRevenue += amt;
      }
    }

    return Response.json({
      ok: true,
      stats: {
        totalLeads,
        totalOrders,
        successfulOrders,
        failedOrders,
        pendingOrders,
        totalRevenue,
      },
    });
  } catch (err: any) {
    console.error("Failed to fetch admin stats:", err);
    return Response.json({ ok: false, error: err.message || "Database query failed" }, { status: 500 });
  }
}
