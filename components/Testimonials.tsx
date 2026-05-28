import Card from "@/components/ui/Card";

const testimonials = [
  {
    name: "Amina K.",
    text: "The team made my travel planning simple from the first message. I received clear options and helpful guidance."
  },
  {
    name: "Joseph M.",
    text: "I appreciated the quick communication and clear travel support. The process felt organized and easy to follow."
  },
  {
    name: "Fatma A.",
    text: "WhatsApp support made everything convenient. It was easy to ask questions and get help with my travel plans."
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-creamWhite py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-coralWarm">
            Client stories
          </p>

          <h2 className="mt-3 text-3xl font-black text-tealDeep md:text-5xl">
            Trusted by travelers
          </h2>

          <p className="mt-5 text-charcoal/70">
            Travelers choose VistaWay Travel & Tours for clear communication,
            practical support, and simple travel planning.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="p-6 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex gap-1 text-coralWarm" aria-hidden="true">
                ★★★★★
              </div>

              <p className="leading-8 text-charcoal/75">
                “{testimonial.text}”
              </p>

              <p className="mt-6 font-black text-tealDeep">
                {testimonial.name}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
