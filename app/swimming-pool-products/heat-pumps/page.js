import ProductLanding from "@/components/ProductLanding";
import { productData } from "@/components/productData";

export const metadata = {
  title: "Power World Pool Heat Pumps in Karachi | The Sky Pool",
  description:
    "Power World swimming pool heat pumps in Karachi. The Sky Pool provides pool heating equipment selection, supply and installation solutions.",
  alternates: {
    canonical: "https://theskypool.pk/swimming-pool-products/heat-pumps",
  },
  openGraph: {
    title: "Power World Swimming Pool Heat Pumps | The Sky Pool",
    description:
      "Power World pool heating systems supplied and installed in Karachi.",
    url: "https://theskypool.pk/swimming-pool-products/heat-pumps",
    images: ["/images/products/power-world-heat-pump.webp"],
  },
};

export default function HeatPumpsPage() {
  return <ProductLanding product={productData.heatPumps} />;
}