
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import "./HomeSlider.css";

const slides = [
  {
    id: 1,
    image: "/images/slider/pool-1.jpg",
    title: "Luxury Swimming Pool Construction",
    description:
      "Transform your outdoor space with professionally designed and constructed swimming pools.",
    button: "Explore Our Services",
    link: "/swimming-pool-services",
  },
  {
    id: 2,
    image: "/images/slider/pool-2.jpg",
    title: "Premium Pool Equipment & Products",
    description:
      "Discover quality swimming pool pumps, filters, accessories and advanced pool equipment.",
    button: "Explore Products",
    link: "/swimming-pool-products",
  },
  {
    id: 3,
    image: "/images/slider/pool-3.jpg",
    title: "Professional Pool Maintenance",
    description:
      "Keep your swimming pool crystal clear with expert cleaning, maintenance and water treatment.",
    button: "Our Services",
    link: "/swimming-pool-services",
  },
  {
    id: 4,
    image: "/images/slider/pool-4.jpg",
    title: "Experience Luxury & Comfort",
    description:
      "From Jacuzzis and hydrotherapy to saunas and steam rooms, create your personal wellness retreat.",
    button: "Discover More",
    link: "/gallery",
  },
  {
    id: 5,
    image: "/images/slider/pool-5.jpg",
    title: "25+ Years of Swimming Pool Excellence",
    description:
      "Building, maintaining and supplying swimming pool solutions with experience and dedication.",
    button: "Contact Us",
    link: "/contact-us",
  },
];

export default function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  }, []);

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="pc-hero-slider">

      {/* SLIDES */}
      <div className="pc-slider-container">

        {slides.map((slide, index) => (

          <div
            key={slide.id}
            className={`pc-slide ${
              index === currentSlide ? "active" : ""
            }`}
            aria-hidden={index !== currentSlide}
          >

            {/* BACKGROUND IMAGE */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="pc-slide-image"
            />

            {/* DARK OVERLAY */}
            <div className="pc-slide-overlay"></div>

            {/* SLIDE CONTENT */}
            <div className="pc-slide-content">

              <div className="pc-slide-inner">

                <span className="pc-slide-subtitle">
                  The Sky Pool
                </span>

                <h1>{slide.title}</h1>

                <p>{slide.description}</p>

                <div className="pc-slide-buttons">

                  <Link
                    href={slide.link}
                    className="pc-slide-btn pc-primary-btn"
                    tabIndex={index === currentSlide ? 0 : -1}
                  >
                    {slide.button}
                    <span> ↗ </span>
                  </Link>

                  <Link
                    href="/contact-us"
                    className="pc-slide-btn pc-secondary-btn"
                    tabIndex={index === currentSlide ? 0 : -1}
                  >
                    Get A Quote
                  </Link>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* PREVIOUS BUTTON */}
      <button
        className="pc-slider-arrow pc-slider-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        &#10094;
      </button>

      {/* NEXT BUTTON */}
      <button
        className="pc-slider-arrow pc-slider-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        &#10095;
      </button>

      {/* SLIDE INDICATORS */}
      <div className="pc-slider-dots">

        {slides.map((slide, index) => (

          <button
            key={slide.id}
            className={`pc-slider-dot ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={
              index === currentSlide ? "true" : undefined
            }
          />

        ))}

      </div>

      {/* SLIDE COUNTER */}
      <div className="pc-slider-counter">
        <span>0{currentSlide + 1}</span>
        <span className="pc-counter-line"></span>
        <span>0{slides.length}</span>
      </div>

    </section>
  );
}
