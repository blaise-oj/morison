import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./NissanInsurance.css";

const NissanInsurance = () => {
  return (
      <div className="nissan-insurance-page">
    <PageLayout
      title="Nissan Insurance"
      subtitle="Tailored coverage for all Nissan vehicles, from sedans to SUVs and trucks."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Nissan insurance</strong> protects your vehicle against accidents, theft, and liability.
        </p>
        <p>
          Whether you drive a sedan, SUV, or pickup truck, Morison brokers provide policies tailored to your Nissan’s model and usage.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or fill out the form to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Nissan Vehicles Need Specialized Insurance</h2>
        <p>
          Nissan models vary in repair costs, technology, and safety features. Standard coverage may not fully protect your investment.
        </p>
        <p>
          Specialized Nissan insurance ensures OEM repairs, approved service, and optional add-ons tailored to your vehicle.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Nissan Insurance</h2>
        <ul>
          <li>OEM Parts & Certified Repair Coverage</li>
          <li>Comprehensive & Collision Protection</li>
          <li>Liability Coverage & Accident Benefits</li>
          <li>Expert Brokers for All Nissan Models</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Nissan Insurance Coverage Options</h2>
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
        <h2>Ways to Save on Nissan Insurance</h2>
        <ul>
          <li>Bundle home and auto policies</li>
          <li>Safe driving discounts</li>
          <li>Garage & anti-theft system discounts</li>
          <li>Multi-vehicle household discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Nissan Insurance?</h2>
        <ul>
          <li>Owners of sedans, SUVs, and pickup trucks</li>
          <li>Drivers seeking reliable OEM repair coverage</li>
          <li>Families looking for comprehensive liability protection</li>
          <li>Anyone wanting tailored, affordable insurance</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Nissan Vehicle</h2>
        <p>
          Morison brokers ensure your Nissan is fully covered with insurance tailored to its model, value, and usage.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default NissanInsurance;
