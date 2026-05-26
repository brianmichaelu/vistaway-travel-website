import Card from "@/components/ui/Card";

const testimonials = [
  {
    name: "Amina K.",
    text: "The process felt clear from the beginning. I liked how the flight request form made it easy to share my travel details."
  },
  {
    name: "Joseph M.",
    text: "The package options look professional and easy to understand. It feels like a travel agency I could contact quickly."
  },
  {
    name: "Fatma A.",
    text: "I appreciate the WhatsApp support idea. It makes the booking process feel simple and practical for Tanzanian clients."
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
            Placeholder testimonials can be replaced with real client feedback
            after launch.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6">
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
