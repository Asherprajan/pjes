"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Theme colors
const burgundy = "#800020"
const accentBg = "#f3e6e6"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/collaborators", label: "Our Collaborators" },
  { href: "/admissions", label: "Admissions" },
  { href: "/gallery", label: "Photo Gallery" }, 
  { href: "/contact", label: "Contact Us" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border"
      style={{
        background: "linear-gradient(135deg, #f3e6e6 0%, #fff 100%)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative w-14 h-14 md:w-20 md:h-20 flex-shrink-0">
              <Image
                src="/pjs-logo.png"
                alt="PJES Logo"
                width={80}
                height={80}
                className="object-contain w-14 h-14 md:w-20 md:h-20"
                priority
              />
            </span>
            <div
              className="text-xl md:text-1xl -extrabold   tracking-tight"
              style={{ color: burgundy }}
            >
              Prema Jyothi English School
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-semibold transition-colors hover:text-primary`}
                style={{
                  color: pathname === link.href ? burgundy : "#444",
                  borderBottom: pathname === link.href ? `2px solid ${burgundy}` : "2px solid transparent",
                  paddingBottom: "2px",
                  transition: "color 0.2s, border-bottom 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            style={{ color: burgundy }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            className="md:hidden py-4 border-t border-border"
            style={{ background: accentBg, borderColor: burgundy }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-semibold transition-colors"
                  style={{
                    color: pathname === link.href ? burgundy : "#444",
                    borderLeft: pathname === link.href ? `4px solid ${burgundy}` : "4px solid transparent",
                    paddingLeft: "0.75rem",
                    transition: "color 0.2s, border-left 0.2s",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
