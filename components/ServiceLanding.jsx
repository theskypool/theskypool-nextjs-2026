
import Image from "next/image";
import Link from "next/link";
import "./ServiceLanding.css";

export default function ServiceLanding({ service }) {
  const {
    title,
    subtitle,
    description,
    image,
    imageAlt,
    introTitle,
    intro,
    benefits,
    process,
    faq,
    keywords,
    relatedServices,
    ctaTitle,
    ctaText,
  } = service;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    serviceType: title,
    provider: {
      "@type": "Organization",
      name: "The Sky Pool",
      url: "https://theskypool.pk",
    },
    areaServed: {
      "@type": "City",
      name: "Karachi",
    },
    url: `https://theskypool.pk${service.path}`,
  };

  return (
    <main className="service-page">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="service-hero">
        <div className="service-hero-container">

          <div className="service-hero-content">
            <span className="service-eyebrow">
              The Sky Pool | KARACHI
            </span>

            <h1>{title}</h1>

            <p className="service-hero-subtitle">
              {subtitle}
            </p>

            <p className="service-hero-description">
              {description}
            </p>

            <div className="service-hero-buttons">
              <Link href="/contact-us" className="service-btn-primary">
                Request a Consultation
              </Link>

              <Link href="tel:+923471294234" className="service-btn-outline">
                Call The Sky Pool
              </Link>
            </div>

            <div className="service-experience">
              <strong>25+ Years</strong>
              <span>Swimming Pool Industry Experience</span>
            </div>
          </div>

          <div className="service-hero-image">
            <Image
              src={image}
              unoptimized
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="service-section">
        <div className="service-container service-intro-grid">

          <div>
            <span className="service-label">ABOUT OUR SERVICE</span>
            <h2>{introTitle}</h2>
          </div>

          <div className="service-intro-text">
            {intro?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

        </div>
      </section>


      {/* CONSTRUCTION TYPES - OPTIONAL */}
      {service.constructionTypes?.length > 0 && (
        <section className="service-extra-section service-construction-types">
          <div className="service-container">

            <div className="service-heading">
              <span className="service-label">OUR SPECIALIZATIONS</span>

              <h2>
                {service.constructionTypesTitle ||
                  "Swimming Pool Construction Types"}
              </h2>

              {service.constructionTypesDescription && (
                <p>{service.constructionTypesDescription}</p>
              )}
            </div>

            <div className="service-extra-grid">
              {service.constructionTypes.map((item, index) => (
                <article className="service-extra-card" key={index}>
                  <span className="service-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

          </div>
        </section>
      )}


      {/* CONSTRUCTION SCOPE - OPTIONAL */}
      {service.constructionScope?.length > 0 && (
        <section className="service-extra-section service-construction-scope">
          <div className="service-container">

            <div className="service-heading">
              <span className="service-label">OUR WORK</span>

              <h2>
                {service.constructionScopeTitle ||
                  "Our Construction and Installation Services"}
              </h2>

              {service.constructionScopeDescription && (
                <p>{service.constructionScopeDescription}</p>
              )}
            </div>

            <div className="service-extra-grid">
              {service.constructionScope.map((item, index) => (
                <article className="service-extra-card" key={index}>
                  <span className="service-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

          </div>
        </section>
      )}


      {/* BENEFITS */}
      {benefits?.length > 0 && (
        <section className="service-benefits">
          <div className="service-container">

            <div className="service-heading">
              <span className="service-label">WHAT WE PROVIDE</span>

              <h2>
                {service.benefitsTitle ||
                  `Professional ${title} Services`}
              </h2>

              <p>
                {service.benefitsDescription ||
                  "Practical solutions designed around your pool, property requirements and equipment needs."}
              </p>
            </div>

            <div className="service-benefit-grid">
              {benefits.map((item, index) => (
                <article className="service-benefit-card" key={index}>
                  <span className="service-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

          </div>
        </section>
      )}


      {/* PROCESS */}
      {process?.length > 0 && (
        <section className="service-section">
          <div className="service-container">

            <div className="service-heading">
              <span className="service-label">OUR APPROACH</span>

              <h2>
                {service.processTitle ||
                  "How We Handle Your Project"}
              </h2>

              {service.processDescription && (
                <p>{service.processDescription}</p>
              )}
            </div>

            <div className="service-process-grid">
              {process.map((item, index) => (
                <div className="service-process-item" key={index}>
                  <span>{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}


      {/* TECHNICAL INFORMATION - OPTIONAL */}
      {service.technicalDetails?.length > 0 && (
        <section className="service-extra-section service-technical">
          <div className="service-container">

            <div className="service-heading">
              <span className="service-label">TECHNICAL INFORMATION</span>

              <h2>
                {service.technicalTitle ||
                  "Technical Information and Requirements"}
              </h2>

              {service.technicalDescription && (
                <p>{service.technicalDescription}</p>
              )}
            </div>

            <div className="service-technical-list">
              {service.technicalDetails.map((item, index) => (
                <article className="service-technical-item" key={index}>
                  <div className="service-technical-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>
      )}


      {/* PROJECT PORTFOLIO - OPTIONAL */}
      {service.projects?.length > 0 && (
        <section className="service-extra-section service-projects">
          <div className="service-container">

            <div className="service-heading">
              <span className="service-label">OUR PROJECTS</span>

              <h2>
                {service.projectsTitle ||
                  "Our Completed Projects"}
              </h2>

              {service.projectsDescription && (
                <p>{service.projectsDescription}</p>
              )}
            </div>

            <div className="service-project-grid">
              {service.projects.map((project, index) => (
                <article className="service-project-card" key={index}>

                  {project.image && (
                    <div className="service-project-image">
                      <Image
                        src={project.image}
                        unoptimized
                        alt={project.alt || project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}

                  <div className="service-project-content">

                    <span className="service-project-location">
                      {project.location}
                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                  </div>

                </article>
              ))}
            </div>

          </div>
        </section>
      )}


      {/* LOCAL SERVICE AREAS - OPTIONAL */}
      {service.serviceAreas?.length > 0 && (
        <section className="service-extra-section service-local-areas">
          <div className="service-container">

            <div className="service-heading">
              <span className="service-label">OUR SERVICE LOCATIONS</span>

              <h2>
                {service.localSeoTitle ||
                  "Areas We Serve"}
              </h2>

              {service.localSeoDescription && (
                <p>{service.localSeoDescription}</p>
              )}
            </div>

            <div className="service-area-grid">
              {service.serviceAreas.map((area, index) => (
                <div className="service-area-item" key={index}>
                  <span>✓</span>
                  {area}
                </div>
              ))}
            </div>

          </div>
        </section>
      )}


      {/* WHY The Sky Pool */}
      <section className="service-why">
        <div className="service-container service-why-grid">

          <div>
            <span className="service-label">WHY The Sky Pool</span>
            <h2>Experienced Swimming Pool Specialists in Karachi</h2>
          </div>

          <div>
            <p>
              The Sky Pool provides swimming pool construction,
              maintenance, repair and equipment solutions in Karachi.
              With more than 25 years of industry experience, we focus
              on practical recommendations, suitable equipment and
              dependable workmanship.
            </p>

            <p>
              Our work is planned according to the pool's size,
              circulation system, site conditions and the requirements
              of the property.
            </p>

            <Link href="/about" className="service-text-link">
              Learn More About The Sky Pool →
            </Link>
          </div>

        </div>
      </section>


      {/* RELATED SERVICES */}
      {relatedServices?.length > 0 && (
        <section className="service-section">
          <div className="service-container">

            <div className="service-heading">
              <span className="service-label">MORE POOL SOLUTIONS</span>
              <h2>Explore Our Other Services</h2>
            </div>

            <div className="service-related-grid">
              {relatedServices.map((item, index) => (
                <Link
                  href={item.href}
                  className="service-related-card"
                  key={index}
                >
                  <h3>{item.title}</h3>
                  <span>Explore Service →</span>
                </Link>
              ))}
            </div>

          </div>
        </section>
      )}


      {/* FAQ */}
      {faq?.length > 0 && (
        <section className="service-faq-section">
          <div className="service-container">

            <div className="service-heading">
              <span className="service-label">COMMON QUESTIONS</span>

              <h2>
                {service.faqTitle ||
                  "Frequently Asked Questions"}
              </h2>
            </div>

            <div className="service-faq-list">
              {faq.map((item, index) => (
                <details className="service-faq" key={index}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>

          </div>
        </section>
      )}


      {/* CTA */}
      <section className="service-cta">
        <div className="service-container">
          <span className="service-label">GET STARTED</span>

          <h2>{ctaTitle}</h2>
          <p>{ctaText}</p>

          <Link href="/contact-us" className="service-btn-primary">
            Contact The Sky Pool
          </Link>
        </div>
      </section>

    </main>
  );
}
