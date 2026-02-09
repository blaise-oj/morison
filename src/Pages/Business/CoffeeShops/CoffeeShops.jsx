import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./CoffeeShops.css";

const CoffeeShops = () => {
  return (
    <PageLayout
      title="Coffee Shops Insurance"
      subtitle="Comprehensive insurance coverage for coffee shops, cafés, and small food & beverage businesses."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Coffee shops insurance</strong> protects café and coffee shop owners from property damage,
          liability claims, and business interruptions.
        </p>
        <p>
          Morison brokers help coffee shop owners secure coverage tailored to staff, equipment,
          and customer safety.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Coffee Shops Need Specialized Insurance</h2>
        <p>
          Coffee shops face risks including slip-and-fall accidents, equipment breakdown, and
          food or beverage liability. Standard commercial insurance may not fully cover these exposures.
        </p>
        <p>
          Specialized coffee shop insurance ensures protection for staff, customers, and business assets.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Coffee Shops Insurance</h2>
        <ul>
          <li>Coverage for property, equipment, and inventory</li>
          <li>Liability protection for customers and staff</li>
          <li>Business interruption coverage to safeguard revenue</li>
          <li>Expert claims support and risk management advice</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Coffee Shops Insurance Coverage Options</h2>
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
          <li>Product Liability Insurance</li>
          <li>Equipment Breakdown Protection</li>
          <li>Cyber Liability (for POS and online orders)</li>
          <li>Umbrella / Excess Liability Coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Coffee Shops Insurance</h2>
        <ul>
          <li>Implementing safety and hygiene protocols</li>
          <li>Bundling multiple business policies</li>
          <li>Maintaining a claims-free operational history</li>
          <li>Regular maintenance of coffee machines and equipment</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Coffee Shops Insurance?</h2>
        <ul>
          <li>Independent coffee shop owners</li>
          <li>Cafés and small food & beverage businesses</li>
          <li>Franchise coffee shop operators</li>
          <li>Staffed cafés handling customer service and food prep</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Coffee Shop Today</h2>
        <p>
          Morison brokers provide tailored insurance coverage for coffee shops,
          ensuring your business, staff, and customers are fully protected.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default CoffeeShops;
