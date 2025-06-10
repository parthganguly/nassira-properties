import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail } from "lucide-react"
import { DecorativePattern } from "@/components/decorative-pattern"

export function ContactSection() {
  return (
    <section id="contact" className="pt-[56px] md:pt-[80px] lg:pt-[96px] pb-24 bg-brand-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 rotate-45">
        <DecorativePattern />
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10 -rotate-45">
        <DecorativePattern />
      </div>

      <div className="container max-w-container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-garamond uppercase tracking-wider mb-6 text-brand-gold">Contact Us</h2>
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-brand-gold"></div>
            <div className="w-16 h-16 mx-4 relative">
              <DecorativePattern opacity="opacity-70" />
            </div>
            <div className="h-px w-16 bg-brand-gold"></div>
          </div>
          <p className="text-body text-brand-navy max-w-2xl mx-auto">
            Reach out to our team of experts to discuss your real estate needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-brand-cream p-8 rounded-lg shadow-lg relative border border-brand-gold/30 hover:shadow-brand-gold/10 hover:shadow-xl transition-all duration-300">
            <ContactForm />
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-brand-gold/10 p-3 rounded-full mr-4 border border-brand-gold/30">
                  <MapPin className="h-6 w-6 text-brand-gold flex-shrink-0" />
                </div>
                <div>
                  <h3 className="font-garamond text-xl font-medium mb-2 text-brand-gold">Our Office</h3>
                  <p className="text-body text-brand-navy">
                    104, Al Maidoor Building,Al Quoz
                    <br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-gold/10 p-3 rounded-full mr-4 border border-brand-gold/30">
                  <Phone className="h-6 w-6 text-brand-gold flex-shrink-0" />
                </div>
                <div>
                  <h3 className="font-garamond text-xl font-medium mb-2 text-brand-gold">Phone</h3>
                  <p className="text-body text-brand-navy">
                    +971 56 600 2563
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-gold/10 p-3 rounded-full mr-4 border border-brand-gold/30">
                  <Mail className="h-6 w-6 text-brand-gold flex-shrink-0" />
                </div>
                <div>
                  <h3 className="font-garamond text-xl font-medium mb-2 text-brand-gold">Email</h3>
                  <p className="text-body text-brand-navy">
                  nassira@nassirarealty.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-brand-cream rounded-lg shadow-lg border border-brand-gold/30">
              <blockquote className="italic text-lg text-brand-gold">
                "Empowering women through property ownership is not just our mission—it's our legacy."
                <footer className="text-base text-brand-navy/70 mt-2">— Nassira Sekkay</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

