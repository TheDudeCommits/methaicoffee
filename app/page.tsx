/**
 * ME THAI COFFEE Landing Page
 *
 * A minimal, modern, premium landing page for the café.
 * Features:
 * - Responsive hero with animated coffee beans
 * - Quick info strip with badges
 * - About section with brand story
 * - Contact section with location & hours
 * - Customer reviews
 *
 * Image Placeholders:
 * - /public/hero-cup.png - Main hero cup image (transparent PNG, ~500x600px)
 * - /public/me-thai-poster.jpg - Brand poster (portrait, ~800x1000px)
 */

import { Navbar, Hero, About, CoffeeProcess, Contact, Reviews, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CoffeeProcess />
        <Contact />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}

