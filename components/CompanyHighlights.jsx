import Link from "next/link";
import "./CompanyHighlights.css";

const companyStats = [
  {
    number: "25+",
    title: "Years of Experience",
    description:
      "Over 25 years of experience in swimming pool construction, equipment supply and maintenance.",
  },
  {
    number: "01",
    title: "Complete Pool Solutions",
    description:
      "From swimming pool design and construction to equipment installation and ongoing maintenance.",
  },
  {
    number: "02",
    title: "Residential & Commercial",
    description:
      "Swimming pool solutions for homes, farmhouses, resorts, hotels and commercial facilities.",
  },
  {
    number: "03",
    title: "Quality & Reliability",
    description:
      "Committed to quality workmanship, dependable equipment and professional customer service.",
  },
];

const companyValues = [
  {
    number: "01",
    title: "Experience That Matters",
    description:
      "Our experience helps us understand different pool requirements and deliver practical solutions for every project.",
  },
  {
    number: "02",
    title: "Quality Workmanship",
    description:
      "We focus on proper installation, reliable filtration systems, quality materials and attention to detail.",
  },
  {
    number: "03",
    title: "Complete Solutions",
    description:
      "We provide pool construction, renovation, equipment supply, installation and maintenance under one roof.",
  },
];

export default function CompanyHighlights() {
  return (
    <section className="pc-company-section">

      {/* COMPANY INTRODUCTION */}

      <div className="pc-company-container">

        <div className="pc-company-heading">

          <span className="pc-company-label">
            ABOUT The Sky Pool
          </span>

          <h2>
            25+ Years of Swimming Pool
            Experience, Quality & Trust
          </h2>

          <p>
            The Sky Pool is an established swimming pool
            construction, equipment supply and maintenance
            company in Karachi, Pakistan. With over 25 years
            of industry experience, we provide complete
            swimming pool solutions for residential and
            commercial projects. From new pool construction
            and renovation to filtration equipment,
            installation and professional maintenance,
            our focus is on quality workmanship and
            dependable service.
          </p>

          <Link
            href="/about"
            className="pc-company-about-link"
          >
            Discover Our Company
            <span> ↗ </span>
          </Link>

        </div>


        {/* COMPANY STATISTICS */}

        <div className="pc-company-stats">

          {companyStats.map((item) => (

            <div
              className="pc-company-stat-card"
              key={item.number}
            >

              <span className="pc-stat-number">
                {item.number}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

      </div>


      {/* COMPANY VALUES */}

      <div className="pc-values-section">

        <div className="pc-values-heading">

          <span className="pc-company-label">
            WHAT MAKES US DIFFERENT
          </span>

          <h2>
            Our Commitment to Every Pool Project
          </h2>

          <p>
            We believe that a well-built swimming pool
            requires experience, the right equipment
            and proper attention throughout its life.
          </p>

        </div>


        <div className="pc-values-grid">

          {companyValues.map((value) => (

            <article
              className="pc-value-card"
              key={value.number}
            >

              <span className="pc-value-number">
                {value.number}
              </span>

              <h3>{value.title}</h3>

              <p>{value.description}</p>

            </article>

          ))}

        </div>

      </div>


      {/* PROJECT EXPERIENCE BANNER */}

      <div className="pc-project-banner">

        <div className="pc-project-banner-content">

          <span className="pc-project-label">
            OUR PROJECT EXPERIENCE
          </span>

          <h2>
            Building Better Swimming Pools,
            One Project at a Time
          </h2>

          <p>
            From residential swimming pools and luxury
            farmhouses to resorts and commercial facilities,
            The Sky Pool delivers swimming pool construction,
            equipment installation and maintenance solutions
            tailored to each project's requirements.
          </p>

          <div className="pc-project-buttons">

            <Link
              href="/gallery"
              className="pc-project-primary-btn"
            >
              Explore Our Projects
              <span> ↗ </span>
            </Link>

            <Link
              href="/contact-us"
              className="pc-project-secondary-btn"
            >
              Discuss Your Project
            </Link>

          </div>

        </div>

        <div className="pc-project-highlight">

          <span className="pc-project-years">
            25+
          </span>

          <span className="pc-project-years-text">
            YEARS OF EXPERIENCE
          </span>

          <span className="pc-project-divider"></span>

          <p>
            Swimming Pool Construction,
            Equipment & Maintenance
          </p>

        </div>

      </div>

    </section>
  );
}