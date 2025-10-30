import Image from "next/image"

const burgundy = "#800020"
const accentBg = "#f3e6e6"

// Example static image data - you can easily swap for dynamic later
const galleryImages = Array.from({ length: 50 }, (_, idx) => idx + 4)
  .filter(num => num !== 5)
  .map(num => ({
    src: `/${num}.jpeg`,
    alt: `Gallery Image ${num}`,
  }));


export default function GalleryPage() {
  return (
    <div>
      {/* Header */}
      <section
        className="py-16 md:py-24"
        style={{
          background: "linear-gradient(135deg, #f3e6e6 0%, #fff 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-3 text-center tracking-tight"
            style={{ color: burgundy }}
          >
            Photo Gallery
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Explore memorable moments and vibrant events from life at Prema Jyothi English School.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12" style={{ background: accentBg }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {galleryImages.map((img, idx) => (
              <div
                key={img.src}
                className="overflow-hidden rounded-xl shadow transition-all hover:shadow-lg bg-white"
                style={{
                  border: `2px solid ${burgundy}`,
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={500}
                  height={350}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  style={{
                    background: accentBg,
                  }}
                  loading="lazy"
                />
                <div
                  className="p-3 text-center"
                  style={{ color: burgundy, fontWeight: 500 }}
                >
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
