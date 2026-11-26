import ProductLanding from "@/components/ProductLanding";
import { productData } from "@/components/productData";

export const metadata = {
  title: "Swimming Pool Filters in Karachi | Laswim & Minder",
  description:
    "Swimming pool filters in Karachi by The Sky Pool. Explore Laswim and Minder pool filtration equipment for residential and commercial swimming pools.",
  alternates: {
    canonical: "https://theskypool.pk/swimming-pool-products/filters",
  },
  openGraph: {
    title: "Swimming Pool Filters in Karachi | The Sky Pool",
    description:
      "Laswim and Minder swimming pool filtration equipment in Karachi.",
    url: "https://theskypool.pk/swimming-pool-products/filters",
    images: ["/images/products/pool-filter.webp"],
  },
};

export default function FiltersPage() {
  return <ProductLanding product={productData.filters} />;
}