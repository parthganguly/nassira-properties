"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import type { Listing } from "@/types/listing";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link href={`/listings/${listing.slug}`} className="block rounded-2xl shadow p-4 transition hover:shadow-lg">
      <div className="relative h-48 w-full mb-3">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation
          className="h-full w-full rounded-xl"
        >
          {listing.images.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <Image
                src={imageUrl}
                alt={`${listing.title} - Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <h3 className="text-lg font-semibold">{listing.title}</h3>
      <p className="text-sm text-gray-600">{listing.location}</p>
      <p className="mt-1 font-medium">AED {listing.price.toLocaleString()}</p>

      <div className="mt-3 pt-3 border-t">
        <div className="flex items-center gap-3">
          {listing.agent.imageUrl && (
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image
                src={listing.agent.imageUrl}
                alt={listing.agent.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <p className="text-sm font-medium">{listing.agent.name}</p>
            <p className="text-xs text-gray-600">{listing.agent.phone}</p>
          </div>
        </div>
      </div>
    </Link>
  );
} 