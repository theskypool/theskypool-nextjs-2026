"use client";

import { useState } from "react";
import Link from "next/link";
import "./HomeFAQ.css";

const faqs = [
  {
    question: "Does The Sky Pool provide swimming pool construction in Karachi?",
    answer:
      "Yes. The Sky Pool provides swimming pool construction services in Karachi for residential homes, farmhouses, hotels, resorts and commercial properties. Our services include pool design planning, plumbing, filtration systems, equipment installation, finishing and complete swimming pool construction solutions.",
  },
  {
    question: "How much does swimming pool construction cost in Karachi?",
    answer:
      "Swimming pool construction costs depend on the pool size, design, depth, construction materials, filtration system, finishing, plumbing and additional features such as jacuzzi, water features or heating systems. Contact The Sky Pool for a consultation and quotation based on your project requirements.",
  },
  {
    question: "Does The Sky Pool provide swimming pool maintenance services?",
    answer:
      "Yes. We provide swimming pool maintenance services including pool cleaning, vacuuming, water testing, chemical balancing, algae treatment, filter cleaning, pump inspection and routine maintenance to help keep swimming pools clean, safe and properly maintained.",
  },
  {
    question: "Do you repair swimming pool pumps, filters and equipment?",
    answer:
      "Yes. The Sky Pool provides swimming pool equipment repair and maintenance services, including pool pump repairs, filter maintenance, multiport valve repairs, plumbing repairs, filtration system troubleshooting and equipment replacement.",
  },
  {
    question: "Where can I buy swimming pool equipment in Karachi?",
    answer:
      "The Sky Pool supplies swimming pool equipment in Karachi, including swimming pool pumps, filters, cleaning equipment, vacuum heads, hoses, brushes, nets, water testing kits, lights, fittings, chemicals and other swimming pool accessories.",
  },
  {
    question: "Does The Sky Pool install swimming pool heat pumps?",
    answer:
      "Yes. We supply and install swimming pool heat pumps designed to help maintain comfortable pool water temperatures. We can assist in selecting a suitable heating system based on pool volume, location, usage and heating requirements.",
  },
  {
    question: "Can The Sky Pool construct jacuzzis, spas and cold plunge pools?",
    answer:
      "Yes. We provide construction and installation solutions for jacuzzis, spa pools, hydrotherapy systems and cold plunge pools, including equipment, plumbing and circulation systems according to the project requirements.",
  },
  {
    question: "Does The Sky Pool provide sauna and steam room construction?",
    answer:
      "Yes. The Sky Pool provides sauna and steam room construction and installation services, including heating equipment, steam generators, accessories and related installation work for residential and commercial projects.",
  },
  {
    question: "Does The Sky Pool work on existing swimming pools and renovations?",
    answer:
      "Yes. We undertake swimming pool renovation, restoration and improvement work, including tile replacement, waterproofing, plumbing repairs, filtration upgrades, pump room improvements and other swimming pool repair requirements.",
  },
  {
    question: "How can I contact The Sky Pool for a swimming pool project?",
    answer:
      "You can contact The Sky Pool through our website, WhatsApp or phone to discuss your swimming pool construction, maintenance, repair or equipment requirements. Our team can assist you with project consultation and quotations.",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="pc-faq-section" aria-labelledby="pc-faq-heading">
      <div className="pc-faq-container">

        {/* Section Header */}
        <div className="pc-faq-header">
          <span className="pc-faq-label">Frequently Asked Questions</span>

          <h2 id="pc-faq-heading">
            Swimming Pool FAQs – <span>The Sky Pool Karachi</span>
          </h2>

          <p>
            Looking for swimming pool construction, maintenance, repairs or
            equipment in Karachi? Find answers to some of the most common
            questions about our swimming pool services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="pc-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`pc-faq-item ${isOpen ? "active" : ""}`}
                key={faq.question}
              >
                <button
                  className="pc-faq-question"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`pc-faq-answer-${index}`}
                >
                  <span className="pc-faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="pc-faq-question-text">
                    {faq.question}
                  </span>

                  <span className="pc-faq-icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={`pc-faq-answer-${index}`}
                  className={`pc-faq-answer ${isOpen ? "show" : ""}`}
                  hidden={!isOpen}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="pc-faq-cta">
          <div className="pc-faq-cta-content">
            <h3>Planning a Swimming Pool Project?</h3>

            <p>
              Get in touch with The Sky Pool for swimming pool construction,
              equipment, maintenance and renovation solutions.
            </p>
          </div>

          <Link href="/contact-us" className="pc-faq-cta-button">
            Contact Us
            <span aria-hidden="true"> →</span>
          </Link>
        </div>

      </div>
    </section>
  );
}