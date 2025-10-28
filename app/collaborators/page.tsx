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
                      PJES is proud to collaborate with the Genesis Education System, a transformative approach to learning that blends the timeless wisdom of the Gurukul model with modern insights into child development.
                    </p>
                    <ul className="space-y-4 text-muted-foreground mb-6 list-none pl-0">
                      <li className="flex items-start gap-3">
                        <span className="font-bold" style={{ color: burgundy, marginTop: 4 }}>•</span>
                        <span>
                          In Genesis, there are no teachers—only mentors. Adults guide, encourage, and walk beside the child, rather than simply instructing from above.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold" style={{ color: burgundy, marginTop: 4 }}>•</span>
                        <span>
                          Inspired by the Gurukul tradition, learning is personal, holistic, and rooted in real life.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold" style={{ color: burgundy, marginTop: 4 }}>•</span>
                        <span>
                          Each child begins their journey with a mind map, created with mentors and families. This allows every child to be mentored in the way that best suits their unique strengths, challenges, and learning style.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold" style={{ color: burgundy, marginTop: 4 }}>•</span>
                        <span>
                          Education is personalized—not one-size-fits-all. Every child’s learning path is designed individually.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold" style={{ color: burgundy, marginTop: 4 }}>•</span>
                        <span>
                          Parent-centered homework ensures that families are deeply involved in the child’s learning process. Homework becomes a time of bonding, reflection, and discovery rather than pressure.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold" style={{ color: burgundy, marginTop: 4 }}>•</span>
                        <span>
                          The focus is on creating a nurturing learning environment where children feel safe, inspired, and free to explore.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold" style={{ color: burgundy, marginTop: 4 }}>•</span>
                        <span>
                          Genesis emphasizes relationships, creativity, and character-building as much as academics. Children are encouraged to think deeply, ask questions, and grow into balanced, confident individuals.
                        </span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      At its heart, Genesis believes that every child learns best when they are truly seen, understood, and nurtured in close partnership with their parents.
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
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      PJES also partners with SPSK, an organization committed to supporting parents and children with mental health services, resources, training, and expertise that strengthen academic and extracurricular programs.
                    </p>
                    <a
                      href="https://spskedu.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-6 py-2 rounded-lg font-semibold text-white"
                      style={{
                        backgroundColor: burgundy,
                        transition: "background 0.2s",
                        textDecoration: "none",
                      }}
                    >
                      Know More
                    </a>
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
