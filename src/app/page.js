"use client";
import Hero from "../components/home/Hero/Hero";
import Services from "../components/home/Services/Services";
import FeaturedWork from "../components/home/FeaturedWork/FeaturedWork";
import Journey from "../components/home/Journey/Journey";
import ContactCTA from "../components/home/ContactCTA/ContactCTA";


export default function Home() {
  // Analytics removed for standalone version

  return (
    <main>
      <Hero />
      <FeaturedWork />
      <Services />
      <Journey />
      <ContactCTA />
    </main>
  );
}
