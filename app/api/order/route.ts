import nodemailer from "nodemailer";
import { initEnv } from "@/lib/env";
import { connectToDatabase } from "@/lib/db";
import Order from "@/models/Order";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

export async function POST(request: Request) {
  initEnv();
  try {
    const formData = await request.formData();

    // Extract form fields
    const name = (formData.get("name") as string || "").trim();
    const email = (formData.get("email") as string || "").trim();
    const phone = (formData.get("phone") as string || "").trim();
    const bestTime = (formData.get("bestTime") as string || "").trim();
    const city = (formData.get("city") as string || "").trim();
    const state = (formData.get("state") as string || "").trim();

    const logoName = (formData.get("logoName") as string || "").trim();
    const slogan = (formData.get("slogan") as string || "").trim();
    const industry = (formData.get("industry") as string || "").trim();
    const colorPreferences = (formData.get("colorPreferences") as string || "").trim();
    const referenceLink = (formData.get("referenceLink") as string || "").trim();

    const selectedPackage = (formData.get("package") as string || "").trim();
    const totalAmount = (formData.get("amount") as string || "").trim();

    const paymentId = (formData.get("paymentId") as string || "").trim();
    const orderId = (formData.get("orderId") as string || "").trim();
    const signature = (formData.get("signature") as string || "").trim();
    const paymentStatus = (formData.get("paymentStatus") as string || "success").trim();
    const failureReason = (formData.get("failureReason") as string || "").trim();

    // Honeypot field
    const companyHoneypot = formData.get("company") as string;
    if (companyHoneypot) {
      return Response.json({ ok: true }); // Silently ignore bot spam
    }

    if (!name || !email || !phone || !bestTime || !city || !state || !logoName || !industry || !selectedPackage) {
      return Response.json({ ok: false, error: "Please fill in all required fields." }, { status: 400 });
    }

    if (paymentStatus === "success") {
      if (!paymentId || !orderId || !signature) {
        return Response.json({ ok: false, error: "Payment verification details are missing." }, { status: 400 });
      }

      // Verify signature
      const keySecret = process.env.RAZORPAY_KEY_SECRET;
      if (!keySecret) {
        console.error("Order form: Razorpay key secret is not configured.");
        return Response.json({ ok: false, error: "Payment configuration error. Please contact support." }, { status: 500 });
      }

      const crypto = await import("crypto");
      const expectedSignature = crypto
        .createHmac("sha256", keySecret)
        .update(orderId + "|" + paymentId)
        .digest("hex");

      if (expectedSignature !== signature) {
        console.error("Razorpay signature verification failed.");
        return Response.json({ ok: false, error: "Payment verification failed. Invalid transaction signature." }, { status: 400 });
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    // Handle optional file upload
    const file = formData.get("file") as File | null;
    let attachments: any[] = [];
    if (file && file.size > 0) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.error("Order form: SMTP env vars are not configured.");
      return Response.json({ ok: false, error: "Order processing email is not configured. Please try again later." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT ?? 465),
      secure: SMTP_SECURE ? SMTP_SECURE === "true" : Number(SMTP_PORT ?? 465) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const to = CONTACT_TO || "sales@brandingo.in";
    const from = CONTACT_FROM || SMTP_USER;

    const isSuccess = paymentStatus === "success";

    const emailText = `
${isSuccess ? "New Package Order Received!" : "[ACTION REQUIRED] Failed Payment Order Lead!"}

Payment Status: ${isSuccess ? "SUCCESSFUL" : "FAILED"}
${!isSuccess && failureReason ? `Reason for Failure: ${failureReason}` : ""}

Package Details:
----------------
Selected Package: ${selectedPackage}
Total Amount: ${totalAmount}
Payment ID: ${paymentId || "N/A"}
Order ID: ${orderId || "N/A"}

Step 1: Contact & Billing Details:
----------------
Full Name: ${name}
Email Address: ${email}
Phone Number: ${phone}
Best Time for Designer Call: ${bestTime}
City: ${city}
State: ${state}

Step 2: Brand & Logo Information:
----------------
Logo Name / Business Name: ${logoName}
Slogan or Tagline (Optional): ${slogan || "Not Provided"}
Nature of Business / Industry: ${industry}
Color Preferences (Optional): ${colorPreferences || "Not Provided"}
Reference / Inspiration Link (Optional): ${referenceLink || "Not Provided"}
File Attachment: ${file && file.size > 0 ? `Yes (${file.name})` : "No"}
`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; font-size: 14px; color: #1a1a1a; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 24px;">
        <div style="background-color: ${isSuccess ? "#0b3c5d" : "#dc2626"}; padding: 16px; text-align: center; margin-bottom: 24px;">
          <h2 style="color: #ffffff; margin: 0;">${isSuccess ? "New Branding Order" : "Payment Failed Order Lead"}</h2>
        </div>
        
        <h3 style="color: #f58220; border-bottom: 2px solid #f58220; padding-bottom: 8px; margin-top: 0;">Selected Package Info</h3>
        <p><strong>Package:</strong> <span style="font-size: 16px; font-weight: bold; color: #0b3c5d;">${esc(selectedPackage)}</span></p>
        <p><strong>Total Amount:</strong> <span style="font-size: 16px; font-weight: bold; color: #f58220;">${esc(totalAmount)}</span></p>
        <p><strong>Payment Status:</strong> <span style="font-size: 15px; font-weight: bold; color: ${isSuccess ? "#16a34a" : "#dc2626"};">${isSuccess ? "PAID" : "UNPAID / FAILED"}</span></p>
        ${!isSuccess && failureReason ? `<p><strong>Failure Reason:</strong> <span style="color: #dc2626; font-weight: bold;">${esc(failureReason)}</span></p>` : ""}
        <p><strong>Razorpay Payment ID:</strong> <span style="font-family: monospace; font-size: 14px; background: #f3f4f6; padding: 2px 6px;">${esc(paymentId || "N/A")}</span></p>
        <p><strong>Razorpay Order ID:</strong> <span style="font-family: monospace; font-size: 14px; background: #f3f4f6; padding: 2px 6px;">${esc(orderId || "N/A")}</span></p>

        <h3 style="color: #0b3c5d; border-bottom: 1.5px solid #eee; padding-bottom: 6px; margin-top: 24px;">Step 1: Contact & Billing Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 6px 0; width: 40%;"><strong>Full Name:</strong></td><td style="padding: 6px 0;">${esc(name)}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>Email Address:</strong></td><td style="padding: 6px 0;">${esc(email)}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>Phone Number:</strong></td><td style="padding: 6px 0;">${esc(phone)}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>Best Call Time:</strong></td><td style="padding: 6px 0;">${esc(bestTime)}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>City / State:</strong></td><td style="padding: 6px 0;">${esc(city)}, ${esc(state)}</td></tr>
        </table>

        <h3 style="color: #0b3c5d; border-bottom: 1.5px solid #eee; padding-bottom: 6px; margin-top: 24px;">Step 2: Brand & Logo Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 6px 0; width: 40%;"><strong>Logo / Business Name:</strong></td><td style="padding: 6px 0; font-weight: bold;">${esc(logoName)}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>Slogan / Tagline:</strong></td><td style="padding: 6px 0;">${esc(slogan) || "<i>None</i>"}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>Industry / Nature:</strong></td><td style="padding: 6px 0;">${esc(industry)}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>Color Preferences:</strong></td><td style="padding: 6px 0;">${esc(colorPreferences) || "<i>None specified</i>"}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>Reference Link:</strong></td><td style="padding: 6px 0;">${referenceLink ? `<a href="${esc(referenceLink)}" target="_blank">${esc(referenceLink)}</a>` : "<i>None</i>"}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>Attachment Uploaded:</strong></td><td style="padding: 6px 0;">${file && file.size > 0 ? `<span style="color:#16a34a;">Yes (${esc(file.name)})</span>` : "No"}</td></tr>
        </table>
        
        <div style="margin-top: 32px; font-size: 12px; color: #888; text-align: center; border-top: 1px solid #eee; padding-top: 16px;">
          This form submission was processed from Brandingo Checkout.
        </div>
      </div>`;

    // Save order details to MongoDB database
    try {
      await connectToDatabase();
      await Order.create({
        name,
        email,
        phone,
        bestTime,
        city,
        state,
        logoName,
        slogan: slogan || undefined,
        industry,
        colorPreferences: colorPreferences || undefined,
        referenceLink: referenceLink || undefined,
        fileName: (file && file.size > 0) ? file.name : undefined,
        package: selectedPackage,
        amount: totalAmount,
        paymentId: paymentId || undefined,
        orderId: orderId || undefined,
        signature: signature || undefined,
        paymentStatus: isSuccess ? "success" : "failed",
        failureReason: failureReason || undefined,
      });
    } catch (dbErr) {
      console.error("Database save failed for order:", dbErr);
    }

    await transporter.sendMail({
      from: `Brandingo Orders <${from}>`,
      to,
      replyTo: `${name} <${email}>`,
      subject: `${isSuccess ? "New Logo Order" : "[FAILED PAYMENT LEAD]"} : ${selectedPackage} — ${logoName}`,
      text: emailText,
      html: emailHtml,
      attachments,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Order form: failed to process and send order email.", err);
    return Response.json({ ok: false, error: "Could not place your order. Please try again or contact support." }, { status: 500 });
  }
}
