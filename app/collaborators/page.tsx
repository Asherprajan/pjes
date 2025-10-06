import { Card, CardContent } from "@/components/ui/card"
import { Building2, GraduationCap } from "lucide-react"

const burgundy = "#800020"
const accentBg = "#f3e6e6"

export default function CollaboratorsPage() {
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
              Our Collaborators
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are proud to partner with leading educational organizations that share our vision of providing quality
              education and innovative learning experiences.
            </p>
          </div>

          {/* Genesis Education System */}
          <div className="mb-20">
            <Card
              className="border-2 max-w-5xl mx-auto transition-all hover:shadow-lg"
              style={{ borderColor: burgundy }}
            >
              <CardContent className="pt-10 pb-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div
                      className="w-24 h-24 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: accentBg }}
                    >
                      <GraduationCap className="h-12 w-12" style={{ color: burgundy }} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2
                      className="text-3xl font-bold mb-6"
                      style={{ color: burgundy }}
                    >
                      Genesis Education System
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Genesis Education System is a renowned educational framework that emphasizes holistic development
                      and innovative teaching methodologies. Through our partnership, we have integrated their proven
                      curriculum and pedagogical approaches into our teaching practices.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: burgundy }}
                        ></div>
                        <div>
                          <h4 className="font-semibold mb-1" style={{ color: burgundy }}>
                            Curriculum Development
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive learning frameworks aligned with modern educational standards
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: burgundy }}
                        ></div>
                        <div>
                          <h4 className="font-semibold mb-1" style={{ color: burgundy }}>
                            Teacher Training
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Regular professional development programs for our faculty
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: burgundy }}
                        ></div>
                        <div>
                          <h4 className="font-semibold mb-1" style={{ color: burgundy }}>
                            Assessment Tools
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Advanced evaluation methods to track student progress
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: burgundy }}
                        ></div>
                        <div>
                          <h4 className="font-semibold mb-1" style={{ color: burgundy }}>
                            Learning Resources
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Access to extensive educational materials and digital content
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      This collaboration ensures that our students receive education that is not only academically
                      rigorous but also prepares them for the challenges of the 21st century.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* SPSK EduTech */}
          <div>
            <Card
              className="border-2 max-w-5xl mx-auto transition-all hover:shadow-lg"
              style={{ borderColor: burgundy }}
            >
              <CardContent className="pt-10 pb-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div
                      className="w-24 h-24 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: accentBg }}
                    >
                      <Building2 className="h-12 w-12" style={{ color: burgundy }} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2
                      className="text-3xl font-bold mb-6"
                      style={{ color: burgundy }}
                    >
                      SPSK EduTech
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      SPSK EduTech is at the forefront of educational technology, providing innovative digital solutions
                      that enhance the learning experience. Our partnership brings cutting-edge technology into our
                      classrooms, making education more engaging and accessible.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: burgundy }}
                        ></div>
                        <div>
                          <h4 className="font-semibold mb-1" style={{ color: burgundy }}>
                            Digital Learning Platforms
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Interactive online tools and educational software
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: burgundy }}
                        ></div>
                        <div>
                          <h4 className="font-semibold mb-1" style={{ color: burgundy }}>
                            Smart Classrooms
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Technology-enabled learning environments with multimedia resources
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: burgundy }}
                        ></div>
                        <div>
                          <h4 className="font-semibold mb-1" style={{ color: burgundy }}>
                            E-Learning Content
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Rich multimedia educational content across all subjects
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: burgundy }}
                        ></div>
                        <div>
                          <h4 className="font-semibold mb-1" style={{ color: burgundy }}>
                            Technical Support
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Ongoing infrastructure and technology maintenance
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      Through SPSK EduTech, we are able to provide our students with modern learning tools that prepare
                      them for a technology-driven future while maintaining the personal touch that makes education
                      meaningful.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
