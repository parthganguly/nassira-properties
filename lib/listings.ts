import { ObjectId } from "mongodb";
import clientPromise from "./mongodb";
import type { Listing } from "@/types/listing";

/* COLLECTION HELPER */
export async function listingsCol() {
  const client = await clientPromise;
  return client.db().collection<Listing>("listings");
}

/* CRUD HELPERS */
export async function getAllListings() {
  return (await listingsCol()).find({}).sort({ createdAt: -1 }).toArray();
}

export async function getListingById(id: string) {
  return (await listingsCol()).findOne({ _id: new ObjectId(id) });
}

export async function getListingBySlug(slug: string) {
  return (await listingsCol()).findOne({ slug });
}

export async function createListing(data: Omit<Listing, "_id" | "createdAt" | "updatedAt">) {
  const now = new Date();
  const doc = { ...data, createdAt: now, updatedAt: now };
  const res = await (await listingsCol()).insertOne(doc);
  return { ...doc, _id: res.insertedId };
}

export async function updateListing(id: string, data: Partial<Listing>) {
  const res = await (await listingsCol()).findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { ...data, updatedAt: new Date() } },
    { returnDocument: "after" }
  );
  return res.value;
}

export async function deleteListing(id: string) {
  await (await listingsCol()).deleteOne({ _id: new ObjectId(id) });
  return { deleted: true };
}
