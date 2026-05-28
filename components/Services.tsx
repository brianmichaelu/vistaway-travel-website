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
      "Request flight options across Tanzania with flexible timing, route support, and clear booking assistance.",
    cta: "Request local flight",
    href: "#flights"
  },
  {
    icon: Landmark,
    title: "International Flights",
    description:
      "Get support for regional and international travel routes with suitable airline options and travel guidance.",
    cta: "Plan international trip",
    href: "#flights"
  },
  {
    icon: ShieldCheck,
    title: "UAE, Qatar & China Visas",
    description:
      "Receive guidance for visa application details, document preparation, and travel requirements.",
    cta: "Start visa request",
    href: "#dubai-visa"
  },
  {
    icon: Umbrella,
    title: "Safari Packages",
    description:
      "Explore Tanzania with safari plans for Serengeti, Ngorongoro, Tarangire, Mikumi, and other destinations.",
    cta: "View safari ideas",
    href: "#packages"
  },
  {
    icon: Waves,
    title: "Zanzibar Holidays",
    description:
      "Plan relaxing beach escapes with hotel options, airport transfers, activities, and travel support.",
    cta: "Request beach holiday",
    href: "#packages"
  },
  {
    icon: Hotel,
    title: "Hotel Bookings",
    description:
      "Find accommodation options for business trips, family holidays, conferences, and special stays.",
    cta: "Find a hotel",
    href: "#contact"
  },
  {
    icon: Building2,
    title: "Travel Insurance",
    description:
      "Ask for travel insurance options suited to your destination, travel dates, and trip duration.",
    cta: "Ask about cover",
    href: "#contact"
  },
  {
    icon: Car,
    title: "Airport Transfers",
    description:
      "Arrange airport pickup and drop-off services for individuals, families, groups, and corporate teams.",
    cta: "Book transfer",
    href: "#contact"
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
            From simple flight requests to complete holiday planning, VistaWay
            Travel & Tours helps you organize the important details of your trip
            with clear support from start to finish.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-mintSoft text-tealDeep transition group-hover:bg-tealDeep group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-black text-tealDeep">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-charcoal/70">
                  {service.description}
                </p>

                <a
                  href={service.href}
                  className="mt-5 inline-block cursor-pointer text-sm font-black text-coralWarm transition hover:text-tealDeep"
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
