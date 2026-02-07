import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./ElectricCarInsurance.css";

const ElectricCarInsurance = () => {
  return (
    <PageLayout
      title="Electric Car Insurance"
      subtitle="Specialized auto insurance designed for electric vehicles and modern driving."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>EV-specific protection:</strong> coverage that accounts for
          batteries, charging equipment, and advanced technology.
        </p>
        <p>
          <strong>Cost-efficient options:</strong> many electric vehicles qualify
          for insurance discounts.
        </p>
        <p>
          <strong>Broker expertise:</strong> guidance from specialists who
          understand electric vehicles.
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with a
          licensed broker about electric car insurance today.
        </p>
      </section>

      {/* WHY EV INSURANCE */}
      <section>
        <h2>Why Electric Cars Need Specialized Insurance</h2>
        <p>
          Electric vehicles come with unique components such as high-voltage
          batteries, advanced driver-assistance systems, and charging equipment.
        </p>
        <p>
          Proper insurance ensures these features are fully protected in the
          event of an accident or loss.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Electric Car Insurance</h2>
        <ul>
          <li>Access to EV-Friendly Insurance Providers</li>
          <li>Coverage for Batteries & Charging Equipment</li>
          <li>Discount Opportunities for Green Vehicles</li>
          <li>Licensed Auto Insurance Brokers</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>Electric Car Insurance Coverage at a Glance</h2>
        <p>
          EV insurance includes standard auto coverages with additional
          considerations for electric components.
        </p>
      </section>

      {/* COVERAGE TYPES */}
      <section>
        <h3>Battery & Powertrain Coverage</h3>
        <p>
          Covers damage to the battery system and electric powertrain following
          an insured loss.
        </p>
      </section>

      <section>
        <h3>Charging Equipment</h3>
        <p>
          Optional coverage for home charging stations and portable chargers.
        </p>
      </section>

      <section>
        <h3>Standard Auto Coverages</h3>
        <ul>
          <li>Third-party liability</li>
          <li>Accident benefits</li>
          <li>Collision coverage</li>
          <li>Comprehensive coverage</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Coverages</h3>
        <ul>
          <li>Waiver of Depreciation</li>
          <li>Replacement Cost Coverage</li>
          <li>Roadside Assistance (EV towing)</li>
          <li>Rental Vehicle Coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Electric Car Insurance</h2>
        <ul>
          <li>Green vehicle discounts</li>
          <li>Low-mileage or telematics programs</li>
          <li>Bundling home and auto insurance</li>
          <li>Multi-vehicle policies</li>
        </ul>
      </section>

      {/* WHO SHOULD CONSIDER */}
      <section>
        <h2>Who Should Consider Electric Car Insurance?</h2>
        <ul>
          <li>Battery electric vehicle (BEV) owners</li>
          <li>Plug-in hybrid electric vehicle owners</li>
          <li>Drivers switching from gas-powered vehicles</li>
          <li>Environmentally conscious drivers</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Electric Vehicle with Confidence</h2>
        <p>
          Let a Morison broker help you secure electric car insurance that
          protects your investment and supports your lifestyle.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page.
        </p>
      </section>
    </PageLayout>
  );
};

export default ElectricCarInsurance;
