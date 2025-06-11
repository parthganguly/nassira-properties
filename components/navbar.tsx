"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

interface NavLinkProps {
  href: string
  active: boolean
  children: React.ReactNode
}

function NavLink({ href, active, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`garamond text-lg tracking-elegant transition-colors duration-200 ${
        active ? "text-gold" : "text-navy hover:text-gold"
      }`}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, active, children, onClick }: NavLinkProps & { onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block px-3 py-2 rounded-md text-lg garamond tracking-elegant ${
        active ? "text-gold" : "text-navy hover:text-gold"
      }`}
    >
      {children}
    </Link>
  )
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Check if we're on the homepage
  const isHome = pathname === "/"

  return (
    <header className="fixed top-0 inset-x-0 z-nav bg-cream/95 backdrop-blur-sm border-b border-gold/30">
      <div className="container max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 h-auto md:h-20 lg:h-24">
          <div className="flex-shrink-0 pl-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Nassira Properties"
                width={220}
                height={110}
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <NavLink href="/properties" active={pathname === "/properties"}>
              Featured Properties
            </NavLink>
            <NavLink href="/listings" active={pathname === "/listings"}>
              Listings
            </NavLink>
            <NavLink href="/about" active={pathname === "/about"}>
              About
            </NavLink>
            <NavLink href="/testimonials" active={pathname === "/testimonials"}>
              Testimonials
            </NavLink>
            <NavLink href="/contact" active={pathname === "/contact"}>
              Contact
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+971566002563"
              className="garamond text-sm text-gold hover:text-gold-light transition-colors duration-200"
            >
              +971 56 600 2563
            </a>
            <div className="h-4 w-px bg-gold/30"></div>
            <Link
              href="/contact"
              className="garamond text-sm bg-gold text-black px-4 py-2 rounded-md hover:bg-gold-light transition-colors duration-200"
            >
              Book a Consultation
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-navy hover:text-gold transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex justify-center py-6 border-b border-gold/30">
            <Image
              src="/images/logo.png"
              alt="Nassira Properties"
              width={180}
              height={90}
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cream border-b border-gold/30">
            <MobileNavLink href="/properties" active={pathname === "/properties"} onClick={() => setIsMenuOpen(false)}>
              Featured Properties
            </MobileNavLink>
            <MobileNavLink href="/listings" active={pathname === "/listings"} onClick={() => setIsMenuOpen(false)}>
              Listings
            </MobileNavLink>
            <MobileNavLink href="/about" active={pathname === "/about"} onClick={() => setIsMenuOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink
              href="/testimonials"
              active={pathname === "/testimonials"}
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </MobileNavLink>
            <MobileNavLink href="/contact" active={pathname === "/contact"} onClick={() => setIsMenuOpen(false)}>
              Contact
            </MobileNavLink>
            <div className="pt-4 pb-2">
              <a
                href="tel:+971501234567"
                className="garamond block px-3 py-2 text-base font-medium text-gold hover:text-gold-light transition-colors duration-200"
              >
                +971 50 123 4567
              </a>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="garamond block mx-3 mt-2 px-3 py-2 text-base font-medium text-center bg-gold text-black rounded-md hover:bg-gold-light transition-colors duration-200"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

