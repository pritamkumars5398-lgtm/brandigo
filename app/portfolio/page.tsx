import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioGallery from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Our Portfolio | Brandingo",
  description:
    "Explore Brandingo's portfolio of branding, graphic design, website development and digital marketing projects delivered across industries.",
  alternates: {
    canonical: "https://jkbrandingindia.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />
      <PortfolioGallery />
      <Footer />
    </main>
  );
}
