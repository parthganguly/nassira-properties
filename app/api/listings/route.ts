import { NextRequest, NextResponse } from "next/server";
import { getAllListings, createListing } from "@/lib/listings";
import type { Listing } from "@/types/listing";

export async function GET() {
  try {
    const listings = await getAllListings();
    return NextResponse.json(listings);
  } catch (error) {
    console.error("Error fetching listings:", error);
    return NextResponse.json(
      { message: "Failed to fetch listings" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    
    // Convert and validate the form data
    const listingData: Omit<Listing, "_id" | "createdAt" | "updatedAt"> = {
      title: data.title as string,
      location: data.location as string,
      price: parseFloat(data.price as string),
      bedrooms: parseInt(data.bedrooms as string),
      bathrooms: parseInt(data.bathrooms as string),
      area: parseFloat(data.area as string),
      description: data.description as string || "",
      imageUrl: data.imageUrl as string || "",
      featured: data.featured === "true",
      slug: (data.title as string).toLowerCase().replace(/\s+/g, "-"),
    };

    const listing = await createListing(listingData);
    return NextResponse.json({ success: true, data: listing }, { status: 201 });
  } catch (error) {
    console.error("Error creating listing:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create listing" },
      { status: 500 }
    );
  }
}
