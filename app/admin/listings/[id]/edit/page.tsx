// app/admin/listings/[id]/edit/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import type { Listing } from "@/types/listing";
import PropertyImageGrid from "@/components/PropertyImageGrid";
import { Trash2, Star } from "lucide-react";

export default function EditListingPage() {
  const [listing, setListing] = useState<Listing | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const router = useRouter();
  const params = useParams();

  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  // Fetch the listing data
  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await fetch(`/api/listings/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch listing');
        }
        const data = await response.json();
        setListing(data);
        setImages(data.images || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load listing');
      } finally {
        setIsLoading(false);
      }
    };

    fetchListing();
  }, [params.id]);

  const handleImagesChange = (newImages: string[]) => {
    setImages(newImages);
  };

  const handleImageDelete = (index: number) => {
    if (confirm('Are you sure you want to delete this image?')) {
      const newImages = [...images];
      newImages.splice(index, 1);
      setImages(newImages);
    }
  };

  const handleSetCoverImage = (index: number) => {
    const newImages = [...images];
    const [movedImage] = newImages.splice(index, 1);
    newImages.unshift(movedImage);
    setImages(newImages);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const imageFiles = formData.getAll('images') as File[];
    const agentImageFile = formData.get('agentImage') as File;
    
    // Only include images in the request if new ones were uploaded
    if (imageFiles.length === 0 || (imageFiles.length === 1 && imageFiles[0].size === 0)) {
      formData.delete('images');
    }
    
    // Only include agent image if a new one was uploaded
    if (agentImageFile.size === 0) {
      formData.delete('agentImage');
    }

    try {
      const response = await fetch(`/api/listings/${params.id}`, {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to update listing');
      }

      router.push('/admin/listings');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-screenDynamic z-base">
          <div className="text-lg">Loading...</div>
        </div>
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Listing Not Found</h1>
          <Link
            href="/admin/listings"
            className="text-blue-600 hover:text-blue-800"
          >
            ← Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href="/admin/listings"
          className="text-gray-600 hover:text-gray-900 mb-4 inline-block font-garamond"
        >
          ← Back to Listings
        </Link>
        <h1 className="text-3xl font-garamond font-bold text-gray-900">Edit Listing</h1>
        <p className="text-gray-600 font-garamond">Update your property listing</p>
      </div>

      <div className="max-w-4xl mx-auto bg-[#F8F5F0] rounded-lg shadow-lg p-8">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 font-garamond">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="title" className="block text-lg font-garamond text-gray-900 mb-2">
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                defaultValue={listing?.title}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-gray-900 font-garamond text-lg"
                placeholder="Beautiful 3BR House in Downtown"
                aria-label="Property title"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-lg font-garamond text-gray-900 mb-2">
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                defaultValue={listing?.location}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-gray-900 font-garamond text-lg"
                placeholder="Downtown, City Name"
                aria-label="Property location"
              />
            </div>

            <div>
              <label htmlFor="price" className="block text-lg font-garamond text-gray-900 mb-2">
                Price ($) *
              </label>
              <input
                type="number"
                id="price"
                name="price"
                required
                min="1"
                defaultValue={listing?.price}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-gray-900 font-garamond text-lg"
                placeholder="450000"
                aria-label="Property price"
              />
            </div>

            <div>
              <label htmlFor="bedrooms" className="block text-lg font-garamond text-gray-900 mb-2">
                Bedrooms *
              </label>
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                required
                min="0"
                defaultValue={listing?.bedrooms}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-gray-900 font-garamond text-lg"
                placeholder="3"
                aria-label="Number of bedrooms"
              />
            </div>

            <div>
              <label htmlFor="bathrooms" className="block text-lg font-garamond text-gray-900 mb-2">
                Bathrooms *
              </label>
              <input
                type="number"
                id="bathrooms"
                name="bathrooms"
                required
                min="0"
                step="0.5"
                defaultValue={listing?.bathrooms}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-gray-900 font-garamond text-lg"
                placeholder="2.5"
                aria-label="Number of bathrooms"
              />
            </div>

            <div>
              <label htmlFor="area" className="block text-lg font-garamond text-gray-900 mb-2">
                Area (sq ft) *
              </label>
              <input
                type="number"
                id="area"
                name="area"
                required
                min="1"
                defaultValue={listing?.area}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-gray-900 font-garamond text-lg"
                placeholder="2500"
                aria-label="Property area in square feet"
              />
            </div>

            <div className="md:col-span-2">
              <PropertyImageGrid
                images={images}
                onImagesChange={handleImagesChange}
                onImageDelete={handleImageDelete}
                onSetCoverImage={handleSetCoverImage}
              />
              <div className="mt-4">
                <label htmlFor="images" className="block text-lg font-garamond text-gray-900 mb-2">
                  Upload New Images
                </label>
                <input
                  type="file"
                  id="images"
                  name="images"
                  accept="image/*"
                  multiple
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-gray-900 font-garamond"
                  aria-label="Upload property images"
                />
                <p className="mt-2 text-sm text-gray-600 font-garamond">
                  Upload new images to add to or replace the current ones (JPG, PNG, or GIF)
                </p>
              </div>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-lg font-garamond text-gray-900 mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                defaultValue={listing?.description}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-gray-900 font-garamond text-lg"
                placeholder="Describe the property in detail..."
                aria-label="Property description"
              />
            </div>

            <div className="md:col-span-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="featured"
                  defaultChecked={listing?.featured || false}
                  className="w-5 h-5 rounded border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37]"
                />
                <span className="text-lg font-garamond text-gray-900">
                  Featured Property
                </span>
              </label>
            </div>

            <div className="md:col-span-2 border-t border-gray-200 pt-8 mt-8">
              <h3 className="text-2xl font-garamond font-bold text-gray-900 mb-6">Agent Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="agentName" className="block text-lg font-garamond text-gray-900 mb-2">
                    Agent Name *
                  </label>
                  <input
                    type="text"
                    id="agentName"
                    name="agentName"
                    required
                    defaultValue={listing?.agent?.name || ''}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-gray-900 font-garamond text-lg"
                    placeholder="John Doe"
                    aria-label="Agent name"
                  />
                </div>

                <div>
                  <label htmlFor="agentPhone" className="block text-lg font-garamond text-gray-900 mb-2">
                    Agent Phone *
                  </label>
                  <input
                    type="tel"
                    id="agentPhone"
                    name="agentPhone"
                    required
                    defaultValue={listing?.agent?.phone || ''}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-gray-900 font-garamond text-lg"
                    placeholder="+1 (555) 123-4567"
                    aria-label="Agent phone number"
                  />
                </div>

                <div>
                  <label htmlFor="agentEmail" className="block text-lg font-garamond text-gray-900 mb-2">
                    Agent Email *
                  </label>
                  <input
                    type="email"
                    id="agentEmail"
                    name="agentEmail"
                    required
                    defaultValue={listing?.agent?.email || ''}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-gray-900 font-garamond text-lg"
                    placeholder="john@example.com"
                    aria-label="Agent email address"
                  />
                </div>

                <div>
                  <label htmlFor="agentImage" className="block text-lg font-garamond text-gray-900 mb-2">
                    Agent Photo
                  </label>
                  {listing?.agent?.imageUrl && (
                    <div className="mb-4">
                      <img
                        src={listing.agent.imageUrl}
                        alt="Current agent photo"
                        className="w-32 h-32 object-cover rounded-lg shadow-md"
                      />
                    </div>
                  )}
                  <input
                    type="file"
                    id="agentImage"
                    name="agentImage"
                    accept="image/*"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-gray-900 font-garamond"
                    aria-label="Upload agent photo"
                  />
                  <p className="mt-2 text-sm text-gray-600 font-garamond">
                    Upload a new photo to replace the current one
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#D4AF37] hover:bg-[#B38F2E] text-white py-3 px-6 rounded-lg font-garamond text-lg transition-colors duration-200 disabled:opacity-50"
            >
              {isSubmitting ? "Updating..." : "Update Listing"}
            </button>
            
            <Link
              href="/admin/listings"
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 px-6 rounded-lg text-center font-garamond text-lg transition-colors duration-200"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}