import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Best available travel deals",
  "Domestic and international route support",
  "Flexible booking options",
  "Personalized travel assistance",
  "Visa and documentation guidance",
  "Support via WhatsApp, phone, and email"
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="section-padding scroll-mt-24 bg-mintSoft/70 py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-coralWarm">
            Why book with us
          </p>
          <h2 className="mt-3 text-3xl font-black text-tealDeep md:text-5xl">
            A travel partner that keeps things clear and simple
          </h2>
          <p className="mt-5 leading-8 text-charcoal/70">
            The layout is designed to make the agency feel trustworthy,
            reachable, and organized for both leisure and business travelers.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="flex gap-4 rounded-3xl border border-tealDeep/10 bg-white p-5 shadow-sm"
            >
              <CheckCircle2 className="mt-1 shrink-0 text-coralWarm" size={22} />
              <p className="font-extrabold text-tealDeep">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
