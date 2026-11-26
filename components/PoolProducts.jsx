import Image from "next/image";
import Link from "next/link";
import "./PoolProducts.css";

const categories = [
  {
    title: "Swimming Pool Pumps",
    subtitle: "LASWIM & MINDER",
    description:
      "Explore swimming pool circulation pumps designed to support efficient water circulation and filtration systems.",
    image: "/images/products/pool-pump.webp",
    alt: "Swimming pool circulation pumps by LASWIM and MINDER",
    href: "/swimming-pool-products/pumps",
    label: "Explore Pumps",
  },
  {
    title: "Swimming Pool Filters",
    subtitle: "LASWIM & MINDER",
    description:
      "Discover swimming pool filtration equipment designed to help maintain clean, clear and properly filtered pool water.",
    image: "/images/products/pool-filter.webp",
    alt: "Swimming pool sand filtration systems",
    href: "/swimming-pool-products/filters",
    label: "Explore Filters",
  },
  {
    title: "Swimming Pool Ladders",
    subtitle: "Pool Access Accessories",
    description:
      "Swimming pool ladders and access accessories for convenient entry and exit from residential and commercial pools.",
    image: "/images/products/pool-ladder.webp",
    alt: "Swimming pool stainless steel ladder",
    href: "/swimming-pool-products/pool-ladders",
    label: "Explore Ladders",
  },
  {
    title: "Swimming Pool Skimmers",
    subtitle: "Pool Circulation Equipment",
    description:
      "Pool skimmers help remove floating debris from the water surface and support effective pool circulation.",
    image: "/images/products/pool-skimmer.webp",
    alt: "Swimming pool wall mounted skimmer",
    href: "/swimming-pool-products/pool-skimmers",
    label: "Explore Skimmers",
  },
  {
  title: "Swimming Pool Lights",
  subtitle: "LED & Underwater Pool Lighting",
  description:
    "Explore premium swimming pool lights, including underwater LED lights, RGB colour-changing lights, warm white and cool white pool lights. Find energy-efficient waterproof swimming pool lighting solutions for residential and commercial pools, enhancing visibility, safety and nighttime aesthetics.",
  image: "/images/products/pool-lights.webp",
  alt: "Waterproof LED underwater swimming pool lights and RGB pool lighting",
  href: "/swimming-pool-products/pool-lights",
  label: "Explore Pool Lights",
},
  {
    title: "Swimming Pool Heat Pumps",
    subtitle: "POWER WORLD",
    description:
      "Explore swimming pool heat pump solutions designed to help maintain comfortable water temperatures throughout the year.",
    image: "/images/products/power-world-heat-pump.webp",
    alt: "Power World swimming pool heat pump",
    href: "/swimming-pool-products/heat-pumps",
    label: "Explore Heat Pumps",
  },
  {
    title: "Acrylic Water Fountains",
    subtitle: "1, 2, 3 & 4 Feet",
    description:
      "Acrylic water fountain solutions in different sizes for swimming pools, decorative water features and architectural projects.",
    image: "/images/products/acrylic-fountain.webp",
    alt: "Acrylic swimming pool water fountain",
    href: "/swimming-pool-products/acrylic-fountains",
    label: "Explore Fountains",
  },
  {
    title: "Pool Cleaning & Maintenance accessories",
    subtitle: "Essential Cleaning Equipment",
    description:
      "Find essential swimming pool cleaning accessories, including vacuum hoses, deep nets, nylon brushes, vacuum heads, test kits and telescopic poles.",
    image: "/images/products/pool-cleaning-kit.webp",
    alt: "Swimming pool cleaning and maintenance equipment kit",
    href: "/swimming-pool-products/pool-cleaning-accessories",
    label: "Explore Cleaning accessories",
  },
];

const brands = [
  {
    name: "LASWIM",
    description: "Swimming pool pumps, filters and equipment.",
  },
  {
    name: "MINDER",
    description: "Swimming pool circulation and filtration equipment.",
  },
  {
    name: "POWER WORLD",
    description: "Swimming pool heating solutions.",
  },
  {
    name: "COATES/FANLAN",
    description: "Swimming pool Heaters, Steam & Sauna solutions.",
  },
];

const cleaningItems = [
  "Swimming pool deep net",
  "Nylon pool brush",
  "Vacuum hose pipe",
  "Swimming pool vacuum head",
  "Water testing kit",
  "Telescopic cleaning pole",
];

const faqs = [
  {
    question: "Where can I buy swimming pool equipment in Karachi?",
    answer:
      "The Sky Pool supplies swimming pool equipment and accessories in Karachi, including pumps, filters, ladders, skimmers, heat pumps and pool cleaning equipment. Contact our team for product details and quotations.",
  },
  {
    question: "Do you supply swimming pool pumps and filters?",
    answer:
      "Yes. The Sky Pool supplies swimming pool pumps and filtration equipment, including LASWIM and MINDER products. Equipment selection depends on pool volume, circulation requirements and filtration design.",
  },
  {
    question: "Do you provide swimming pool cleaning equipment?",
    answer:
      "Yes. Our pool cleaning equipment range includes deep nets, nylon brushes, vacuum hose pipes, vacuum heads, water test kits and telescopic poles.",
  },
  {
    question: "Do you supply swimming pool heat pumps in Karachi?",
    answer:
      "The Sky Pool supplies POWER WORLD swimming pool heat pump solutions. The appropriate heating capacity depends on pool volume, location, operating season and desired water temperature.",
  },
  {
    question: "Do you provide equipment installation?",
    answer:
      "The Sky Pool provides swimming pool equipment supply and installation services. Installation requirements depend on the equipment and the existing pool system.",
  },
  {
    question: "How can I get a quotation for swimming pool products?",
    answer:
      "Contact The Sky Pool with your required product, pool dimensions or equipment specifications. Our team can help you identify suitable equipment and provide a quotation.",
  },
];

export default function PoolProducts() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Swimming Pool Products and Equipment in Karachi",
    description:
      "Swimming pool pumps, filters, ladders, skimmers, heat pumps, acrylic fountains and cleaning equipment supplied by The Sky Pool.",
    url: "https://theskypool.pk/swimming-pool-products",
    isPartOf: {
      "@type": "WebSite",
      name: "The Sky Pool",
      url: "https://theskypool.pk",
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Swimming Pool Products",
      numberOfItems: categories.length,
      itemListElement: categories.map((category, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: category.title,
        url: `https://theskypool.pk${category.href}`,
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="pc-products-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO SECTION */}

      <section className="pc-products-hero">
        <div className="pc-products-hero-overlay" />

        <div className="pc-products-container pc-products-hero-content">
          <span className="pc-products-eyebrow">
            The Sky Pool | KARACHI
          </span>

          <h1>
            Swimming Pool Products
            <span> & Equipment in Karachi</span>
          </h1>

          <p>
            Discover swimming pool pumps, filters, cleaning equipment,
            ladders, skimmers, heat pumps and water features. The Sky Pool
            provides swimming pool products, equipment supply and
            professional installation solutions in Karachi.
          </p>

          <div className="pc-products-hero-buttons">
            <Link
              href="#product-categories"
              className="pc-products-btn pc-products-btn-primary"
            >
              Explore Products
            </Link>

            <Link
              href="/contact-us"
              className="pc-products-btn pc-products-btn-outline"
            >
              Request a Quotation
            </Link>
          </div>

          <div className="pc-products-hero-note">
            <span>25+ Years of Experience</span>
            <span>Equipment Supply</span>
            <span>Installation Support</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="pc-products-intro">
        <div className="pc-products-container pc-products-intro-grid">
          <div>
            <span className="pc-products-section-tag">
              OUR PRODUCT RANGE
            </span>

            <h2>
              Complete Swimming Pool Equipment Solutions
            </h2>
          </div>

          <div className="pc-products-intro-text">
            <p>
              Choosing the right swimming pool equipment is essential for
              maintaining water circulation, filtration, cleanliness and
              comfortable pool operation. The Sky Pool supplies a range
              of swimming pool products and accessories for residential,
              commercial and recreational swimming pools.
            </p>

            <p>
              From swimming pool pumps and filters to heating systems,
              cleaning accessories and decorative water features, we
              help customers identify equipment according to their
              project requirements.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}

      <section
        className="pc-products-categories"
        id="product-categories"
      >
        <div className="pc-products-container">
          <div className="pc-products-heading">
            <span className="pc-products-section-tag">
              EXPLORE OUR PRODUCTS
            </span>

            <h2>Swimming Pool Products & Accessories</h2>

            <p>
              Explore our range of swimming pool equipment and find the
              right products for your pool installation, maintenance
              and renovation requirements.
            </p>
          </div>

          <div className="pc-products-grid">
            {categories.map((category) => (
              <article
                className="pc-product-card"
                key={category.href}
              >
                <Link
                  href={category.href}
                  className="pc-product-card-image"
                  aria-label={category.title}
                >
                  <Image
                    src={category.image}
                    alt={category.alt}
                    unoptimized
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  />
                  <span className="pc-product-card-arrow">
                    ↗
                  </span>
                </Link>

                <div className="pc-product-card-content">
                  <span className="pc-product-subtitle">
                    {category.subtitle}
                  </span>

                  <h3>
                    <Link href={category.href}>
                      {category.title}
                    </Link>
                  </h3>

                  <p>{category.description}</p>

                  <Link
                    href={category.href}
                    className="pc-product-card-link"
                  >
                    {category.label}
                    <span> →</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}

      <section className="pc-products-brands">
        <div className="pc-products-container">
          <div className="pc-products-heading">
            <span className="pc-products-section-tag">
              OUR BRANDS
            </span>

            <h2>Swimming Pool Equipment Brands</h2>

            <p>
              Explore equipment from selected swimming pool brands
              available through The Sky Pool.
            </p>
          </div>

          <div className="pc-products-brand-grid">
            {brands.map((brand) => (
              <div className="pc-products-brand-card" key={brand.name}>
                <h3>{brand.name}</h3>
                <p>{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLEANING EQUIPMENT */}

      <section className="pc-products-cleaning">
        <div className="pc-products-container pc-products-cleaning-grid">
          <div className="pc-products-cleaning-image">
            <Image
              src="/images/products/pool-cleaning-kit.webp"
              alt="Swimming pool cleaning accessories and maintenance equipment"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              unoptimized
            />
          </div>

          <div className="pc-products-cleaning-content">
            <span className="pc-products-section-tag">
              POOL MAINTENANCE ACCESSORIES
            </span>

            <h2>
              Complete Swimming Pool Cleaning & Maintenance Kit in Karachi
            </h2>

            <p>
              Proper swimming pool cleaning requires suitable tools
              and accessories. The Sky Pool supplies essential pool
              maintenance equipment to help with routine cleaning
              and water care.
            </p>

            <ul>
              {cleaningItems.map((item) => (
                <li key={item}>
                  <span>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/swimming-pool-products/pool-cleaning-kits"
              className="pc-products-btn pc-products-btn-primary"
            >
              Explore Cleaning Equipment
            </Link>
          </div>
        </div>
      </section>

      {/* WHY The Sky Pool */}

      <section className="pc-products-why">
        <div className="pc-products-container">
          <div className="pc-products-heading">
            <span className="pc-products-section-tag">
              WHY The Sky Pool
            </span>

            <h2>Your Swimming Pool Equipment Partner in Karachi</h2>

            <p>
              The Sky Pool combines swimming pool industry experience
              with product supply and technical services to support
              different types of swimming pool projects.
            </p>
          </div>

          <div className="pc-products-benefits">
            <article>
              <span className="pc-benefit-number">01</span>
              <h3>25+ Years of Experience</h3>
              <p>
                Experience in swimming pool construction, equipment
                supply, maintenance and repair services.
              </p>
            </article>

            <article>
              <span className="pc-benefit-number">02</span>
              <h3>Product Guidance</h3>
              <p>
                Assistance in selecting suitable pumps, filters and
                accessories according to pool requirements.
              </p>
            </article>

            <article>
              <span className="pc-benefit-number">03</span>
              <h3>Equipment Installation</h3>
              <p>
                Professional support for swimming pool equipment
                installation and related technical requirements.
              </p>
            </article>

            <article>
              <span className="pc-benefit-number">04</span>
              <h3>Complete Pool Solutions</h3>
              <p>
                Access to swimming pool products alongside construction,
                maintenance, repair and renovation services.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}

      <section className="pc-products-related">
        <div className="pc-products-container pc-products-related-inner">
          <div>
            <span className="pc-products-section-tag">
              MORE FROM The Sky Pool
            </span>

            <h2>Need More Than Swimming Pool Equipment?</h2>

            <p>
              Explore our swimming pool construction, maintenance
              and repair services in Karachi.
            </p>
          </div>

          <div className="pc-products-related-links">
            <Link href="/swimming-pool-services/pool-construction">
              Pool Construction <span>→</span>
            </Link>

            <Link href="/swimming-pool-services/pool-maintenance">
              Pool Maintenance <span>→</span>
            </Link>

            <Link href="/swimming-pool-services">
              All Pool Services <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="pc-products-faq">
        <div className="pc-products-container pc-products-faq-container">
          <div className="pc-products-heading">
            <span className="pc-products-section-tag">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2>Swimming Pool Products FAQs</h2>

            <p>
              Find answers to common questions about swimming pool
              equipment and product supply in Karachi.
            </p>
          </div>

          <div className="pc-products-faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="pc-products-cta">
        <div className="pc-products-container">
          <span>LET&apos;S DISCUSS YOUR REQUIREMENTS</span>

          <h2>
            Looking for Swimming Pool Equipment in Karachi?
          </h2>

          <p>
            Contact The Sky Pool for product information, equipment
            recommendations and swimming pool supply quotations.
          </p>

          <Link href="/contact-us" className="pc-products-btn">
            Contact The Sky Pool
            <span> →</span>
          </Link>
        </div>
      </section>
    </main>
  );
}