import { Plane, Clock, MapPin } from "lucide-react";

type FlightRouteCardProps = {
  from: string;
  to: string;
  country: string;
  price: string;
  duration: string;
  airlines: string[];
  description: string;
};

export default function FlightRouteCard({
  from,
  to,
  country,
  price,
  duration,
  airlines,
  description,
}: FlightRouteCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hello VistaWay Travel & Tours, I would like to ask about flights from ${from} to ${to}.`
  );

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">
            {country}
          </p>
          <h3 className="mt-1 text-2xl font-bold text-slate-900">
            {from} → {to}
          </h3>
        </div>

        <div className="rounded-full bg-teal-50 p-3 text-teal-700">
          <Plane size={24} />
        </div>
      </div>

      <p className="mb-5 text-slate-600">{description}</p>

      <div className="mb-5 grid gap-3 text-sm text-slate-700">
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-coral-500" />
          <span>{price}</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock size={18} className="text-coral-500" />
          <span>{duration}</span>
        </div>
      </div>

      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold text-slate-900">
          Common airlines:
        </p>

        <div className="flex flex-wrap gap-2">
          {airlines.map((airline) => (
            <span
              key={airline}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {airline}
            </span>
          ))}
        </div>
      </div>

      <a
        href={`https://wa.me/YOURNUMBER?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
      >
        Request Flight Quote
      </a>
    </div>
  );
}
