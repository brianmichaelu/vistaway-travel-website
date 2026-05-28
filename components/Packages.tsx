import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const packages = [
  {
    id: "package-zanzibar",
    image: "/images/package-zanzibar.png",
    title: "Zanzibar Beach Escape",
    description:
      "A relaxing island holiday with beach stays, transfers, and optional activities for couples, families, and groups.",
    price: "Price on request"
  },
  {
    id: "package-safari",
    image: "/images/package-safari.png",
    title: "Serengeti Safari Adventure",
    description:
      "Experience wildlife routes, comfortable lodges, and guided safari planning for an unforgettable Tanzania journey.",
    price: "Price on request"
  },
  {
    id: "package-ngorongoro",
    image: "/images/package-ngorongoro.png",
    title: "Ngorongoro Crater Tour",
    description:
      "A memorable crater experience with travel planning support for couples, families, and group travelers.",
    price: "Price on request"
  },
  {
    id: "package-kilimanjaro",
    image: "/images/package-kilimanjaro.png",
    title: "Kilimanjaro Climbing Support",
    description:
      "Plan climbing support, local logistics, route guidance, accommodation, and travel coordination.",
    price: "Price on request"
  },
  {
    id: "package-dubai",
    image: "/images/package-dubai.png",
    title: "Dubai Holiday Package",
    description:
      "A city break package with flight support, hotel options, transfers, tours, and visa guidance.",
    price: "Price on request"
  },
  {
    id: "package-corporate",
    image: "/images/package-corporate.png",
    title: "Corporate Travel Package",
    description:
      "Organized travel support for meetings, team trips, business travel, conferences, and company events.",
    price: "Custom quote"
  }
];
export default function Packages() {
  return (
    <section id="packages" className="section-padding scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-coralWarm">
            Featured packages
          </p>

          <h2 className="mt-3 text-3xl font-black text-tealDeep md:text-5xl">
            Travel Packages for Every Explorer
          </h2>

          <p className="mt-5 text-charcoal/70">
            Choose from beach holidays, safari adventures, city breaks, mountain
            trips, and corporate travel support. Package pricing depends on
            travel dates, hotel choice, number of travelers, and availability.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((item) => (
            <Card
              key={item.title}
              className="group flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-60 w-full overflow-hidden bg-mintSoft">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-black text-coralWarm">
                  {item.price}
                </p>

                <h3 className="mt-2 text-2xl font-black text-tealDeep">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-charcoal/70">
                  {item.description}
                </p>

                <Button href="#contact" variant="outline" className="mt-5">
                  Request Package
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
