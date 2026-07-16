import { readFileSync } from "node:fs";
import { join } from "node:path";
import mongoose from "mongoose";

// Load environment variables from .env.local
const env = Object.fromEntries(
  readFileSync(join(process.cwd(), ".env.local"), "utf8")
    .split(/\r?\n/)
    .filter((l) => l && !l.trimStart().startsWith("#") && l.includes("="))
    .map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; })
);

const MONGODB_URI = env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI is not defined in .env.local");
  process.exit(1);
}

// Define Schema inside script for independence
const LeadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  service: String,
  message: String,
  createdAt: Date
}, { collection: "leads" });

const OrderSchema = new mongoose.Schema({
  name: String,
  email: String,
  logoName: String,
  package: String,
  amount: String,
  paymentStatus: String,
  createdAt: Date
}, { collection: "orders" });

async function run() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Database Connected!");

    const LeadModel = mongoose.models.Lead || mongoose.model("Lead", LeadSchema);
    const OrderModel = mongoose.models.Order || mongoose.model("Order", OrderSchema);

    // Fetch latest 5 leads
    const leads = await LeadModel.find({}).sort({ createdAt: -1 }).limit(5);
    console.log("\n--- LATEST 5 LEADS ---");
    if (leads.length === 0) {
      console.log("No leads found in 'leads' collection.");
    } else {
      leads.forEach((l, index) => {
        console.log(`[${index + 1}] Name: ${l.name}, Email: ${l.email}, Phone: ${l.phone}, Message: ${l.message}, Date: ${l.createdAt}`);
      });
    }

    // Fetch latest 5 orders
    const orders = await OrderModel.find({}).sort({ createdAt: -1 }).limit(5);
    console.log("\n--- LATEST 5 ORDERS ---");
    if (orders.length === 0) {
      console.log("No orders found in 'orders' collection.");
    } else {
      orders.forEach((o, index) => {
        console.log(`[${index + 1}] Name: ${o.name}, Email: ${o.email}, Logo: ${o.logoName}, Pkg: ${o.package}, Status: ${o.paymentStatus}, Date: ${o.createdAt}`);
      });
    }

    await mongoose.disconnect();
    console.log("\nDisconnected from Database.");
  } catch (err) {
    console.error("❌ Mongoose query error:", err);
    process.exit(1);
  }
}

run();
