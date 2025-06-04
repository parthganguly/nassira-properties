import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { PropertiesSection } from "@/components/properties-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screenDynamic bg-brand-cream text-brand-navy z-base">
      <Navbar />
      <HeroSection />
      <PropertiesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

