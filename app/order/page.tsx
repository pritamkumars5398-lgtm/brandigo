import type { Metadata } from "next";
import OrderClient from "./OrderClient";

export const metadata: Metadata = {
  title: "Order Your Branding Package | Brandingo",
  description: "Secure your brand package from Brandingo with our easy, multi-step ordering flow.",
  alternates: {
    canonical: "https://jkbrandingindia.com/order",
  },
};

export default function OrderPage() {
  return <OrderClient />;
}
