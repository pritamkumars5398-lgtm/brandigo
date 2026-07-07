import { initEnv } from "@/lib/env";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  initEnv();
  try {
    const { amount } = await request.json();

    if (!amount) {
      return Response.json({ ok: false, error: "Amount is required." }, { status: 400 });
    }

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      console.error("Razorpay API keys not configured.");
      return Response.json({ ok: false, error: "Payment gateway credentials not configured." }, { status: 500 });
    }

    // Convert amount from INR (e.g. 1999) to paise (e.g. 199900)
    const amountInPaise = Math.round(Number(amount) * 100);

    const authString = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${authString}`,
      },
      body: JSON.stringify({
        amount: amountInPaise,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Razorpay order creation error:", data);
      return Response.json({ ok: false, error: data.error?.description || "Failed to create payment order." }, { status: 502 });
    }

    return Response.json({
      ok: true,
      orderId: data.id,
      amount: data.amount,
      currency: data.currency,
    });
  } catch (err) {
    console.error("Failed to create Razorpay payment order:", err);
    return Response.json({ ok: false, error: "Internal server error." }, { status: 500 });
  }
}
