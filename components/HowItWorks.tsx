const steps = [
  {
    number: "01",
    title: "Send your request",
    description:
      "Share your destination, travel dates, passenger details, visa needs, or package idea."
  },
  {
    number: "02",
    title: "Receive suitable options",
    description:
      "The team reviews available routes, hotels, packages, transfers, or visa support details."
  },
  {
    number: "03",
    title: "Confirm your plan",
    description:
      "Choose the option that works best for your budget, schedule, and travel goals."
  },
  {
    number: "04",
    title: "Travel with support",
    description:
      "Receive guidance before your trip and stay connected for assistance when needed."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-coralWarm">
            Simple process
          </p>

          <h2 className="mt-3 text-3xl font-black text-tealDeep md:text-5xl">
            How It Works
          </h2>

          <p className="mt-5 text-charcoal/70">
            From the first request to final travel support, VistaWay keeps the
            process clear, simple, and easy to follow.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-[2rem] border border-tealDeep/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-5xl font-black text-mintSoft transition group-hover:text-coralWarm/30">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-black text-tealDeep">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-charcoal/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
