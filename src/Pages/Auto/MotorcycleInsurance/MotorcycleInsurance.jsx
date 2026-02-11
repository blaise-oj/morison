import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./MotorcycleInsurance.css";

const MotorcycleInsurance = () => {
  return (
      <div className="motorcycle-insurance-page">
    <PageLayout
      title="Motorcycle Insurance"
      subtitle="Comprehensive coverage to protect you and your bike on the road."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Motorcycle insurance</strong> provides protection for both you
          and your bike against accidents, theft, and liability.
        </p>
        <p>
          Whether you ride a cruiser, sportbike, touring bike, or scooter, Morison
          offers tailored insurance to keep you riding with confidence.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with
          a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Motorcycle Insurance is Essential</h2>
        <p>
          Motorcycles have unique risks and exposures compared to cars.
          Specialized insurance ensures coverage for your bike, gear, and liability
          in case of accidents or theft.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Motorcycle Insurance</h2>
        <ul>
          <li>Customized Coverage Options for All Motorcycle Types</li>
          <li>Liability and Accident Benefits Protection</li>
          <li>Theft & Vandalism Coverage</li>
          <li>Expert Guidance from Licensed Brokers</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Motorcycle Insurance Coverage Overview</h2>
        <ul>
          <li>Third-party liability</li>
          <li>Accident benefits</li>
          <li>Collision coverage</li>
          <li>Comprehensive coverage (fire, theft, natural disasters)</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Roadside Assistance</li>
          <li>Helmet, Gear & Accessories Coverage</li>
          <li>Agreed Value or Replacement Cost</li>
          <li>Track Day Coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Motorcycle Insurance</h2>
        <ul>
          <li>Multi-vehicle discounts (including car & motorcycle)</li>
          <li>Safe riding courses & certifications</li>
          <li>Secure parking or garage discounts</li>
          <li>Bundling home and motorcycle insurance</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Motorcycle Insurance?</h2>
        <ul>
          <li>Casual riders & daily commuters</li>
          <li>Sportbike enthusiasts</li>
          <li>Cruiser & touring riders</li>
          <li>Collectors with vintage motorcycles</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Get Peace of Mind on the Road</h2>
        <p>
          Morison brokers can help you find motorcycle insurance that matches your
          riding style and budget. Protect your ride today.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the online form.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default MotorcycleInsurance;
