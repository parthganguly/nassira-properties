"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      phone: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="garamond text-2xl font-medium mb-8 text-center text-gold">Get in Touch</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="garamond text-base text-ivory">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="h-12 bg-black/50 border-gold/50 focus:border-gold focus:ring-gold/30 text-ivory placeholder:text-ivory/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="garamond text-base text-ivory">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className="h-12 bg-black/50 border-gold/50 focus:border-gold focus:ring-gold/30 text-ivory placeholder:text-ivory/50"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="garamond text-base text-ivory">
          Phone Number
        </Label>
        <Input
          id="phone"
          name="phone"
          value={formState.phone}
          onChange={handleChange}
          placeholder="Your phone number"
          className="h-12 bg-black/50 border-gold/50 focus:border-gold focus:ring-gold/30 text-ivory placeholder:text-ivory/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="garamond text-base text-ivory">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          rows={5}
          required
          className="bg-black/50 border-gold/50 focus:border-gold focus:ring-gold/30 resize-none text-ivory placeholder:text-ivory/50"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold hover:bg-gold-light text-black garamond text-lg h-12"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      {isSubmitted && (
        <div className="p-4 bg-gold/10 text-gold rounded-md text-center border border-gold/30">
          Thank you for your message. We will contact you shortly.
        </div>
      )}
    </form>
  )
}

