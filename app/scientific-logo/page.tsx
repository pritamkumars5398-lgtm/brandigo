import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScientificLogoClient from "./ScientificLogoClient";

export const metadata: Metadata = {
  title: "Scientific Logo Design & Astrological Brand Alignment | Brandingo",
  description:
    "Align your brand identity with sacred geometry, zodiac elements, and planetary frequencies to maximize market authority, customer attraction, and business prosperity.",
  alternates: {
    canonical: "https://jkbrandingindia.com/scientific-logo",
  },
  openGraph: {
    title: "Scientific Logo Design & Astrological Brand Alignment | Brandingo",
    description:
      "Align your brand logo with Vastu Shastra, sacred geometry, and planetary elements for undeniable business growth.",
    url: "https://jkbrandingindia.com/scientific-logo",
    siteName: "Brandingo",
    images: [
      {
        url: "/hero-mockup.jpg",
        width: 1200,
        height: 630,
        alt: "Scientific Logo Design Brandingo",
      },
    ],
  },
};

export default function ScientificLogoPage() {
  return (
    <main>
      <Navbar />
      <ScientificLogoClient />
      <Footer />
    </main>
  );
}
