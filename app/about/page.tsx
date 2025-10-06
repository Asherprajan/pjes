import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, BookOpen, Users, Heart, Lightbulb } from "lucide-react"

const burgundy = "#800020"
const accentBg = "#f3e6e6"

export default function AboutPage() {
  return (
    <div>
      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-5xl font-extrabold mb-8 text-center tracking-tight"
              style={{ color: burgundy }}
            >
              About Us
            </h1>

            <div className="prose prose-lg max-w-none">
              <h2
                className="text-2xl md:text-3xl font-semibold mb-6"
                style={{ color: burgundy }}
              >
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Prema Jyothi English School was founded with a simple yet powerful vision: to provide quality education
                infused with compassion and community values. What began as a small initiative to serve local children
                has blossomed into a comprehensive educational institution that touches lives across multiple
                communities.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our journey has been marked by dedication, innovation, and an unwavering commitment to educational
                excellence. We believe that every child deserves access to quality education, regardless of their
                background or circumstances.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, PJES stands as a testament to what can be achieved when education is combined with compassion,
                reaching not just our campus students but extending our impact through various outreach programs to
                rural and underserved communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16" style={{ background: "#f3e6e6" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{ color: burgundy }}
          >
            Vision & Mission
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-8 pb-8">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: accentBg }}
                >
                  <Eye className="h-7 w-7" style={{ color: burgundy }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: burgundy }}>
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading educational institution that nurtures compassionate, knowledgeable, and socially
                  responsible citizens.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-8 pb-8">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#ffe5b4" }}
                >
                  <Target className="h-7 w-7" style={{ color: burgundy }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: burgundy }}>
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Provide quality education that develops academic excellence, character, and community values in every
                  student.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-8 pb-8">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: accentBg }}
                >
                  <BookOpen className="h-7 w-7" style={{ color: burgundy }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: burgundy }}>
                  Academic Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive curriculum with modern teaching methods to ensure students achieve their full potential.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-8 pb-8">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#ffe5b4" }}
                >
                  <Heart className="h-7 w-7" style={{ color: burgundy }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: burgundy }}>
                  Character Building
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Instilling values of compassion, integrity, and respect through daily interactions and activities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-8 pb-8">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: accentBg }}
                >
                  <Users className="h-7 w-7" style={{ color: burgundy }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: burgundy }}>
                  Community Focus
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Extending education beyond campus through outreach programs serving rural and underserved areas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-8 pb-8">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#ffe5b4" }}
                >
                  <Lightbulb className="h-7 w-7" style={{ color: burgundy }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: burgundy }}>
                  Innovation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Embracing modern educational practices and technology to enhance learning experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Outreach Activities Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{ color: burgundy }}
          >
            Outreach Activities
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-8 pb-8">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: accentBg }}
                >
                  <BookOpen className="h-7 w-7" style={{ color: burgundy }} />
                </div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: burgundy }}>
                  Educational Outreach
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We extend quality education to rural and remote areas through mobile learning centers and satellite
                  classrooms. Our dedicated teachers travel to underserved communities, bringing educational resources
                  and opportunities to children who might otherwise lack access.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="font-bold" style={{ color: burgundy, marginTop: 4 }}>•</span>
                    <span>Mobile learning centers in 5 rural villages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold" style={{ color: burgundy, marginTop: 4 }}>•</span>
                    <span>Free educational materials and resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold" style={{ color: burgundy, marginTop: 4 }}>•</span>
                    <span>After-school tutoring programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: burgundy }}>
              <CardContent className="pt-8 pb-8">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#ffe5b4" }}
                >
                  <Users className="h-7 w-7" style={{ color: burgundy }} />
                </div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: burgundy }}>
                  Community Development
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Beyond academics, we engage in holistic community development initiatives. Our programs include health
                  awareness camps, skill development workshops for parents, and environmental conservation projects that
                  involve students and community members alike.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="font-bold" style={{ color: burgundy, marginTop: 4 }}>•</span>
                    <span>Health and hygiene awareness programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold" style={{ color: burgundy, marginTop: 4 }}>•</span>
                    <span>Parent skill development workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold" style={{ color: burgundy, marginTop: 4 }}>•</span>
                    <span>Environmental conservation initiatives</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Leadership Messages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card
              className="border-2 transition-all hover:shadow-lg"
              style={{ borderColor: burgundy, background: accentBg }}
            >
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: burgundy }}>
                  Principal's Desk
                </h3>
                <p className="text-muted-foreground leading-relaxed italic mb-4">
                  "Education is not just about academic achievement; it's about shaping character, building confidence,
                  and nurturing compassion. At PJES, we strive to create an environment where every child feels valued
                  and empowered to reach their full potential."
                </p>
                <p className="font-medium" style={{ color: burgundy }}>
                  — Principal, Prema Jyothi English School
                </p>
              </CardContent>
            </Card>

            <Card
              className="border-2 transition-all hover:shadow-lg"
              style={{ borderColor: burgundy, background: "#ffe5b4" }}
            >
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: burgundy }}>
                  Chairman's Desk
                </h3>
                <p className="text-muted-foreground leading-relaxed italic mb-4">
                  "Our vision has always been to make quality education accessible to all. Through our outreach programs
                  and partnerships, we are committed to breaking down barriers and creating opportunities for children
                  from all backgrounds to succeed."
                </p>
                <p className="font-medium" style={{ color: burgundy }}>
                  — Chairman, Prema Jyothi English School
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
