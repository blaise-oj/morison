// src/Pages/HighValue/Valuables/MusicalInstrumentInsurance/MusicalInstrumentInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // Hero image as requested
import "./MusicalInstrumentInsurance.css";

const MusicalInstrumentInsurance = () => {
  return (
    <PageLayout
      title="Musical Instrument Insurance"
      subtitle="Comprehensive coverage for high-value and professional musical instruments."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Musical Instrument Insurance</strong> provides protection for instruments such as pianos, violins, guitars, and other high-value or professional-grade instruments against theft, damage, or loss.
        </p>
        <p>
          Morison brokers create tailored policies to ensure your instruments are covered at home, in transit, or during performances.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete our form to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Musical Instruments Require Specialized Insurance</h2>
        <p>
          Professional and high-value instruments often have delicate craftsmanship and unique components that standard insurance may not cover.
        </p>
        <p>
          Our policies provide full replacement value, worldwide coverage, and protection for all risks, including accidental damage or loss during travel.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Musical Instrument Insurance</h2>
        <ul>
          <li>Coverage for professional and collectible instruments</li>
          <li>Worldwide protection for travel and performances</li>
          <li>Optional appraisal updates for high-value instruments</li>
          <li>Protection against accidental loss, theft, or damage</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Musical Instrument Insurance Coverage Options</h2>
        <ul>
          <li>Theft, loss, and accidental damage protection</li>
          <li>Coverage at home, in transit, and during performances</li>
          <li>Replacement cost coverage</li>
          <li>Optional coverage for rare or antique instruments</li>
          <li>Worldwide claims support</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Extended travel protection for tours and concerts</li>
          <li>Coverage for repair or restoration costs</li>
          <li>Protection for instruments on loan or consignment</li>
          <li>Appraisal and valuation updates</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Musical Instrument Insurance</h2>
        <ul>
          <li>Bundle with other high-value insurance policies</li>
          <li>Secure storage and transport for discounts</li>
          <li>Claims-free history discounts</li>
          <li>Regular appraisal and documentation for easier claims</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Musical Instrument Insurance?</h2>
        <ul>
          <li>Professional musicians and performers</li>
          <li>Collectors of rare or antique instruments</li>
          <li>High-net-worth individuals with valuable musical instruments</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Musical Instruments Today</h2>
        <p>
          Morison brokers provide complete insurance coverage tailored to your instruments’ value and uniqueness.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
  );
};

export default MusicalInstrumentInsurance;
