import PoolProducts from "@/components/PoolProducts";

export const metadata = {
  title: "Swimming Pool Equipment & Products in Karachi | The Sky Pool",

  description:
    "Buy swimming pool pumps, filters, ladders, skimmers, heat pumps, acrylic fountains and pool cleaning equipment in Karachi. The Sky Pool supplies quality swimming pool products with professional guidance.",

  keywords: [
    "swimming pool equipment Karachi",
    "swimming pool products Karachi",
    "pool equipment supplier Karachi",
    "swimming pool pumps Karachi",
    "swimming pool filters Karachi",
    "pool cleaning equipment Karachi",
    "swimming pool accessories Pakistan",
    "LASWIM swimming pool products",
    "MINDER swimming pool equipment",
    "Power World heat pumps Pakistan",
    "swimming pool ladders",
    "swimming pool skimmers",
    "acrylic water fountains",
    "pool maintenance kits",
  ],

  alternates: {
    canonical: "https://theskypool.pk/swimming-pool-products",
  },

  openGraph: {
    title: "Swimming Pool Products & Equipment in Karachi | The Sky Pool",
    description:
      "Explore swimming pool pumps, filters, cleaning accessories, ladders, skimmers, heat pumps and fountains supplied by The Sky Pool in Karachi.",
    url: "https://theskypool.pk/swimming-pool-products",
    siteName: "The Sky Pool",
    type: "website",
    images: [
      {
        url: "https://theskypool.pk/images/products/swimming-pool-products-hero.webp",
        width: 1200,
        height: 630,
        alt: "Swimming pool products and equipment supplied by The Sky Pool",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Swimming Pool Products & Equipment in Karachi",
    description:
      "Explore swimming pool pumps, filters, heat pumps, ladders and cleaning equipment from The Sky Pool.",
    images: [
      "https://theskypool.pk/images/products/swimming-pool-products-hero.webp",
    ],
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

export default function PoolProductsPage() {
  return <PoolProducts />;
}