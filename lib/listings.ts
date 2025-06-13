import { ObjectId } from "mongodb";
import clientPromise from "./mongodb";
import type { Listing, MongoListing } from "@/types/listing";
import { normalizeSlug, generateSlug, generateUniqueSlug } from "./slug";

/* COLLECTION HELPER */
export async function listingsCol() {
  const client = await clientPromise;
  return client.db().collection<MongoListing>("listings");
}

/* CRUD HELPERS */
/**
 * Retrieves paginated listings from the database
 * @param page - The page number (1-based indexing)
 * @param limit - Number of items per page
 * @returns Promise<Listing[]> - Array of listings for the requested page
 * 
 * @example
 * // Get first page with 10 items
 * const firstPage = await getAllListings(1, 10);
 * 
 * // Get second page with 20 items
 * const secondPage = await getAllListings(2, 20);
 */
export async function getAllListings(page: number = 1, limit: number = 10): Promise<Listing[]> {
  const skip = (page - 1) * limit;
  const listings = await (await listingsCol())
    .find({})
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .toArray();
  
  // Convert MongoDB objects to plain JS values
  return listings.map(listing => ({
    ...listing,
    _id: listing._id.toString(),
    createdAt: listing.createdAt,
    updatedAt: listing.updatedAt,
  }));
}

export async function getListingById(id: string): Promise<Listing | null> {
  const listing = await (await listingsCol()).findOne({ _id: new ObjectId(id) });
  if (!listing) return null;
  
  return {
    ...listing,
    _id: listing._id.toString(),
    createdAt: listing.createdAt,
    updatedAt: listing.updatedAt,
  };
}

export async function getListingBySlug(slug: string): Promise<Listing | null> {
  const normalizedSlug = normalizeSlug(slug);
  const listing = await (await listingsCol()).findOne({ slug: normalizedSlug });
  if (!listing) return null;
  
  return {
    ...listing,
    _id: listing._id.toString(),
    createdAt: listing.createdAt,
    updatedAt: listing.updatedAt,
  };
}

export async function createListing(data: Omit<Listing, "_id" | "createdAt" | "updatedAt">): Promise<Listing> {
  const now = new Date().toISOString();
  
  // Generate a URL-safe slug from the title
  const baseSlug = generateSlug(data.title);
  
  // Get all existing slugs to ensure uniqueness
  const existingSlugs = await (await listingsCol())
    .find({}, { projection: { slug: 1 } })
    .map(doc => doc.slug)
    .toArray();
  
  // Generate a unique slug
  const uniqueSlug = generateUniqueSlug(baseSlug, existingSlugs);
  
  const doc: MongoListing = { 
    ...data, 
    _id: new ObjectId(),
    slug: uniqueSlug,
    createdAt: now, 
    updatedAt: now 
  };
  
  const res = await (await listingsCol()).insertOne(doc);
  return {
    ...doc,
    _id: doc._id.toString(),
  };
}

export async function updateListing(id: string, data: Partial<Listing>): Promise<Listing | null> {
  const listing = await getListingById(id);
  if (!listing) return null;

  // Only regenerate slug if title is being updated
  let updatedData = { ...data };
  if (data.title && data.title !== listing.title) {
    const baseSlug = generateSlug(data.title);
    const existingSlugs = await (await listingsCol())
      .find({ _id: { $ne: new ObjectId(id) } }, { projection: { slug: 1 } })
      .map(doc => doc.slug)
      .toArray();
    updatedData.slug = generateUniqueSlug(baseSlug, existingSlugs);
  }

  // Remove _id from update data as it shouldn't be updated
  const { _id, ...updateData } = updatedData;

  const updatedListing = await (await listingsCol()).findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { ...updateData, updatedAt: new Date().toISOString() } },
    { returnDocument: "after" }
  );
  
  if (!updatedListing) return null;
  
  return {
    ...updatedListing,
    _id: updatedListing._id.toString(),
  };
}

export async function deleteListing(id: string): Promise<{ deleted: boolean }> {
  await (await listingsCol()).deleteOne({ _id: new ObjectId(id) });
  return { deleted: true };
}
