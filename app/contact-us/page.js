import ContactUs from "@/components/ContactUs";

export const metadata = {
  title: "Contact The Sky Pool | Swimming Pool Company in Karachi",
  description:
    "Contact The Sky Pool in Karachi for swimming pool construction, maintenance, repairs, equipment supply, heat pumps, jacuzzi, sauna and complete pool solutions. Get in touch with our team.",
  keywords: [
    "contact The Sky Pool",
    "swimming pool company Karachi",
    "swimming pool construction Karachi",
    "pool maintenance Karachi",
    "pool equipment supplier Karachi",
    "swimming pool repair Karachi",
    "pool heat pumps Karachi",
  ],
  alternates: {
    canonical: "https://theskypool.pk/contact-us",
  },
  openGraph: {
    title: "Contact The Sky Pool | Swimming Pool Experts in Karachi",
    description:
      "Get in touch with The Sky Pool for swimming pool construction, maintenance, repairs and equipment solutions in Karachi.",
    url: "https://theskypool.pk/contact-us",
    siteName: "The Sky Pool",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactUs />;
}