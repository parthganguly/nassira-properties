import { getListingBySlug } from "@/lib/listings";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const listing = await getListingBySlug(params.slug);
  return listing ? { title: `${listing.title} | Nassira Properties` } : {};
};

export default async function ListingDetail({ params }: { params: { slug: string } }) {
  const listing = await getListingBySlug(params.slug);
  if (!listing) notFound();

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <img src={listing.imageUrl} alt={listing.title} className="w-full h-96 object-cover rounded-2xl mb-6" />
      <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
      <p className="text-gray-600 mb-4">{listing.location}</p>
      <p className="text-2xl font-semibold mb-6">AED {listing.price.toLocaleString()}</p>
      <article className="prose max-w-none">{listing.description}</article>
    </main>
  );
}
