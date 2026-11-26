import AboutUs from "@/components/AboutUs";

export const metadata = {
  title: "About the sky pool | Swimming Pool Experts in Karachi",

  description:
    "Learn about the sky pool, a Karachi swimming pool company with 25 years of experience in pool construction, maintenance, repairs and equipment supply.",

  keywords: [
    "the sky pool Karachi",
    "swimming pool company Karachi",
    "swimming pool construction Karachi",
    "swimming pool contractor Karachi",
    "swimming pool maintenance Karachi",
    "swimming pool equipment supplier Karachi",
    "pool repair Karachi",
    "pool renovation Karachi",
    "swimming pool specialists Karachi",
    "jacuzzi construction Karachi",
    "sauna construction Karachi",
  ],

  alternates: {
    canonical: "https://theskypool.pk/about",
  },

  openGraph: {
    title: "About the sky pool | Swimming Pool Experts in Karachi",
    description:
      "Discover the sky pool's 25 years of experience in swimming pool construction, maintenance, equipment and complete pool solutions in Karachi.",
    url: "https://theskypool.pk/about",
    siteName: "the sky pool",
    type: "website",
    images: [
      {
        url: "https://theskypool.pk/images/about/pool-about.webp",
        width: 650,
        height: 480,
        alt: "the sky pool swimming pool construction and services in Karachi",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return <AboutUs />;
}