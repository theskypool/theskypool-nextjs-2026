import ProductLanding from "@/components/ProductLanding";
import { productData } from "@/components/productData";

export const metadata = {
  title: "Swimming Pool Ladders in Karachi | The Sky Pool",
  description:
    "Buy swimming pool ladders in Karachi from The Sky Pool. Explore stainless steel pool ladder options for residential and commercial swimming pools.",
  alternates: {
    canonical: "https://theskypool.pk/swimming-pool-products/pool-ladders",
  },
  openGraph: {
    title: "Swimming Pool Ladders in Karachi | The Sky Pool",
    description:
      "Swimming pool access ladders supplied in Karachi by The Sky Pool.",
    url: "https://theskypool.pk/swimming-pool-products/pool-ladders",
    images: ["/images/products/pool-ladder.webp"],
  },
};

export default function LaddersPage() {
  return <ProductLanding product={productData.ladders} />;
}