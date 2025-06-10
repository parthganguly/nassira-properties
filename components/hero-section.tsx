import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DecorativePattern } from "@/components/decorative-pattern";

export function HeroSection() {
  return (
    <section
      className="
        pt-[56px] md:pt-[80px] lg:pt-[96px]
        relative w-full
        min-h-screenDynamic
        flex items-center justify-center
        overflow-hidden
        bg-black
        z-base
      "
    >
      {/* Background image fills the hero, fits screen like a wallpaper */}
      <div
        className="
          absolute inset-0 z-0
          bg-contain bg-no-repeat bg-center
          sm:bg-cover sm:bg-[center_22%]
        "
        style={{
          backgroundImage: "url(/images/dubai-abaya-sunset.png)",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent sm:from-black/70 z-10" />

      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <DecorativePattern />
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
          <DecorativePattern />
        </div>
      </div>

      {/* Islamic pattern */}
      <div className="absolute inset-0 islamic-hero-pattern opacity-20 z-10 pointer-events-none"></div>

      {/* Main content */}
      <div className="container relative z-20 px-2 sm:px-4 lg:px-8 max-w-2xl mx-auto text-center flex flex-col items-center justify-center">
        <h1
          className="
            !text-white font-bold
            text-[clamp(1.4rem,6vw,2.8rem)]
            leading-tight mb-4
            max-w-full
            [word-break:break-word]
          "
        >
          <span className="block break-words">Exceptional Properties</span>
          <span className="block break-words">Extraordinary Living</span>
        </h1>
        <div className="flex flex-col items-center justify-center mb-8 md:mb-10">
          <p className="text-[clamp(1.05rem,4vw,2.1rem)] text-[#D4AF37] italic mb-3 font-medium">
            She builds. She owns. She leads.
          </p>
          <div className="w-32 md:w-40 h-0.5 bg-[#D4AF37]/70"></div>
        </div>
        <p className="text-[clamp(.98rem,3vw,1.3rem)] text-white/90 max-w-xl mx-auto mb-4 md:mb-12">
          Discover Dubai's most exclusive luxury properties with Nassira Properties
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <Button asChild className="button-gold px-8 sm:px-10 py-3 sm:py-6">
            <Link href="/properties">View Properties</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 garamond text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-6 uppercase tracking-elegant"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
