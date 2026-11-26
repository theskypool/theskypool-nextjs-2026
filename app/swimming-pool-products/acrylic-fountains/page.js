import ProductLanding from "@/components/ProductLanding";
import { productData } from "@/components/productData";

export const metadata = {
  title: "Acrylic Pool Fountains in Karachi | 1 to 4 Feet",
  description:
    "Acrylic swimming pool fountains in Karachi by The Sky Pool. Explore 1-foot, 2-foot, 3-foot and 4-foot fountain options for decorative pool water features.",
  alternates: {
    canonical: "https://theskypool.pk/swimming-pool-products/acrylic-fountains",
  },
  openGraph: {
    title: "Acrylic Swimming Pool Fountains | The Sky Pool",
    description:
      "Acrylic pool fountains in 1, 2, 3 and 4 feet sizes in Karachi.",
    url: "https://theskypool.pk/swimming-pool-products/acrylic-fountains",
    images: ["/images/products/acrylic-fountain.webp"],
  },
};

export default function AcrylicFountainsPage() {
  return <ProductLanding product={productData.fountains} />;
}