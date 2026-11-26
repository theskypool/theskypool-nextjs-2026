import ProductLanding from "@/components/ProductLanding";
import { productData } from "@/components/productData";

export const metadata = {
  title: "Swimming Pool Lights in Karachi | Underwater LED & RGB Lights | The Sky Pool",
  description:
    "Buy swimming pool lights in Karachi from The Sky Pool. Explore underwater LED lights, RGB colour-changing lights, warm white and cool white waterproof pool lighting.",

  alternates: {
    canonical: "https://theskypool.pk/swimming-pool-products/pool-lights",
  },

  openGraph: {
    title: "Swimming Pool Lights in Karachi | The Sky Pool",
    description:
      "Explore underwater LED swimming pool lights, RGB colour-changing lights, warm white and cool white pool lighting supplied by The Sky Pool in Karachi.",
    url: "https://theskypool.pk/swimming-pool-products/pool-lights",
    images: ["/images/products/pool-lights.webp"],
    type: "website",
  },
};

export default function PoolLightsPage() {
  return <ProductLanding product={productData.poolLights} />;
}