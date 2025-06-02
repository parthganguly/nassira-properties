import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DecorativePattern } from "@/components/decorative-pattern"
import { PageLayout } from "@/components/page-layout"

const properties = [
  {
    id: 1,
    image: "/images/valonte.png",
    title: "Valonte Tower Penthouse",
    location: "Business Bay, Dubai",
    price: "AED 50,000,000",
    bedrooms: 4,
    bathrooms: 6,
    area: "10,000 sq ft",
    description: "Experience luxury living at its finest in this exquisite penthouse at Valonte Tower. This stunning residence offers breathtaking views of the Dubai skyline and the iconic Burj Khalifa. The property features a spacious open-plan living area, a state-of-the-art kitchen, and expansive terraces perfect for entertaining. The master suite includes a walk-in closet and a luxurious bathroom with premium finishes. Residents enjoy access to world-class amenities including a swimming pool, fitness center, and 24/7 concierge service.",
    agent: {
      name: "Sarah Johnson",
      phone: "+971 50 123 4567",
      email: "sarah.johnson@nassira.com",
      image: "/images/agent1.jpg"
    }
  },
  {
    id: 2,
    image: "/images/Nad-Villa.png",
    title: "Nad Al Sheba Villa",
    location: "Nad Al Sheba Gardens, Dubai",
    price: "AED 11,000,000",
    bedrooms: 5,
    bathrooms: 7,
    area: "5,073 sq ft",
    description: "This magnificent villa in Nad Al Sheba Gardens offers the perfect blend of luxury and comfort. The property features a grand entrance, spacious living areas, and a beautiful garden with a private pool. The modern kitchen is equipped with high-end appliances, and the bedrooms offer ample space and natural light. The master suite includes a private balcony and a luxurious en-suite bathroom. The community offers excellent amenities including parks, sports facilities, and easy access to major highways.",
    agent: {
      name: "Michael Chen",
      phone: "+971 50 234 5678",
      email: "michael.chen@nassira.com",
      image: "/images/agent2.jpg"
    }
  },
  {
    id: 3,
    image: "/images/Distict-One.jpg",
    title: "District One Villa",
    location: "District One Villas, Dubai",
    price: "AED 46,000,000",
    bedrooms: 6,
    bathrooms: 7,
    area: "13,733 sq ft",
    description: "This exceptional villa in District One offers unparalleled luxury and sophistication. The property features a stunning contemporary design with high ceilings, floor-to-ceiling windows, and premium finishes throughout. The outdoor area includes a private pool, landscaped garden, and multiple entertainment areas. The gourmet kitchen is equipped with top-of-the-line appliances, and the bedrooms offer spacious layouts with en-suite bathrooms. Residents enjoy access to the Meydan Golf Course and other exclusive community amenities.",
    agent: {
      name: "Emma Wilson",
      phone: "+971 50 345 6789",
      email: "emma.wilson@nassira.com",
      image: "/images/agent3.jpg"
    }
  }
]

export default function PropertyDetails({ params }: { params: { id: string } }) {
  const property = properties.find(p => p.id === parseInt(params.id))

  if (!property) {
    notFound()
  }

  return (
    <PageLayout title={property.title} subtitle={property.location}>
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-navy/40" />
      </div>

      {/* Main Content */}
      <section className="py-24 bg-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Property Details */}
            <div className="lg:col-span-2">
              <div className="bg-brand-cream p-8 rounded-lg border border-brand-gold/30 shadow-lg mb-8">
                <h2 className="text-4xl font-garamond uppercase tracking-wider mb-8 text-brand-gold">Property Details</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <p className="text-brand-navy/60 uppercase text-sm tracking-wider mb-2">Price</p>
                    <p className="text-2xl font-medium text-brand-gold">{property.price}</p>
                  </div>
                  <div>
                    <p className="text-brand-navy/60 uppercase text-sm tracking-wider mb-2">Bedrooms</p>
                    <p className="text-2xl font-medium text-brand-navy">{property.bedrooms}</p>
                  </div>
                  <div>
                    <p className="text-brand-navy/60 uppercase text-sm tracking-wider mb-2">Bathrooms</p>
                    <p className="text-2xl font-medium text-brand-navy">{property.bathrooms}</p>
                  </div>
                  <div>
                    <p className="text-brand-navy/60 uppercase text-sm tracking-wider mb-2">Area</p>
                    <p className="text-2xl font-medium text-brand-navy">{property.area}</p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-cream p-8 rounded-lg border border-brand-gold/30 shadow-lg">
                <h2 className="text-4xl font-garamond uppercase tracking-wider mb-8 text-brand-gold">Description</h2>
                <p className="text-body text-brand-navy">{property.description}</p>
              </div>
            </div>

            {/* Agent Contact */}
            <div className="lg:col-span-1">
              <div className="bg-brand-cream p-8 rounded-lg border border-brand-gold/30 shadow-lg sticky top-8">
                <h2 className="text-4xl font-garamond uppercase tracking-wider mb-8 text-brand-gold">Contact Agent</h2>
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 rounded-full overflow-hidden mr-4 border-2 border-brand-gold/50">
                    <Image
                      src={property.agent.image}
                      alt={property.agent.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xl font-medium text-brand-gold">{property.agent.name}</p>
                    <p className="text-brand-navy/60">Property Specialist</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-brand-navy/60 uppercase text-sm tracking-wider mb-2">Phone</p>
                    <p className="text-lg text-brand-navy">{property.agent.phone}</p>
                  </div>
                  <div>
                    <p className="text-brand-navy/60 uppercase text-sm tracking-wider mb-2">Email</p>
                    <p className="text-lg text-brand-navy">{property.agent.email}</p>
                  </div>
                </div>
                <Button className="w-full mt-8 py-6 bg-brand-gold hover:bg-brand-gold/80 text-brand-navy">
                  Schedule Viewing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
} 