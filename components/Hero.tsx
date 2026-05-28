import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-[88px]">
      <div className="relative h-[calc(100vh-88px)] min-h-[620px] w-full overflow-hidden">
        <Image
          src="/images/hero-travel.png"
          alt="VistaWay Travel & Tours travel planning"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#064E4A]/85 via-black/65 to-[#064E4A]/90" />
        <div className="absolute inset-0 bg-[#064E4A]/25" />

        <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
          <div className="mx-auto max-w-5xl">
            <p className="mb-5 inline-flex rounded-full border border-[#D9F7EF]/30 bg-[#064E4A]/60 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-[#D9F7EF] backdrop-blur">
              VistaWay Travel & Tours
            </p>

            <h1 className="text-4xl font-black leading-tight text-[#FFF8EF] drop-shadow-2xl md:text-6xl lg:text-7xl">
              Flights, Visas & Holiday Packages Made Simple
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#D9F7EF] drop-shadow md:text-xl">
              Plan flight bookings, UAE visa support, Qatar visa support, China
              visa support, safari packages, Zanzibar holidays, hotel bookings,
              airport transfers, and travel insurance with a team that keeps
              everything clear and easy.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#flights"
                className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#FF6B5E] px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#f45e51]"
              >
                Request Flight Booking
              </a>

              <a
                href="#dubai-visa"
                className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#D9F7EF] px-8 py-4 text-sm font-black uppercase tracking-wide text-[#064E4A] shadow-xl transition hover:-translate-y-1 hover:bg-[#FFF8EF]"
              >
                Request Visa Support
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/255689824682"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-5 z-[999] flex cursor-pointer items-center gap-3 rounded-full bg-[#FFF8EF] px-4 py-3 text-sm font-black text-[#064E4A] shadow-2xl transition hover:-translate-y-1 md:right-8"
        aria-label="Contact VistaWay Travel & Tours on WhatsApp"
      >
        <span className="hidden sm:inline">Contact on WhatsApp</span>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-xl text-white">
          ☎
        </span>
      </a>
    </section>
  );
}
