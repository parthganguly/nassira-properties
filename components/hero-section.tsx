import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DecorativePattern } from "@/components/decorative-pattern"
import { connectToDatabase } from '@/lib/mongodb'

export function HeroSection() {
  return (
    <section className="relative w-full aspect-[4096/2720] flex items-center justify-center overflow-hidden mt-24 md:mt-28 lg:mt-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dubai-abaya-sunset.png"
          alt="Empowered woman overlooking Dubai skyline at sunset"
          fill
          priority
          sizes="100vw"
          quality={100}
          className="object-cover"
          style={{ objectPosition: "center center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <DecorativePattern />
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
          <DecorativePattern />
        </div>
      </div>

      {/* Add Islamic pattern behind the text */}
      <div className="absolute inset-0 islamic-hero-pattern opacity-20"></div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center mt-8 sm:mt-0">
        <h1 className="heading-primary !text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 md:mb-8 leading-tight">
          <span className="block">Exceptional Properties</span>
          <span className="block">Extraordinary Living</span>
        </h1>
        <div className="flex flex-col items-center justify-center mb-8 md:mb-10">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#D4AF37] italic mb-4 md:mb-6">
            She builds. She owns. She leads.
          </p>
          <div className="w-32 md:w-40 h-0.5 bg-[#D4AF37]/70"></div>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 md:mb-12">
          Discover Dubai's most exclusive luxury properties with Nassira Properties
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <Button asChild className="button-gold px-8 sm:px-10 py-6 sm:py-7">
            <Link href="/properties">View Properties</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 garamond text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 uppercase tracking-elegant"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

