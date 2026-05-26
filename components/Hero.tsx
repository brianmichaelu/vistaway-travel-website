import Image from "next/image";
import { CheckCircle2, Globe2, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const floatingCards = [
  { title: "Domestic & International Flights", icon: Globe2 },
  { title: "Dubai Visa Processing", icon: ShieldCheck },
  { title: "Travel Packages", icon: CheckCircle2 }
];

export default function Hero() {
  return (
    <section
      id="home"
      className="section-padding relative pt-28 md:pt-32 lg:pt-36"
    >
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-skyAccent/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-tealDeep/10 bg-white/80 px-4 py-2 text-sm font-bold text-tealDeep shadow-sm">
            <span className="h-2 w-2 rounded-full bg-coralWarm" />
            Premium travel support from Dar es Salaam
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-tealDeep md:text-6xl">
            Book Flights, Apply for Dubai Visa & Explore the World With Ease
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/75 md:text-lg">
            VistaWay Travel & Tours helps travelers request domestic flights,
            international flights, Dubai visa support, tour packages, hotel
            bookings, airport transfers, and travel insurance from one trusted
            place.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#flights">Book a Flight</Button>
            <Button href="#dubai-visa" variant="secondary">
              Apply for Dubai Visa
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {floatingCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.title} className="p-4">
                  <Icon className="mb-3 text-coralWarm" size={22} />
                  <p className="text-sm font-extrabold leading-5 text-tealDeep">
                    {card.title}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 top-8 z-10 hidden rounded-3xl bg-white p-5 shadow-soft md:block">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-coralWarm">
              Fast support
            </p>
            <p className="mt-1 text-2xl font-black text-tealDeep">24h</p>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-mintSoft shadow-soft">
            <Image
              src="/images/hero-travel.png"
              alt="Travel agency booking preview"
              width={900}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 right-4 rounded-3xl bg-tealDeep p-5 text-white shadow-2xl md:right-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mintSoft">
              WhatsApp
            </p>
            <p className="mt-1 font-black">+255 689 824 682</p>
          </div>
        </div>
      </div>
    </section>
  );
}
