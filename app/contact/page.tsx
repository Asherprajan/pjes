"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react"
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
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setShowSuccessDialog(true)
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      alert('There was an error submitting the form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Success Dialog */}
      {showSuccessDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "#f0f9ff" }}>
                <CheckCircle className="h-8 w-8" style={{ color: "#10b981" }} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-2" style={{ color: burgundy }}>
              Message Sent Successfully!
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Thank you for contacting us. We have received your message and will get back to you within 24 hours.
            </p>
            <Button
              onClick={() => setShowSuccessDialog(false)}
              className="w-full rounded-lg font-semibold"
              style={{ backgroundColor: burgundy, color: "white" }}
            >
              Close
            </Button>
          </div>
        </div>
      )}
      
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
                          Kothamangala Post, Mulbagal Taluk
                          <br />
                          Pin - 563127
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
                        <p className="text-muted-foreground">+91 9448310988, 83108-85539</p>
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
                        <p className="text-muted-foreground">premajyothischoolkolar@gmail.com</p> 
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
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3885.1717987377615!2d78.344233!3d13.151560999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA5JzA1LjYiTiA3OMKwMjAnMzkuMiJF!5e0!3m2!1sen!2sin!4v1760094779501!5m2!1sen!2sin"
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
                  <form
                    method="POST"
                    action="https://script.google.com/macros/s/AKfycbw5r6xYbjY-YxE_YD8OqFjUfZcW9Jt02kXm4uvonuruWY2QR-e8ZOJesGN3eTgknOsa7A/exec"
                    className="space-y-5"
                  >
                    <div>
                      <label
                        className="block text-sm font-semibold mb-2"
                        style={{ color: burgundy }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
                        style={{ borderColor: burgundy }}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-semibold mb-2"
                        style={{ color: burgundy }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
                        style={{ borderColor: burgundy }}
                        placeholder="your.email@gmail.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-semibold mb-2"
                        style={{ color: burgundy }}
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
                        style={{ borderColor: burgundy }}
                        placeholder="+91 9448310988"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-semibold mb-2"
                        style={{ color: burgundy }}
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200 h-28 resize-none"
                        style={{ borderColor: burgundy }}
                        placeholder="How can we help you?"
                        required
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="w-full rounded-lg font-semibold text-lg py-2"
                      style={{ backgroundColor: burgundy, color: "white" }}
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
