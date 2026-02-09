import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./Audiologists.css";

const Audiologists = () => {
  return (
    <PageLayout
      title="Audiologists Insurance"
      subtitle="Comprehensive insurance coverage for audiologists and hearing care professionals."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Audiologists insurance</strong> provides protection for hearing care
          professionals against professional liability, property damage, and business risks.
        </p>
        <p>
          Morison brokers help audiologists secure coverage tailored to clinics, private
          practices, and mobile hearing services.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Audiologists Need Specialized Insurance</h2>
        <p>
          Audiologists handle sensitive patient data and provide clinical advice that can
          carry liability risks. Standard business insurance may not cover professional errors
          or patient-related claims.
        </p>
        <p>
          Specialized coverage ensures protection against malpractice claims, equipment damage,
          and data breaches.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Audiologists Insurance</h2>
        <ul>
          <li>Coverage designed for audiology clinics and mobile services</li>
          <li>Professional liability and malpractice protection</li>
          <li>Equipment and office contents insurance</li>
          <li>Support for claims and regulatory compliance</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Audiologists Insurance Coverage Options</h2>
        <ul>
          <li>Professional Liability (Errors & Omissions)</li>
          <li>Commercial General Liability</li>
          <li>Business Property & Contents Insurance</li>
          <li>Cyber Liability & Data Breach Coverage</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Business Interruption Coverage</li>
          <li>Equipment Breakdown Protection</li>
          <li>Legal Expense Coverage</li>
          <li>Umbrella / Excess Liability</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Audiologists Insurance</h2>
        <ul>
          <li>Bundling professional and business policies</li>
          <li>Implementing strict data protection procedures</li>
          <li>Maintaining a claims-free practice</li>
          <li>Investing in staff training and certifications</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Audiologists Insurance?</h2>
        <ul>
          <li>Independent audiologists</li>
          <li>Hearing clinics and private practices</li>
          <li>Mobile audiology service providers</li>
          <li>Staffed audiology departments in healthcare facilities</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Audiology Practice Today</h2>
        <p>
          Morison brokers ensure audiologists have comprehensive insurance coverage
          to manage professional, operational, and equipment risks.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default Audiologists;
