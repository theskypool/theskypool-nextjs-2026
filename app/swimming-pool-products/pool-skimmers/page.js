import ProductLanding from "@/components/ProductLanding";
import { productData } from "@/components/productData";

export const metadata = {
  title: "Swimming Pool Skimmers in Karachi | The Sky Pool",
  description:
    "Swimming pool skimmers and accessories in Karachi. The Sky Pool supplies skimmer units for new pool construction and replacement requirements.",
  alternates: {
    canonical: "https://theskypool.pk/swimming-pool-products/pool-skimmers",
  },
  openGraph: {
    title: "Swimming Pool Skimmers in Karachi | The Sky Pool",
    description:
      "Pool skimmer units and accessories for swimming pools in Karachi.",
    url: "https://theskypool.pk/swimming-pool-products/pool-skimmers",
    images: ["/images/products/pool-skimmer.webp"],
  },
};

export default function SkimmersPage() {
  return <ProductLanding product={productData.skimmers} />;
}