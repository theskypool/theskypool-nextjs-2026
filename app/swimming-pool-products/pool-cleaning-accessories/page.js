import ProductLanding from "@/components/ProductLanding";
import { productData } from "@/components/productData";

export const metadata = {
  title: "Swimming Pool Cleaning accessories in Karachi | The Sky Pool",
  description:
    "Complete swimming pool cleaning accessories in Karachi, including vacuum hose, deep net, nylon brush, vacuum head, water test kit and telescopic pole.",
  alternates: {
    canonical: "https://theskypool.pk/swimming-pool-products/pool-cleaning-accessories",
  },
  openGraph: {
    title: "Swimming Pool Cleaning Kit | The Sky Pool Karachi",
    description:
      "Complete six-piece pool cleaning accessories and individual accessories supplied by The Sky Pool.",
    url: "https://theskypool.pk/swimming-pool-products/pool-cleaning-accessories",
    images: ["/images/products/pool-cleaning-kit.webp"],
  },
};

export default function PoolCleaningKitsPage() {
  return <ProductLanding product={productData.cleaningKits} />;
}