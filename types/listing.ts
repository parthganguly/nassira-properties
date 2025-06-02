// types/listing.ts

export interface Listing {
    _id?: string;           // MongoDB document ID
    slug: string;           // URL-safe identifier, e.g. "luxury-villa-dubai"
    title: string;          // Property title
    location: string;       // Address or general location
    price: number;          // Numeric price
    bedrooms: number;       // Number of bedrooms
    bathrooms: number;      // Number of bathrooms
    area: number;           // Numeric area (e.g. square feet or meters)
    description: string;    // Full property description
    imageUrl: string;       // Main image URL
    featured?: boolean;     // Highlight flag
    createdAt?: string;     // ISO date string
    updatedAt?: string;     // ISO date string
  }
  
  export interface ListingResponse {
    success: boolean;
    data?: Listing | Listing[];
    error?: string;
  }
  