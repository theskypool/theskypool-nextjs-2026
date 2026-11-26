import Link from "next/link";
import "./ContactUs.css";

const services = [
  "Swimming Pool Construction",
  "Pool Maintenance & Cleaning",
  "Pool Repair & Renovation",
  "Pumps, Filters & Equipment",
  "Swimming Pool Heat Pumps",
  "Jacuzzi, Spa & Cold Plunge",
  "Sauna & Steam Rooms",
  "Water Features & Fountains",
];

export default function ContactUs() {
  return (
    <main className="pc-contact-page">

      {/* HERO */}
      <section className="pc-contact-hero">
        <div className="pc-contact-hero-overlay"></div>

        <div className="pc-contact-container pc-contact-hero-content">
          <span className="pc-contact-eyebrow">
            WE ARE HERE TO HELP
          </span>

          <h1>
            Contact <span>The Sky Pool</span>
          </h1>

          <p>
            Have a swimming pool project in mind? Whether you need
            construction, maintenance, repairs or equipment, our team
            is ready to assist.
          </p>

          <div className="pc-contact-hero-buttons">
            <a href="mailto:admin@theskypool.pk">
              Email Our Team
            </a>

            <Link href="/swimming-pool-services">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="pc-contact-intro">
        <div className="pc-contact-container">
          <span className="pc-contact-section-label">
            GET IN TOUCH
          </span>

          <h2>
            Let's Discuss Your <span>Pool Project</span>
          </h2>

          <p>
            From new swimming pool construction to equipment installation
            and ongoing maintenance, The Sky Pool provides complete
            swimming pool solutions in Karachi. Contact us to discuss
            your requirements and project details.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="pc-contact-details">
        <div className="pc-contact-container">

          <div className="pc-contact-grid">

            <article className="pc-contact-card">
              <div className="pc-contact-icon">✉</div>

              <h3>Email Us</h3>

              <p>
                Send us your project details or general enquiries.
              </p>

              <a href="mailto:admin@theskypool.pk">
                admin@theskypool.pk
              </a>
            </article>

            <article className="pc-contact-card">
              <div className="pc-contact-icon">⌖</div>

              <h3>Our Location</h3>

              <p>
                Serving residential and commercial swimming pool
                projects across Karachi.
              </p>

              <span>Karachi, Pakistan</span>
            </article>

            <article className="pc-contact-card">
              <div className="pc-contact-icon">◷</div>

              <h3>Project Enquiries</h3>

              <p>
                Contact us for construction, maintenance, equipment
                supply and installation enquiries.
              </p>

              <Link href="/swimming-pool-services">
                View Our Services
              </Link>
            </article>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pc-contact-services">
        <div className="pc-contact-container pc-contact-services-grid">

          <div className="pc-contact-services-content">
            <span className="pc-contact-section-label">
              HOW WE CAN HELP
            </span>

            <h2>
              Complete Swimming Pool <span>Solutions</span>
            </h2>

            <p>
              The Sky Pool offers professional swimming pool services
              backed by over 25 years of industry experience. Tell us
              what you need, and we will help you find the right solution.
            </p>

            <Link
              href="/swimming-pool-products"
              className="pc-contact-text-link"
            >
              Explore Pool Products <span>→</span>
            </Link>
          </div>

          <div className="pc-contact-service-list">
            {services.map((service, index) => (
              <div className="pc-contact-service-item" key={service}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{service}</p>
                <span className="pc-contact-service-arrow">↗</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pc-contact-cta">
        <div className="pc-contact-container">
          <span>The Sky Pool · KARACHI</span>

          <h2>
            Ready to Start Your <br />
            <strong>Swimming Pool Project?</strong>
          </h2>

          <p>
            Get in touch with our team and let us discuss your requirements.
          </p>

          <a href="mailto:admin@theskypool.pk">
            Contact Our Team <span>→</span>
          </a>
        </div>
      </section>

    </main>
  );
}