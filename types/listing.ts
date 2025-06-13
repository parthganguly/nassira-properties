// types/listing.ts
import { ObjectId } from "mongodb";

export interface Agent {
  name: string;
  phone: string;
  email: string;
  imageUrl?: string;
}

// Base interface for common fields
interface BaseListing {
  slug: string;           // URL-safe identifier, e.g. "luxury-villa-dubai"
  title: string;          // Property title
  location: string;       // Address or general location
  price: number;          // Numeric price
  bedrooms: number;       // Number of bedrooms
  bathrooms: number;      // Number of bathrooms
  area: number;           // Numeric area (e.g. square feet or meters)
  description: string;    // Full property description
  images: string[];       // Array of image URLs
  featured?: boolean;     // Highlight flag
  agent: Agent;          // Agent information
}

// MongoDB version with ObjectId
export interface MongoListing extends BaseListing {
  _id: ObjectId;
  createdAt: string;
  updatedAt: string;
}

// Serialized version with string IDs
export interface Listing extends BaseListing {
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ListingResponse {
  success: boolean;
  data?: Listing | Listing[];
  error?: string;
}
  