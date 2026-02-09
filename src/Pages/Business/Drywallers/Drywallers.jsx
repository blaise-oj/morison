import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./Drywallers.css";

const Drywallers = () => {
  return (
    <PageLayout
      title="Drywallers Insurance"
      subtitle="Comprehensive insurance coverage for drywall installers, contractors, and plastering professionals."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Drywallers insurance</strong> protects drywall contractors and plastering businesses
          from property damage, liability claims, workplace accidents, and equipment loss.
        </p>
        <p>
          Morison brokers help drywallers secure coverage tailored to on-site work,
          project risks, and staff safety.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Drywallers Need Specialized Insurance</h2>
        <p>
          Drywall contractors face risks including workplace injuries, property damage,
          and liability claims. Standard commercial insurance may not fully cover these exposures.
        </p>
        <p>
          Specialized insurance ensures protection for employees, tools, project sites,
          and client properties.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Drywallers Insurance</h2>
        <ul>
          <li>Coverage tailored for drywall installation and plastering projects</li>
          <li>Protection for on-site accidents and client liability</li>
          <li>Tools and equipment insurance</li>
          <li>Expert claims support and risk management guidance</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Drywallers Insurance Coverage Options</h2>
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
        <h2>Ways to Save on Drywallers Insurance</h2>
        <ul>
          <li>Implementing on-site safety measures</li>
          <li>Bundling multiple business policies</li>
          <li>Maintaining claims-free operational history</li>
          <li>Proper equipment maintenance and employee training</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Drywallers Insurance?</h2>
        <ul>
          <li>Independent drywall installers</li>
          <li>Small to medium drywall and plastering companies</li>
          <li>Staffed contractor businesses handling construction projects</li>
          <li>Contractors managing multiple on-site projects</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Drywall Business Today</h2>
        <p>
          Morison brokers provide tailored insurance solutions for drywallers,
          ensuring staff, equipment, and project sites are fully protected.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default Drywallers;
