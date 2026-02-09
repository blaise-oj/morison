import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./EquipmentBreakdownInsurance.css";

const EquipmentBreakdownInsurance = () => {
  return (
    <PageLayout
      title="Equipment Breakdown Insurance"
      subtitle="Protect your business equipment, machinery, and technology from unexpected breakdowns and costly repairs."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Equipment Breakdown insurance</strong> safeguards businesses from financial losses
          due to mechanical or electrical breakdowns of essential equipment, machinery, and technology.
        </p>
        <p>
          Morison brokers help businesses secure coverage tailored to their equipment, operations,
          and risk exposures.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Equipment Breakdown Insurance Is Essential</h2>
        <p>
          Unexpected breakdowns can disrupt operations, cause revenue loss, and require expensive repairs.
          Standard property insurance may not cover mechanical or electrical failures.
        </p>
        <p>
          Equipment Breakdown insurance ensures businesses can repair or replace critical machinery
          quickly and minimize downtime.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Equipment Breakdown Insurance</h2>
        <ul>
          <li>Coverage for mechanical and electrical breakdowns</li>
          <li>Protection for production equipment, HVAC, and IT systems</li>
          <li>Minimizes operational downtime and financial loss</li>
          <li>Expert guidance on claims and preventive maintenance</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Equipment Breakdown Insurance Coverage Options</h2>
        <ul>
          <li>Machinery and equipment repair or replacement</li>
          <li>Business income loss due to equipment downtime</li>
          <li>Computer and technology system breakdown</li>
          <li>Boiler and pressure equipment coverage</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Extended business interruption coverage</li>
          <li>Coverage for off-site equipment</li>
          <li>Excess or umbrella liability add-ons</li>
          <li>Preventive maintenance consulting and risk assessment</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Equipment Breakdown Insurance</h2>
        <ul>
          <li>Regular equipment maintenance and inspections</li>
          <li>Bundling with other business insurance policies</li>
          <li>Implementing risk management practices</li>
          <li>Maintaining a claims-free history</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Equipment Breakdown Insurance?</h2>
        <ul>
          <li>Manufacturers and production facilities</li>
          <li>Businesses with critical machinery or technology</li>
          <li>Commercial operations relying on HVAC, boilers, or computers</li>
          <li>Companies seeking to minimize downtime and repair costs</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Equipment Today</h2>
        <p>
          Morison brokers provide tailored Equipment Breakdown insurance coverage,
          ensuring your critical business machinery and technology are fully protected.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default EquipmentBreakdownInsurance;
