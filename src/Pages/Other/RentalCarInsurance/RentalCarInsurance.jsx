import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./RentalCarInsurance.css";

const RentalCarInsurance = () => {
  return (
      <div className="rental-car-insurance-page">
    <PageLayout
      title="Rental Car Insurance"
      subtitle="Coverage that protects you while driving a rented vehicle."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Rental car insurance</strong> provides protection when you rent a
          vehicle, helping cover damage, theft, or liability that may occur during
          the rental period.
        </p>
        <p>
          Whether you’re traveling for business or leisure, this coverage ensures
          you’re not exposed to unexpected costs or gaps in protection.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section>
        <h2>Why Rental Car Insurance Is Important</h2>
        <p>
          Rental companies often offer insurance at the counter, but these options
          can be expensive and may provide limited coverage.
        </p>
        <p>
          Having proper rental car insurance in place ensures you’re protected
          without paying inflated daily rates.
        </p>
      </section>

      {/* WHAT IT COVERS */}
      <section>
        <h2>What Rental Car Insurance Covers</h2>
        <ul>
          <li>Damage to or theft of the rental vehicle</li>
          <li>Third-party liability coverage</li>
          <li>Loss of use charges from the rental company</li>
          <li>Towing and related expenses</li>
        </ul>
      </section>

      {/* OPTIONAL ENHANCEMENTS */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Extended coverage for international rentals</li>
          <li>Higher liability limits</li>
          <li>Coverage for luxury or specialty rental vehicles</li>
          <li>Accident forgiveness options</li>
        </ul>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Why Choose Morison for Rental Car Insurance</h2>
        <ul>
          <li>Clear guidance on rental coverage options</li>
          <li>Protection that complements your existing auto policy</li>
          <li>Access to insurers with flexible rental coverage</li>
          <li>Support if a claim occurs while renting</li>
        </ul>
      </section>

      {/* WHO NEEDS IT */}
      <section>
        <h2>Who Should Consider Rental Car Insurance?</h2>
        <ul>
          <li>Frequent travelers renting vehicles</li>
          <li>Drivers without comprehensive auto insurance</li>
          <li>Individuals renting cars for business or leisure</li>
          <li>Anyone wanting peace of mind while driving a rental</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Drive with Confidence</h2>
        <p>
          Rental car insurance helps protect you from unexpected costs so you can
          focus on your trip, not the risks.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default RentalCarInsurance;
