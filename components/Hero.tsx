import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-[88px]">
      <div className="relative h-[calc(100vh-88px)] min-h-[560px] w-full overflow-hidden">
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
          <div className="mx-auto max-w-5xl -translate-y-8 md:-translate-y-10">
            <p className="mb-4 inline-flex rounded-full border border-[#D9F7EF]/30 bg-[#064E4A]/60 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D9F7EF] backdrop-blur md:text-sm">
              VistaWay Travel & Tours
            </p>

            <h1 className="text-4xl font-black leading-tight text-[#FFF8EF] drop-shadow-2xl md:text-5xl lg:text-[58px]">
              Flights, Visas & Holiday Packages Made Simple
            </h1>

            <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-[#D9F7EF] drop-shadow md:text-lg md:leading-8">
              Plan flight bookings, UAE visa support, Qatar visa support, China
              visa support, safari packages, Zanzibar holidays, hotel bookings,
              airport transfers, and travel insurance with a team that keeps
              everything clear and easy.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#flights"
                className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#FF6B5E] px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#f45e51]"
              >
                Request Flight Booking
              </a>

              <a
                href="#dubai-visa"
                className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#D9F7EF] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#064E4A] shadow-xl transition hover:-translate-y-1 hover:bg-[#FFF8EF]"
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
  className="fixed bottom-6 right-5 z-[999] flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-2xl transition hover:-translate-y-1 hover:scale-105 md:right-8"
  aria-label="Contact VistaWay Travel & Tours on WhatsApp"
  title="Contact on WhatsApp"
>
  ☎
</a>
    </section>
  );
}
