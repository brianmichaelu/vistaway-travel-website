import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Domestic and international flight support",
  "Visa guidance for UAE, Qatar, and China",
  "Flexible holiday package planning",
  "Safari, beach, and city travel options",
  "Hotel, transfer, and insurance assistance",
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
            VistaWay Travel & Tours helps travelers plan with confidence by
            offering clear communication, practical travel guidance, and support
            before, during, and after the booking process.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="flex gap-4 rounded-3xl border border-tealDeep/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
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
