"use client";

import { useMemo, useState } from "react";
import { Clock, FileCheck2, FolderCheck, Handshake } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const whatsappNumber = "255689824682";

type VisaFormState = {
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  email: string;
  phone: string;
  passportNumber: string;
  passportExpiryDate: string;
  placeOfIssue: string;
  maritalStatus: string;
  travelDate: string;
  message: string;
};

const initialForm: VisaFormState = {
  fullName: "",
  dateOfBirth: "",
  nationality: "",
  email: "",
  phone: "",
  passportNumber: "",
  passportExpiryDate: "",
  placeOfIssue: "",
  maritalStatus: "Single",
  travelDate: "",
  message: ""
};

const features = [
  { icon: Clock, title: "Fast Processing Support" },
  { icon: Handshake, title: "Hassle-Free Guidance" },
  { icon: FolderCheck, title: "Document Preparation Help" },
  { icon: FileCheck2, title: "Clear Application Support" }
];

export default function DubaiVisaForm() {
  const [form, setForm] = useState<VisaFormState>(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof VisaFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setIsSubmitted(false);
  };

  const whatsappLink = useMemo(() => {
    const message = `Hello VistaWay Travel & Tours, I would like Dubai visa application support.

Full Name: ${form.fullName}
Date of Birth: ${form.dateOfBirth}
Nationality: ${form.nationality}
Email: ${form.email}
Phone: ${form.phone}
Passport Number: ${form.passportNumber}
Passport Expiry Date: ${form.passportExpiryDate}
Place of Issue: ${form.placeOfIssue}
Marital Status: ${form.maritalStatus}
Travel Date: ${form.travelDate}
Message: ${form.message || "None"}`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }, [form]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="dubai-visa"
      className="section-padding scroll-mt-24 bg-tealDeep py-20 text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-coralWarm">
            Visa support
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Dubai Visa Application Support
          </h2>

          <p className="mt-5 leading-8 text-white/75">
            We help tourists, families, and business travelers prepare Dubai
            visa application details with clear document guidance and
            step-by-step support.
          </p>

          <p className="mt-4 rounded-3xl border border-white/10 bg-white/10 p-4 text-sm leading-7 text-white/75">
            Visa approval depends on the relevant immigration authorities. Our
            role is to guide you through the preparation process and help you
            submit accurate application details.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-white/10 bg-white/10 p-5"
                >
                  <Icon className="text-coralWarm" size={24} />
                  <p className="mt-3 font-black">{feature.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <Card className="p-5 text-charcoal md:p-8">
          <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="visaFullName" className="form-label">
                Full Name
              </label>
              <input
                id="visaFullName"
                className="form-field"
                value={form.fullName}
                onChange={(event) =>
                  updateField("fullName", event.target.value)
                }
                required
              />
            </div>

            <div>
              <label htmlFor="dateOfBirth" className="form-label">
                Date of Birth
              </label>
              <input
                id="dateOfBirth"
                type="date"
                className="form-field cursor-pointer"
                value={form.dateOfBirth}
                onChange={(event) =>
                  updateField("dateOfBirth", event.target.value)
                }
                required
              />
            </div>

            <div>
              <label htmlFor="nationality" className="form-label">
                Nationality
              </label>
              <input
                id="nationality"
                className="form-field"
                value={form.nationality}
                onChange={(event) =>
                  updateField("nationality", event.target.value)
                }
                required
              />
            </div>

            <div>
              <label htmlFor="visaEmail" className="form-label">
                Email Address
              </label>
              <input
                id="visaEmail"
                type="email"
                className="form-field"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="visaPhone" className="form-label">
                Phone Number
              </label>
              <input
                id="visaPhone"
                className="form-field"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="passportNumber" className="form-label">
                Passport Number
              </label>
              <input
                id="passportNumber"
                className="form-field"
                value={form.passportNumber}
                onChange={(event) =>
                  updateField("passportNumber", event.target.value)
                }
                required
              />
            </div>

            <div>
              <label htmlFor="passportExpiryDate" className="form-label">
                Passport Expiry Date
              </label>
              <input
                id="passportExpiryDate"
                type="date"
                className="form-field cursor-pointer"
                value={form.passportExpiryDate}
                onChange={(event) =>
                  updateField("passportExpiryDate", event.target.value)
                }
                required
              />
            </div>

            <div>
              <label htmlFor="placeOfIssue" className="form-label">
                Place of Issue
              </label>
              <input
                id="placeOfIssue"
                className="form-field"
                value={form.placeOfIssue}
                onChange={(event) =>
                  updateField("placeOfIssue", event.target.value)
                }
                required
              />
            </div>

            <div>
              <label htmlFor="maritalStatus" className="form-label">
                Marital Status
              </label>
              <select
                id="maritalStatus"
                className="form-field cursor-pointer"
                value={form.maritalStatus}
                onChange={(event) =>
                  updateField("maritalStatus", event.target.value)
                }
              >
                <option>Single</option>
                <option>Married</option>
              </select>
            </div>

            <div>
              <label htmlFor="travelDate" className="form-label">
                Travel Date
              </label>
              <input
                id="travelDate"
                type="date"
                className="form-field cursor-pointer"
                value={form.travelDate}
                onChange={(event) =>
                  updateField("travelDate", event.target.value)
                }
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="visaMessage" className="form-label">
                Extra Information
              </label>
              <textarea
                id="visaMessage"
                rows={4}
                className="form-field resize-none"
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Share any extra information about your travel plan..."
              />
            </div>

            <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center">
              <Button type="submit" className="w-full md:w-auto">
                Submit Visa Request
              </Button>

              {isSubmitted && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center justify-center rounded-full bg-tealDeep px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#053f3c]"
                >
                  Open WhatsApp Again
                </a>
              )}
            </div>

            {isSubmitted && (
              <div className="rounded-2xl bg-mintSoft p-4 text-sm font-bold text-tealDeep md:col-span-2">
                Your visa request has been prepared. If WhatsApp did not open
                automatically, tap the button above to send your details.
              </div>
            )}
          </form>
        </Card>
      </div>
    </section>
  );
}
