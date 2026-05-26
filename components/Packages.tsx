import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const packages = [
  {
    image: "/images/package-zanzibar.png",
    title: "Zanzibar Beach Escape",
    description:
      "A relaxing island holiday with beach stays, transfers, and optional activities.",
    price: "From $___"
  },
  {
    image: "/images/package-safari.png",
    title: "Serengeti Safari Adventure",
    description:
      "Experience wildlife routes, comfortable lodges, and guided safari planning.",
    price: "From $___"
  },
  {
    image: "/images/package-ngorongoro.png",
    title: "Ngorongoro Crater Tour",
    description:
      "A memorable crater experience for couples, families, and group travelers.",
    price: "From $___"
  },
  {
    image: "/images/package-kilimanjaro.png",
    title: "Kilimanjaro Climbing Support",
    description:
      "Plan climbing support, local logistics, route guidance, and accommodation.",
    price: "From $___"
  },
  {
    image: "/images/package-dubai.png",
    title: "Dubai Holiday Package",
    description:
      "A city break package idea with flights, hotel options, transfers, and tours.",
    price: "From $___"
  },
  {
    image: "/images/package-corporate.png",
    title: "Corporate Travel Package",
    description:
      "Organized travel support for meetings, teams, business trips, and events.",
    price: "From $___"
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
            These package cards use placeholder pricing and images so real
            client details can be added later.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((item) => (
            <Card key={item.title} className="overflow-hidden">
              <div className="relative h-60 w-full overflow-hidden bg-mintSoft">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-black text-coralWarm">
                  {item.price}
                </p>
                <h3 className="mt-2 text-2xl font-black text-tealDeep">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/70">
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
