import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AllServices from "@/components/AllServices";

export const metadata: Metadata = {
  title: "Our Services | Brandingo India Pvt. Ltd.",
  description: "Explore our comprehensive branding, printing, website development, and digital marketing services tailored to elevate your business.",
  alternates: {
    canonical: "https://jkbrandingindia.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: "80px" }}>
        <AllServices />
      </div>
      <Footer />
    </main>
  );
}
