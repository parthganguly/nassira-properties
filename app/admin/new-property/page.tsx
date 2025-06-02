"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function NewPropertyPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    location: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    description: "",
    featured: false,
  });
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
      
      if (image) {
        formData.append("imageUrl", image);
      }

      const res = await fetch("/api/listings", {
        method: "POST",
        body: formData
      });

      const json = await res.json();
      
      if (json.success) {
        router.push("/listings");
      } else {
        alert("Error: " + json.error);
      }
    } catch (error) {
      alert("Error submitting form: " + error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto py-16">
      <h1 className="text-2xl font-garamond mb-6">Add New Property</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input 
          name="title" 
          placeholder="Title" 
          value={form.title}
          onChange={handleChange} 
          required 
        />
        <Input 
          name="location" 
          placeholder="Location" 
          value={form.location}
          onChange={handleChange} 
          required 
        />
        <Input 
          name="price" 
          type="number"
          placeholder="Price" 
          value={form.price}
          onChange={handleChange} 
          required 
        />
        <Input 
          name="bedrooms" 
          type="number" 
          placeholder="Bedrooms" 
          value={form.bedrooms}
          onChange={handleChange} 
          required 
        />
        <Input 
          name="bathrooms" 
          type="number" 
          placeholder="Bathrooms" 
          value={form.bathrooms}
          onChange={handleChange} 
          required 
        />
        <Input 
          name="area" 
          type="number"
          placeholder="Area (sq ft)" 
          value={form.area}
          onChange={handleChange} 
          required 
        />
        <Textarea
          name="description"
          placeholder="Property Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <label className="flex items-center">
          <input 
            type="checkbox" 
            name="featured" 
            checked={form.featured}
            onChange={handleChange} 
            className="mr-2" 
          />
          Featured
        </label>
        <input 
          type="file" 
          accept="image/*" 
          onChange={e => setImage(e.target.files?.[0] || null)} 
          required 
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Uploading…" : "Create Property"}
        </Button>
      </form>
    </div>
  );
}
