import { PageLayout } from "@/components/page-layout"
import { DecorativePattern } from "@/components/decorative-pattern"
import Image from "next/image"

interface TestimonialProps {
  quote: string
  name: string
  title: string
  image: string
}

function Testimonial({ quote, name, title, image }: TestimonialProps) {
  return (
    <div className="bg-brand-cream p-8 rounded-lg shadow-lg relative border border-brand-gold/30 group transition-all duration-300 hover:border-brand-gold/70 hover:shadow-brand-gold/20 hover:shadow-xl">
      <div className="absolute top-0 right-0 w-12 h-12 transform translate-x-1/3 -translate-y-1/3 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        <DecorativePattern />
      </div>

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-brand-gold group-hover:w-full transition-all duration-500"></div>

      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-brand-gold group-hover:border-brand-gold/70 transition-colors duration-300">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <blockquote className="garamond text-lg italic text-brand-navy mb-4 group-hover:text-brand-navy transition-colors duration-300">
            "{quote}"
          </blockquote>
          <div className="flex items-center">
            <div className="w-8 h-0.5 bg-brand-gold mr-3 group-hover:w-12 transition-all duration-300"></div>
            <div>
              <p className="garamond font-medium text-brand-gold group-hover:text-brand-gold/80 transition-colors duration-300">
                {name}
              </p>
              <p className="text-sm text-brand-navy/70">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Nassira Properties helped me find my dream home and guided me through every step of the investment process. As a first-time female property owner in Dubai, I felt empowered and supported throughout the journey.",
      name: "Amina Khalid",
      title: "Business Owner",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      quote:
        "Working with Nassira was transformative. Her understanding of the market and commitment to helping women build wealth through real estate is unparalleled. I now own three investment properties in Dubai.",
      name: "Layla Mahmoud",
      title: "Finance Executive",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      quote:
        "The team at Nassira Properties understood exactly what I was looking for and helped me find a property that not only meets my family's needs but is also a solid investment for our future.",
      name: "Fatima Al-Qasimi",
      title: "Doctor & Investor",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      quote:
        "I've worked with several real estate agencies in Dubai, but none compare to the personalized service and attention to detail that Nassira Properties provides. They truly understand the luxury market.",
      name: "Sarah Johnson",
      title: "International Investor",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      quote:
        "The investment opportunity that Nassira Properties presented to me has been life-changing. Their market insights and strategic approach to real estate have helped me build significant wealth.",
      name: "Maryam Al-Hashimi",
      title: "Entrepreneur",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      quote:
        "As a woman entering the real estate market, I was looking for a partner who understood my unique needs. Nassira Properties not only met but exceeded my expectations with their empowering approach.",
      name: "Noor Ahmed",
      title: "Corporate Executive",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <PageLayout
      title="Client Testimonials"
      subtitle="Hear from women who have transformed their lives through property ownership with Nassira Properties"
    >
      <section className="py-24 bg-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>

        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                image={testimonial.image}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <blockquote className="garamond text-2xl italic text-brand-gold max-w-3xl mx-auto">
              "She builds. She owns. She leads."
            </blockquote>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

