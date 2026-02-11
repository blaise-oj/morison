import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./HyundaiInsurance.css";

const HyundaiInsurance = () => {
  return (
      <div className="hyundai-insurance-page">
    <PageLayout
      title="Hyundai Insurance"
      subtitle="Comprehensive coverage for all Hyundai vehicles, from sedans to SUVs."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Hyundai insurance</strong> protects your vehicle against accidents, theft, and liability,
          whether you drive a sedan, SUV, or hybrid.
        </p>
        <p>
          Morison brokers provide policies tailored to your Hyundai’s model, age, and usage.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or fill out the form to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Hyundai Vehicles Need Tailored Insurance</h2>
        <p>
          Hyundai vehicles have varying repair costs and safety technologies. Standard coverage may not fully protect your investment.
        </p>
        <p>
          Specialized Hyundai insurance ensures OEM repairs, approved service, and optional add-ons suited to your car.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Hyundai Insurance</h2>
        <ul>
          <li>OEM Parts & Certified Repair Coverage</li>
          <li>Comprehensive & Collision Protection</li>
          <li>Liability & Accident Benefits Coverage</li>
          <li>Expert Brokers for All Hyundai Models</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Hyundai Insurance Coverage Options</h2>
        <ul>
          <li>Comprehensive coverage (fire, theft, natural disasters)</li>
          <li>Collision coverage</li>
          <li>Third-party liability coverage</li>
          <li>Accident benefits & optional enhancements</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Roadside Assistance</li>
          <li>Rental Vehicle Coverage</li>
          <li>Agreed Value Coverage</li>
          <li>Enhanced Theft & Vandalism Protection</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Hyundai Insurance</h2>
        <ul>
          <li>Bundling home and auto insurance</li>
          <li>Safe driving discounts</li>
          <li>Garage & anti-theft system discounts</li>
          <li>Multi-vehicle household discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Hyundai Insurance?</h2>
        <ul>
          <li>Owners of sedans, SUVs, and hybrids</li>
          <li>Drivers seeking reliable coverage and OEM-quality repairs</li>
          <li>Families seeking comprehensive liability protection</li>
          <li>Anyone looking for affordable, dependable insurance</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Hyundai Vehicle</h2>
        <p>
          Morison brokers ensure your Hyundai is insured with coverage tailored to its model, value, and usage.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default HyundaiInsurance;
