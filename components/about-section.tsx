import Image from "next/image"
import { DecorativePattern } from "@/components/decorative-pattern"

export function AboutSection() {
  return (
    <section id="about" className="pt-[56px] md:pt-[80px] lg:pt-[96px] pb-24 relative overflow-hidden bg-brand-cream">
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <DecorativePattern />
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
        <DecorativePattern />
      </div>

      <div className="container max-w-container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-garamond uppercase tracking-wider text-brand-navy">
                About Nassira Properties
              </h2>
              <div className="w-24 h-0.5 bg-brand-gold mt-6"></div>
            </div>
            
            <div className="space-y-6 text-brand-navy text-body">
              <p>
                Founded by Nassira Sekkay, a visionary leader in Dubai's luxury real estate market, Nassira Properties
                represents the pinnacle of excellence and empowerment in the industry.
              </p>
              <p>
                Nassira has broken barriers and established herself as a pioneering force, creating opportunities for women
                in real estate while delivering unparalleled service to our discerning clientele.
              </p>
              <p>
                Our team combines deep market knowledge with a commitment to excellence, guided by values of integrity,
                innovation, and inclusivity.
              </p>
              <p>
                At Nassira Properties, we don't just sell luxury homes – we create pathways to success and independence
                through property ownership and investment.
              </p>
            </div>

            <blockquote className="relative mt-8">
              <div className="absolute -left-4 top-0 h-full w-1 bg-brand-gold"></div>
              <p className="italic text-xl text-brand-gold pl-8">
                "True luxury is not just about aesthetics, but about creating spaces that empower and inspire."
              </p>
              <footer className="text-base text-brand-navy/70 mt-3 pl-8">— Nassira Sekkay, Founder</footer>
            </blockquote>
          </div>

          <div className="relative lg:h-[700px]">
            {/* Decorative frames */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-brand-gold/30 rounded-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-brand-gold/30 rounded-lg"></div>
            
            {/* Main image container */}
            <div className="relative h-full w-full rounded-lg overflow-hidden flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/10 via-brand-navy/5 to-brand-navy/20 z-10"></div>
              <div className="relative w-full h-full">
                <Image
                  src="/images/nassira.png"
                  alt="Nassira Sekkay - Founder of Nassira Properties"
                  fill
                  priority
                  className="object-contain scale-95"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>

            {/* Gold corner accents */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-brand-gold/50 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-brand-gold/50 rounded-bl-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

