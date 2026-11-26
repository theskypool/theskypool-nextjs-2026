import Image from "next/image";
import Link from "next/link";
import "./ProductLanding.css";

export default function ProductLanding({ product }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: product.title,
    description: product.description,
    url: `https://theskypool.pk${product.path}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: product.features.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
      })),
    },
  };

  return (
    <main className="pc-product-page">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="pc-product-hero">
        <div className="pc-product-container pc-product-hero-grid">

          <div className="pc-product-hero-content">

            <span className="pc-product-eyebrow">
              The Sky Pool | POOL PRODUCTS
            </span>

            <h1>{product.title}</h1>

            <h2>{product.subtitle}</h2>

            <p>{product.description}</p>

            <div className="pc-product-buttons">
              <Link
                href="/contact-us"
                className="pc-product-primary-btn"
              >
                Request a Quotation
              </Link>

              <Link
                href="/swimming-pool-products"
                className="pc-product-outline-btn"
              >
                Explore Pool Products
              </Link>
            </div>

            <div className="pc-product-trust">
              <strong>25+ Years</strong>
              <span>Swimming Pool Industry Experience</span>
            </div>

          </div>

          <div className="pc-product-hero-image">
            <Image
              src={product.image}
              alt={product.imageAlt}
              unoptimized
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="pc-product-section">
        <div className="pc-product-container pc-product-intro-grid">

          <div>
            <span className="pc-product-label">
              PRODUCT OVERVIEW
            </span>

            <h2 className="introTitle">{product.introTitle}</h2>
          </div>

          <div className="pc-product-intro-content">
            {product.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

        </div>
      </section>

      {/* BRANDS */}
      {product.brands?.length > 0 && (
        <section className="pc-product-brands">
          <div className="pc-product-container">

            <div className="pc-product-heading">
              <span className="pc-product-label">
                AVAILABLE BRANDS
              </span>

              <h2>Brands Available at The Sky Pool</h2>

              <p>
                Explore selected swimming pool equipment brands.
                Product models and availability may vary.
              </p>
            </div>

            <div className="pc-product-brand-grid">
              {product.brands.map((brand, index) => (
                <div className="pc-product-brand" key={index}>
                  <span>{brand}</span>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* FEATURES */}
      <section className="pc-product-features">
        <div className="pc-product-container">

          <div className="pc-product-heading">
            <span className="pc-product-label">
              PRODUCT FEATURES
            </span>

            <h2 className="introTitle">{product.featuresTitle}</h2>

            <p>{product.featuresDescription}</p>
          </div>

          <div className="pc-product-feature-grid">
            {product.features.map((item, index) => (
              <article className="pc-product-feature-card" key={index}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* PRODUCT DETAILS */}
      <section className="pc-product-section">
        <div className="pc-product-container pc-product-detail-grid">

          <div className="pc-product-detail-image">
            <Image
              src={product.detailImage || product.image}
              alt={product.detailImageAlt || product.imageAlt}
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="pc-product-detail-content">
            <span className="pc-product-label">
              SELECTION & APPLICATION
            </span>

            <h2 className="introTitle">{product.detailTitle}</h2>

            {product.details.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <ul>
              {product.applications.map((item, index) => (
                <li key={index}>
                  <span>✓</span>
                  {item}
                </li>
              ))}
            </ul>

          </div>

        </div>
      </section>

      {/* WHY The Sky Pool */}
      <section className="pc-product-why">
        <div className="pc-product-container pc-product-why-grid">

          <div>
            <span className="pc-product-label">
              WHY The Sky Pool
            </span>

            <h2>Swimming Pool Products and Equipment in Karachi</h2>
          </div>

          <div>
            <p>
              The Sky Pool supplies swimming pool equipment and
              accessories in Karachi, supporting new pool projects,
              equipment replacements and existing pool maintenance.
            </p>

            <p>
              With more than 25 years of industry experience, we
              help customers identify equipment according to pool
              dimensions, system requirements and product
              specifications.
            </p>

            <Link href="/about" className="pc-product-text-link">
              About The Sky Pool →
            </Link>
          </div>

        </div>
      </section>

      {/* RELATED PRODUCTS */}
      {product.related?.length > 0 && (
        <section className="pc-product-section pc-product-related">
          <div className="pc-product-container">

            <div className="pc-product-heading">
              <span className="pc-product-label">
                EXPLORE MORE
              </span>

              <h2 className="introTitle">Related Swimming Pool Products</h2>
            </div>

            <div className="pc-product-related-grid">
              {product.related.map((item, index) => (
                <Link
                  href={item.href}
                  className="pc-product-related-card"
                  key={index}
                >
                  <h3>{item.title}</h3>
                  <span>Explore Products →</span>
                </Link>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="pc-product-faq-section">
        <div className="pc-product-container">

          <div className="pc-product-heading">
            <span className="pc-product-label">
              PRODUCT INFORMATION
            </span>

            <h2 className="introTitle">Frequently Asked Questions</h2>
          </div>

          <div className="pc-product-faq-list">
            {product.faq.map((item, index) => (
              <details key={index}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pc-product-cta">
        <div className="pc-product-container">

          <span className="pc-product-label">
            CONTACT The Sky Pool
          </span>

          <h2>{product.ctaTitle}</h2>

          <p>{product.ctaText}</p>

          <Link
            href="/contact-us"
            className="pc-product-primary-btn"
          >
            Request Product Information
          </Link>

        </div>
      </section>

    </main>
  );
}