import Link from "next/link";
import type { Listing } from "@/types/listing";

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link href={`/listings/${listing.slug}`} className="block rounded-2xl shadow p-4 transition hover:shadow-lg">
      <img src={listing.imageUrl} alt={listing.title} className="h-48 w-full object-cover rounded-xl mb-3" />
      <h3 className="text-lg font-semibold">{listing.title}</h3>
      <p className="text-sm text-gray-600">{listing.location}</p>
      <p className="mt-1 font-medium">AED {listing.price.toLocaleString()}</p>
    </Link>
  );
}
