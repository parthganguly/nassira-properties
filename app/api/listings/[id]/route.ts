// app/api/listings/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getListingById, updateListing, deleteListing } from "@/lib/listings";
import { uploadImage } from "@/lib/cloudinary";
import type { Listing } from "@/types/listing";

interface RouteParams {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const listing = await getListingById(params.id);
    
    if (!listing) {
      return NextResponse.json(
        { message: "Listing not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(listing);
  } catch (error) {
    console.error("Error fetching listing:", error);
    return NextResponse.json(
      { message: "Failed to fetch listing" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const formData = await request.formData();
    const imageFiles = formData.getAll('images') as File[];
    const agentImageFile = formData.get('agentImage') as File | null;
    
    let imageUrls: string[] | undefined;
    let agentImageUrl: string | undefined;
    
    // Only process images if new ones were uploaded
    if (imageFiles.length > 0 && !(imageFiles.length === 1 && imageFiles[0].size === 0)) {
      // Upload all property images to Cloudinary
      imageUrls = await Promise.all(
        imageFiles.map(async (file) => {
          const bytes = await file.arrayBuffer();
          const buffer = Buffer.from(bytes);
          return uploadImage(buffer);
        })
      );
    }

    // Upload agent image if provided
    if (agentImageFile && agentImageFile.size > 0) {
      const bytes = await agentImageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      agentImageUrl = await uploadImage(buffer);
    }

    // Convert and validate the form data
    const listingData: Partial<Listing> = {
      title: formData.get('title') as string,
      location: formData.get('location') as string,
      price: parseFloat(formData.get('price') as string),
      bedrooms: parseInt(formData.get('bedrooms') as string),
      bathrooms: parseInt(formData.get('bathrooms') as string),
      area: parseFloat(formData.get('area') as string),
      description: formData.get('description') as string || "",
      featured: formData.get('featured') === "true",
      slug: (formData.get('title') as string).toLowerCase().replace(/\s+/g, "-"),
      agent: {
        name: formData.get('agentName') as string,
        phone: formData.get('agentPhone') as string,
        email: formData.get('agentEmail') as string,
      },
    };

    // Only update images if new ones were uploaded
    if (imageUrls) {
      listingData.images = imageUrls;
    }

    // Only update agent image if a new one was uploaded
    if (agentImageUrl) {
      listingData.agent = {
        ...listingData.agent!,
        imageUrl: agentImageUrl,
      };
    }

    const listing = await updateListing(params.id, listingData);
    return NextResponse.json({ success: true, data: listing });
  } catch (error) {
    console.error("Error updating listing:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update listing" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const success = await deleteListing(params.id);
    
    if (!success) {
      return NextResponse.json(
        { message: "Listing not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Listing deleted successfully" });
  } catch (error) {
    console.error("Error deleting listing:", error);
    return NextResponse.json(
      { message: "Failed to delete listing" },
      { status: 500 }
    );
  }
}