import { redirect } from 'next/navigation';
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Property Listings | Nassira Properties" };

export default function ListingsPage() {
  redirect('https://www.propertyfinder.ae/en/broker/nassira-realty-group-9824');
}
