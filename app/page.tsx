import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FlightBookingForm from "@/components/FlightBookingForm";
import Services from "@/components/Services";
import DubaiVisaForm from "@/components/DubaiVisaForm";
import Packages from "@/components/Packages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <FlightBookingForm />
      <Services />
      <DubaiVisaForm />
      <Packages />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
