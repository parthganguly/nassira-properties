// components/PropertyCard.tsx

import { Property } from '@/types/property';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { formatCurrency } from '@/lib/utils';

interface PropertyCardProps extends Omit<Property, '_id'> {
  id: string;
}

export default function PropertyCard({
  id,
  title,
  location,
  price,
  bedrooms,
  imageUrl,
}: PropertyCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-[#2E2E2E]">{title}</h3>
        <p className="mb-2 text-sm text-gray-600">{location}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-[#D4AF37]">
            {formatCurrency(price)}
          </span>
          <span className="flex items-center gap-1 text-sm text-[#2E2E2E]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            {bedrooms} {bedrooms === 1 ? 'bedroom' : 'bedrooms'}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
