import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./Accountants.css";

const Accountants = () => {
  return (
    <div className="accountants-page">
    <PageLayout
      title="Accountants Insurance"
      subtitle="Professional insurance solutions designed to protect accountants and accounting firms."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Accountants insurance</strong> is designed to protect accounting
          professionals from the unique risks they face when handling financial
          records, tax filings, audits, and advisory services.
        </p>
        <p>
          Morison brokers work with specialized insurers to provide coverage that
          safeguards your practice, reputation, and financial stability.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Accountants Need Specialized Insurance</h2>
        <p>
          Even minor errors or omissions can result in costly legal claims,
          regulatory penalties, or reputational damage for accountants.
        </p>
        <p>
          Specialized coverage ensures protection against professional liability,
          cyber risks, and client disputes that standard business insurance may not
          fully address.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Accountants Insurance</h2>
        <ul>
          <li>Access to insurers specializing in professional services</li>
          <li>Flexible coverage limits tailored to firm size</li>
          <li>Expert guidance on regulatory and liability risks</li>
          <li>Dedicated claims and risk management support</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Accountants Insurance Coverage Options</h2>
        <ul>
          <li>Professional Liability (Errors & Omissions)</li>
          <li>Commercial General Liability</li>
          <li>Cyber Liability & Data Breach Coverage</li>
          <li>Business Property & Contents Insurance</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Legal Expense Insurance</li>
          <li>Business Interruption Coverage</li>
          <li>Directors & Officers Insurance</li>
          <li>Extended Cyber Protection</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Accountants Insurance</h2>
        <ul>
          <li>Bundling multiple business policies</li>
          <li>Maintaining strong risk management practices</li>
          <li>Claims-free history discounts</li>
          <li>Secure data handling and cybersecurity measures</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Accountants Insurance?</h2>
        <ul>
          <li>Independent accountants and bookkeepers</li>
          <li>Accounting and audit firms</li>
          <li>Tax consultants and advisors</li>
          <li>Financial and compliance professionals</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Accounting Practice Today</h2>
        <p>
          Morison brokers help accountants secure comprehensive insurance
          solutions that protect against professional, legal, and operational risks.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default Accountants;

