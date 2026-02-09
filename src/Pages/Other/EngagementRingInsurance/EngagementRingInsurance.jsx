import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./EngagementRingInsurance.css";

const EngagementRingInsurance = () => {
  return (
    <PageLayout
      title="Engagement Ring Insurance"
      subtitle="Protect your most cherished jewelry against loss, theft, or damage."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Engagement ring insurance</strong> provides financial protection
          for one of your most valuable and sentimental possessions.
        </p>
        <p>
          Whether it’s lost, stolen, or accidentally damaged, this coverage ensures
          you can repair or replace your ring without major financial stress.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section>
        <h2>Why Engagement Ring Insurance Is Important</h2>
        <p>
          Engagement rings often carry both monetary and emotional value.
          Losing or damaging your ring can be devastating.
        </p>
        <p>
          Insurance ensures that unexpected incidents don’t turn a special occasion
          into a financial burden.
        </p>
      </section>

      {/* WHAT IT COVERS */}
      <section>
        <h2>What Engagement Ring Insurance Covers</h2>
        <ul>
          <li>Theft or burglary</li>
          <li>Accidental loss or damage</li>
          <li>Fire or natural disasters (depending on policy)</li>
          <li>Worldwide coverage, often including travel</li>
        </ul>
      </section>

      {/* OPTIONAL ENHANCEMENTS */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Replacement cost coverage instead of actual cash value</li>
          <li>Coverage for resizing or repair</li>
          <li>Extended coverage for jewelry collection</li>
          <li>Appraisal support and secure storage advice</li>
        </ul>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Why Choose Morison for Engagement Ring Insurance</h2>
        <ul>
          <li>Specialized jewelry insurance options</li>
          <li>Flexible limits to match the ring’s appraised value</li>
          <li>Expert claims support for fast replacement or repair</li>
          <li>Trusted partners with jewelers and insurers</li>
        </ul>
      </section>

      {/* WHO NEEDS IT */}
      <section>
        <h2>Who Should Consider Engagement Ring Insurance?</h2>
        <ul>
          <li>Individuals with engagement or wedding rings</li>
          <li>Couples planning for long-term protection</li>
          <li>Owners of high-value or custom jewelry</li>
          <li>Anyone wanting peace of mind for precious items</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Secure Your Engagement Ring Today</h2>
        <p>
          Protect your investment and your memories. Engagement ring insurance
          ensures you’re covered against unexpected loss or damage.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default EngagementRingInsurance;
