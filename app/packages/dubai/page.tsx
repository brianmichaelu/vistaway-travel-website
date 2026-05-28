import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  Clock,
  MapPin,
  Plane,
  ShieldCheck
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const whatsappNumber = "255689824682";

const highlights = [
  "Dubai city break planning",
  "Hotel and apartment stay options",
  "Airport transfer arrangement support",
  "Tour and activity suggestions",
  "Visa guidance where needed",
  "Flexible plans for families, couples, groups, and business travelers"
];

const itinerary = [
  {
    day: "Day 1",
    title: "Arrival in Dubai",
    description:
      "Arrive in Dubai, transfer to your hotel, settle in, and enjoy a relaxed evening around the city."
  },
  {
    day: "Day 2",
    title: "City Tour & Shopping",
    description:
      "Explore Dubai highlights, shopping areas, waterfront locations, and optional city experiences based on your interests."
  },
  {
    day: "Day 3",
    title: "Desert or Theme Park Experience",
    description:
      "Choose a desert safari, theme park visit, cruise experience, or another activity suitable for your travel style."
  },
  {
    day: "Day 4",
    title: "Departure Support",
    description:
      "Check out, transfer to the airport, and continue your journey with support from the travel team."
  }
];

const included = [
  "Dubai package planning support",
  "Hotel option guidance",
  "Airport transfer arrangement",
  "Tour and activity suggestions",
  "Visa support guidance where needed",
  "WhatsApp support during planning"
];

const notIncluded = [
  "Flights unless requested",
  "Visa fees unless confirmed in the final quote",
  "Personal expenses",
  "Travel insurance unless requested",
  "Activities not confirmed in the final package"
];

const galleryImages = [
  "/images/package-dubai.png",
  "/images/hero-travel.png",
  "/images/package-corporate.png"
];

export default function DubaiPackagePage() {
  const whatsappMessage = encodeURIComponent(
    "Hello VistaWay Travel & Tours, I would like more details about the Dubai Holiday Package."
  );

  return (
    <main className="min-h-screen bg-creamWhite text-charcoal">
      <section className="relative min-h-[72vh] overflow-hidden">
        <Image
          src="/images/package-dubai.png"
          alt="Dubai Holiday Package"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#064E4A]/80 via-black/50 to-[#064E4A]/90" />

        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-center px-5 py-28 md:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-black text-white backdrop-blur transition hover:bg-white hover:text-tealDeep"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <p className="text-sm font-black uppercase tracking-[0.25em] text-coralWarm">
            Dubai city holiday
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
            Dubai Holiday Package
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Plan a Dubai city break with hotel options, transfers, tours, visa
            guidance, and flexible travel support for families, couples, groups,
            and business travelers.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}>
              Request This Package
            </Button>

            <Button href="/#packages" variant="outline">
              View Other Packages
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_0.3fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-coralWarm">
              Package overview
            </p>

            <h2 className="mt-3 text-3xl font-black text-tealDeep md:text-5xl">
              Enjoy Dubai with clear travel planning support
            </h2>

            <p className="mt-5 leading-8 text-charcoal/70">
              This package is designed for travelers who want a smooth Dubai
              experience with organized support. VistaWay Travel & Tours can
              help with hotel options, airport transfers, city experiences,
              activity suggestions, visa guidance, and travel timing based on
              your preferred dates and budget.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <Card className="p-6">
                <MapPin className="text-coralWarm" size={28} />
                <h3 className="mt-4 font-black text-tealDeep">Destination</h3>
                <p className="mt-2 text-sm text-charcoal/70">Dubai, UAE</p>
              </Card>

              <Card className="p-6">
                <Clock className="text-coralWarm" size={28} />
                <h3 className="mt-4 font-black text-tealDeep">Duration</h3>
                <p className="mt-2 text-sm text-charcoal/70">
                  Flexible, usually 3 to 5 days
                </p>
              </Card>

              <Card className="p-6">
                <Building2 className="text-coralWarm" size={28} />
                <h3 className="mt-4 font-black text-tealDeep">Best For</h3>
                <p className="mt-2 text-sm text-charcoal/70">
                  Families, couples, groups, and business travelers
                </p>
              </Card>
            </div>
          </div>

          <Card className="h-fit p-6">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-coralWarm">
              Quick request
            </p>

            <h3 className="mt-3 text-2xl font-black text-tealDeep">
              Price on request
            </h3>

            <p className="mt-4 text-sm leading-7 text-charcoal/70">
              Pricing depends on travel dates, hotel choice, number of
              travelers, visa needs, activities, and availability.
            </p>

            <Button
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              className="mt-6 w-full"
            >
              Ask on WhatsApp
            </Button>
          </Card>
        </div>
      </section>

      <section className="section-padding bg-mintSoft/70 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-coralWarm">
              Highlights
            </p>

            <h2 className="mt-3 text-3xl font-black text-tealDeep md:text-5xl">
              What you can include
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex gap-4 rounded-3xl border border-tealDeep/10 bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-1 shrink-0 text-coralWarm" size={22} />
                <p className="font-extrabold text-tealDeep">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-coralWarm">
              Sample itinerary
            </p>

            <h2 className="mt-3 text-3xl font-black text-tealDeep md:text-5xl">
              A simple Dubai holiday plan
            </h2>

            <p className="mt-5 text-charcoal/70">
              This is a sample structure. The final plan can be adjusted based
              on your dates, budget, hotel preference, and activities.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {itinerary.map((item) => (
              <Card key={item.day} className="p-6">
                <p className="text-sm font-black text-coralWarm">{item.day}</p>
                <h3 className="mt-2 text-xl font-black text-tealDeep">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/70">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl font-black text-tealDeep">
              What can be included
            </h2>

            <div className="mt-6 grid gap-4">
              {included.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-coralWarm" size={20} />
                  <p className="text-sm font-semibold text-charcoal/75">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-black text-tealDeep">
              Not automatically included
            </h2>

            <div className="mt-6 grid gap-4">
              {notIncluded.map((item) => (
                <div key={item} className="flex gap-3">
                  <Plane className="mt-1 shrink-0 text-coralWarm" size={20} />
                  <p className="text-sm font-semibold text-charcoal/75">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="section-padding py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-coralWarm">
              Gallery
            </p>

            <h2 className="mt-3 text-3xl font-black text-tealDeep md:text-5xl">
              Dubai travel inspiration
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {galleryImages.map((image) => (
              <div
                key={image}
                className="relative h-72 overflow-hidden rounded-[2rem] bg-mintSoft shadow-sm"
              >
                <Image
                  src={image}
                  alt="Dubai travel gallery"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-tealDeep py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-coralWarm">
            Ready to plan?
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Request your Dubai package today
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Send your preferred travel dates, number of travelers, hotel style,
            visa needs, and activities you are interested in.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}>
              Chat on WhatsApp
            </Button>

            <Button href="/#contact" variant="outline">
              Contact Form
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}