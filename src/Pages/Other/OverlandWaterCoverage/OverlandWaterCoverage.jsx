import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./OverlandWaterCoverage.css";

const OverlandWaterCoverage = () => {
  return (
    <PageLayout
      title="Overland Water Coverage"
      subtitle="Protection against water damage caused by surface water and flooding."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Overland water coverage</strong> protects your home and belongings
          from damage caused by water entering your property from ground level.
        </p>
        <p>
          This includes water from heavy rainfall, melting snow, or overflowing
          bodies of water that are not covered under standard home insurance policies.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section>
        <h2>Why Overland Water Coverage Is Important</h2>
        <p>
          Flooding caused by surface water is one of the most common and costly
          sources of property damage.
        </p>
        <p>
          Without overland water coverage, homeowners may face significant repair
          costs that are not covered by a standard policy.
        </p>
      </section>

      {/* WHAT IT COVERS */}
      <section>
        <h2>What Overland Water Coverage Covers</h2>
        <ul>
          <li>Flooding from heavy rainfall or melting snow</li>
          <li>Overflow of rivers, lakes, or streams</li>
          <li>Surface water entering through doors, windows, or foundation</li>
          <li>Damage to building structure and contents</li>
        </ul>
      </section>

      {/* OPTIONAL ENHANCEMENTS */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Increased flood coverage limits</li>
          <li>Extended contents protection</li>
          <li>Combined overland and sewer backup coverage</li>
          <li>Additional living expenses due to flood damage</li>
        </ul>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Why Choose Morison for Overland Water Coverage</h2>
        <ul>
          <li>Access to insurers offering comprehensive flood protection</li>
          <li>Clear guidance on flood risk and prevention</li>
          <li>Customized coverage based on property location</li>
          <li>Dedicated support during flood-related claims</li>
        </ul>
      </section>

      {/* WHO NEEDS IT */}
      <section>
        <h2>Who Should Consider Overland Water Coverage?</h2>
        <ul>
          <li>Homeowners in flood-prone or low-lying areas</li>
          <li>Properties near rivers, lakes, or drainage systems</li>
          <li>Homeowners seeking comprehensive water damage protection</li>
          <li>Anyone wanting peace of mind during severe weather events</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Prepare for the Unexpected</h2>
        <p>
          Overland water coverage helps protect your home and finances from
          the growing risk of flooding.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default OverlandWaterCoverage;
