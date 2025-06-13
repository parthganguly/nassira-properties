import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DecorativePattern } from "@/components/decorative-pattern"
import { PageLayout } from "@/components/page-layout"
import { getListingById } from "@/lib/listings"
import PropertyImagesCarousel from "@/components/PropertyImagesCarousel"

export default async function PropertyDetails({ params }: { params: { id: string } }) {
  const listing = await getListingById(params.id)

  if (!listing) {
    notFound()
  }

  return (
    <PageLayout title={listing.title} subtitle={listing.location}>
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <PropertyImagesCarousel 
          images={listing.images} 
          title={listing.title}
          className="h-full w-full"
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
                    <p className="text-2xl font-medium text-brand-gold">AED {listing.price.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-brand-navy/60 uppercase text-sm tracking-wider mb-2">Bedrooms</p>
                    <p className="text-2xl font-medium text-brand-navy">{listing.bedrooms}</p>
                  </div>
                  <div>
                    <p className="text-brand-navy/60 uppercase text-sm tracking-wider mb-2">Bathrooms</p>
                    <p className="text-2xl font-medium text-brand-navy">{listing.bathrooms}</p>
                  </div>
                  <div>
                    <p className="text-brand-navy/60 uppercase text-sm tracking-wider mb-2">Area</p>
                    <p className="text-2xl font-medium text-brand-navy">{listing.area.toLocaleString()} sq ft</p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-cream p-8 rounded-lg border border-brand-gold/30 shadow-lg">
                <h2 className="text-4xl font-garamond uppercase tracking-wider mb-8 text-brand-gold">Description</h2>
                <p className="text-body text-brand-navy">{listing.description}</p>
              </div>
            </div>

            {/* Agent Contact */}
            <div className="lg:col-span-1">
              <div className="bg-brand-cream p-8 rounded-lg border border-brand-gold/30 shadow-lg sticky top-8">
                <h2 className="text-4xl font-garamond uppercase tracking-wider mb-8 text-brand-gold">Contact Agent</h2>
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 rounded-full overflow-hidden mr-4 border-2 border-brand-gold/50">
                    <Image
                      src={listing.agent.imageUrl}
                      alt={listing.agent.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xl font-medium text-brand-gold">{listing.agent.name}</p>
                    <p className="text-brand-navy/60">Property Specialist</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-brand-navy/60 uppercase text-sm tracking-wider mb-2">Phone</p>
                    <p className="text-lg text-brand-navy">{listing.agent.phone}</p>
                  </div>
                  <div>
                    <p className="text-brand-navy/60 uppercase text-sm tracking-wider mb-2">Email</p>
                    <p className="text-lg text-brand-navy">{listing.agent.email}</p>
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