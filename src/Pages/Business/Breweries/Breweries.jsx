import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./Breweries.css";

const Breweries = () => {
  return (
    <PageLayout
      title="Breweries Insurance"
      subtitle="Comprehensive insurance coverage for breweries, microbreweries, and craft beer businesses."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Breweries insurance</strong> protects brewery owners from property damage,
          liability, product claims, and business interruptions.
        </p>
        <p>
          Morison brokers help breweries secure coverage tailored to production, distribution,
          taproom operations, and staff.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Breweries Need Specialized Insurance</h2>
        <p>
          Breweries face unique risks including property damage, equipment breakdown,
          liquor liability, and product recalls. Standard commercial insurance may not
          cover these industry-specific exposures.
        </p>
        <p>
          Specialized brewery insurance ensures protection for your production, taproom,
          employees, and customers.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Breweries Insurance</h2>
        <ul>
          <li>Coverage for production facilities, taprooms, and equipment</li>
          <li>Liquor liability and general liability protection</li>
          <li>Business interruption coverage to safeguard revenue</li>
          <li>Expert claims and risk management support</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Breweries Insurance Coverage Options</h2>
        <ul>
          <li>Commercial Property Insurance</li>
          <li>General & Liquor Liability Insurance</li>
          <li>Business Interruption Coverage</li>
          <li>Workers’ Compensation (for staff)</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Equipment Breakdown Protection</li>
          <li>Product Recall Insurance</li>
          <li>Cyber Liability (for taproom POS and online sales)</li>
          <li>Umbrella / Excess Liability Coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Breweries Insurance</h2>
        <ul>
          <li>Maintaining proper safety and sanitation measures</li>
          <li>Bundling multiple business policies</li>
          <li>Claims-free operating history</li>
          <li>Investing in quality equipment and staff training</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Breweries Insurance?</h2>
        <ul>
          <li>Microbreweries and craft beer producers</li>
          <li>Taproom and brewery restaurant operators</li>
          <li>Distribution-focused breweries</li>
          <li>Staffed brewery production facilities</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Brewery Today</h2>
        <p>
          Morison brokers provide comprehensive brewery insurance coverage,
          protecting your production, staff, and customers.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default Breweries;
