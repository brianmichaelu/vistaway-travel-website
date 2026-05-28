const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Flights", href: "#flights" },
  { label: "Visa Support", href: "#dubai-visa" },
  { label: "Packages", href: "#packages" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" }
];

const services = [
  "Domestic Flight Booking",
  "International Flight Booking",
  "UAE, Qatar & China Visa Support",
  "Tanzania Safari Packages",
  "Zanzibar Beach Holidays",
  "Hotel Bookings",
  "Travel Insurance",
  "Airport Transfers",
  "Corporate Travel Support"
];

export default function Footer() {
  return (
    <footer className="section-padding bg-tealDeep py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-2xl font-black">VistaWay Travel & Tours</h3>

          <p className="mt-4 leading-7 text-white/70">
            VistaWay Travel & Tours helps travelers plan flights, visa support,
            holiday packages, hotel bookings, airport transfers, travel
            insurance, and corporate travel assistance with clear communication
            from start to finish.
          </p>
        </div>

        <div>
          <h4 className="font-black">Quick Links</h4>

          <div className="mt-4 grid gap-3">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="cursor-pointer text-sm text-white/70 transition hover:text-coralWarm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-black">Services</h4>

          <div className="mt-4 grid gap-3">
            {services.map((service) => (
              <p key={service} className="text-sm text-white/70">
                {service}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-black">Contact Details</h4>

          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <p>Phone/WhatsApp: +255 689 824 682</p>
            <p>Email: bookings@vistawaytravel.co.tz</p>
            <p>Location: Dar es Salaam, Tanzania</p>

            <a
              href="https://wa.me/255689824682"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit cursor-pointer rounded-full bg-coralWarm px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#f45e51]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6">
        <p className="text-sm leading-7 text-white/60">
          Disclaimer: Flight fares, visa requirements, hotel rates, package
          prices, and availability may change depending on airlines, immigration
          authorities, hotels, travel dates, and seasonal demand.
        </p>

        <p className="mt-4 text-sm text-white/60">
          © {new Date().getFullYear()} VistaWay Travel & Tours. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
