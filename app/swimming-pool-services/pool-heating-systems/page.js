import ServiceLanding from "@/components/ServiceLanding";

export const metadata = {
  title: "Swimming Pool Heat Pumps in Karachi | Pool Heating Systems",
  description:
    "Swimming pool heating systems in Karachi by The Sky Pool. Heat pump supply, installation and heating solutions for residential pools, farmhouses and commercial swimming pools.",
  keywords: [
    "swimming pool heat pump Karachi",
    "pool heating systems Karachi",
    "swimming pool heater Karachi",
    "pool heat pump installation Karachi",
    "inverter pool heat pump",
    "residential pool heating Karachi",
    "commercial swimming pool heating",
  ],
  alternates: {
    canonical: "https://theskypool.pk/swimming-pool-services/pool-heating-systems",
  },
  openGraph: {
    title: "Swimming Pool Heating Systems in Karachi | The Sky Pool",
    description:
      "Pool heat pump supply, installation and heating solutions in Karachi.",
    url: "https://theskypool.pk/swimming-pool-services/pool-heating-systems",
    type: "website",
    images: ["/images/services/pool-heating.webp"],
  },
};

const service = {
  path: "/swimming-pool-services/pool-heating-systems",
  title: "Swimming Pool Heating Systems in Karachi",
  subtitle: "Swimming Pool Heat Pumps, Supply and Installation",
  description:
    "The Sky Pool provides swimming pool heating solutions in Karachi, including heat pump selection, supply and installation for residential pools, farmhouses and commercial properties. We help assess pool volume, heating requirements and suitable equipment capacity.",
  image: "/images/services/pool-heating.webp",
  imageAlt: "Swimming pool heat pump heating system installation",

  introTitle: "Swimming Pool Heat Pump and Heating Solutions",
  intro: [
    "Swimming pool heating systems help extend the swimming season and maintain a more comfortable water temperature during cooler weather. The appropriate system depends on pool volume, desired water temperature, outdoor conditions, pool exposure and expected operating hours.",
    "The Sky Pool provides swimming pool heating solutions in Karachi, including heat pump selection, equipment supply and installation. We assess the pool's approximate water volume and heating requirements before recommending a suitable capacity.",
    "Heat pumps are commonly considered for residential and commercial pools because they transfer heat from the surrounding air into the pool water. Actual performance and energy consumption depend on operating conditions, equipment specifications and installation quality.",
  ],

  benefits: [
    {
      title: "Pool Heat Pump Selection",
      text: "Assessment of pool volume, desired temperature, climate conditions and heating requirements to identify suitable equipment capacity.",
    },
    {
      title: "Inverter Heat Pumps",
      text: "Options for inverter pool heat pumps, subject to equipment specifications, availability and project requirements.",
    },
    {
      title: "Residential Pool Heating",
      text: "Heating solutions for private swimming pools, villas and residential properties.",
    },
    {
      title: "Farmhouse and Commercial Pools",
      text: "Heating equipment solutions for larger pools, farmhouses and commercial swimming facilities.",
    },
    {
      title: "Heat Pump Installation",
      text: "Installation planning, water connections and associated plumbing work according to the selected system.",
    },
    {
      title: "Heating System Assessment",
      text: "Review of pool dimensions, existing filtration equipment and installation conditions before equipment selection.",
    },
  ],

  process: [
    {
      title: "Pool Information",
      text: "We review pool dimensions, water volume, depth and existing equipment.",
    },
    {
      title: "Heating Assessment",
      text: "Desired water temperature, weather conditions and usage schedule are considered.",
    },
    {
      title: "Equipment Selection",
      text: "Suitable heat pump options and heating capacity are discussed.",
    },
    {
      title: "Installation",
      text: "The selected heat pump is installed according to the agreed equipment and plumbing scope.",
    },
  ],

  faq: [
    {
      question: "Do you supply swimming pool heat pumps in Karachi?",
      answer:
        "Yes. The Sky Pool provides swimming pool heating solutions, including heat pump supply and installation, subject to equipment availability and project requirements.",
    },
    {
      question: "Which heat pump capacity is suitable for my swimming pool?",
      answer:
        "Capacity depends on pool water volume, desired temperature, outdoor conditions, pool covering, wind exposure and heating schedule. Pool dimensions and depth help establish the initial volume calculation.",
    },
    {
      question: "Are inverter heat pumps suitable for swimming pools?",
      answer:
        "Inverter heat pumps can adjust their operating output according to heating demand. Suitability depends on the pool, climate, equipment specifications and operating requirements.",
    },
    {
      question: "Can a heat pump be installed on an existing swimming pool?",
      answer:
        "Yes, many existing pools can be fitted with a heat pump, subject to available space, plumbing arrangement, electrical requirements and equipment compatibility.",
    },
    {
      question: "How long does a swimming pool take to heat?",
      answer:
        "Heating time depends on pool volume, starting water temperature, heat pump capacity, outdoor temperature and heat loss. A suitable capacity assessment is important before installation.",
    },
    {
      question: "Do you provide heat pump installation?",
      answer:
        "Yes. The Sky Pool can provide installation support according to the selected equipment and agreed project scope. Electrical work and other exclusions should be confirmed in the quotation.",
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
      title: "Pool Equipment Supply",
      href: "/swimming-pool-services/pool-equipment-supply",
    },
  ],

  ctaTitle: "Want to Heat Your Swimming Pool?",
  ctaText:
    "Share your pool dimensions, water depth and desired temperature with The Sky Pool to discuss a suitable swimming pool heating system.",
};

export default function PoolHeatingPage() {
  return <ServiceLanding service={service} />;
}