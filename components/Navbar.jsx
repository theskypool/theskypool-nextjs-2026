"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./Navbar.css";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Pool Services", href: "/swimming-pool-services" },
  { name: "Pool Products", href: "/swimming-pool-products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="pc-header">

      <nav className="pc-navbar">

        {/* LOGO */}
        <Link
          href="/"
          className="pc-logo"
          onClick={closeMenu}
        >
          <Image
            src="/images/the-sky-pool-logo.webp"
            alt="The Sky Pool"
            width={190}
            height={75}
            priority
            className="pc-logo-image"
            unoptimized
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className={`pc-menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="pc-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAVIGATION LINKS */}
        <div
          id="pc-navigation"
          className={`pc-nav-content ${menuOpen ? "open" : ""}`}
        >

          <ul className="pc-nav-links">

            {navigationLinks.map((link) => {

              const isActive =
                pathname === link.href ||
                (link.href !== "/" &&
                  pathname.startsWith(link.href + "/"));

              return (
                <li key={link.name}>

                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`pc-nav-link ${
                      isActive ? "active" : ""
                    }`}
                  >
                    {link.name}
                  </Link>

                </li>
              );
            })}

          </ul>

          {/* CONTACT BUTTON */}
          <div className="pc-nav-action">

            <Link
              href="/contact-us"
              className="pc-contact-btn"
              onClick={closeMenu}
            >
              Get A Quote
              <span> ↗ </span>
            </Link>

          </div>

        </div>

      </nav>

    </header>
  );
}