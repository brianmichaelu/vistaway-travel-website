import {
  Building2,
  Car,
  Hotel,
  Landmark,
  Plane,
  ShieldCheck,
  Umbrella,
  Waves
} from "lucide-react";
import Card from "@/components/ui/Card";

const services = [
  {
    icon: Plane,
    title: "Domestic Flights",
    description:
      "Request flight options across Tanzania with flexible timing and route support.",
    cta: "Request local flight"
  },
  {
    icon: Landmark,
    title: "International Flights",
    description:
      "Get support for regional and international travel routes from trusted airlines.",
    cta: "Plan international trip"
  },
  {
    icon: ShieldCheck,
    title: "Dubai Visa",
    description:
      "We guide you through the application process and help prepare your documents.",
    cta: "Start visa request"
  },
  {
    icon: Umbrella,
    title: "Safari Packages",
    description:
      "Explore Tanzania with safari plans for Serengeti, Ngorongoro, Tarangire, and more.",
    cta: "View safari ideas"
  },
  {
    icon: Waves,
    title: "Zanzibar Holidays",
    description:
      "Plan relaxing beach escapes with hotels, transfers, and activity suggestions.",
    cta: "Request beach holiday"
  },
  {
    icon: Hotel,
    title: "Hotel Bookings",
    description:
      "Find hotels for business trips, family holidays, conferences, and special stays.",
    cta: "Find a hotel"
  },
  {
    icon: Building2,
    title: "Travel Insurance",
    description:
      "Ask for travel insurance options suited for your destination and travel duration.",
    cta: "Ask about cover"
  },
  {
    icon: Car,
    title: "Airport Transfers",
    description:
      "Arrange pickup and drop-off services for individuals, families, and corporate teams.",
    cta: "Book transfer"
  }
];

export default function Services() {
  return (
    <section className="section-padding py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-coralWarm">
            What we handle
          </p>
          <h2 className="mt-3 text-3xl font-black text-tealDeep md:text-5xl">
            Travel services built around your journey
          </h2>
          <p className="mt-5 text-charcoal/70">
            From a quick domestic ticket request to a full holiday package, the
            site is structured to show clients all main services clearly.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="p-6">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-mintSoft text-tealDeep">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-black text-tealDeep">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/70">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-block cursor-pointer text-sm font-black text-coralWarm hover:text-tealDeep"
                >
                  {service.cta} →
                </a>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
