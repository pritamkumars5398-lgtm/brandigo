import nodemailer from "nodemailer";
import { initEnv } from "@/lib/env";
import { connectToDatabase } from "@/lib/db";
import Lead from "@/models/Lead";
import fs from "fs";

// nodemailer needs the Node runtime (not Edge), and this must run per-request.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  // Honeypot — real users leave this empty; bots tend to fill every field.
  company_hp?: string;
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

export async function POST(request: Request) {
  initEnv();
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const service = (body.service ?? "").trim();
  const message = (body.message ?? "").trim();

  // Silently accept honeypot hits so bots think they succeeded.
  if (body.company_hp) return Response.json({ ok: true });

  if (!name || !email || !message) {
    return Response.json({ ok: false, error: "Please fill in your name, email and message." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }
  if (phone) {
    const cleaned = phone.replace(/[^0-9]/g, "");
    if (cleaned.length !== 10) {
      return Response.json({ ok: false, error: "Please enter a valid 10-digit phone number." }, { status: 400 });
    }
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP env vars are not configured.");
    return Response.json({ ok: false, error: "Email is not configured. Please try again later." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 465),
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : Number(SMTP_PORT ?? 465) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const to = CONTACT_TO || "sales@brandingo.in";
  const from = CONTACT_FROM || SMTP_USER;

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    service && `Service: ${service}`,
    "",
    message,
  ].filter(Boolean);

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#1a1a1a">
      <h2 style="color:#f58220;margin:0 0 16px">New enquiry from brandingo.in</h2>
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      ${phone ? `<p><strong>Phone:</strong> ${esc(phone)}</p>` : ""}
      ${service ? `<p><strong>Service:</strong> ${esc(service)}</p>` : ""}
      <p style="margin-top:16px"><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${esc(message)}</p>
    </div>`;

  // Save lead to database
  try {
    await connectToDatabase();
    await Lead.create({
      name,
      email,
      phone: phone || undefined,
      service: service || undefined,
      message,
    });
  } catch (dbErr: any) {
    console.error("Database save failed for lead:", dbErr);
    try {
      fs.appendFileSync("db_error.log", `${new Date().toISOString()} - Database save error: ${dbErr.stack || dbErr.message || dbErr}\n`);
    } catch (fsErr) {}
  }

  try {
    await transporter.sendMail({
      from: `Brandingo Website <${from}>`,
      to,
      replyTo: `${name} <${email}>`,
      subject: `New enquiry from ${name}${service ? ` — ${service}` : ""}`,
      text: lines.join("\n"),
      html,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form: failed to send email.", err);
    return Response.json({ ok: false, error: "Could not send your message. Please try again or email us directly." }, { status: 502 });
  }
}
