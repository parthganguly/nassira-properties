import { DecorativePattern } from "@/components/decorative-pattern"

const values = [
  {
    title: "Excellence",
    description:
      "We set the highest standards in luxury real estate, delivering exceptional service and results that exceed expectations.",
  },
  {
    title: "Empowerment",
    description:
      "We believe in creating opportunities and fostering growth, both for our team members and our clients.",
  },
  {
    title: "Integrity",
    description:
      "Trust and transparency are the foundation of our relationships, guiding every interaction and transaction.",
  },
  {
    title: "Innovation",
    description:
      "We embrace cutting-edge solutions and creative approaches to deliver unique value in the luxury real estate market.",
  },
]

export function ValuesSection() {
  return (
    <section className="relative overflow-hidden bg-brand-cream py-24">
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <DecorativePattern />
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
        <DecorativePattern />
      </div>

      <div className="container max-w-container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-garamond uppercase tracking-wider text-brand-navy mb-6">
            Our Core Values
          </h2>
          <div className="w-24 h-0.5 bg-brand-gold mx-auto"></div>
          <p className="mt-8 text-brand-navy text-body">
            At Nassira Properties, our values shape everything we do. They reflect our commitment to excellence,
            our dedication to our clients, and our vision for the future of luxury real estate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="relative p-8 rounded-lg border border-brand-gold/20 hover:border-brand-gold/40 transition-colors"
            >
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-brand-gold/30 rounded-tr-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-brand-gold/30 rounded-bl-lg"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-garamond text-brand-gold mb-4">{value.title}</h3>
                <p className="text-brand-navy text-body">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

