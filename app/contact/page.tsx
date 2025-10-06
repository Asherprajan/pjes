"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import { useState } from "react"

const burgundy = "#800020"
const accentBg = "#f3e6e6"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for contacting us! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div>
      <section
        className="py-16 md:py-24"
        style={{
          background: "linear-gradient(135deg, #f3e6e6 0%, #fff 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1
              className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
              style={{ color: burgundy }}
            >
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We'd love to hear from you. Get in touch with us for admissions, inquiries, or any questions about Prema
              Jyothi English School.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2
                className="text-2xl font-bold mb-8"
                style={{ color: burgundy }}
              >
                Get In Touch
              </h2>

              <div className="space-y-6 mb-10">
                <Card className="border-2" style={{ borderColor: burgundy }}>
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: accentBg }}
                      >
                        <MapPin className="h-6 w-6" style={{ color: burgundy }} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2" style={{ color: burgundy }}>Address</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Prema Jyothi English School
                          <br />
                          Karnataka, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2" style={{ borderColor: burgundy }}>
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: accentBg }}
                      >
                        <Phone className="h-6 w-6" style={{ color: burgundy }} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2" style={{ color: burgundy }}>Phone</h3>
                        <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2" style={{ borderColor: burgundy }}>
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: accentBg }}
                      >
                        <Mail className="h-6 w-6" style={{ color: burgundy }} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2" style={{ color: burgundy }}>Email</h3>
                        <p className="text-muted-foreground">info@pjes.edu.in</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map */}
              <div
                className="rounded-xl overflow-hidden border-2"
                style={{ borderColor: burgundy }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2
                className="text-2xl font-bold mb-8"
                style={{ color: burgundy }}
              >
                Send Us a Message
              </h2>

              <Card className="border-2" style={{ borderColor: burgundy }}>
                <CardContent className="pt-8 pb-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                        style={{ color: burgundy }}
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                        style={{ color: burgundy }}
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                        style={{ color: burgundy }}
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                        style={{ color: burgundy }}
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us how we can help you..."
                        className="w-full min-h-[150px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full"
                      style={{
                        backgroundColor: burgundy,
                        color: "#fff",
                        fontWeight: 600,
                        transition: "all 0.2s",
                      }}
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
