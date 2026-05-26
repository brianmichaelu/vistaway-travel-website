const quickLinks = ["Home", "Flights", "Dubai Visa", "Packages", "Why Us", "Contact"];

const services = [
  "Domestic Flight Booking",
  "International Flight Booking",
  "Dubai Visa Application",
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
            A modern travel agency demo website for flights, visa support,
            packages, hotels, transfers, and travel assistance.
          </p>
        </div>

        <div>
          <h4 className="font-black">Quick Links</h4>
          <div className="mt-4 grid gap-3">
            {quickLinks.map((link) => (
              <a
                key={link}
                href={`#${link === "Home" ? "home" : link === "Why Us" ? "why-us" : link.toLowerCase().replace(" ", "-")}`}
                className="cursor-pointer text-sm text-white/70 transition hover:text-coralWarm"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-black">Services</h4>
          <div className="mt-4 grid gap-3">
            {services.slice(0, 7).map((service) => (
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
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6">
        <p className="text-sm leading-7 text-white/60">
          Disclaimer: Flight fares, visa requirements, and package prices may
          change depending on airline, embassy, hotel, and seasonal
          availability.
        </p>
        <p className="mt-4 text-sm text-white/60">
          © {new Date().getFullYear()} VistaWay Travel & Tours. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
