// src/Pages/HighValue/PenthouseInsurance/PenthouseInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // Hero image as requested
import "./PenthouseInsurance.css";

const PenthouseInsurance = () => {
  return (
      <div className="penthouse-insurance-page">
    <PageLayout
      title="Penthouse Insurance"
      subtitle="Comprehensive protection for luxury penthouses and rooftop residences."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Penthouse Insurance</strong> provides specialized coverage for high-rise penthouses, including interior fixtures, rooftop terraces, and luxury amenities.
        </p>
        <p>
          Morison brokers craft bespoke policies ensuring that every detail of your penthouse is protected from fire, theft, and accidental damage.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete our online form to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Penthouses Require Specialized Insurance</h2>
        <p>
          Penthouses often have high-end finishes, rooftop decks, private elevators, and smart home systems. Standard insurance may not cover these unique features.
        </p>
        <p>
          Our policies ensure coverage for all specialized elements, including outdoor amenities, luxury interiors, and premium appliances.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Penthouse Insurance</h2>
        <ul>
          <li>Coverage for bespoke interiors and smart home technology</li>
          <li>Protection for rooftop terraces and balconies</li>
          <li>Liability coverage for residents and guests</li>
          <li>Optional coverage for artwork and luxury contents</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Penthouse Insurance Coverage Options</h2>
        <ul>
          <li>Fire, theft, and accidental damage protection</li>
          <li>Liability coverage for personal and guest incidents</li>
          <li>High-value contents and artwork coverage</li>
          <li>Optional earthquake, flood, and jewelry protection</li>
          <li>Temporary relocation coverage in case of loss</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Smart home system and security coverage</li>
          <li>Private art and collections insurance</li>
          <li>Rooftop and terrace amenity protection</li>
          <li>Enhanced liability for luxury living</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Penthouse Insurance</h2>
        <ul>
          <li>Bundle with high-value home and vehicle insurance</li>
          <li>Claims-free discounts</li>
          <li>Security system and smart lock discounts</li>
          <li>Multi-property or high-value policy discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Penthouse Insurance?</h2>
        <ul>
          <li>Owners of luxury penthouses and rooftop residences</li>
          <li>Residents with high-end interiors and valuable contents</li>
          <li>High-net-worth individuals seeking tailored coverage</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Penthouse Today</h2>
        <p>
          Morison brokers provide complete insurance coverage customized for your penthouse’s unique features.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default PenthouseInsurance;
