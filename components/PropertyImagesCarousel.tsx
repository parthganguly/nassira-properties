"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface PropertyImagesCarouselProps {
  images: string[];
  title: string;
  className?: string;
}

export default function PropertyImagesCarousel({ 
  images, 
  title,
  className = "h-[500px] w-full"
}: PropertyImagesCarouselProps) {
  return (
    <div className={`relative ${className}`}>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        className="h-full w-full rounded-2xl"
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <Image
              src={imageUrl}
              alt={`${title} - Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 