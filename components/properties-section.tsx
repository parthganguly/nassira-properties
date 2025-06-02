import { PropertyCard } from "@/components/property-card"
import { DecorativePattern } from "@/components/decorative-pattern"
import { Button } from "@/components/ui/button"

export function PropertiesSection() {
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
    },
  ]

  return (
    <section id="properties" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5">
        <DecorativePattern />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-garamond uppercase tracking-wider mb-6 text-brand-gold">Featured Properties</h2>
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-brand-gold"></div>
            <div className="w-16 h-16 mx-4 relative">
              <DecorativePattern opacity="opacity-70" />
            </div>
            <div className="h-px w-16 bg-brand-gold"></div>
          </div>
          <p className="text-body text-brand-navy max-w-2xl mx-auto">
            Discover our handpicked selection of Dubai's most prestigious properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              image={property.image}
              title={property.title}
              location={property.location}
              price={property.price}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              area={property.area}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="bg-brand-gold hover:bg-brand-gold/80 text-brand-navy font-garamond text-lg px-10 py-6">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  )
}

