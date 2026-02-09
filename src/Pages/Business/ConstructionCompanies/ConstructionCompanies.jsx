import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./ConstructionCompanies.css";

const ConstructionCompanies = () => {
  return (
    <PageLayout
      title="Construction Companies Insurance"
      subtitle="Comprehensive insurance coverage for construction companies, contractors, and building professionals."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Construction companies insurance</strong> protects businesses from property damage, liability claims,
          workplace accidents, and project-related risks.
        </p>
        <p>
          Morison brokers help construction firms secure coverage tailored to on-site operations,
          staff safety, and project requirements.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Construction Companies Need Specialized Insurance</h2>
        <p>
          Construction companies operate in high-risk environments with heavy machinery, subcontractors, and
          multi-site projects. Standard commercial insurance may not cover all exposures.
        </p>
        <p>
          Specialized insurance ensures protection for liability, workers, equipment, and business continuity.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Construction Companies Insurance</h2>
        <ul>
          <li>Coverage tailored for construction projects and site operations</li>
          <li>Protection for workers, subcontractors, and clients</li>
          <li>Equipment, tools, and materials coverage</li>
          <li>Expert claims and risk management support</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Construction Companies Insurance Coverage Options</h2>
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
        <h2>Ways to Save on Construction Companies Insurance</h2>
        <ul>
          <li>Implementing on-site safety measures</li>
          <li>Bundling multiple business policies</li>
          <li>Maintaining claims-free operational history</li>
          <li>Proper equipment maintenance and employee training</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Construction Companies Insurance?</h2>
        <ul>
          <li>Independent construction firms and contractors</li>
          <li>Large construction companies with multiple projects</li>
          <li>Staffed firms with subcontractors on-site</li>
          <li>Specialty construction companies (masonry, carpentry, electrical, etc.)</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Construction Business Today</h2>
        <p>
          Morison brokers provide tailored insurance solutions for construction companies,
          ensuring staff, equipment, projects, and clients are fully protected.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default ConstructionCompanies;
