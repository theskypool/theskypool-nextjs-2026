import Image from "next/image";
import Link from "next/link";
import "./PoolServices.css";

const services = [
  {
    number: "01",
    title: "Swimming Pool Construction",
    description:
      "Complete swimming pool construction for homes, farmhouses, hotels and commercial properties. Our construction scope can include pool structure, plumbing, waterproofing, filtration systems, tiles and equipment installation.",
    image: "/images/services/pool-construction.WEBP",
    alt: "Swimming pool construction project in Karachi",
    href: "/swimming-pool-services/pool-construction",
    button: "Explore Construction Services",
  },
  {
    number: "02",
    title: "Swimming Pool Maintenance",
    description:
      "Professional swimming pool cleaning and maintenance, including vacuuming, brushing, water testing, chemical balancing, algae treatment, filter cleaning and equipment inspection.",
    image: "/images/services/pool-maintenance.WEBP",
    alt: "Swimming pool cleaning and maintenance services in Karachi",
    href: "/swimming-pool-services/pool-maintenance",
    button: "Explore Maintenance Services",
  },
  {
    number: "03",
    title: "Swimming Pool Equipment Supply",
    description:
      "Swimming pool pumps, filters, cleaning accessories, vacuum hoses, vacuum heads, brushes, deep nets, water test kits, valves, lights and other pool equipment.",
    image: "/images/services/pool-equipment.WEBP",
    alt: "Swimming pool pumps filters and cleaning equipment",
    href: "/swimming-pool-services/pool-equipment-supply",
    button: "Explore Pool Equipment",
  },
  {
    number: "04",
    title: "Swimming Pool Heating Systems",
    description:
      "Swimming pool heat pump selection, supply and installation for residential pools, farmhouses and commercial swimming facilities. Equipment selection is based on pool volume and heating requirements.",
    image: "/images/services/pool-heating.WEBP",
    alt: "Swimming pool heat pump and heating system installation",
    href: "/swimming-pool-services/pool-heating-systems",
    button: "Explore Heating Systems",
  },
  {
    number: "05",
    title: "Sauna & Steam Room Construction",
    description:
      "Custom sauna and steam room construction for homes, spas, gyms and commercial properties, including room preparation, suitable finishes, heaters, steam generators and equipment installation.",
    image: "/images/services/sauna.webp",
    alt: "Modern sauna and steam room construction",
    href: "/swimming-pool-services/sauna-steam-room-construction",
    button: "Explore Sauna & Steam Rooms",
  },
  {
    number: "06",
    title: "Swimming Pool Repair & Renovation",
    description:
      "Swimming pool repair and renovation solutions, including leakage investigation, plumbing repairs, tile replacement, waterproofing, plastering and filtration system improvements.",
    image: "/images/services/pool-repair.webp",
    alt: "Swimming pool repair and renovation work",
    href: "/contact-us",
    button: "Discuss Your Repair Project",
  },
  {
    number: "07",
    title: "Pool Filtration & Pump Room Systems",
    description:
      "Pool filtration and circulation solutions, including pumps, filters, multiport valves, uPVC piping, fittings and pump room equipment for new and existing swimming pools.",
    image: "/images/services/pool-filtration.WEBP",
    alt: "Swimming pool filtration plant and pump room equipment",
    href: "/contact-us",
    button: "Explore Equipment Solutions",
  },
  {
    number: "08",
    title: "Jacuzzi, Spa & Cold Plunge Pools",
    description:
      "Jacuzzi, spa, hydrotherapy and cold plunge pool construction solutions, planned according to available space, project requirements and selected equipment.",
    image: "/images/services/jacuzzi.WEBP",
    alt: "Jacuzzi spa and hydrotherapy pool",
    href: "/contact-us",
    button: "Discuss Your Project",
  },
];

const maintenanceFeatures = [
  "Swimming pool vacuuming and brushing",
  "Water testing and chemical balancing",
  "Algae treatment and water clarity management",
  "Pool filter and pump inspection",
  "Removal of leaves and surface debris",
  "Routine pool cleaning and maintenance",
];

const constructionFeatures = [
  "Residential and farmhouse swimming pools",
  "Commercial swimming pool projects",
  "Pool plumbing and circulation systems",
  "Waterproofing and pool finishing",
  "Filtration plant and pump room installation",
  "Pool lights, skimmers and fittings",
];

const serviceAreas = [
  "DHA",
  "Clifton",
  "Bahria Town Karachi",
  "Gulshan-e-Iqbal",
  "PECHS",
  "Other areas of Karachi",
];

export default function PoolServices() {
  return (
    <main className="pc-services-page">

      {/* HERO SECTION */}
      <section className="pc-services-hero">
        <div className="pc-services-hero-overlay">
          <div className="pc-services-container">

            <div className="pc-services-hero-content">
              <span className="pc-services-eyebrow">
                The Sky Pool | KARACHI
              </span>

              <h1>
                Swimming Pool Services in Karachi
              </h1>

              <p>
                Professional swimming pool construction, maintenance,
                repair, equipment supply and heating solutions for
                residential and commercial properties.
              </p>

              <div className="pc-services-hero-buttons">
                <Link
                  href="/contact-us"
                  className="pc-services-primary-btn"
                >
                  Request a Consultation
                </Link>

                <Link
                  href="/swimming-pool-services/pool-construction"
                  className="pc-services-secondary-btn"
                >
                  Explore Our Services
                </Link>
              </div>

              <div className="pc-services-experience">
                <strong>25+ Years</strong>
                <span>Swimming Pool Industry Experience</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="pc-services-intro">
        <div className="pc-services-container pc-services-intro-grid">

          <div className="pc-services-intro-heading">
            <span className="pc-services-label">
              COMPLETE POOL SOLUTIONS
            </span>

            <h2>
              Swimming Pool Construction, Maintenance & Equipment
              Solutions
            </h2>
          </div>

          <div className="pc-services-intro-text">
            <p>
              The Sky Pool provides swimming pool services in Karachi,
              covering pool construction, cleaning, maintenance,
              repairs, filtration systems and equipment supply.
              We work with residential pools, farmhouses and
              commercial swimming facilities.
            </p>

            <p>
              From building a new swimming pool to maintaining an
              existing one, our services cover essential pool
              requirements, including circulation systems, pumps,
              filters, water treatment and equipment installation.
            </p>

            <p>
              With more than 25 years of industry experience, we
              focus on practical solutions based on pool dimensions,
              site conditions, equipment requirements and project
              specifications.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="pc-services-list">
        <div className="pc-services-container">

          <div className="pc-services-section-heading">
            <span className="pc-services-label">
              OUR SERVICES
            </span>

            <h2>
              Professional Swimming Pool Services in Karachi
            </h2>

            <p>
              Explore our swimming pool construction, maintenance,
              equipment and wellness solutions.
            </p>
          </div>

          <div className="pc-services-grid">

            {services.map((service) => (
              <article
                className="pc-service-card"
                key={service.number}
              >
                <Link
                  href={service.href}
                  className="pc-service-card-link"
                  aria-label={`${service.title} in Karachi`}
                >

                  <div className="pc-service-card-image">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    />

                    <span className="pc-service-number">
                      {service.number}
                    </span>
                  </div>

                  <div className="pc-service-card-content">

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <span className="pc-service-card-button">
                      {service.button}
                      <span aria-hidden="true"> →</span>
                    </span>

                  </div>

                </Link>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* MAINTENANCE SECTION */}
      <section className="pc-services-detail">
        <div className="pc-services-container pc-services-detail-grid">

          <div className="pc-services-detail-content">
            <span className="pc-services-label">
              POOL CLEANING & CARE
            </span>

            <h2>
              Swimming Pool Maintenance and Cleaning in Karachi
            </h2>

            <p>
              Regular swimming pool maintenance helps keep water
              clean, supports proper circulation and helps identify
              equipment problems before they become more serious.
              The Sky Pool provides cleaning and maintenance services
              according to the pool's condition and requirements.
            </p>

            <p>
              Our maintenance work can include physical cleaning,
              water testing, chemical balancing, algae treatment
              and inspection of pumps, filters and circulation
              equipment.
            </p>

            <ul className="pc-services-feature-list">
              {maintenanceFeatures.map((feature, index) => (
                <li key={index}>
                  <span>✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="/swimming-pool-services/pool-maintenance"
              className="pc-services-text-link"
            >
              View Swimming Pool Maintenance Services →
            </Link>
          </div>

          <div className="pc-services-detail-image">
            <Image
              src="/images/services/pool-cleaning-detail.webp"
              alt="Swimming pool cleaning and maintenance in Karachi"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>

      {/* CONSTRUCTION SECTION */}
      <section className="pc-services-detail pc-services-detail-alt">
        <div className="pc-services-container pc-services-detail-grid">

          <div className="pc-services-detail-image">
            <Image
              src="/images/services/pool-construction-detail.webp"
              alt="Swimming pool construction and filtration installation"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="pc-services-detail-content">
            <span className="pc-services-label">
              DESIGN & CONSTRUCTION
            </span>

            <h2>
              Swimming Pool Construction for Homes and Commercial
              Properties
            </h2>

            <p>
              Swimming pool construction requires proper planning
              of dimensions, depth, plumbing, waterproofing and
              filtration. Every project must be assessed according
              to available space, intended use and site conditions.
            </p>

            <p>
              The Sky Pool provides swimming pool construction
              solutions for residential properties, farmhouses,
              hotels and commercial facilities in Karachi.
            </p>

            <ul className="pc-services-feature-list">
              {constructionFeatures.map((feature, index) => (
                <li key={index}>
                  <span>✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="/swimming-pool-services/pool-construction"
              className="pc-services-text-link"
            >
              View Swimming Pool Construction Services →
            </Link>
          </div>

        </div>
      </section>

      {/* WHY The Sky Pool */}
      <section className="pc-services-why">
        <div className="pc-services-container">

          <div className="pc-services-section-heading">
            <span className="pc-services-label">
              WHY The Sky Pool
            </span>

            <h2>
              Experienced Swimming Pool Specialists in Karachi
            </h2>

            <p>
              Pool solutions planned around your property,
              equipment requirements and intended pool usage.
            </p>
          </div>

          <div className="pc-services-why-grid">

            <article className="pc-services-why-card">
              <span>01</span>
              <h3>Industry Experience</h3>
              <p>
                More than 25 years of experience in swimming pool
                construction, maintenance and related equipment.
              </p>
            </article>

            <article className="pc-services-why-card">
              <span>02</span>
              <h3>Complete Pool Solutions</h3>
              <p>
                Construction, maintenance, repairs, filtration,
                equipment supply and heating solutions.
              </p>
            </article>

            <article className="pc-services-why-card">
              <span>03</span>
              <h3>Equipment Knowledge</h3>
              <p>
                Practical equipment selection based on pool volume,
                circulation requirements and system compatibility.
              </p>
            </article>

            <article className="pc-services-why-card">
              <span>04</span>
              <h3>Residential & Commercial</h3>
              <p>
                Solutions for private swimming pools, farmhouses
                and commercial swimming facilities.
              </p>
            </article>

          </div>

        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="pc-services-areas">
        <div className="pc-services-container pc-services-areas-grid">

          <div>
            <span className="pc-services-label">
              OUR SERVICE LOCATIONS
            </span>

            <h2>
              Swimming Pool Services Across Karachi
            </h2>

            <p>
              The Sky Pool provides swimming pool construction,
              maintenance, repair and equipment services in Karachi.
              Contact us with your project location and requirements
              to discuss service availability.
            </p>
          </div>

          <div className="pc-services-area-list">
            {serviceAreas.map((area, index) => (
              <span key={index}>
                {area}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="pc-services-faq">
        <div className="pc-services-container">

          <div className="pc-services-section-heading">
            <span className="pc-services-label">
              COMMON QUESTIONS
            </span>

            <h2>
              Frequently Asked Questions About Our Pool Services
            </h2>
          </div>

          <div className="pc-services-faq-list">

            <details>
              <summary>
                Do you provide swimming pool construction in Karachi?
              </summary>

              <p>
                Yes. The Sky Pool provides swimming pool construction
                for residential properties, farmhouses and commercial
                projects in Karachi. The construction scope depends
                on the project design and site requirements.
              </p>
            </details>

            <details>
              <summary>
                Do you provide swimming pool cleaning and maintenance?
              </summary>

              <p>
                Yes. Our maintenance services can include vacuuming,
                brushing, water testing, chemical balancing, algae
                treatment and filtration equipment inspection.
              </p>
            </details>

            <details>
              <summary>
                Where can I buy swimming pool equipment in Karachi?
              </summary>

              <p>
                The Sky Pool supplies swimming pool equipment,
                including pumps, filters, cleaning accessories,
                vacuum hoses, brushes, nets, valves and selected
                pool accessories.
              </p>
            </details>

            <details>
              <summary>
                Do you supply swimming pool heat pumps?
              </summary>

              <p>
                Yes. We provide swimming pool heating solutions,
                including heat pump selection, supply and installation
                according to pool volume and heating requirements.
              </p>
            </details>

            <details>
              <summary>
                Do you construct sauna and steam rooms?
              </summary>

              <p>
                Yes. The Sky Pool provides sauna and steam room
                construction solutions for residential and
                commercial properties, subject to project
                requirements.
              </p>
            </details>

            <details>
              <summary>
                How can I request a quotation from The Sky Pool?
              </summary>

              <p>
                Contact us with your project location, pool
                dimensions and service requirements. We can
                discuss the scope and quotation according to
                your project.
              </p>
            </details>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pc-services-cta">
        <div className="pc-services-container">

          <span className="pc-services-label">
            CONTACT The Sky Pool
          </span>

          <h2>
            Need Professional Swimming Pool Services in Karachi?
          </h2>

          <p>
            Whether you are planning a new swimming pool,
            maintaining an existing one or looking for suitable
            pool equipment, The Sky Pool is ready to discuss
            your requirements.
          </p>

          <Link
            href="/contact-us"
            className="pc-services-primary-btn"
          >
            Contact Us for a Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}