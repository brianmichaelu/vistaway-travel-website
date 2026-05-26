"use client";

import { useMemo, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const whatsappNumber = "255689824682";
const emailAddress = "bookings@vistawaytravel.co.tz";

type ContactFormState = {
  fullName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const initialForm: ContactFormState = {
  fullName: "",
  email: "",
  phone: "",
  interest: "Flight Booking",
  message: ""
};

export default function Contact() {
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof ContactFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setIsSubmitted(false);
  };

  const whatsappLink = useMemo(() => {
    const message = `Hello VistaWay Travel & Tours, I would like assistance.

Name: ${form.fullName}
Email: ${form.email}
Phone: ${form.phone}
Interested In: ${form.interest}
Message: ${form.message}`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }, [form]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Future backend/API integration can be added here.
    // Example: send contact form details to a CRM or email service.
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding scroll-mt-24 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-coralWarm">
            Contact us
          </p>
          <h2 className="mt-3 text-3xl font-black text-tealDeep md:text-5xl">
            Ready to plan your next journey?
          </h2>
          <p className="mt-5 leading-8 text-charcoal/70">
            Send a message, request a quote, or contact the team directly
            through WhatsApp, phone, or email.
          </p>

          <div className="mt-8 grid gap-4">
            <div className="flex gap-4 rounded-3xl border border-tealDeep/10 bg-white p-5 shadow-sm">
              <Phone className="text-coralWarm" />
              <div>
                <p className="font-black text-tealDeep">Phone / WhatsApp</p>
                <p className="text-charcoal/70">+255 689 824 682</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-3xl border border-tealDeep/10 bg-white p-5 shadow-sm">
              <Mail className="text-coralWarm" />
              <div>
                <p className="font-black text-tealDeep">Email</p>
                <p className="text-charcoal/70">{emailAddress}</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-3xl border border-tealDeep/10 bg-white p-5 shadow-sm">
              <MapPin className="text-coralWarm" />
              <div>
                <p className="font-black text-tealDeep">Location</p>
                <p className="text-charcoal/70">Dar es Salaam, Tanzania</p>
                <p className="mt-1 text-sm text-charcoal/60">
                  Business Hours: Monday - Saturday, 8:30 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-tealDeep px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#053f3c]"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-tealDeep/20 bg-white px-5 py-3 text-sm font-extrabold text-tealDeep transition hover:-translate-y-0.5 hover:text-coralWarm"
            >
              Email
            </a>
          </div>
        </div>

        <Card className="p-5 md:p-8">
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div>
              <label htmlFor="contactFullName" className="form-label">
                Full Name
              </label>
              <input
                id="contactFullName"
                className="form-field"
                value={form.fullName}
                onChange={(event) =>
                  updateField("fullName", event.target.value)
                }
                required
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="contactEmail" className="form-label">
                  Email
                </label>
                <input
                  id="contactEmail"
                  type="email"
                  className="form-field"
                  value={form.email}
                  onChange={(event) =>
                    updateField("email", event.target.value)
                  }
                  required
                />
              </div>

              <div>
                <label htmlFor="contactPhone" className="form-label">
                  Phone
                </label>
                <input
                  id="contactPhone"
                  className="form-field"
                  value={form.phone}
                  onChange={(event) =>
                    updateField("phone", event.target.value)
                  }
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="interest" className="form-label">
                Interested In
              </label>
              <select
                id="interest"
                className="form-field cursor-pointer"
                value={form.interest}
                onChange={(event) =>
                  updateField("interest", event.target.value)
                }
              >
                <option>Flight Booking</option>
                <option>Dubai Visa</option>
                <option>Safari Package</option>
                <option>Zanzibar Holiday</option>
                <option>Hotel Booking</option>
                <option>Corporate Travel</option>
              </select>
            </div>

            <div>
              <label htmlFor="contactMessage" className="form-label">
                Message
              </label>
              <textarea
                id="contactMessage"
                rows={5}
                className="form-field resize-none"
                value={form.message}
                onChange={(event) =>
                  updateField("message", event.target.value)
                }
                required
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button type="submit">
                <Send size={18} className="mr-2" />
                Send Message
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
              <div className="rounded-2xl bg-mintSoft p-4 text-sm font-bold text-tealDeep">
                Thank you. Your message is ready. Open WhatsApp to send it
                directly.
              </div>
            )}
          </form>
        </Card>
      </div>
    </section>
  );
}
