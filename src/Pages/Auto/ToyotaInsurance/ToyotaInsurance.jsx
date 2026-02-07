import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./ToyotaInsurance.css";

const ToyotaInsurance = () => {
  return (
    <PageLayout
      title="Toyota Insurance"
      subtitle="Comprehensive coverage for all Toyota vehicles, from sedans to SUVs and trucks."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Toyota insurance</strong> protects your vehicle against accidents, theft, and liability.
        </p>
        <p>
          Morison brokers provide policies tailored to all Toyota models — sedans, SUVs, hybrids, and trucks — ensuring reliable coverage for daily use or long trips.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Toyota Vehicles Need Specialized Insurance</h2>
        <p>
          Toyota vehicles have varying technology, repair costs, and safety features. Standard insurance may not fully protect your investment.
        </p>
        <p>
          Toyota insurance ensures OEM repairs, approved service, and optional add-ons tailored to your vehicle.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Toyota Insurance</h2>
        <ul>
          <li>OEM Parts & Certified Repair Coverage</li>
          <li>Comprehensive & Collision Protection</li>
          <li>Liability Coverage & Accident Benefits</li>
          <li>Expert Brokers for All Toyota Models</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Toyota Insurance Coverage Options</h2>
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
        <h2>Ways to Save on Toyota Insurance</h2>
        <ul>
          <li>Bundle home and auto policies</li>
          <li>Safe driving discounts</li>
          <li>Garage & anti-theft system discounts</li>
          <li>Multi-vehicle household discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Toyota Insurance?</h2>
        <ul>
          <li>Owners of sedans, SUVs, trucks, and hybrid models</li>
          <li>Drivers seeking reliable OEM repair coverage</li>
          <li>Families looking for comprehensive liability protection</li>
          <li>Anyone wanting tailored, affordable insurance</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Toyota Vehicle</h2>
        <p>
          Morison brokers ensure your Toyota is fully covered with insurance tailored to its model, value, and usage.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default ToyotaInsurance;
