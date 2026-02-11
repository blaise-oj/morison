import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./KiaInsurance.css";

const KiaInsurance = () => {
  return (
      <div className="kia-insurance-page">
    <PageLayout
      title="Kia Insurance"
      subtitle="Comprehensive coverage for all Kia vehicles, from sedans to SUVs."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Kia insurance</strong> protects your vehicle against accidents, theft, and liability.
        </p>
        <p>
          Whether you drive a compact sedan, SUV, or hybrid, Morison brokers find policies tailored to your Kia’s model and your driving needs.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or fill out the form to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Kia Vehicles Need Tailored Insurance</h2>
        <p>
          Kia vehicles vary in technology, safety features, and repair costs. Standard insurance may not provide full protection.
        </p>
        <p>
          Specialized Kia insurance ensures OEM repairs, approved service, and optional add-ons suitable for your car.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Kia Insurance</h2>
        <ul>
          <li>OEM Parts & Certified Repair Coverage</li>
          <li>Comprehensive & Collision Protection</li>
          <li>Liability Coverage & Accident Benefits</li>
          <li>Expert Brokers for All Kia Models</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Kia Insurance Coverage Options</h2>
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
        <h2>Ways to Save on Kia Insurance</h2>
        <ul>
          <li>Bundling home and auto insurance</li>
          <li>Safe driving discounts</li>
          <li>Garage & anti-theft system discounts</li>
          <li>Multi-vehicle household discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Kia Insurance?</h2>
        <ul>
          <li>Owners of sedans, SUVs, and hybrids</li>
          <li>Drivers seeking reliable coverage and OEM-quality repairs</li>
          <li>Families seeking liability and accident protection</li>
          <li>Anyone looking for affordable, dependable insurance</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Kia Vehicle</h2>
        <p>
          Morison brokers ensure your Kia is insured with coverage tailored to its model, value, and usage.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default KiaInsurance;
