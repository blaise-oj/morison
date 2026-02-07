// src/Pages/HighValue/Valuables/EngagementRingInsurance/EngagementRingInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // Hero image as requested
import "./EngagementRingInsurance.css";

const EngagementRingInsurance = () => {
  return (
    <PageLayout
      title="Engagement Ring Insurance"
      subtitle="Protect your precious engagement ring with tailored insurance coverage."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Engagement Ring Insurance</strong> provides coverage for diamonds, gemstones, and precious metals against loss, theft, or damage.
        </p>
        <p>
          Morison brokers offer personalized policies ensuring that your engagement ring is fully protected at home, in transit, or while traveling.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete our online form to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Engagement Rings Require Specialized Insurance</h2>
        <p>
          Engagement rings are often highly valuable, unique, and irreplaceable. Standard home insurance may not fully cover loss, theft, or accidental damage.
        </p>
        <p>
          Our policies provide full replacement value, worldwide protection, and coverage for all risks.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Engagement Ring Insurance</h2>
        <ul>
          <li>Full coverage for diamonds and precious gemstones</li>
          <li>Worldwide protection, including travel</li>
          <li>Optional appraisal updates for high-value rings</li>
          <li>Protection against accidental loss or damage</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Engagement Ring Insurance Coverage Options</h2>
        <ul>
          <li>Theft, loss, and accidental damage protection</li>
          <li>Coverage at home, in transit, and during travel</li>
          <li>Replacement cost coverage</li>
          <li>Optional coverage for custom or heirloom rings</li>
          <li>Worldwide claims support</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Extended travel protection</li>
          <li>Appraisal and valuation updates</li>
          <li>Coverage for repair, loss, or mysterious disappearance</li>
          <li>Protection during special events or ceremonies</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Engagement Ring Insurance</h2>
        <ul>
          <li>Bundle with home or high-value insurance policies</li>
          <li>Secure storage at home for discounts</li>
          <li>Claims-free history discounts</li>
          <li>Regular appraisal and documentation for easier claims</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Engagement Ring Insurance?</h2>
        <ul>
          <li>Individuals who own valuable engagement rings</li>
          <li>Couples who want peace of mind for their ring</li>
          <li>Owners of custom or heirloom rings seeking comprehensive coverage</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Engagement Ring Today</h2>
        <p>
          Morison brokers provide complete insurance tailored to your engagement ring’s value and uniqueness.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
  );
};

export default EngagementRingInsurance;
