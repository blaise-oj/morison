import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./Consultants.css";

const Consultants = () => {
  return (
    <div className="consultants-page">
    <PageLayout
      title="Consultants Insurance"
      subtitle="Comprehensive insurance coverage for consultants, advisors, and professional service providers."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Consultants insurance</strong> protects professionals from liability claims,
          professional errors, and business interruptions.
        </p>
        <p>
          Morison brokers help consultants secure coverage tailored to their advisory services,
          client engagements, and professional risks.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Consultants Need Specialized Insurance</h2>
        <p>
          Consultants provide advice and services that carry professional liability risks, such as errors,
          omissions, or client disputes. Standard business insurance may not cover these exposures.
        </p>
        <p>
          Specialized insurance ensures protection against professional liability, property risks,
          and business continuity concerns.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Consultants Insurance</h2>
        <ul>
          <li>Professional Liability (Errors & Omissions) coverage</li>
          <li>Protection for business property and equipment</li>
          <li>Business Interruption Coverage</li>
          <li>Expert support for claims and risk management</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Consultants Insurance Coverage Options</h2>
        <ul>
          <li>Professional Liability / Errors & Omissions</li>
          <li>Commercial General Liability</li>
          <li>Business Property & Contents Insurance</li>
          <li>Workers’ Compensation (if employing staff)</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Cyber Liability (for client data protection)</li>
          <li>Business Interruption Coverage</li>
          <li>Umbrella / Excess Liability Coverage</li>
          <li>Equipment Breakdown Protection</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Consultants Insurance</h2>
        <ul>
          <li>Maintaining professional certifications and compliance</li>
          <li>Bundling multiple professional and business policies</li>
          <li>Maintaining claims-free operating history</li>
          <li>Implementing proper client agreement procedures</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Consultants Insurance?</h2>
        <ul>
          <li>Independent consultants and advisors</li>
          <li>Professional service firms</li>
          <li>Staffed consultancy practices</li>
          <li>Specialized industry consultants (IT, finance, management, etc.)</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Consulting Business Today</h2>
        <p>
          Morison brokers provide tailored insurance coverage for consultants,
          ensuring professional liability, property, and operational risks are fully managed.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default Consultants;
