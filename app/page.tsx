import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BookOpen, 
  Heart, 
  Users, 
  Award, 
  GraduationCap, 
  Globe, 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  Target,
  Lightbulb,
  Shield,
  TreePine,
  BookMarked,
  UserCheck,
  TrendingUp,
  Sparkles
} from "lucide-react"

// Define the dark burgundy color
const burgundy = "#6b1a1a"

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-screen py-24 md:py-40 bg-gradient-to-br from-blue-100 via-white to-emerald-100 overflow-hidden"
      >
        <img
          src="https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg"
          alt="School background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: "center"  }}
        />
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg
            className="absolute top-0 left-1/2 -translate-x-1/2 opacity-30"
            width="1200"
            height="400"
            fill="none"
            viewBox="0 0 1200 400"
          >
            <ellipse cx="600" cy="200" rx="600" ry="200" fill="#3b82f6" fillOpacity="0.08" />
            <ellipse cx="600" cy="200" rx="400" ry="120" fill="#10b981" fillOpacity="0.07" />
          </svg>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-2xl mb-7">
              Inspiring Minds, <span style={{ color: burgundy }}>Igniting Hearts</span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6 drop-shadow-lg">
              Welcome to <span className="font-semibold" style={{ color: burgundy }}>Prema Jyothi English School</span> — empowering every child to learn, grow, and lead.
            </p>
            <p className="text-lg md:text-xl text-gray-200 font-normal leading-relaxed mb-8 drop-shadow-lg max-w-4xl mx-auto">
              We champion accessible, holistic education for all, reaching out to underserved communities and nurturing the leaders of tomorrow. Join us in our journey to build a brighter, more compassionate world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full"
                style={{
                  backgroundColor: burgundy,
                  color: "white",
                  boxShadow: "0 4px 14px 0 rgba(107,26,26,0.15)",
                  transition: "all 0.2s",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  paddingTop: "1.25rem",
                  paddingBottom: "1.25rem",
                  fontWeight: 600,
                  fontSize: "1.125rem"
                }}
              >
                <Link href="/about">Learn More</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full bg-white/80"
                style={{
                  borderWidth: 2,
                  borderColor: burgundy,
                  color: burgundy,
                  fontWeight: 600,
                  fontSize: "1.125rem",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  paddingTop: "1.25rem",
                  paddingBottom: "1.25rem",
                  transition: "all 0.2s"
                }}
              >
                <Link href="/admissions">Admissions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: burgundy }}>Our Mission & Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a vision to make quality education accessible to all, Prema Jyothi English School has been 
              transforming lives and communities through holistic education for over a decade.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-8 pb-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#f3e6e6" }}
                >
                  <Target className="h-8 w-8" style={{ color: burgundy }} />
                </div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: burgundy }}>Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, high-quality education that nurtures every child's potential, fosters critical thinking, 
                  and develops compassionate leaders who will make a positive impact in their communities and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-8 pb-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#f3e6e6" }}
                >
                  <Lightbulb className="h-8 w-8" style={{ color: burgundy }} />
                </div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: burgundy }}>Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading educational institution that empowers students from all backgrounds to achieve academic 
                  excellence while developing strong character, leadership skills, and a commitment to social responsibility.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-8 pb-8 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#f3e6e6" }}
                >
                  <BookOpen className="h-8 w-8" style={{ color: burgundy }} />
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: burgundy }}>Quality Education</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive curriculum designed to develop critical thinking, creativity, and academic excellence in every student.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-8 pb-8 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#f3e6e6" }}
                >
                  <Heart className="h-8 w-8" style={{ color: burgundy }} />
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: burgundy }}>Holistic Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Focus on physical, emotional, and social development alongside academics to nurture well-rounded individuals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-8 pb-8 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#f3e6e6" }}
                >
                  <Users className="h-8 w-8" style={{ color: burgundy }} />
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: burgundy }}>Community Outreach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Extending quality education to rural and underserved areas, making a positive impact on communities beyond our campus.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* School Facilities Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: burgundy }}>Our Facilities</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              State-of-the-art facilities designed to support comprehensive learning and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 transition-all hover:shadow-lg overflow-hidden" style={{ borderColor: burgundy }}>
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <BookOpen className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-500">Library Image</p>
                </div>
              </div>
              <CardContent className="pt-6 pb-6">
                <h3 className="text-lg font-semibold mb-2" style={{ color: burgundy }}>Modern Library</h3>
                <p className="text-sm text-muted-foreground">Well-stocked library with digital resources and quiet study areas</p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg overflow-hidden" style={{ borderColor: burgundy }}>
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Award className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-500">Science Lab Image</p>
                </div>
              </div>
              <CardContent className="pt-6 pb-6">
                <h3 className="text-lg font-semibold mb-2" style={{ color: burgundy }}>Science Laboratories</h3>
                <p className="text-sm text-muted-foreground">Fully equipped labs for physics, chemistry, and biology experiments</p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg overflow-hidden" style={{ borderColor: burgundy }}>
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-500">Sports Ground Image</p>
                </div>
              </div>
              <CardContent className="pt-6 pb-6">
                <h3 className="text-lg font-semibold mb-2" style={{ color: burgundy }}>Sports Complex</h3>
                <p className="text-sm text-muted-foreground">Multi-purpose sports facilities including playground and indoor courts</p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg overflow-hidden" style={{ borderColor: burgundy }}>
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-500">Computer Lab Image</p>
                </div>
              </div>
              <CardContent className="pt-6 pb-6">
                <h3 className="text-lg font-semibold mb-2" style={{ color: burgundy }}>Computer Lab</h3>
                <p className="text-sm text-muted-foreground">Modern computer lab with high-speed internet and latest software</p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg overflow-hidden" style={{ borderColor: burgundy }}>
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-500">Cafeteria Image</p>
                </div>
              </div>
              <CardContent className="pt-6 pb-6">
                <h3 className="text-lg font-semibold mb-2" style={{ color: burgundy }}>Cafeteria</h3>
                <p className="text-sm text-muted-foreground">Healthy meal options prepared with fresh, nutritious ingredients</p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg overflow-hidden" style={{ borderColor: burgundy }}>
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <TreePine className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-500">Garden Image</p>
                </div>
              </div>
              <CardContent className="pt-6 pb-6">
                <h3 className="text-lg font-semibold mb-2" style={{ color: burgundy }}>Green Campus</h3>
                <p className="text-sm text-muted-foreground">Beautiful gardens and outdoor learning spaces for environmental education</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum & Academics Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: burgundy }}>Curriculum & Academics</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer comprehensive educational programs designed to nurture every aspect of a child's development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-6 pb-6 text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#f3e6e6" }}
                >
                  <BookMarked className="h-6 w-6" style={{ color: burgundy }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: burgundy }}>Primary Education</h3>
                <p className="text-sm text-muted-foreground">Grades 1-5</p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-6 pb-6 text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#f3e6e6" }}
                >
                  <GraduationCap className="h-6 w-6" style={{ color: burgundy }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: burgundy }}>Middle School</h3>
                <p className="text-sm text-muted-foreground">Grades 6-8</p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-6 pb-6 text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#f3e6e6" }}
                >
                  <Award className="h-6 w-6" style={{ color: burgundy }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: burgundy }}>High School</h3>
                <p className="text-sm text-muted-foreground">Grades 9-12</p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-6 pb-6 text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#f3e6e6" }}
                >
                  <Lightbulb className="h-6 w-6" style={{ color: burgundy }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: burgundy }}>Special Programs</h3>
                <p className="text-sm text-muted-foreground">After School Activities</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-semibold mb-6" style={{ color: burgundy }}>Core Subjects</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: burgundy }}></div>
                    <span className="text-muted-foreground">English Language & Literature</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: burgundy }}></div>
                    <span className="text-muted-foreground">Mathematics & Sciences</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: burgundy }}></div>
                    <span className="text-muted-foreground">Social Studies & History</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: burgundy }}></div>
                    <span className="text-muted-foreground">Computer Science & Technology</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: burgundy }}></div>
                    <span className="text-muted-foreground">Arts & Creative Expression</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-semibold mb-6" style={{ color: burgundy }}>Extracurricular Activities</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: burgundy }}></div>
                    <span className="text-muted-foreground">Sports & Physical Education</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: burgundy }}></div>
                    <span className="text-muted-foreground">Music & Performing Arts</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: burgundy }}></div>
                    <span className="text-muted-foreground">Debate & Public Speaking</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: burgundy }}></div>
                    <span className="text-muted-foreground">Community Service Projects</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: burgundy }}></div>
                    <span className="text-muted-foreground">Environmental & STEM Clubs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events & Activities Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: burgundy }}>Upcoming Events & Activities</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join us for exciting events and activities that enrich our school community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 transition-all hover:shadow-lg overflow-hidden" style={{ borderColor: burgundy }}>
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-500">Science Fair Image</p>
                </div>
              </div>
              <CardContent className="pt-6 pb-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-4 w-4 mr-2" style={{ color: burgundy }} />
                  <span className="text-sm font-medium" style={{ color: burgundy }}>March 15, 2024</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: burgundy }}>Annual Science Fair</h3>
                <p className="text-sm text-muted-foreground">Students showcase innovative projects and experiments</p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg overflow-hidden" style={{ borderColor: burgundy }}>
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-500">Sports Day Image</p>
                </div>
              </div>
              <CardContent className="pt-6 pb-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-4 w-4 mr-2" style={{ color: burgundy }} />
                  <span className="text-sm font-medium" style={{ color: burgundy }}>April 20, 2024</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: burgundy }}>Sports Day</h3>
                <p className="text-sm text-muted-foreground">Annual athletic competition and fun activities</p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg overflow-hidden" style={{ borderColor: burgundy }}>
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-500">Cultural Festival Image</p>
                </div>
              </div>
              <CardContent className="pt-6 pb-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-4 w-4 mr-2" style={{ color: burgundy }} />
                  <span className="text-sm font-medium" style={{ color: burgundy }}>May 10, 2024</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: burgundy }}>Cultural Festival</h3>
                <p className="text-sm text-muted-foreground">Celebrating diversity through music, dance, and art</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: burgundy }}>Photo Gallery</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A glimpse into life at Prema Jyothi English School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-square bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-500">Classroom Activities</p>
              </div>
            </div>
            <div className="aspect-square bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-500">Award Ceremony</p>
              </div>
            </div>
            <div className="aspect-square bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
              <div className="text-center">
                <Heart className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-500">Community Service</p>
              </div>
            </div>
            <div className="aspect-square bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
              <div className="text-center">
                <BookOpen className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-500">Library Activities</p>
              </div>
            </div>
            <div className="aspect-square bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
              <div className="text-center">
                <Globe className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-500">Science Lab</p>
              </div>
            </div>
            <div className="aspect-square bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
              <div className="text-center">
                <TreePine className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-500">Campus Life</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: burgundy }}>Our Achievements</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Celebrating excellence and impact in education and community development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#f3e6e6" }}
              >
                <Users className="h-10 w-10" style={{ color: burgundy }} />
              </div>
              <h3 className="text-3xl font-bold mb-2" style={{ color: burgundy }}>500+</h3>
              <p className="text-muted-foreground">Students Enrolled</p>
            </div>

            <div className="text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#f3e6e6" }}
              >
                <Award className="h-10 w-10" style={{ color: burgundy }} />
              </div>
              <h3 className="text-3xl font-bold mb-2" style={{ color: burgundy }}>95%</h3>
              <p className="text-muted-foreground">Pass Rate</p>
            </div>

            <div className="text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#f3e6e6" }}
              >
                <Globe className="h-10 w-10" style={{ color: burgundy }} />
              </div>
              <h3 className="text-3xl font-bold mb-2" style={{ color: burgundy }}>15+</h3>
              <p className="text-muted-foreground">Years of Service</p>
            </div>

            <div className="text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#f3e6e6" }}
              >
                <Heart className="h-10 w-10" style={{ color: burgundy }} />
              </div>
              <h3 className="text-3xl font-bold mb-2" style={{ color: burgundy }}>100%</h3>
              <p className="text-muted-foreground">Community Impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: burgundy }}>Latest News & Updates</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay informed about the latest happenings at Prema Jyothi English School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 transition-all hover:shadow-lg overflow-hidden" style={{ borderColor: burgundy }}>
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-500">New Program Image</p>
                </div>
              </div>
              <CardContent className="pt-6 pb-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-4 w-4 mr-2" style={{ color: burgundy }} />
                  <span className="text-sm font-medium" style={{ color: burgundy }}>February 28, 2024</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: burgundy }}>New STEM Program Launch</h3>
                <p className="text-sm text-muted-foreground">Introducing advanced science and technology programs for middle and high school students</p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg overflow-hidden" style={{ borderColor: burgundy }}>
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Award className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-500">Achievement Image</p>
                </div>
              </div>
              <CardContent className="pt-6 pb-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-4 w-4 mr-2" style={{ color: burgundy }} />
                  <span className="text-sm font-medium" style={{ color: burgundy }}>February 20, 2024</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: burgundy }}>Academic Excellence Award</h3>
                <p className="text-sm text-muted-foreground">School recognized for outstanding student performance in district competitions</p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg overflow-hidden" style={{ borderColor: burgundy }}>
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-500">Community Image</p>
                </div>
              </div>
              <CardContent className="pt-6 pb-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-4 w-4 mr-2" style={{ color: burgundy }} />
                  <span className="text-sm font-medium" style={{ color: burgundy }}>February 15, 2024</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: burgundy }}>Community Outreach Success</h3>
                <p className="text-sm text-muted-foreground">Students and teachers complete successful literacy program in rural areas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: burgundy }}>Our Dedicated Faculty</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meet our passionate educators who are committed to nurturing young minds and shaping futures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-6 pb-6 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#f3e6e6" }}
                >
                  <UserCheck className="h-8 w-8" style={{ color: burgundy }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: burgundy }}>Experienced Teachers</h3>
                <p className="text-sm text-muted-foreground">Qualified and dedicated educators with years of experience</p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-6 pb-6 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#f3e6e6" }}
                >
                  <Target className="h-8 w-8" style={{ color: burgundy }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: burgundy }}>Student-Centered</h3>
                <p className="text-sm text-muted-foreground">Focus on individual student needs and growth</p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-6 pb-6 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#f3e6e6" }}
                >
                  <TrendingUp className="h-8 w-8" style={{ color: burgundy }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: burgundy }}>Continuous Learning</h3>
                <p className="text-sm text-muted-foreground">Regular training and professional development</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: burgundy }}>What Parents Say</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hear from our community about the impact of Prema Jyothi English School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-6 pb-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5" style={{ color: burgundy }} fill="currentColor" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Prema Jyothi has transformed my child's learning experience. The teachers are dedicated and the environment is nurturing."
                </p>
                <div className="flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                    style={{ backgroundColor: "#f3e6e6" }}
                  >
                    <Users className="h-5 w-5" style={{ color: burgundy }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: burgundy }}>Mrs. Priya Sharma</p>
                    <p className="text-sm text-muted-foreground">Parent</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-6 pb-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5" style={{ color: burgundy }} fill="currentColor" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "The school's commitment to holistic education and community outreach is truly inspiring. My daughter loves going to school."
                </p>
                <div className="flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                    style={{ backgroundColor: "#f3e6e6" }}
                  >
                    <Users className="h-5 w-5" style={{ color: burgundy }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: burgundy }}>Mr. Rajesh Kumar</p>
                    <p className="text-sm text-muted-foreground">Parent</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight" style={{ color: burgundy }}>
              Connect With Us
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We’re here to help you start your journey. Reach out for admissions, programs, or any questions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
            {/* Contact Info Cards */}
            <Card className="border-2 shadow-none hover:shadow-xl transition-all" style={{ borderColor: burgundy }}>
              <CardContent className="flex flex-col items-center text-center pt-8 pb-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#f3e6e6" }}
                >
                  <MapPin className="h-8 w-8" style={{ color: burgundy }} />
                </div>
                <h3 className="text-xl font-semibold mb-1" style={{ color: burgundy }}>Visit Us</h3>
                <p className="text-muted-foreground mb-1">123 Education Street<br />Learning City, LC 12345</p>
                <p className="text-xs text-muted-foreground">Mon - Fri: 8:00 AM - 5:00 PM</p>
              </CardContent>
            </Card>
            <Card className="border-2 shadow-none hover:shadow-xl transition-all" style={{ borderColor: burgundy }}>
              <CardContent className="flex flex-col items-center text-center pt-8 pb-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#f3e6e6" }}
                >
                  <Phone className="h-8 w-8" style={{ color: burgundy }} />
                </div>
                <h3 className="text-xl font-semibold mb-1" style={{ color: burgundy }}>Call Us</h3>
                <p className="text-muted-foreground mb-1">Main: +1 (555) 123-4567<br />Admissions: +1 (555) 123-4568</p>
                <p className="text-xs text-muted-foreground">Mon - Fri: 8:00 AM - 5:00 PM</p>
              </CardContent>
            </Card>
            <Card className="border-2 shadow-none hover:shadow-xl transition-all" style={{ borderColor: burgundy }}>
              <CardContent className="flex flex-col items-center text-center pt-8 pb-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#f3e6e6" }}
                >
                  <Mail className="h-8 w-8" style={{ color: burgundy }} />
                </div>
                <h3 className="text-xl font-semibold mb-1" style={{ color: burgundy }}>Email Us</h3>
                <p className="text-muted-foreground mb-1">info@pjes.edu<br />admissions@pjes.edu</p>
                <p className="text-xs text-muted-foreground">Replies within 24 hours</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Interactive Map Card */}
            <Card className="border-2 shadow-none hover:shadow-xl transition-all overflow-hidden flex flex-col" style={{ borderColor: burgundy }}>
              <div className="aspect-video bg-gradient-to-tr from-gray-200 via-gray-100 to-gray-300 flex items-center justify-center">
                <a
                  href="https://maps.google.com/?q=123+Education+Street+Learning+City"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full flex flex-col items-center justify-center group"
                  tabIndex={0}
                  aria-label="Open interactive map in new tab"
                >
                  <MapPin className="h-20 w-20 mx-auto mb-3 text-gray-400 group-hover:text-red-400 transition-colors" />
                  <p className="text-base text-gray-600 font-medium group-hover:text-gray-800">Interactive Map</p>
                  <p className="text-xs text-gray-400 mt-1 group-hover:text-gray-600">Click to view directions</p>
                </a>
              </div>
              <CardContent className="pt-6 pb-6">
                <h3 className="text-lg font-semibold mb-2" style={{ color: burgundy }}>Find Us</h3>
                <p className="text-sm text-muted-foreground">Use our interactive map to get directions to our campus.</p>
              </CardContent>
            </Card>

            {/* Quick Contact Form */}
            <Card className="border-2 shadow-none hover:shadow-xl transition-all" style={{ borderColor: burgundy }}>
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: burgundy }}>Quick Contact</h3>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: burgundy }}>Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
                      style={{ borderColor: burgundy }}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: burgundy }}>Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
                      style={{ borderColor: burgundy }}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: burgundy }}>Message</label>
                    <textarea
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
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: burgundy }}>Ready to Join Our Community?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Discover how Prema Jyothi English School can provide your child with an exceptional educational experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full"
                style={{
                  backgroundColor: burgundy,
                  color: "white",
                  transition: "all 0.2s"
                }}
              >
                <Link href="/admissions">Apply Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full"
                style={{
                  borderWidth: 2,
                  borderColor: burgundy,
                  color: burgundy,
                  transition: "all 0.2s"
                }}
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
     
    </div>
  )
}
