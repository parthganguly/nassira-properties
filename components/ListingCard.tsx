"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import type { Listing } from "@/types/listing";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import styles from "./ListingCard.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link href={`/listings/${encodeURIComponent(listing.slug)}`}>
      <Card className="card-elegant overflow-hidden group">
        <div className="relative h-64 overflow-hidden">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              bulletClass: styles.swiperPaginationBullet,
              bulletActiveClass: styles.swiperPaginationBulletActive,
              el: `.${styles.swiperPagination}`,
            }}
            navigation={{
              nextEl: `.${styles.swiperButtonNext}`,
              prevEl: `.${styles.swiperButtonPrev}`,
            }}
            className="h-full w-full"
          >
            {listing.images.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={imageUrl}
                  alt={`${listing.title} - Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </SwiperSlide>
            ))}
            <div className={styles.swiperPagination} />
            <div className={styles.swiperButtonNext} />
            <div className={styles.swiperButtonPrev} />
          </Swiper>
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-gold text-lg font-garamond uppercase tracking-elegant flex items-center">
              View Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
        <CardContent className="p-6 border-t border-gold/30">
          <h3 className="heading-primary text-xl mb-2">{listing.title}</h3>
          <div className="flex items-center text-navy/70 mb-4">
            <MapPin className="h-4 w-4 mr-1 text-gold" />
            <span className="text-sm">{listing.location}</span>
          </div>
          <p className="text-xl font-medium text-gold mb-4">AED {listing.price.toLocaleString()}</p>
          <div className="flex justify-between text-sm text-navy/70">
            <span>{listing.bedrooms} Bedrooms</span>
            <span>{listing.bathrooms} Bathrooms</span>
            <span>{listing.area.toLocaleString()} sq ft</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
} 