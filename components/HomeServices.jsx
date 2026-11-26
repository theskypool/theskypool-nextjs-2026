
import Image from "next/image";
import Link from "next/link";
import "./HomeServices.css";

const services = [
  {
    number: "01",
    title: "Swimming Pool Construction",
    description:
      "Professional swimming pool construction in Karachi, including custom pool design, excavation, waterproofing, plumbing, filtration and complete installation.",
    image: "/images/home/pool-construction.webp",
    link: "/swimming-pool-services/pool-construction",
    label: "Pool Construction",
  },
  {
    number: "02",
    title: "Swimming Pool Maintenance",
    description:
      "Keep your swimming pool clean, hygienic and crystal clear with regular pool cleaning, vacuuming, water testing, chemical balancing and maintenance.",
    image: "/images/home/pool-maintenance.webp",
    link: "/swimming-pool-services/pool-maintenance",
    label: "Pool Maintenance",
  },
  {
    number: "03",
    title: "Pool Equipment & Installation",
    description:
      "Supply and installation of swimming pool pumps, filters, motors, filtration systems, underwater lights, cleaning equipment and accessories.",
    image: "/images/home/pool-equipment.webp",
    link: "/swimming-pool-products",
    label: "Pool Equipment",
  },
];

const products = [
  {
    title: "Swimming Pool Filters",
    description:
      "Quality sand filters and filtration solutions designed to maintain clean, clear swimming pool water.",
    image: "/images/home/pool-filter.webp",
    link: "/swimming-pool-products/filters",
    category: "FILTRATION SYSTEMS",
  },
  {
    title: "Pool Pumps & Motors",
    description:
      "Reliable swimming pool pumps and motors for efficient water circulation and filtration performance.",
    image: "/images/home/pool-pump.webp",
    link: "/swimming-pool-products/pumps",
    category: "POOL PUMPS",
  },
  {
    title: "Cleaning Equipment",
    description:
      "Pool vacuum heads, telescopic poles, deep nets, brushes and accessories for everyday pool cleaning.",
    image: "/images/home/pool-accessories.webp",
    link: "/swimming-pool-products/pool-cleaning-accessories",
    category: "CLEANING EQUIPMENT",
  },
  {
    title: "Pool Accessories",
    description:
      "Essential filtration equipment, pump components and accessories to support your swimming pool system.",
    image: "/images/home/pool-accessories.webp",
    link: "/swimming-pool-products",
    category: "POOL EQUIPMENT",
  },
];

export default function HomeServices() {
  return (
    <section className="pc-home-services">

      {/* INTRODUCTION */}

      <div className="pc-home-intro">

        <span className="pc-section-label">
          WELCOME TO The Sky Pool
        </span>

        <h2>
          Swimming Pool Construction, Equipment
          & Maintenance in Karachi
        </h2>

        <p>
          The Sky Pool provides complete swimming pool solutions
          in Karachi, from custom swimming pool construction and
          renovation to equipment supply, installation and
          professional maintenance. With over 35 years of
          industry experience, we help residential and commercial
          clients create and maintain swimming pools with
          dependable service and quality equipment.
        </p>

      </div>


      {/* MAIN SERVICES */}

      <div className="pc-services-grid">

        {services.map((service) => (

          <article
            className="pc-service-card"
            key={service.number}
          >

            <Link
              href={service.link}
              className="pc-service-image"
              aria-label={`Explore ${service.title}`}
            >

              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 600px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"

                       unoptimized
              />

              <span className="pc-service-number">
                {service.number}
              </span>

            </Link>

            <div className="pc-service-content">

              <span className="pc-card-label">
                {service.label}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <Link
                href={service.link}
                className="pc-text-link"
              >
                Explore Service
                <span> ↗ </span>
              </Link>

            </div>

          </article>

        ))}

      </div>


      {/* MAINTENANCE HIGHLIGHT */}

      <div className="pc-maintenance-banner">

        <div className="pc-maintenance-content">

          <span className="pc-section-label">
            COMPLETE POOL CARE
          </span>

          <h2>
            Professional Swimming Pool Cleaning
            & Maintenance Services
          </h2>

          <p>
            From routine pool cleaning and vacuuming to water
            testing, chlorine balancing, algae removal and
            filtration system maintenance, The Sky Pool helps
            keep your swimming pool in excellent condition
            throughout the year.
          </p>

          <Link
            href="/swimming-pool-services/pool-maintenance"
            className="pc-main-button"
          >
            Explore Maintenance Services
            <span> ↗ </span>
          </Link>

        </div>

        <div className="pc-maintenance-features">

          <div className="pc-maintenance-feature">
            <span>01</span>
            <div>
              <h4>Pool Cleaning</h4>
              <p>Regular cleaning and vacuuming.</p>
            </div>
          </div>

          <div className="pc-maintenance-feature">
            <span>02</span>
            <div>
              <h4>Water Testing</h4>
              <p>Water quality and chemical balancing.</p>
            </div>
          </div>

          <div className="pc-maintenance-feature">
            <span>03</span>
            <div>
              <h4>Filtration Care</h4>
              <p>Filter, pump and circulation maintenance.</p>
            </div>
          </div>

        </div>

      </div>


      {/* POOL PRODUCTS */}

      <div className="pc-products-heading">

        <div>
          <span className="pc-section-label">
            OUR PRODUCTS
          </span>

          <h2>
            Swimming Pool Filters, Pumps
            & Equipment
          </h2>

          <p>
            Explore swimming pool equipment and accessories
            for efficient filtration, water circulation
            and everyday pool maintenance.
          </p>
        </div>

        <Link
          href="/swimming-pool-products"
          className="pc-view-all"
        >
          View All Products
          <span> ↗ </span>
        </Link>

      </div>


      {/* PRODUCT GRID */}

      <div className="pc-products-grid">

        {products.map((product, index) => (

          <article
            className="pc-product-card"
            key={product.title}
          >

            <Link
              href={product.link}
              className="pc-product-image"
              aria-label={`View ${product.title}`}
            >

              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 600px) 100vw,
                       (max-width: 1024px) 50vw,
                       25vw"
                       unoptimized
              />

              <span className="pc-product-index">
                0{index + 1}
              </span>

            </Link>

            <div className="pc-product-content">

              <span className="pc-product-category">
                {product.category}
              </span>

              <h3>{product.title}</h3>

              <p>{product.description}</p>

              <Link
                href={product.link}
                className="pc-product-link"
              >
                View Details
                <span> → </span>
              </Link>

            </div>

          </article>

        ))}

      </div>


      {/* BOTTOM CTA */}

      <div className="pc-services-cta">

        <div>
          <h2>
            Looking for Swimming Pool Solutions?
          </h2>

          <p>
            Contact The Sky Pool for swimming pool
            construction, equipment supply and maintenance
            services in Karachi.
          </p>
        </div>

        <Link
          href="/contact-us"
          className="pc-main-button"
        >
          Contact Our Team
          <span> ↗ </span>
        </Link>

      </div>

    </section>
  );
}
