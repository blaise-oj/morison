// CondoInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./CondoInsurance.css";

const CondoInsurance = () => {
  return (
    <div className="condo-insurance-page">
      <PageLayout
        title="Condo Insurance in Kenya"
        subtitle="Protect your apartment or condominium unit with flexible and affordable cover tailored for Kenyan homeowners."
        headerClass="hero"
      >

        {/* Key Features */}
        <section className="insurance-features">
          <ul>
            <li><strong>Customized protection:</strong> Coverage designed for Kenyan condo owners</li>
            <li><strong>Claims support:</strong> Dedicated assistance throughout the claims process</li>
            <li><strong>Flexible payments:</strong> Monthly or annual premium options available</li>
          </ul>
        </section>

        {/* Introduction */}
        <section className="insurance-intro">
          <h2>Protect Your Investment with Morison Insurance</h2>
          <p>
            Owning a condo in Kenya is a valuable investment. While your building’s management corporation may insure the structure and common areas, your personal unit, belongings, and liability require separate protection.
            Morison Insurance helps you compare competitive quotes from trusted Kenyan insurers to ensure your home and lifestyle are properly protected.
          </p>
        </section>

        {/* Why Choose Morison */}
        <section className="why-choose">
          <h2>Why Choose Morison for Condo Insurance?</h2>
          <ul>
            <li>Access to Leading Kenyan Insurance Providers</li>
            <li>Fast & Transparent Quote Comparisons</li>
            <li>Personalized Advice from Licensed Brokers</li>
            <li>Dedicated Claims Assistance</li>
          </ul>
          <p>
            We work for you — not the insurance companies. Our team compares policies, explains coverage clearly, and ensures you get the best value for your premium. In the event of a claim, we guide you step-by-step to ensure a smooth process.
          </p>
        </section>

        {/* Coverage Details */}
        <section className="coverage-details">
          <h2>What Condo Insurance Covers in Kenya</h2>
          <ul>
            <li>Interior fixtures, fittings, and renovations (betterments & improvements)</li>
            <li>Personal belongings (furniture, electronics, appliances, clothing)</li>
            <li>Protection against fire, theft, lightning, and power surges</li>
            <li>Flood and water damage (optional add-on)</li>
            <li>Personal liability cover if someone is injured in your unit</li>
            <li>Alternative accommodation if your condo becomes uninhabitable</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="insurance-faq">
          <h2>Frequently Asked Questions</h2>

          <p>
            <strong>Is condo insurance mandatory in Kenya?</strong><br />
            It is not legally mandatory, but it is highly recommended. The building’s master policy usually covers the structure — not your unit contents or liability.
          </p>

          <p>
            <strong>How much does condo insurance cost in Kenya?</strong><br />
            Premiums typically start from KES 8,000 – KES 25,000 annually depending on the value of contents, location, and optional add-ons.
          </p>

          <p>
            <strong>Does the building management policy cover my belongings?</strong><br />
            No. The management corporation insures shared areas and structural elements. Your personal belongings and improvements require separate cover.
          </p>
        </section>

        {/* CTA */}
        <section className="insurance-cta">
          <h2>Ready to Protect Your Condo?</h2>
          <p>
            Get a fast, no-obligation quote from trusted Kenyan insurers today.
          </p>
          <p>
            Call +1 343 512 7761 or request a quote online to get started.
          </p>
        </section>

      </PageLayout>
    </div>
  );
};

export default CondoInsurance;
