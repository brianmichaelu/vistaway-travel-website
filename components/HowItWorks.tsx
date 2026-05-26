const steps = [
  {
    number: "01",
    title: "Send your request",
    description: "Share your destination, dates, passenger details, or package idea."
  },
  {
    number: "02",
    title: "We compare options",
    description: "The team checks available routes, hotels, packages, or visa support details."
  },
  {
    number: "03",
    title: "You confirm your booking",
    description: "Review the suggested option and confirm what works best for your trip."
  },
  {
    number: "04",
    title: "Travel with confidence",
    description: "Receive support details and prepare for your journey with less stress."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-coralWarm">
            Simple process
          </p>
          <h2 className="mt-3 text-3xl font-black text-tealDeep md:text-5xl">
            How It Works
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[2rem] border border-tealDeep/10 bg-white p-6 shadow-sm"
            >
              <span className="text-5xl font-black text-mintSoft">
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
