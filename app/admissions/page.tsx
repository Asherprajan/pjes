import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, UserCheck, ClipboardCheck, Calendar, Award, CheckCircle2 } from "lucide-react"

const burgundy = "#800020"
const accentBg = "#f3e6e6"

export default function AdmissionsPage() {
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
              Admissions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join the Prema Jyothi English School family and give your child the gift of quality education combined
              with compassion and community values.
            </p>
          </div>

          {/* Admission Process */}
          <div className="mb-20">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ color: burgundy }}
            >
              Admission Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Step 1 */}
              <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
                <div
                  className="absolute -top-4 left-6 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{ backgroundColor: burgundy, color: "#fff" }}
                >
                  1
                </div>
                <CardContent className="pt-10 pb-8">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: accentBg }}
                  >
                    <FileText className="h-7 w-7" style={{ color: burgundy }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: burgundy }}>
                    Submit Application
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fill out the admission form with required documents including birth certificate, previous school
                    records, and photographs.
                  </p>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
                <div
                  className="absolute -top-4 left-6 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{ backgroundColor: burgundy, color: "#fff" }}
                >
                  2
                </div>
                <CardContent className="pt-10 pb-8">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: accentBg }}
                  >
                    <ClipboardCheck className="h-7 w-7" style={{ color: burgundy }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: burgundy }}>
                    Assessment
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Age-appropriate assessment to understand the child's current academic level and learning needs.
                  </p>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
                <div
                  className="absolute -top-4 left-6 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{ backgroundColor: burgundy, color: "#fff" }}
                >
                  3
                </div>
                <CardContent className="pt-10 pb-8">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: accentBg }}
                  >
                    <UserCheck className="h-7 w-7" style={{ color: burgundy }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: burgundy }}>
                    Parent Meeting
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Interaction with parents to discuss the school's philosophy, curriculum, and address any questions
                    or concerns.
                  </p>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
                <div
                  className="absolute -top-4 left-6 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{ backgroundColor: burgundy, color: "#fff" }}
                >
                  4
                </div>
                <CardContent className="pt-10 pb-8">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: accentBg }}
                  >
                    <Calendar className="h-7 w-7" style={{ color: burgundy }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: burgundy }}>
                    Enrollment
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Complete the enrollment process with fee payment and receive the admission confirmation and joining
                    date.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Scholarships Section */}
          <div className="mb-16">
            <Card
              className="border-2 max-w-4xl mx-auto transition-all hover:shadow-lg"
              style={{ borderColor: burgundy, backgroundColor: accentBg }}
            >
              <CardContent className="pt-10 pb-10">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#fff" }}
                    >
                      <Award className="h-8 w-8" style={{ color: burgundy }} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4" style={{ color: burgundy }}>
                      Scholarships & Financial Aid
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      At Prema Jyothi English School, we believe that financial constraints should never be a barrier to
                      quality education. We offer various scholarship programs and financial aid options for deserving
                      students.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5" style={{ color: burgundy }} />
                        <span className="text-muted-foreground">
                          Merit-based scholarships for academically excellent students
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5" style={{ color: burgundy }} />
                        <span className="text-muted-foreground">
                          Need-based financial assistance for economically disadvantaged families
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5" style={{ color: burgundy }} />
                        <span className="text-muted-foreground">
                          Special provisions for children from rural outreach areas
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5" style={{ color: burgundy }} />
                        <span className="text-muted-foreground">
                          Flexible payment plans to ease the financial burden
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div
            className="text-center rounded-2xl p-10 md:p-16 max-w-4xl mx-auto"
            style={{ backgroundColor: accentBg }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: burgundy }}
            >
              Ready to Apply?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Take the first step towards providing your child with an exceptional educational experience. Contact us
              today to begin the admission process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full"
                style={{
                  backgroundColor: burgundy,
                  color: "#fff",
                  border: `2px solid ${burgundy}`,
                  transition: "all 0.2s",
                }}
              >
                <Link href="/contact">Apply Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-2 bg-transparent"
                style={{
                  borderColor: burgundy,
                  color: burgundy,
                  backgroundColor: "#fff",
                }}
              >
                <Link href="/contact">Contact Admissions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
