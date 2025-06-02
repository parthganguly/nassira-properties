import { PageLayout } from "@/components/page-layout"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"

export default function PropertiesPage() {
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
    <PageLayout
      title="Luxury Properties"
      subtitle="Discover our exclusive collection of Dubai's most prestigious properties"
    >
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8">
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

          <div className="mt-16 text-center">
            <p className="garamond text-lg text-ivory/80 mb-8">
              Can't find what you're looking for? Contact our team for personalized property recommendations.
            </p>
            <Button asChild className="bg-gold hover:bg-gold-light text-black garamond text-lg px-10 py-6">
              <a href="/contact">Contact Our Team</a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

