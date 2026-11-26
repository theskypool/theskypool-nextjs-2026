import ProductLanding from "@/components/ProductLanding";
import { productData } from "@/components/productData";

export const metadata = {
  title: "Swimming Pool Pumps in Karachi | Laswim & Minder",
  description:
    "Swimming pool pumps and motors in Karachi by The Sky Pool. Explore Laswim and Minder pool circulation pumps for residential and commercial pools.",
  alternates: {
    canonical: "https://theskypool.pk/swimming-pool-products/pumps",
  },
  openGraph: {
    title: "Swimming Pool Pumps in Karachi | The Sky Pool",
    description:
      "Laswim and Minder swimming pool pumps and motors supplied in Karachi.",
    url: "https://theskypool.pk/swimming-pool-products/pumps",
    images: ["/images/products/pool-pump.webp"],
  },
};

export default function PumpsPage() {
  return <ProductLanding product={productData.pumps} />;
}