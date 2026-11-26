
import HomeSlider from "@/components/HomeSlider";
import HomeServices from "@/components/HomeServices";
import CompanyHighlights from "@/components/CompanyHighlights";
import HomeFAQ from "@/components/HomeFAQ";
export default function Home() {
  const metadata = {
    title:
      "Swimming Pool Construction & Maintenance Karachi | The Sky Pool",

    description:
      "The Sky Pool provides swimming pool construction, renovation, cleaning, maintenance and equipment supply in Karachi. Explore pool pumps, filters and accessories.",

    keywords: [
      "swimming pool construction Karachi",
      "swimming pool maintenance Karachi",
      "swimming pool contractors Karachi",
      "pool cleaning services Karachi",
      "swimming pool equipment Karachi",
      "swimming pool filters Karachi",
      "swimming pool pumps Karachi",
      "pool filtration systems",
      "swimming pool renovation",
      "pool chemicals and accessories",
      "jacuzzi construction Karachi",
      "The Sky Pool",
    ],

    alternates: {
      canonical: "https://theskypool.pk/",
    },

    openGraph: {
      title:
        "The Sky Pool | Swimming Pool Construction & Maintenance Karachi",

      description:
        "Professional swimming pool construction, maintenance, equipment supply and installation in Karachi.",

      url: "https://theskypool.pk/",
      siteName: "The Sky Pool",
      type: "website",
      images: [
        {
          url: "https://theskypool.pk/images/home/pool-construction.WEBP",
          width: 1200,
          height: 630,
          alt: "Swimming pool construction by The Sky Pool",
        },
      ],
    },
  };
  return (
    <main>

      <HomeSlider />
      <HomeServices />
      <CompanyHighlights />
      <HomeFAQ />

      {/* Other homepage sections */}

    </main>
  )
}
