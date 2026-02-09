import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./Bricklayers.css";

const Bricklayers = () => {
  return (
    <PageLayout
      title="Bricklayers Insurance"
      subtitle="Specialized insurance coverage for bricklayers, masons, and construction professionals."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Bricklayers insurance</strong> protects construction professionals from property damage,
          workplace injuries, liability claims, and equipment loss.
        </p>
        <p>
          Morison brokers help bricklayers secure comprehensive coverage tailored
          to construction projects, site operations, and staff safety.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Bricklayers Need Specialized Insurance</h2>
        <p>
          Bricklayers work in high-risk environments with heavy materials, scaffolding, and tools.
          Even minor accidents can result in serious injuries or property damage.
        </p>
        <p>
          Specialized construction insurance ensures protection for liability, workers’ compensation,
          and project-related risks.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Bricklayers Insurance</h2>
        <ul>
          <li>Coverage tailored to bricklaying and masonry projects</li>
          <li>Protection against on-site accidents and property damage</li>
          <li>Equipment and tools insurance</li>
          <li>Expert support for claims and safety compliance</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Bricklayers Insurance Coverage Options</h2>
        <ul>
          <li>Commercial General Liability</li>
          <li>Workers’ Compensation</li>
          <li>Tools & Equipment Insurance</li>
          <li>Business Property & Contents Insurance</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Contractor’s Equipment Breakdown Protection</li>
          <li>Professional Liability (for project consulting)</li>
          <li>Umbrella / Excess Liability Coverage</li>
          <li>Business Interruption Coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Bricklayers Insurance</h2>
        <ul>
          <li>Implementing proper on-site safety measures</li>
          <li>Bundling multiple construction business policies</li>
          <li>Maintaining claims-free operating history</li>
          <li>Training staff on equipment use and risk management</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Bricklayers Insurance?</h2>
        <ul>
          <li>Independent bricklayers and masons</li>
          <li>Construction companies employing bricklayers</li>
          <li>Contractors working on residential or commercial projects</li>
          <li>Specialty masonry firms</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Bricklaying Business Today</h2>
        <p>
          Morison brokers provide tailored insurance solutions for bricklayers
          and masonry businesses, ensuring safety and financial security.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default Bricklayers;
