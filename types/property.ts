export interface Property {
  _id?: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  imageUrl: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PropertyResponse {
  success: boolean;
  data?: Property | Property[];
  error?: string;
} 