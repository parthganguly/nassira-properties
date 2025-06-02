import { PageLayout } from "@/components/page-layout"
import { DecorativePattern } from "@/components/decorative-pattern"
import Image from "next/image"

export default function AboutPage() {
  return (
    <PageLayout title="About Nassira Properties" subtitle="Empowering women through luxury real estate in Dubai">
      <section className="py-24 bg-brand-cream relative overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="garamond text-3xl font-medium mb-6 text-brand-gold">Our Story</h2>
              <div className="w-24 h-0.5 bg-brand-gold mb-8"></div>
              <div className="space-y-4 garamond text-lg text-brand-navy">
                <p>
                  Founded by Nassira Sekkay, a visionary leader in Dubai's luxury real estate market, Nassira
                  Properties represents the pinnacle of excellence and empowerment in the industry.
                </p>
                <p>
                  Nassira empowers visionary women through luxurious real estate, inspired by the strength of female superheroes. 
                  Her properties, like the villas in Distict One, Dubai Hills and Nad Al Sheba, are sanctuaries for confidence and success.
                </p>
                <p>
                  Our team combines deep market knowledge with a commitment to excellence, guided by values of
                  integrity, innovation, and inclusivity.
                </p>
                <p>
                  At Nassira Properties, we don't just sell luxury homes – we create pathways to success and
                  independence through property ownership and investment.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold/30 rounded-lg"></div>
              <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/teamheroes.png"
                  alt="Nassira Properties Team - Empowering Women in Real Estate"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <p className="garamond text-brand-gold text-lg italic">
                    "Rising like a phoenix, empowering women in Dubai's real estate"
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-gold/30 rounded-lg"></div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="garamond text-3xl font-medium mb-6 text-brand-gold text-center">Our Mission</h2>
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-12 bg-brand-gold"></div>
              <div className="w-12 h-12 mx-2 relative">
                <DecorativePattern color="text-brand-gold" />
              </div>
              <div className="h-px w-12 bg-brand-gold"></div>
            </div>
            <p className="garamond text-xl text-brand-navy max-w-4xl mx-auto text-center">
              To empower women through property ownership and investment, while providing unparalleled luxury real
              estate services that exceed our clients' expectations. We are committed to transforming the real estate
              landscape in Dubai by fostering inclusivity, excellence, and innovation.
            </p>
            <div className="mt-12 p-8 bg-brand-cream border border-brand-gold/30 rounded-lg max-w-3xl mx-auto shadow-lg">
              <blockquote className="italic text-xl text-brand-gold text-center">
                "True luxury is not just about aesthetics, but about creating spaces that empower and inspire."
                <footer className="text-base text-brand-navy/70 mt-2">— Nassira Sekkay, Founder</footer>
              </blockquote>
            </div>
          </div>

          <div>
            <h2 className="garamond text-3xl font-medium mb-6 text-brand-gold text-center">Our Team</h2>
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-12 bg-brand-gold"></div>
              <div className="w-12 h-12 mx-2 relative">
                <DecorativePattern color="text-brand-gold" />
              </div>
              <div className="h-px w-12 bg-brand-gold"></div>
            </div>
            <p className="garamond text-lg text-brand-navy max-w-3xl mx-auto text-center mb-12">
              Meet our exceptional team of real estate professionals dedicated to providing you with the highest level
              of service and expertise.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Aliny Abrahim",
                  position: "Senior Real Estate Agent",
                  description: "A gracefully exotic agent that blends her Brazilian charm with a tenacious spirit to get you the best deals in the market.",
                },
                {
                  name: "Mourad Ouabdous",
                  position: "Property Investment Specialist",
                  description: "An extremely hardworking agent with a pure heart and an unwavering commitment to his clients.",
                },
                {
                  name: "Sovannita",
                  position: "Client Relations Manager",
                  description: "An elegant and graceful agent that will make you feel at ease and at home.",
                }
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-brand-cream p-6 rounded-lg border border-brand-gold/30 hover:border-brand-gold/60 transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/10 text-center"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-brand-gold/50">
                    <Image
                      src={`/images/${member.name.split(' ')[0].toLowerCase()}.png`}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="garamond text-xl font-medium mb-2 text-brand-gold">{member.name}</h3>
                  <p className="text-brand-navy/70 mb-4">{member.position}</p>
                  <p className="garamond text-brand-navy text-sm">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

