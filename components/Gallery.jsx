
import Link from "next/link";
import "./Gallery.css";

export default function Gallery() {
  return (
    <main className="pc-gallery-coming">
      <div className="pc-gallery-content">
        <span className="pc-gallery-tag">The Sky Pool</span>

        <div className="pc-gallery-icon">✦</div>

        <h1>
          Our Project Gallery
          <span>Coming Soon</span>
        </h1>

        <p>
          We are preparing a collection of our swimming pool
          construction, renovation, maintenance and water
          feature projects. Stay tuned to explore our work.
        </p>

        <div className="pc-gallery-divider" />

        <p className="pc-gallery-note">
          Beautiful pools. Quality craftsmanship. Complete solutions.
        </p>

        <Link href="/contact-us" className="pc-gallery-button">
          Contact The Sky Pool →
        </Link>
      </div>
    </main>
  );
}
