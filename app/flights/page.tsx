import FlightRouteCard from "@/components/FlightRouteCard";
import { flightRoutes } from "@/data/flightRoutes";

export const metadata = {
  title: "Flights & Routes | VistaWay Travel & Tours",
  description:
    "Explore popular flight routes from Tanzania to Dubai, Qatar, China, Turkey, Kenya, Zanzibar and more with VistaWay Travel & Tours.",
};

export default function FlightsPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-[#064e4a] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#d9f7ef]">
            Flights & Routes
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Book popular local and international flights with VistaWay.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/80">
            We help travellers compare routes, request ticket prices, plan visa
            support, and prepare for smooth travel from Tanzania to major
            destinations.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                Popular Routes
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Flight routes we can help you book
              </h2>
            </div>

            <p className="max-w-xl text-slate-600">
              Prices may change depending on travel dates, airline availability,
              season, luggage, and booking time.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {flightRoutes.map((route) => (
              <FlightRouteCard key={route.id} {...route} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
