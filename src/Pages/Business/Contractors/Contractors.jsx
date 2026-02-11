import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./Contractors.css";

const Contractors = () => {
  return (
    <div className="contractors-page">
    <PageLayout
      title="Contractors Insurance"
      subtitle="Comprehensive insurance coverage for contractors, builders, and construction service providers."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Contractors insurance</strong> protects businesses and independent contractors from property damage,
          liability claims, workplace accidents, and project-related risks.
        </p>
        <p>
          Morison brokers help contractors secure coverage tailored to construction projects,
          subcontractor management, and staff safety.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Contractors Need Specialized Insurance</h2>
        <p>
          Contractors operate in high-risk environments with heavy machinery, multiple subcontractors,
          and varied project sites. Standard business insurance may not fully cover these exposures.
        </p>
        <p>
          Specialized contractors insurance ensures protection for liability, employees, equipment,
          and project-related incidents.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Contractors Insurance</h2>
        <ul>
          <li>Coverage tailored for construction projects and subcontractors</li>
          <li>Protection against workplace accidents and client liability</li>
          <li>Equipment, tools, and materials coverage</li>
          <li>Expert support for claims and risk management</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Contractors Insurance Coverage Options</h2>
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
          <li>Cyber Liability (for project management systems)</li>
          <li>Umbrella / Excess Liability Coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Contractors Insurance</h2>
        <ul>
          <li>Implementing on-site safety measures</li>
          <li>Bundling multiple construction business policies</li>
          <li>Maintaining claims-free operational history</li>
          <li>Regular equipment maintenance and employee training</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Contractors Insurance?</h2>
        <ul>
          <li>Independent contractors</li>
          <li>Construction companies employing subcontractors</li>
          <li>Specialty trade service providers (electricians, plumbers, carpenters, etc.)</li>
          <li>Staffed contractor firms managing multiple projects</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Contracting Business Today</h2>
        <p>
          Morison brokers provide tailored insurance solutions for contractors,
          ensuring staff, equipment, projects, and clients are fully protected.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default Contractors;
