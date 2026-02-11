// src/Pages/Home/OutbuildingInsurance/OutbuildingInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/21.png"; // swap to garage / shed image later
import "./OutbuildingInsurance.css";

const OutbuildingInsurance = () => {
  return (
      <div className="outbuilding-insurance-page">
    <PageLayout
      title="Outbuilding Insurance"
      subtitle="Protect garages, sheds, workshops, and other detached structures on your property."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Detached structure protection:</strong> coverage for buildings separate from your main home
        </p>
        <p>
          <strong>Property & contents coverage:</strong> protects tools, equipment, and stored items
        </p>
        <p>
          <strong>Flexible limits:</strong> tailor coverage to match the value of your outbuildings
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with
          a licensed broker about Outbuilding Insurance today.
        </p>
      </section>

      {/* WHY IT MATTERS */}
      <section>
        <h2>Why Outbuilding Insurance Matters</h2>
        <p>
          Many properties include structures such as detached garages, sheds,
          workshops, or storage buildings. These structures may not be fully
          covered under standard home insurance limits.
        </p>
        <p>
          Outbuilding Insurance ensures these valuable structures — and the items
          inside them — are properly protected.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Outbuilding Insurance</h2>
        <ul>
          <li>Coverage for a wide range of detached structures</li>
          <li>Protection against fire, theft, and weather-related damage</li>
          <li>Optional contents coverage for tools and equipment</li>
          <li>Licensed brokers who tailor coverage to your property</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>What Does Outbuilding Insurance Cover?</h2>
        <p>
          Outbuilding coverage protects detached structures on your property
          against sudden and accidental loss.
        </p>
      </section>

      {/* COVERED STRUCTURES */}
      <section>
        <h3>Covered Structures</h3>
        <ul>
          <li>Detached garages</li>
          <li>Sheds and storage buildings</li>
          <li>Workshops and hobby buildings</li>
          <li>Gazebos, pool houses, and cabanas</li>
        </ul>
      </section>

      {/* COVERED RISKS */}
      <section>
        <h3>Covered Risks</h3>
        <ul>
          <li>Fire and smoke</li>
          <li>Theft and vandalism</li>
          <li>Wind, hail, and falling objects</li>
          <li>Accidental damage</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Coverage Enhancements</h3>
        <ul>
          <li>Higher limits for large or custom structures</li>
          <li>Coverage for tools and stored equipment</li>
          <li>Replacement cost options</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Outbuildings</h2>
        <p>
          Ensure your detached structures are properly insured against unexpected
          damage or loss. Morison brokers can help tailor coverage to your needs.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page to get started.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default OutbuildingInsurance;
