import ListingCard from "./ListingCard";
import type { Listing } from "@/types/listing";

export default function ListingGrid({ listings }: { listings: Listing[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {listings.map(l => (
        <ListingCard key={l._id.toString()} listing={l} />
      ))}
    </div>
  );
}
