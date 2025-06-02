import { getAllListings } from "@/lib/listings";
import ListingGrid from "@/components/ListingGrid";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Property Listings | Nassira Properties" };

export default async function ListingsPage() {
  const listings = await getAllListings();
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Available Properties</h1>
      <ListingGrid listings={listings} />
    </main>
  );
}
