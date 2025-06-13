import { PageLayout } from "@/components/page-layout"
import ListingCard from "@/components/ListingCard"
import { Button } from "@/components/ui/button"
import { getAllListings } from "@/lib/listings"
import { DecorativePattern } from "@/components/decorative-pattern"
import type { Listing } from "@/types/listing"

// Helper function to convert MongoDB objects to plain JS values
function serializeListing(listing: Listing): Listing {
  return {
    ...listing,
    _id: listing._id?.toString(),
    createdAt: listing.createdAt?.toString(),
    updatedAt: listing.updatedAt?.toString(),
  };
}

export default async function PropertiesPage() {
  // Fetch all listings from MongoDB
  const listings = await getAllListings()
  
  // Convert MongoDB objects to plain JS values
  const serializedListings = listings.map(serializeListing)

  return (
    <PageLayout
      title="Luxury Properties"
      subtitle="Discover our exclusive collection of Dubai's most prestigious properties"
    >
      <section className="pt-[56px] md:pt-[80px] lg:pt-[96px] pb-24 bg-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5">
          <DecorativePattern />
        </div>

        <div className="container max-w-container px-4 sm:px-6 lg:px-8 relative z-10">
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
            {serializedListings.map((listing) => (
              <ListingCard key={listing._id} listing={listing} />
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-body text-brand-navy mb-8">
              Can't find what you're looking for? Contact our team for personalized property recommendations.
            </p>
            <Button asChild className="bg-brand-gold hover:bg-brand-gold/80 text-brand-navy font-garamond text-lg px-10 py-6">
              <a href="/contact">Contact Our Team</a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

