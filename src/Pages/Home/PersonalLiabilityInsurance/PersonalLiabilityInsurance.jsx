// src/Pages/Home/PersonalLiabilityInsurance/PersonalLiabilityInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // swap to liability image later
import "./PersonalLiabilityInsurance.css";

const PersonalLiabilityInsurance = () => {
  return (
      <div className="personal-liability-insurance-page">
    <PageLayout
      title="Personal Liability Insurance"
      subtitle="Protect yourself against legal claims for injury or property damage."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Liability protection:</strong> coverage if you accidentally cause injury or property damage to others
        </p>
        <p>
          <strong>Legal defence included:</strong> covers legal costs if someone makes a claim against you
        </p>
        <p>
          <strong>Peace of mind:</strong> optional higher limits and umbrella extensions available
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with
          a licensed broker about Personal Liability Insurance today.
        </p>
      </section>

      {/* WHY PERSONAL LIABILITY */}
      <section>
        <h2>Why Personal Liability Insurance Matters</h2>
        <p>
          Even minor accidents at home or in daily life can lead to costly claims. Personal Liability Insurance ensures you are financially protected if you are found responsible for injuries or property damage.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Personal Liability Coverage</h2>
        <ul>
          <li>Coverage for bodily injury or property damage claims</li>
          <li>Legal defence costs included</li>
          <li>Optional higher liability limits</li>
          <li>Peace of mind for homeowners and tenants alike</li>
        </ul>
      </section>

      {/* COVERAGE TYPES */}
      <section>
        <h3>Standard Coverage</h3>
        <p>
          Provides basic protection against claims for accidental injury or damage.
        </p>
        <ul>
          <li>Injury to visitors in your home</li>
          <li>Damage caused to a neighbor’s property</li>
          <li>Accidents involving pets</li>
        </ul>
      </section>

      <section>
        <h3>Optional Coverage Enhancements</h3>
        <ul>
          <li>Higher liability limits for larger claims</li>
          <li>Umbrella liability extensions</li>
          <li>Coverage outside the home, e.g., travel or temporary rentals</li>
          <li>Protection for volunteer or recreational activities</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Yourself Against Liability Claims</h2>
        <p>
          Ensure you have financial protection against accidental injury or property damage. Morison brokers can tailor liability coverage to your needs.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page to get started today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default PersonalLiabilityInsurance;
