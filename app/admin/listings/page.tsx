// app/admin/listings/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Listing } from "@/types/listing";

export default function AdminListingsPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchListings = async () => {
    try {
      const response = await fetch("/api/listings");
      if (!response.ok) {
        throw new Error("Failed to fetch listings");
      }
      const data = await response.json();
      setListings(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load listings");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this listing?")) {
      return;
    }

    try {
      const response = await fetch(`/api/listings/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete listing");
      }

      // Remove the deleted listing from state
      setListings(listings.filter(listing => listing._id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete listing");
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  useEffect(() => {
    fetchListings();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Manage Listings</h1>
          <p className="text-gray-600">
            Create, edit, and manage your property listings
          </p>
        </div>
        <Link
          href="/admin/listings/new"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Add New Listing
        </Link>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {listings.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold mb-2">No listings found</h3>
          <p className="text-gray-600 mb-4">
            Get started by creating your first property listing
          </p>
          <Link
            href="/admin/listings/new"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Create First Listing
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div key={listing._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video relative">
                {listing.imageUrl ? (
                  <Image
                    src={listing.imageUrl}
                    alt={listing.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">No Image</span>
                  </div>
                )}
                {listing.featured && (
                  <span className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded text-sm">
                    Featured
                  </span>
                )}
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg line-clamp-1">
                    {listing.title}
                  </h3>
                  <span className="text-lg font-bold text-blue-600">
                    {formatPrice(listing.price)}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-3">{listing.location}</p>

                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>{listing.bedrooms} bed</span>
                  <span>{listing.bathrooms} bath</span>
                  <span>{listing.area.toLocaleString()} sq ft</span>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/listings/${listing.slug}`}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-center py-2 rounded text-sm"
                  >
                    View
                  </Link>
                  
                  <Link
                    href={`/admin/listings/${listing._id}/edit`}
                    className="flex-1 bg-blue-100 hover:bg-blue-200 text-center py-2 rounded text-sm"
                  >
                    Edit
                  </Link>
                  
                  <button
                    onClick={() => handleDelete(listing._id!)}
                    className="flex-1 bg-red-100 hover:bg-red-200 text-red-700 py-2 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}