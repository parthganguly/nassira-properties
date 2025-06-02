import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DecorativePattern } from "@/components/decorative-pattern"

interface PageLayoutProps {
  children: React.ReactNode
  title: string
  subtitle?: string
}

export function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <main className="min-h-screen bg-brand-cream text-brand-navy">
      <Navbar />

      {/* Page header */}
      <section className="pt-36 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5">
          <DecorativePattern />
        </div>

        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="heading-primary text-4xl md:text-5xl lg:text-6xl mb-6 text-brand-navy">
              {title}
            </h1>
            {subtitle && <p className="text-xl text-brand-navy/80 max-w-3xl mx-auto">{subtitle}</p>}
            <div className="flex items-center justify-center mt-8 mb-4">
              <div className="h-px w-16 bg-brand-gold"></div>
              <div className="w-16 h-16 mx-4 relative">
                <DecorativePattern opacity="opacity-70" />
              </div>
              <div className="h-px w-16 bg-brand-gold"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Page content */}
      {children}

      <Footer />
    </main>
  )
}

