import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./FordInsurance.css";

const FordInsurance = () => {
  return (
    <div className="ford-insurance-page">
    <PageLayout
      title="Ford Insurance"
      subtitle="Comprehensive coverage for your Ford vehicle, from daily drivers to trucks."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Ford insurance</strong> protects a wide range of vehicles including
          sedans, SUVs, trucks, and performance models.
        </p>
        <p>
          Morison helps you find policies that match your driving style and your
          Ford’s needs, with options for comprehensive, collision, and liability coverage.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or fill out the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Ford Vehicles Require Tailored Insurance</h2>
        <p>
          Different Ford models have varying repair costs, safety features, and technology.
          Standard coverage may not fully protect your investment.
        </p>
        <p>
          Specialized coverage ensures OEM repairs, liability protection, and optional add-ons
          that match your Ford’s unique needs.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Ford Insurance</h2>
        <ul>
          <li>OEM Parts & Certified Repair Facility Coverage</li>
          <li>Collision & Comprehensive Coverage</li>
          <li>Liability Protection & Accident Benefits</li>
          <li>Expert Brokers for All Vehicle Types</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Ford Insurance Coverage Options</h2>
        <ul>
          <li>Comprehensive coverage (fire, theft, natural disasters)</li>
          <li>Collision coverage</li>
          <li>Third-party liability coverage</li>
          <li>Accident benefits & optional add-ons</li>
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
        <h2>Ways to Save on Ford Insurance</h2>
        <ul>
          <li>Bundling home and auto insurance</li>
          <li>Safe driving discounts</li>
          <li>Garage & anti-theft system discounts</li>
          <li>Multi-vehicle household discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Ford Insurance?</h2>
        <ul>
          <li>Owners of sedans, SUVs, and trucks</li>
          <li>Drivers who value OEM repairs and coverage</li>
          <li>Families seeking liability and accident protection</li>
          <li>Owners of performance or specialty Ford models</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Ford Vehicle</h2>
        <p>
          Morison brokers ensure your Ford is covered with insurance tailored to its
          type, value, and use.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default FordInsurance;
