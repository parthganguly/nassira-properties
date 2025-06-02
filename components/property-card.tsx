import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

interface PropertyCardProps {
  image: string
  title: string
  location: string
  price: string
  bedrooms: number
  bathrooms: number
  area: string
  id: number
}

export function PropertyCard({
  image,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  id,
}: PropertyCardProps) {
  return (
    <Link href={`/properties/${id}`}>
      <Card className="card-elegant overflow-hidden group">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
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
          <h3 className="heading-primary text-xl mb-2">{title}</h3>
          <div className="flex items-center text-navy/70 mb-4">
            <MapPin className="h-4 w-4 mr-1 text-gold" />
            <span className="text-sm">{location}</span>
          </div>
          <p className="text-xl font-medium text-gold mb-4">{price}</p>
          <div className="flex justify-between text-sm text-navy/70">
            <span>{bedrooms} Bedrooms</span>
            <span>{bathrooms} Bathrooms</span>
            <span>{area}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

