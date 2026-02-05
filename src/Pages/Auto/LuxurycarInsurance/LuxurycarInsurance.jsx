import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/carap.jpg"; // update image if needed
import "./LuxuryCarInsurance.css"

const LuxuryCarInsurance = () => {
  return (
    <PageLayout
      title="Luxury Car Insurance"
      subtitle="Premium protection for high-value and performance vehicles — tailored to how you drive."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p><strong>High-value vehicle protection:</strong> coverage built for premium and performance cars</p>
        <p><strong>Claims advocacy:</strong> licensed brokers who understand luxury repairs</p>
        <p><strong>Bundle options:</strong> significant savings when combined with home or umbrella coverage</p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with a
          licensed broker about Luxury Car Insurance today.
        </p>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Specialized Insurance for Luxury & Performance Vehicles</h2>
        <p>
          Luxury vehicles require more than standard auto insurance. Higher
          replacement costs, specialized parts, and performance engineering
          demand coverage that truly protects your investment.
        </p>
        <p>
          Morison Insurance works with insurers experienced in high-value vehicles
          including BMW, Mercedes-Benz, Audi, Porsche, Tesla, Lexus, Bentley, and more.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Luxury Car Insurance</h2>
        <ul>
          <li>4,500+ 5-Star Reviews</li>
          <li>Access to High-Net-Worth & Specialty Insurers</li>
          <li>Licensed Brokers — Not a Call Centre</li>
          <li>Claims Specialists for High-Value Vehicles</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>Luxury Auto Insurance Coverage at a Glance</h2>
        <p>
          Ontario auto insurance is mandatory, but luxury vehicles often require
          enhanced coverage limits, specialized endorsements, and agreed value options.
        </p>
      </section>

      {/* COVERAGE TYPES */}
      <section>
        <h3>Collision Coverage</h3>
        <p>
          Covers damage to your luxury vehicle after an at-fault accident, including
          OEM parts and specialized repairs.
        </p>
        <ul>
          <li>OEM (Original Manufacturer) parts</li>
          <li>High-performance repair facilities</li>
          <li>Track-day exclusions clearly defined</li>
        </ul>
      </section>

      <section>
        <h3>Comprehensive Coverage</h3>
        <ul>
          <li>Theft and vandalism</li>
          <li>Fire and explosions</li>
          <li>Weather damage (hail, flooding, wind)</li>
          <li>Key replacement and electronic theft</li>
        </ul>
      </section>

      <section>
        <h3>Third-Party Liability Insurance</h3>
        <p>
          Higher liability limits are often recommended for luxury vehicle owners.
        </p>
        <ul>
          <li>Increased liability limits</li>
          <li>Legal defence costs</li>
          <li>Settlements or court judgments</li>
        </ul>
      </section>

      <section>
        <h3>Accident Benefits</h3>
        <p>
          Provides medical, rehabilitation, and income replacement benefits regardless of fault.
        </p>
        <ul>
          <li>Medical and rehabilitation expenses</li>
          <li>Income replacement</li>
          <li>Caregiver benefits</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Luxury Vehicle Enhancements</h3>
        <ul>
          <li>Agreed Value or Guaranteed Replacement Cost</li>
          <li>Waiver of Depreciation</li>
          <li>OEM Parts Endorsement</li>
          <li>Rental Vehicle Upgrade</li>
          <li>Accident Forgiveness</li>
        </ul>
      </section>

      {/* BUNDLING */}
      <section>
        <h2>Bundle Luxury Auto with Home & Umbrella Coverage</h2>
        <ul>
          <li>Luxury Auto + High-Value Home</li>
          <li>Luxury Auto + Umbrella Liability</li>
          <li>Multi-Vehicle Discounts</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Luxury Vehicle Properly</h2>
        <p>
          Speak with a Morison broker today and get coverage designed for high-value vehicles.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page.
        </p>
      </section>

    </PageLayout>
  );
};

export default LuxuryCarInsurance;
