import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"
import { DecorativePattern } from "@/components/decorative-pattern"
import { PropfinderIcon } from "./propfinder-icon"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-cream border-t border-gold/30 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] opacity-5">
        <DecorativePattern />
      </div>

      <div className="container max-w-container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Nassira Properties"
                width={180}
                height={90}
                className="h-16 w-auto logo-glow"
              />
            </Link>
            <p className="text-body max-w-xs">
              Empowering through luxury real estate. Nassira Properties specializes in prestigious properties across
              Dubai.
            </p>
            <div className="mt-4">
              <p className="text-sm text-gold italic">She builds. She owns. She leads.</p>
            </div>
          </div>

          <div>
            <h3 className="heading-primary text-lg mb-4 flex items-center">
              <span className="w-6 h-6 mr-2 opacity-50">
                <DecorativePattern />
              </span>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/properties"
                  className="text-navy/70 hover:text-gold transition-colors duration-200 flex items-center"
                >
                  <span className="w-2 h-2 bg-gold/30 rounded-full mr-2"></span>
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/listings"
                  className="text-navy/70 hover:text-gold transition-colors duration-200 flex items-center"
                >
                  <span className="w-2 h-2 bg-gold/30 rounded-full mr-2"></span>
                  Listings
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-navy/70 hover:text-gold transition-colors duration-200 flex items-center"
                >
                  <span className="w-2 h-2 bg-gold/30 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-navy/70 hover:text-gold transition-colors duration-200 flex items-center"
                >
                  <span className="w-2 h-2 bg-gold/30 rounded-full mr-2"></span>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-navy/70 hover:text-gold transition-colors duration-200 flex items-center"
                >
                  <span className="w-2 h-2 bg-gold/30 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-navy/70 hover:text-gold transition-colors duration-200 flex items-center"
                >
                  <span className="w-2 h-2 bg-gold/30 rounded-full mr-2"></span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="heading-primary text-lg mb-4 flex items-center">
              <span className="w-6 h-6 mr-2 opacity-50">
                <DecorativePattern />
              </span>
              Connect With Us
            </h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.instagram.com/nassiraproperties/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-gold/10 p-2 rounded-full text-gold hover:bg-gold/20 transition-colors duration-200 border border-gold/30 hover:border-gold/60"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.propertyfinder.ae/en/broker/nassira-realty-group-9824"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Propfinder"
                className="bg-gold/10 p-2 rounded-full text-gold hover:bg-gold/20 transition-colors duration-200 border border-gold/30 hover:border-gold/60"
              >
                <PropfinderIcon className="h-5 w-5" />
                <span className="sr-only">Propfinder</span>
              </a>
              <a
                href="https://www.linkedin.com/company/nassirarealtygroup/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-gold/10 p-2 rounded-full text-gold hover:bg-gold/20 transition-colors duration-200 border border-gold/30 hover:border-gold/60"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <p className="text-body mb-4">
              Subscribe to our newsletter for exclusive property updates and empowerment insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-cream border border-gold/30 rounded-l-md px-4 py-2 w-full focus:outline-none focus:border-gold text-navy placeholder:text-navy/50"
              />
              <button className="button-gold px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/30 pt-8 text-center">
          <p className="text-sm text-navy/70">
            &copy; {currentYear} Nassira Properties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

