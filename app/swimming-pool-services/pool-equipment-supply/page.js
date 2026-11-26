import ServiceLanding from "@/components/ServiceLanding";

export const metadata = {
  title: "Swimming Pool Equipment Supplier in Karachi | The Sky Pool",
  description:
    "Buy swimming pool equipment in Karachi from The Sky Pool. Pool pumps, filters, cleaning accessories, vacuum heads, hoses, brushes, nets, valves, lights and accessories.",
  keywords: [
    "swimming pool equipment supplier Karachi",
    "pool equipment Karachi",
    "swimming pool pumps Karachi",
    "swimming pool filters Karachi",
    "pool cleaning accessories Karachi",
    "pool vacuum hose Karachi",
    "pool cleaning equipment supplier",
    "swimming pool accessories Karachi",
  ],
  alternates: {
    canonical: "https://theskypool.pk/swimming-pool-services/pool-equipment-supply",
  },
  openGraph: {
    title: "Swimming Pool Equipment Supplier in Karachi | The Sky Pool",
    description:
      "Pool pumps, filters, cleaning accessories and swimming pool equipment supply in Karachi.",
    url: "https://theskypool.pk/swimming-pool-services/pool-equipment-supply",
    type: "website",
    images: ["/images/services/pool-equipment.webp"],
  },
};

const service = {
  path: "/swimming-pool-services/pool-equipment-supply",
  title: "Swimming Pool Equipment Supply in Karachi",
  subtitle: "Pool Pumps, Filters, Cleaning Equipment and Accessories",
  description:
    "The Sky Pool supplies swimming pool equipment and accessories in Karachi, including pumps, filters, cleaning tools, vacuum hoses, vacuum heads, brushes, deep nets, water test kits, valves, lights and pool maintenance products.",
  image: "/images/services/pool-equipment.webp",
  imageAlt: "Swimming pool pumps, filters and cleaning equipment supplied by The Sky Pool",

  introTitle: "Swimming Pool Equipment and Accessories Supplier",
  intro: [
    "The right swimming pool equipment helps maintain water circulation, filtration, cleaning and overall pool operation. Equipment should be selected according to pool volume, plumbing arrangement, operating requirements and compatibility with the existing system.",
    "The Sky Pool supplies swimming pool equipment in Karachi for new pool installations, replacement requirements and routine pool maintenance. Our product range includes filtration equipment, circulation pumps, cleaning accessories, fittings and other pool-related products.",
    "Whether you are setting up a new pool or replacing existing equipment, we can help identify suitable products according to your pool's requirements and availability.",
  ],

  benefits: [
    {
      title: "Swimming Pool Pumps",
      text: "Pool circulation pumps selected according to system flow requirements, pool size and filtration arrangement.",
    },
    {
      title: "Swimming Pool Filters",
      text: "Pool filtration equipment and related components for removing suspended particles and supporting water clarity.",
    },
    {
      title: "Pool Cleaning Accessories",
      text: "Deep nets, nylon brushes, vacuum heads, vacuum hoses and telescopic poles for routine pool cleaning.",
    },
    {
      title: "Water Testing Equipment",
      text: "Water test kits and related products for checking important pool water parameters.",
    },
    {
      title: "Valves and Plumbing Fittings",
      text: "Pool system valves, uPVC fittings and related plumbing components for circulation and filtration systems.",
    },
    {
      title: "Pool Lights and Accessories",
      text: "Swimming pool lights and selected accessories for new installations and replacement requirements.",
    },
  ],

  process: [
    {
      title: "Identify Requirements",
      text: "Share your pool size, equipment requirement or existing equipment details.",
    },
    {
      title: "Product Selection",
      text: "We identify suitable equipment according to application and system compatibility.",
    },
    {
      title: "Quotation",
      text: "Product specifications, availability and pricing are discussed before confirmation.",
    },
    {
      title: "Supply and Installation",
      text: "Equipment can be supplied, with installation support where included in the agreed scope.",
    },
  ],

  faq: [
    {
      question: "Where can I buy swimming pool equipment in Karachi?",
      answer:
        "The Sky Pool supplies swimming pool equipment and accessories in Karachi, including pumps, filters, cleaning tools, valves, lights and maintenance products.",
    },
    {
      question: "Do you supply swimming pool pumps and filters?",
      answer:
        "Yes. The Sky Pool supplies swimming pool pumps, filters and related filtration components. Selection depends on pool volume, flow requirements and plumbing configuration.",
    },
    {
      question: "Do you sell pool cleaning accessories?",
      answer:
        "Yes. Our pool cleaning equipment range can include deep nets, nylon brushes, vacuum hoses, vacuum heads, telescopic poles and water test kits.",
    },
    {
      question: "Can you recommend a pump and filter for my swimming pool?",
      answer:
        "Yes. Share your pool dimensions, approximate water volume and existing plumbing or equipment details so suitable pump and filter options can be assessed.",
    },
    {
      question: "Do you supply replacement pool equipment?",
      answer:
        "The Sky Pool can assist with replacement equipment requirements, subject to product specifications and availability.",
    },
    {
      question: "Do you provide equipment installation?",
      answer:
        "Installation support is available for selected equipment and can be included in the quotation according to the project scope.",
    },
  ],

  relatedServices: [
    {
      title: "Swimming Pool Construction",
      href: "/swimming-pool-services/pool-construction",
    },
    {
      title: "Swimming Pool Maintenance",
      href: "/swimming-pool-services/pool-maintenance",
    },
    {
      title: "Swimming Pool Heating Systems",
      href: "/swimming-pool-services/pool-heating-systems",
    },
  ],

  ctaTitle: "Looking for Swimming Pool Equipment in Karachi?",
  ctaText:
    "Contact The Sky Pool with your equipment requirements. We can help you identify suitable pool pumps, filters, cleaning tools and accessories.",
};

export default function PoolEquipmentSupplyPage() {
  return <ServiceLanding service={service} />;
}