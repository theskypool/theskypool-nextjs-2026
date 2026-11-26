import Link from "next/link";
import Image from "next/image";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <main className="pc-about">

      {/* HERO SECTION */}
      <section className="pc-about-hero">
        <div className="pc-about-hero-container">

          <div className="pc-about-hero-content">
            <span className="pc-about-eyebrow">
              ABOUT The Sky Pool
            </span>

            <h1>
              Swimming Pool Experts in <span>Karachi</span>
            </h1>

            <p>
              With 25 years of experience, The Sky Pool provides
              swimming pool construction, maintenance, equipment
              supply and complete pool solutions for residential
              and commercial projects.
            </p>

            <div className="pc-about-hero-buttons">
              <Link href="/swimming-pool-services" className="pc-about-btn-primary">
                Explore Our Services
              </Link>

              <Link href="/contact-us" className="pc-about-btn-outline">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="pc-about-hero-image">
            <Image
              src="/images/about/pool-about.webp"
              alt="Swimming pool construction and professional pool solutions by The Sky Pool in Karachi"
              width={650}
              height={480}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
              
            />

            <div className="pc-about-experience-box">
              <strong>25+</strong>
              <span>Years of Experience</span>
            </div>
          </div>

        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="pc-about-intro">
        <div className="pc-about-container">

          <div className="pc-about-section-heading">
            <span>WHO WE ARE</span>
            <h2>
              Complete Swimming Pool Solutions
            </h2>
          </div>

          <div className="pc-about-intro-content">
            <p>
              The Sky Pool is a swimming pool construction, equipment
              supply and maintenance company based in Karachi, Pakistan.
              With 25 years of industry experience, we serve homeowners,
              farmhouses, resorts, hotels and commercial facilities.
            </p>

            <p>
              Our work covers the complete swimming pool lifecycle,
              from construction and equipment installation to routine
              maintenance, repairs and renovation. We focus on practical
              solutions, reliable equipment and properly maintained
              swimming pool systems.
            </p>

            <p>
              Whether it is a new swimming pool, an existing pool requiring
              restoration, or a filtration system needing attention,
              The Sky Pool provides solutions according to the requirements
              of each project.
            </p>
          </div>

        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="pc-about-experience">
        <div className="pc-about-container pc-about-experience-grid">

          <div className="pc-about-experience-content">
            <span className="pc-about-eyebrow">
              OUR EXPERIENCE
            </span>

            <h2>
              25 Years of Swimming Pool Experience
            </h2>

            <p>
              Our experience includes swimming pool projects of different
              sizes and requirements. We understand the importance of
              proper filtration, circulation, plumbing, water quality
              and suitable equipment in creating and maintaining
              swimming pools.
            </p>

            <p>
              From residential swimming pools to larger recreational
              facilities, our approach focuses on workmanship,
              functionality and long-term pool performance.
            </p>

            <Link href="/gallery" className="pc-about-text-link">
              Explore Our Projects <span>→</span>
            </Link>
          </div>

          <div className="pc-about-experience-image">
            <Image
              src="/images/about/pool-experience.webp"
              alt="Swimming pool project experience and pool construction work by The Sky Pool"
              width={600}
              height={430}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="pc-about-services">
        <div className="pc-about-container">

          <div className="pc-about-section-heading">
            <span>WHAT WE DO</span>
            <h2>Our Swimming Pool Solutions</h2>
            <p>
              From new pool construction to equipment and ongoing care,
              we provide a range of swimming pool services in Karachi.
            </p>
          </div>

          <div className="pc-about-service-grid">

            <article className="pc-about-service-card">
              <div className="pc-about-service-number">01</div>
              <h3>Swimming Pool Construction</h3>
              <p>
                Swimming pool construction for homes, farmhouses,
                resorts and commercial properties, including plumbing,
                filtration and equipment installation.
              </p>
              <Link href="/swimming-pool-services/pool-construction">
                Learn More <span>→</span>
              </Link>
            </article>

            <article className="pc-about-service-card">
              <div className="pc-about-service-number">02</div>
              <h3>Pool Maintenance & Repair</h3>
              <p>
                Pool cleaning, vacuuming, water testing, chemical
                balancing, filtration maintenance, equipment repairs
                and swimming pool renovation.
              </p>
              <Link href="/swimming-pool-services/pool-maintenance">
                Learn More <span>→</span>
              </Link>
            </article>

            <article className="pc-about-service-card">
              <div className="pc-about-service-number">03</div>
              <h3>Pool Equipment & Installation</h3>
              <p>
                Supply and installation of swimming pool pumps,
                filters, cleaning accessories, lights, heating systems
                and filtration equipment.
              </p>
              <Link href="/swimming-pool-products">
                Explore Products <span>→</span>
              </Link>
            </article>

            <article className="pc-about-service-card">
              <div className="pc-about-service-number">04</div>
              <h3>Jacuzzi, Sauna & Cold Plunge</h3>
              <p>
                Solutions for jacuzzi, spa, hydrotherapy, cold plunge,
                sauna and steam room construction and equipment.
              </p>
              <Link href="/contact-us">
                Discuss Your Project <span>→</span>
              </Link>
            </article>

          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="pc-about-values">
        <div className="pc-about-container">

          <div className="pc-about-section-heading">
            <span>OUR APPROACH</span>
            <h2>What We Focus On</h2>
          </div>

          <div className="pc-about-values-grid">

            <div className="pc-about-value">
              <span className="pc-about-value-icon">01</span>
              <h3>Quality Workmanship</h3>
              <p>
                Careful attention to construction, installation,
                plumbing and filtration requirements.
              </p>
            </div>

            <div className="pc-about-value">
              <span className="pc-about-value-icon">02</span>
              <h3>Reliable Solutions</h3>
              <p>
                Practical equipment and service solutions suited
                to each swimming pool and project.
              </p>
            </div>

            <div className="pc-about-value">
              <span className="pc-about-value-icon">03</span>
              <h3>Complete Pool Care</h3>
              <p>
                Support for construction, maintenance, repairs
                and swimming pool equipment requirements.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECT SECTION */}
      <section className="pc-about-projects">
        <div className="pc-about-container pc-about-projects-inner">

          <div>
            <span className="pc-about-eyebrow">
              OUR PROJECT EXPERIENCE
            </span>

            <h2>
              Swimming Pool Projects Across Different Sectors
            </h2>

            <p>
              Our project experience includes residential swimming pools,
              farmhouses, resorts and commercial facilities. Every project
              has different requirements, and we focus on delivering
              suitable construction, equipment and maintenance solutions.
            </p>
          </div>

          <Link href="/gallery" className="pc-about-project-btn">
            View Our Gallery <span>→</span>
          </Link>

        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="pc-about-contact">
        <div className="pc-about-container">

          <span>LET'S DISCUSS YOUR PROJECT</span>

          <h2>
            Looking for Swimming Pool Services in Karachi?
          </h2>

          <p>
            Contact The Sky Pool for swimming pool construction,
            maintenance, repair and equipment requirements.
          </p>

          <Link href="/contact-us" className="pc-about-btn-primary">
            Get in Touch
          </Link>

        </div>
      </section>

    </main>
  );
}