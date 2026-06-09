import { notFound } from "next/navigation";

/*
 * ── Projects page temporarily DISABLED ──────────────────────────────
 * The Projects section was removed from the navbar, landing page and footer.
 * The implementation below is preserved so it can be re-enabled with minimal
 * work in future. To restore the page:
 *   1. Delete the `notFound()` stub at the bottom of this file.
 *   2. Uncomment the original implementation below.
 * (The /projects/[slug] detail route and Portfolio component are still intact.)
 *
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Our Projects | Brandingo India Pvt. Ltd.",
  description: "Discover our portfolio of branding and graphic design projects across various industries.",
  alternates: {
    canonical: "https://jkbrandingindia.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: "80px" }}>
        <Portfolio />
      </div>
      <Footer />
    </main>
  );
}
*/

// Temporary stub: the /projects route returns 404 while disabled.
export default function ProjectsPage() {
  notFound();
}
