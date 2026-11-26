import PoolServices from "@/components/PoolServices";

export const metadata = {
  title:
    "Swimming Pool Services in Karachi | Construction, Maintenance & Repair",

  description:
    "The Sky Pool provides swimming pool construction, maintenance, cleaning, repair, renovation, filtration systems and equipment installation services in Karachi. 25 years of experience.",

  keywords: [
    "swimming pool services Karachi",
    "swimming pool construction Karachi",
    "swimming pool maintenance Karachi",
    "swimming pool cleaning Karachi",
    "swimming pool repair Karachi",
    "swimming pool renovation Karachi",
    "swimming pool contractor Karachi",
    "pool filtration system Karachi",
    "swimming pool equipment installation Karachi",
    "swimming pool heat pump Karachi",
    "jacuzzi construction Karachi",
    "sauna construction Karachi",
    "cold plunge construction Karachi",
    "The Sky Pool",
  ],

  alternates: {
    canonical: "https://theskypool.pk/swimming-pool-services",
  },

  openGraph: {
    title:
      "Swimming Pool Services in Karachi | The Sky Pool",
    description:
      "Swimming pool construction, maintenance, cleaning, repairs, filtration and equipment solutions in Karachi by The Sky Pool.",
    url: "https://theskypool.pk/swimming-pool-services",
    siteName: "The Sky Pool",
    type: "website",
    images: [
      {
        url: "https://theskypool.pk/images/services/services-hero.webp",
        width: 650,
        height: 500,
        alt: "Swimming pool services in Karachi by The Sky Pool",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PoolServicesPage() {
  return <PoolServices />;
}