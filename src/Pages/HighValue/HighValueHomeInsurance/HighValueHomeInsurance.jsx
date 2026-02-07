// src/Pages/HighValue/HighValueHomeInsurance/HighValueHomeInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // Replace with actual image
import "./HighValueHomeInsurance.css";

const HighValueHomeInsurance = () => {
  return (
    <PageLayout
      title="High-Value Home Insurance"
      subtitle="Protect your premium properties with tailored insurance solutions."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>High-Value Home Insurance</strong> offers comprehensive protection for luxury residences, penthouses, and estates, covering fire, theft, natural disasters, and liability.
        </p>
        <p>
          Morison brokers provide personalized policies for each home, ensuring peace of mind for high-net-worth property owners.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or fill out our form to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why High-Value Homes Require Specialized Insurance</h2>
        <p>
          Luxury homes often have unique architectural designs, high-end materials, and valuable contents. Standard insurance may not cover replacement costs or specialized fixtures.
        </p>
        <p>
          Our policies ensure coverage for all premium features, including security systems, landscaping, pools, and custom interiors.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for High-Value Home Insurance</h2>
        <ul>
          <li>Coverage for bespoke interiors and luxury finishes</li>
          <li>Liability protection for guests and staff</li>
          <li>Optional coverage for high-value contents and art</li>
          <li>Tailored policies for estates, penthouses, and villas</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>High-Value Home Insurance Coverage Options</h2>
        <ul>
          <li>Fire, theft, and natural disaster protection</li>
          <li>Liability coverage for personal and domestic staff</li>
          <li>Coverage for high-value contents and artwork</li>
          <li>Optional earthquake, flood, and jewelry protection</li>
          <li>Temporary accommodation coverage in case of loss</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Home automation and smart security systems coverage</li>
          <li>Private collections and valuables coverage</li>
          <li>Landscaping and outdoor features protection</li>
          <li>Luxury home liability coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on High-Value Home Insurance</h2>
        <ul>
          <li>Bundle with other high-value policies like vehicles and valuables</li>
          <li>Enhanced security system discounts</li>
          <li>Claims-free history discounts</li>
          <li>Multi-property household discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider High-Value Home Insurance?</h2>
        <ul>
          <li>Owners of luxury homes, penthouses, and estates</li>
          <li>High-net-worth individuals with valuable property and contents</li>
          <li>Property owners seeking comprehensive, bespoke coverage</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Luxury Home Today</h2>
        <p>
          Morison brokers ensure your high-value property is fully insured with coverage tailored to its unique features and contents.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
  );
};

export default HighValueHomeInsurance;
