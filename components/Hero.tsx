import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative flex w-full items-center justify-center overflow-hidden px-4 py-10 sm:px-6 md:min-h-[calc(100vh-88px)] md:py-16">
        <Image
          src="/images/hero-travel.png"
          alt="VistaWay Travel & Tours travel planning"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#064E4A]/80 via-black/60 to-[#064E4A]/90" />
        <div className="absolute inset-0 bg-[#064E4A]/20" />

        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
          <p className="mb-3 inline-flex rounded-full border border-[#D9F7EF]/30 bg-[#064E4A]/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#D9F7EF] backdrop-blur md:text-sm">
            VistaWay Travel & Tours
          </p>

          <h1 className="mx-auto max-w-4xl text-[36px] font-black leading-[1.05] text-[#FFF8EF] drop-shadow-2xl sm:text-5xl lg:text-[58px]">
            Flights, Visas & Holiday Packages Made Simple
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-[16px] leading-7 text-[#D9F7EF] drop-shadow md:text-lg md:leading-8">
            Plan flight bookings, visa support, safari packages, Zanzibar
            holidays, hotel bookings, airport transfers, and travel insurance
            with a team that keeps everything clear and easy.
          </p>

          <div className="mx-auto mt-6 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#flights"
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#FF6B5E] px-6 py-3.5 text-[13px] font-black uppercase tracking-wide text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#f45e51] sm:px-7 sm:py-4 sm:text-sm"
            >
              Request Flight Booking
            </a>

            <a
              href="#dubai-visa"
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#D9F7EF] px-6 py-3.5 text-[13px] font-black uppercase tracking-wide text-[#064E4A] shadow-xl transition hover:-translate-y-1 hover:bg-[#FFF8EF] sm:px-7 sm:py-4 sm:text-sm"
            >
              Request Visa Support
            </a>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/255689824682"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-5 z-[999] flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-2xl transition hover:-translate-y-1 hover:scale-105 md:right-8"
        aria-label="Contact VistaWay Travel & Tours on WhatsApp"
        title="Contact on WhatsApp"
      >
        ✆
      </a>
    </section>
  );
}
