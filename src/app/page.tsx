import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoursesPreview from "@/components/CoursesPreview";
import Books from "@/components/Books";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CoursesPreview />
        <Books />
      </main>
      <footer className="bg-[#4A3F35] text-brand-beige py-12 text-center text-sm border-t-4 border-brand-gold">
        <p className="font-serif tracking-widest text-[#EAE0D5] mb-4">
          PARATATTVA CATUṢPĀṬHĪ & PUBLICATIONS
        </p>
        <p className="opacity-70">&copy; 2026 Paratattva. All Rights Reserved.</p>
      </footer>
    </>
  );
}
