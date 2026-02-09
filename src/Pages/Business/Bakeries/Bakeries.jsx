import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./Bakeries.css";

const Bakeries = () => {
  return (
    <PageLayout
      title="Bakeries Insurance"
      subtitle="Comprehensive insurance coverage for bakeries, patisseries, and small food businesses."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Bakeries insurance</strong> protects bakery owners against property damage,
          liability, equipment loss, and business interruptions.
        </p>
        <p>
          Morison brokers work with specialized insurers to provide coverage tailored
          to bakeries, pastry shops, and small food businesses.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Bakeries Need Specialized Insurance</h2>
        <p>
          Bakeries face unique risks including fire hazards, food contamination,
          equipment breakdown, and customer injuries. Standard business insurance
          may not fully protect against these exposures.
        </p>
        <p>
          Specialized bakery coverage ensures your business, staff, and customers are protected.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Bakeries Insurance</h2>
        <ul>
          <li>Coverage for property, equipment, and inventory</li>
          <li>Protection against liability claims from customers and staff</li>
          <li>Business interruption coverage to protect revenue</li>
          <li>Expert claims support and risk management advice</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Bakeries Insurance Coverage Options</h2>
        <ul>
          <li>Commercial Property Insurance</li>
          <li>General Liability Insurance</li>
          <li>Business Interruption Coverage</li>
          <li>Workers’ Compensation (if employing staff)</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Equipment Breakdown Protection</li>
          <li>Product Liability Insurance</li>
          <li>Cyber Liability (for online orders and payments)</li>
          <li>Umbrella / Excess Liability Coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Bakeries Insurance</h2>
        <ul>
          <li>Implementing fire and safety measures</li>
          <li>Maintaining a clean and compliant food-handling environment</li>
          <li>Bundling multiple business policies</li>
          <li>Claims-free operational history</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Bakeries Insurance?</h2>
        <ul>
          <li>Independent bakery owners</li>
          <li>Patisseries and cake shops</li>
          <li>Cafés offering baked goods</li>
          <li>Small food production and catering businesses</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Bakery Today</h2>
        <p>
          Morison brokers ensure bakery owners have comprehensive insurance coverage
          that safeguards property, staff, and customers.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default Bakeries;
