"use client";

import { useMemo, useState } from "react";
import { Send } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const whatsappNumber = "255689824682";

type FlightFormState = {
  tripType: string;
  from: string;
  to: string;
  departureDate: string;
  returnDate: string;
  adults: string;
  children: string;
  travelClass: string;
  fullName: string;
  phone: string;
  email: string;
  message: string;
};

const initialForm: FlightFormState = {
  tripType: "Round Trip",
  from: "",
  to: "",
  departureDate: "",
  returnDate: "",
  adults: "1",
  children: "0",
  travelClass: "Economy",
  fullName: "",
  phone: "",
  email: "",
  message: ""
};

export default function FlightBookingForm() {
  const [form, setForm] = useState<FlightFormState>(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof FlightFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setIsSubmitted(false);
  };

  const adultsNumber = form.adults === "" ? 0 : Number(form.adults);
  const childrenNumber = form.children === "" ? 0 : Number(form.children);

  const whatsappLink = useMemo(() => {
    const message = `Hello VistaWay Travel & Tours, I would like to request a flight booking.

Trip Type: ${form.tripType}
From: ${form.from}
To: ${form.to}
Departure Date: ${form.departureDate}
Return Date: ${form.returnDate || "Not applicable"}
Adults: ${adultsNumber}
Children: ${childrenNumber}
Travel Class: ${form.travelClass}
Full Name: ${form.fullName}
Phone/WhatsApp: ${form.phone}
Email: ${form.email}
Special Request: ${form.message || "None"}`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }, [form, adultsNumber, childrenNumber]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Future backend/API integration can be added here.
    // Example: POST the form data to app/api/flight-request/route.ts.
    setIsSubmitted(true);
  };

  return (
    <section id="flights" className="section-padding scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-coralWarm">
            Flight requests
          </p>
          <h2 className="mt-3 text-3xl font-black text-tealDeep md:text-5xl">
            Flight Booking Made Simple
          </h2>
          <p className="mt-5 text-charcoal/70">
            Share your route and passenger details. Our team will compare
            available options and contact you with suitable travel choices.
          </p>
        </div>

        <Card className="mx-auto mt-10 max-w-5xl p-5 md:p-8">
          <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="tripType" className="form-label">
                Trip Type
              </label>
              <select
                id="tripType"
                className="form-field cursor-pointer"
                value={form.tripType}
                onChange={(event) => updateField("tripType", event.target.value)}
              >
                <option>One Way</option>
                <option>Round Trip</option>
                <option>Multi-City</option>
              </select>
            </div>

            <div>
              <label htmlFor="travelClass" className="form-label">
                Travel Class
              </label>
              <select
                id="travelClass"
                className="form-field cursor-pointer"
                value={form.travelClass}
                onChange={(event) =>
                  updateField("travelClass", event.target.value)
                }
              >
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>

            <div>
              <label htmlFor="from" className="form-label">
                From
              </label>
              <input
                id="from"
                className="form-field"
                placeholder="Dar es Salaam"
                value={form.from}
                onChange={(event) => updateField("from", event.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="to" className="form-label">
                To
              </label>
              <input
                id="to"
                className="form-field"
                placeholder="Dubai"
                value={form.to}
                onChange={(event) => updateField("to", event.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="departureDate" className="form-label">
                Departure Date
              </label>
              <input
                id="departureDate"
                type="date"
                className="form-field cursor-pointer"
                value={form.departureDate}
                onChange={(event) =>
                  updateField("departureDate", event.target.value)
                }
                required
              />
            </div>

            <div>
              <label htmlFor="returnDate" className="form-label">
                Return Date
              </label>
              <input
                id="returnDate"
                type="date"
                className="form-field cursor-pointer"
                value={form.returnDate}
                onChange={(event) =>
                  updateField("returnDate", event.target.value)
                }
              />
            </div>

            <div>
              <label htmlFor="adults" className="form-label">
                Number of Adults
              </label>
              <input
                id="adults"
                type="number"
                min="1"
                className="form-field"
                value={form.adults}
                onChange={(event) => updateField("adults", event.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="children" className="form-label">
                Number of Children
              </label>
              <input
                id="children"
                type="number"
                min="0"
                className="form-field"
                value={form.children}
                onChange={(event) =>
                  updateField("children", event.target.value)
                }
              />
            </div>

            <div>
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                id="fullName"
                className="form-field"
                placeholder="Your full name"
                value={form.fullName}
                onChange={(event) =>
                  updateField("fullName", event.target.value)
                }
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="form-label">
                Phone / WhatsApp
              </label>
              <input
                id="phone"
                className="form-field"
                placeholder="+255..."
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-field"
                placeholder="you@example.com"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="form-label">
                Message / Special Request
              </label>
              <textarea
                id="message"
                rows={4}
                className="form-field resize-none"
                placeholder="Preferred airline, travel time, baggage needs, or other notes..."
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
              />
            </div>

            <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center">
              <Button type="submit" className="w-full md:w-auto">
                <Send size={18} className="mr-2" />
                Send Flight Request
              </Button>

              {isSubmitted && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center justify-center rounded-full bg-tealDeep px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#053f3c]"
                >
                  Open WhatsApp
                </a>
              )}
            </div>

            {isSubmitted && (
              <div className="rounded-2xl bg-mintSoft p-4 text-sm font-bold text-tealDeep md:col-span-2">
                Thank you. Your flight request is ready. You can open WhatsApp
                to send the details directly.
              </div>
            )}
          </form>
        </Card>
      </div>
    </section>
  );
}
