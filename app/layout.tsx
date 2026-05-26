import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VistaWay Travel & Tours | Flights, Dubai Visa & Travel Packages",
  description:
    "Book flights, request Dubai visa support, plan safari packages, Zanzibar holidays, hotels, travel insurance, and airport transfers with VistaWay Travel & Tours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
