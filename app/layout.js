import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://theskypool.pk"),

  title: "The Sky Pool | Swimming Pool Experts in Karachi",

  description:
    "The Sky Pool provides professional swimming pool construction, maintenance, repairs, renovation and equipment supply in Karachi. Complete swimming pool solutions backed by over 25 years of experience.",

  applicationName: "The Sky Pool",

  openGraph: {
    title: "The Sky Pool | Swimming Pool Experts in Karachi",
    description:
      "Explore swimming pool construction, maintenance, repairs and equipment solutions by The Sky Pool in Karachi, Pakistan.",
    url: "https://theskypool.pk",
    siteName: "The Sky Pool",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/images/products/swimming-pool-products-hero.webp",
        width: 1200,
        height: 630,
        alt: "Swimming pool solutions by The Sky Pool Karachi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Sky Pool | Swimming Pool Experts in Karachi",
    description:
      "Swimming pool construction, maintenance, repairs and equipment supply in Karachi.",
    images: ["/images/products/swimming-pool-products-hero.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistSans.className}`}>
        <Navbar />

        {children}

        <Footer />
        <WhatsAppFloat />

      </body>
    </html>
  );
}