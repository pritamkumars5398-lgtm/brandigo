import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import PageHero from "@/components/PageHero";
import ClientLogos from "@/components/ClientLogos";

export const metadata: Metadata = {
  title: "About Us | Brandingo",
  description:
    "Learn more about Brandingo, a leading branding, printing, and digital marketing agency with over 10 years of experience.",
  alternates: {
    canonical: "https://jkbrandingindia.com/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHero bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" />
      <About />
      <ClientLogos />
      <Footer />
    </main>
  );
}
