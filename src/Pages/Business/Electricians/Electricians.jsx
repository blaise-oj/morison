import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./Electricians.css";

const Electricians = () => {
  return (
    <div className="electricians-page">
    <PageLayout
      title="Electricians Insurance"
      subtitle="Comprehensive insurance coverage for electricians, electrical contractors, and electrical service providers."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Electricians insurance</strong> protects electrical professionals and businesses
          from property damage, liability claims, workplace accidents, and equipment loss.
        </p>
        <p>
          Morison brokers help electricians secure coverage tailored to on-site work,
          project risks, and employee safety.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Electricians Need Specialized Insurance</h2>
        <p>
          Electricians face unique risks such as electrical fires, shocks, property damage,
          and workplace injuries. Standard business insurance may not fully cover these exposures.
        </p>
        <p>
          Specialized insurance ensures protection for employees, tools, projects,
          and client properties.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Electricians Insurance</h2>
        <ul>
          <li>Coverage tailored for electrical work and project risks</li>
          <li>Protection for workplace accidents and client liability</li>
          <li>Tools and equipment insurance</li>
          <li>Expert claims support and risk management guidance</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Electricians Insurance Coverage Options</h2>
        <ul>
          <li>Commercial General Liability</li>
          <li>Workers’ Compensation</li>
          <li>Contractor’s Equipment & Tools Insurance</li>
          <li>Business Property & Contents Insurance</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Professional Liability (Errors & Omissions)</li>
          <li>Business Interruption Coverage</li>
          <li>Umbrella / Excess Liability Coverage</li>
          <li>Equipment Breakdown Protection</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Electricians Insurance</h2>
        <ul>
          <li>Implementing on-site safety measures</li>
          <li>Bundling multiple business policies</li>
          <li>Maintaining claims-free operational history</li>
          <li>Regular equipment maintenance and employee training</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Electricians Insurance?</h2>
        <ul>
          <li>Independent electricians and contractors</li>
          <li>Electrical service companies</li>
          <li>Staffed businesses handling commercial or residential projects</li>
          <li>Specialized electrical trade businesses</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Electrical Business Today</h2>
        <p>
          Morison brokers provide tailored insurance solutions for electricians,
          ensuring staff, equipment, and project sites are fully protected.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default Electricians;
