import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./BusinessInterruptionCoverage.css";

const BusinessInterruptionCoverage = () => {
  return (
    <PageLayout
      title="Business Interruption Insurance"
      subtitle="Protect your business from financial losses due to unexpected disruptions."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Business Interruption insurance</strong> safeguards businesses
          against lost income, operating expenses, and extra costs incurred when
          operations are disrupted due to fire, natural disasters, or other insured events.
        </p>
        <p>
          Morison brokers help businesses secure coverage tailored to their revenue, operations,
          and potential risks.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Business Interruption Insurance Is Essential</h2>
        <p>
          Unexpected disruptions can halt operations, causing loss of revenue and financial strain.
          Standard property insurance may cover damages but often excludes lost income.
        </p>
        <p>
          Business Interruption insurance ensures your business can recover quickly,
          maintain cash flow, and continue operations after unforeseen events.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Business Interruption Insurance</h2>
        <ul>
          <li>Coverage for lost income during operational disruptions</li>
          <li>Protection for ongoing expenses such as payroll and rent</li>
          <li>Customized policies based on business size and revenue</li>
          <li>Expert guidance on risk management and claims handling</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Business Interruption Insurance Coverage Options</h2>
        <ul>
          <li>Lost revenue due to insured events</li>
          <li>Ongoing operational expenses coverage</li>
          <li>Extra expense coverage to resume operations quickly</li>
          <li>Coverage for dependent properties and suppliers</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Extended business interruption period</li>
          <li>Coverage for supply chain disruptions</li>
          <li>Cyber or technology-related interruptions</li>
          <li>Contingent business interruption coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Business Interruption Insurance</h2>
        <ul>
          <li>Implementing robust risk management and contingency plans</li>
          <li>Bundling with property and other business insurance policies</li>
          <li>Maintaining a history of minimal operational interruptions</li>
          <li>Upgrading safety, security, and disaster prevention measures</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Business Interruption Insurance?</h2>
        <ul>
          <li>Small, medium, and large business owners</li>
          <li>Companies heavily dependent on continuous operations</li>
          <li>Businesses in areas prone to natural disasters or operational risks</li>
          <li>Organizations seeking to safeguard revenue and maintain business continuity</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Business from Unexpected Disruptions Today</h2>
        <p>
          Morison brokers provide tailored Business Interruption insurance coverage,
          ensuring your business can continue operations and recover quickly after unexpected events.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default BusinessInterruptionCoverage;
