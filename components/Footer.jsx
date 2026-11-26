import Link from "next/link";
import Image from "next/image";
import "./Footer.css";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Pool Services", href: "/swimming-pool-services" },
  { name: "Pool Products", href: "/swimming-pool-products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact-us" },
];

const serviceLinks = [
  { name: "Swimming Pool Construction", href: "/swimming-pool-services/pool-construction" },
  { name: "Swimming Pool Maintenance", href: "/swimming-pool-services/pool-maintenance" },
  { name: "Pool Equipment & Installation", href: "/swimming-pool-products" },
  { name: "Pool Repair & Renovation", href: "/swimming-pool-services" },
  { name: "Jacuzzi & Spa Solutions", href: "/swimming-pool-services" },
  { name: "Sauna & Steam Rooms", href: "/swimming-pool-services" },
];

export default function Footer() {
  const currentYear = 2026

  return (
    <footer className="pc-footer">

      {/* Main Footer */}
      <div className="pc-footer-main">
        <div className="pc-footer-container">

          <div className="pc-footer-grid">

            {/* Company Information */}
            <div className="pc-footer-about">

              <Link href="/" className="pc-footer-logo">
                <Image
                  src="/images/the-sky-pool-logo.webp"
                  alt="The Sky Pool - Swimming Pool Construction and Maintenance Karachi"
                  width={220}
                  height={85}
                  className="pc-footer-logo-img"
                />
              </Link>

              <p className="pc-footer-description">
                The Sky Pool provides swimming pool construction,
                maintenance, repair and equipment solutions in Karachi.
                With 25 years of experience, we deliver complete solutions
                for residential, commercial and recreational swimming pools.
              </p>

              <div className="pc-footer-experience">
                <span className="pc-footer-experience-number">25+</span>
                <span className="pc-footer-experience-text">
                  Years of Experience
                </span>
              </div>

            </div>

            {/* Quick Links */}
            <div className="pc-footer-column">
              <h3>Quick Links</h3>

              <ul>
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <span>›</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="pc-footer-column">
              <h3>Our Services</h3>

              <ul>
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <span>›</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="pc-footer-column pc-footer-contact">
              <h3>Contact Us</h3>

              <div className="pc-footer-contact-item">
                <span className="pc-footer-contact-icon">⌖</span>
                <div>
                  <strong>Location</strong>
                  <p>Tauheed Commercial, Phase-4, D.h.a, Karachi</p>
                </div>
              </div>


              <div className="pc-footer-contact-item">
                <span className="pc-footer-contact-icon">☎</span>
                <div>
                  <strong>WhatsApp</strong>
                  <a href="tel:+923009204174">
                    +92 300 9204174
                  </a>
                </div>
              </div>
              <div className="pc-footer-contact-item">
                <span className="pc-footer-contact-icon">☎</span>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+923471294234">
                    +92 347 1294234
                  </a>
                  <a href="tel:+923471294234">
                    +92 336 2077082
                  </a>
                </div>
              </div>

              <div className="pc-footer-contact-item">
                <span className="pc-footer-contact-icon">✉</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:admin@theskypool.pk">
                    admin@theskypool.pk
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="pc-footer-social">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  f
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  ig
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  in
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="pc-footer-bottom">
        <div className="pc-footer-bottom-container">

          <p>
            © {currentYear} <strong>The Sky Pool</strong>.
            All Rights Reserved.
          </p>

          <p className="pc-footer-tagline">
            Swimming Pool Construction, Equipment & Maintenance in Karachi.
          </p>

          <Link href="/contact-us" className="pc-footer-bottom-link">
            Get a Quote <span>→</span>
          </Link>

        </div>
      </div>

    </footer>
  );
}