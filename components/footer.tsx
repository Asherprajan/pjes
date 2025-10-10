import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

const burgundy = "#800020"
const accentBg = "#f3e6e6"

export function Footer() {
  return (
    <footer
      className="border-t border-border mt-20"
      style={{ background: "linear-gradient(135deg, #f3e6e6 0%, #fff 100%)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/pjs-logo.png"
                  alt="PJES Logo"
                  width={48}
                  height={48}
                  className="object-contain w-12 h-12"
                  priority
                />
              </span>
              <h3
                className="text-2xl md:text-2xl font-extrabold tracking-tight"
                style={{ color: burgundy }}
              >
                Prema Jyothi English School
              </h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Where Education Meets Compassion
            </p>
          </div>

          <div>
            <h4
              className="font-semibold mb-4 text-lg"
              style={{ color: burgundy }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/about"
                className="text-base text-muted-foreground hover:text-primary transition-colors"
                style={{ fontWeight: 500 }}
              >
                About Us
              </Link>
              <Link
                href="/admissions"
                className="text-base text-muted-foreground hover:text-primary transition-colors"
                style={{ fontWeight: 500 }}
              >
                Admissions
              </Link>
              <Link
                href="/contact"
                className="text-base text-muted-foreground hover:text-primary transition-colors"
                style={{ fontWeight: 500 }}
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h4
              className="font-semibold mb-4 text-lg"
              style={{ color: burgundy }}
            >
              Contact Info
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-base text-muted-foreground">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: accentBg }}
                >
                  <MapPin className="h-5 w-5" style={{ color: burgundy }} />
                </span>
                <span>Kothamangala Post, Mulbagal Taluk, Pin - 563127</span>
              </div>
              <div className="flex items-center gap-2 text-base text-muted-foreground">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: accentBg }}
                >
                  <Phone className="h-5 w-5" style={{ color: burgundy }} />
                </span>
                <span>+91 9448310988, 83108-85539  </span>   
              </div>
              <div className="flex items-center gap-2 text-base text-muted-foreground">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: accentBg }}
                >
                  <Mail className="h-5 w-5" style={{ color: burgundy }} />
                </span>
                <span>premajyothischoolkolar@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span style={{ color: burgundy, fontWeight: 600 }}>
              Prema Jyothi English School
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
