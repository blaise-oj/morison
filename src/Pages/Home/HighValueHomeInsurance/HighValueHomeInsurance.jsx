// src/Pages/Home/HighValueHomeInsurance/HighValueHomeInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // replace with luxury-style image later
import "./HighValueHomeInsurance.css";

const HighValueHomeInsurance = () => {
  return (
      <div className="high-value-home-insurance-page">
    <PageLayout
      title="High-Value Home Insurance"
      subtitle="Premium insurance solutions for luxury homes, custom properties, and high-net-worth families."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Tailored coverage:</strong> insurance designed for high-value
          homes with custom features and finishes
        </p>
        <p>
          <strong>Higher limits:</strong> increased coverage for property,
          liability, and valuables
        </p>
        <p>
          <strong>White-glove service:</strong> dedicated brokers and claims
          advocacy from start to finish
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with
          a licensed broker about High-Value Home Insurance today.
        </p>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Insurance Designed for Exceptional Homes</h2>
        <p>
          Standard home insurance often falls short when it comes to luxury and
          high-value properties. From custom construction to premium materials,
          these homes require specialized coverage and higher protection limits.
        </p>
        <p>
          Morison Insurance works with insurers who specialize in high-net-worth
          coverage, ensuring your home is insured to its true value.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for High-Value Home Insurance</h2>
        <ul>
          <li>Access to elite insurers specializing in high-net-worth clients</li>
          <li>Accurate replacement cost evaluations</li>
          <li>Higher liability limits and enhanced protection</li>
          <li>Dedicated claims handling for complex losses</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>High-Value Home Insurance Coverage Overview</h2>
        <p>
          High-value home insurance provides broader protection, higher limits,
          and fewer restrictions than standard policies.
        </p>
      </section>

      {/* COVERAGE TYPES */}
      <section>
        <h3>Extended Replacement Cost Coverage</h3>
        <p>
          Ensures your home can be rebuilt to its original specifications, even
          if construction costs exceed your policy limit.
        </p>
        <ul>
          <li>Custom architecture and craftsmanship</li>
          <li>High-end materials and finishes</li>
          <li>Guaranteed or extended replacement options</li>
        </ul>
      </section>

      <section>
        <h3>Contents & Valuables Coverage</h3>
        <p>
          Enhanced protection for fine art, jewellery, collectibles, and
          high-value personal belongings.
        </p>
        <ul>
          <li>Higher contents limits</li>
          <li>Scheduled personal articles</li>
          <li>Worldwide protection options</li>
        </ul>
      </section>

      <section>
        <h3>High-Limit Personal Liability</h3>
        <p>
          Increased liability coverage to protect your assets and lifestyle.
        </p>
        <ul>
          <li>Multi-million dollar liability limits</li>
          <li>Legal defence and settlement costs</li>
          <li>Optional umbrella liability policies</li>
        </ul>
      </section>

      <section>
        <h3>Advanced Water & Risk Protection</h3>
        <p>
          One of the most significant risks for luxury homes. Specialized
          coverage and prevention options available.
        </p>
        <ul>
          <li>Overland water and sewer backup</li>
          <li>Leak detection and water shut-off systems</li>
          <li>Enhanced weather-related protection</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Enhancements for High-Value Homes</h3>
        <ul>
          <li>Home equipment breakdown</li>
          <li>Outbuildings and guest houses</li>
          <li>Home office and professional use</li>
          <li>Identity theft and cyber protection</li>
        </ul>
      </section>

      {/* BUNDLING */}
      <section>
        <h2>Consolidate Your Insurance Portfolio</h2>
        <ul>
          <li>High-Value Home + Luxury Auto</li>
          <li>Multiple Properties Under One Policy</li>
          <li>Home + Personal Articles + Umbrella Liability</li>
          <li>Home + Cottage or Secondary Residence</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect What You’ve Built</h2>
        <p>
          Your home is more than a residence — it’s an investment. Let our
          brokers design a policy that reflects its true value.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page
          to speak with a high-value insurance specialist.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default HighValueHomeInsurance;
