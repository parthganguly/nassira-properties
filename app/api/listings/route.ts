import { NextRequest, NextResponse } from "next/server";
import { getAllListings, createListing } from "@/lib/listings";
import { uploadImage } from "@/lib/cloudinary";
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
    const imageFiles = formData.getAll('images') as File[];
    const agentImageFile = formData.get('agentImage') as File | null;
    
    if (imageFiles.length === 0) {
      return NextResponse.json(
        { success: false, error: "At least one image is required" },
        { status: 400 }
      );
    }

    // Upload all property images to Cloudinary in parallel
    let imageUrls: string[];
    try {
      imageUrls = await Promise.all(
        imageFiles.map(async (file) => {
          const bytes = await file.arrayBuffer();
          const buffer = Buffer.from(bytes);
          return uploadImage(buffer);
        })
      );
    } catch (error) {
      console.error("Error uploading images to Cloudinary:", error);
      return NextResponse.json(
        { 
          success: false, 
          error: "Failed to upload one or more images. Please try again with smaller images or fewer images at once." 
        },
        { status: 500 }
      );
    }

    // Upload agent image if provided
    let agentImageUrl: string | undefined;
    if (agentImageFile && agentImageFile.size > 0) {
      try {
        const bytes = await agentImageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);
        agentImageUrl = await uploadImage(buffer);
      } catch (error) {
        console.error("Error uploading agent image to Cloudinary:", error);
        return NextResponse.json(
          { 
            success: false, 
            error: "Failed to upload agent image. Please try again with a smaller image." 
          },
          { status: 500 }
        );
      }
    }

    // Convert and validate the form data
    const listingData: Omit<Listing, "_id" | "createdAt" | "updatedAt"> = {
      title: formData.get('title') as string,
      location: formData.get('location') as string,
      price: parseFloat(formData.get('price') as string),
      bedrooms: parseInt(formData.get('bedrooms') as string),
      bathrooms: parseInt(formData.get('bathrooms') as string),
      area: parseFloat(formData.get('area') as string),
      description: formData.get('description') as string || "",
      images: imageUrls,
      featured: formData.get('featured') === "true",
      slug: (formData.get('title') as string).toLowerCase().replace(/\s+/g, "-"),
      agent: {
        name: formData.get('agentName') as string,
        phone: formData.get('agentPhone') as string,
        email: formData.get('agentEmail') as string,
        imageUrl: agentImageUrl,
      },
    };

    const listing = await createListing(listingData);
    return NextResponse.json({ success: true, data: listing }, { status: 201 });
  } catch (error) {
    console.error("Error creating listing:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to create listing. Please check your input and try again." 
      },
      { status: 500 }
    );
  }
}
