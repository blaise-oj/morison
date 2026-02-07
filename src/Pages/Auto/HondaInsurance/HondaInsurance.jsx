import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./HondaInsurance.css";

const HondaInsurance = () => {
  return (
    <PageLayout
      title="Honda Insurance"
      subtitle="Comprehensive protection for all Honda vehicles, from sedans to SUVs."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Honda insurance</strong> provides coverage for sedans, SUVs, trucks, and hybrids,
          protecting your Honda against accidents, theft, and liability.
        </p>
        <p>
          Morison brokers help you find policies tailored to your driving needs and your Honda’s model.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or fill out the form to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Honda Vehicles Need Tailored Insurance</h2>
        <p>
          Honda vehicles vary in repair costs, safety features, and technology. Standard coverage may not provide full protection.
        </p>
        <p>
          Specialized Honda insurance ensures OEM parts, approved repairs, and optional add-ons suitable for your vehicle.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Honda Insurance</h2>
        <ul>
          <li>OEM Parts & Certified Repair Coverage</li>
          <li>Collision & Comprehensive Protection</li>
          <li>Liability Coverage & Accident Benefits</li>
          <li>Expert Guidance for All Honda Models</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Honda Insurance Coverage Options</h2>
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
        <h2>Ways to Save on Honda Insurance</h2>
        <ul>
          <li>Bundling home and auto insurance</li>
          <li>Safe driving discounts</li>
          <li>Garage & anti-theft system discounts</li>
          <li>Multi-vehicle household discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Honda Insurance?</h2>
        <ul>
          <li>Owners of sedans, SUVs, and hybrids</li>
          <li>Drivers seeking OEM-quality repairs and coverage</li>
          <li>Families seeking liability and accident protection</li>
          <li>Drivers looking for reliable, affordable insurance</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Honda Vehicle</h2>
        <p>
          Morison brokers ensure your Honda is fully protected with insurance tailored to its model, value, and use.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default HondaInsurance;
