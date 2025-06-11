import { getListingBySlug } from "@/lib/listings";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import PropertyImagesCarousel from "@/components/PropertyImagesCarousel";

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const listing = await getListingBySlug(params.slug);
  return listing ? { title: `${listing.title} | Nassira Properties` } : {};
};

export default async function ListingDetail({ params }: { params: { slug: string } }) {
  const listing = await getListingBySlug(params.slug);
  if (!listing) notFound();

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <PropertyImagesCarousel 
        images={listing.images} 
        title={listing.title}
        className="h-[500px] w-full mb-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
          <p className="text-gray-600 mb-4">{listing.location}</p>
          <p className="text-2xl font-semibold mb-6">AED {listing.price.toLocaleString()}</p>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-600">Bedrooms</p>
              <p className="text-xl font-semibold">{listing.bedrooms}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-600">Bathrooms</p>
              <p className="text-xl font-semibold">{listing.bathrooms}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-600">Area</p>
              <p className="text-xl font-semibold">{listing.area} sq ft</p>
            </div>
          </div>

          <article className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            {listing.description}
          </article>
        </div>

        <div className="md:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Agent</h2>
            <div className="flex items-center gap-4 mb-6">
              {listing.agent.imageUrl && (
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <Image
                    src={listing.agent.imageUrl}
                    alt={listing.agent.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-medium">{listing.agent.name}</p>
                <p className="text-sm text-gray-600">{listing.agent.phone}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <a
                href={`tel:${listing.agent.phone}`}
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Call Agent
              </a>
              <a
                href={`mailto:${listing.agent.email}`}
                className="block w-full bg-gray-100 text-gray-800 text-center py-3 rounded-lg hover:bg-gray-200 transition"
              >
                Email Agent
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
