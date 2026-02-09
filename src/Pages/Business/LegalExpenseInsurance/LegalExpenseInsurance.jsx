import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./LegalExpenseInsurance.css";

const LegalExpenseInsurance = () => {
  return (
    <PageLayout
      title="Legal Expense Insurance"
      subtitle="Cover your business against legal costs arising from disputes, claims, and regulatory actions."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Legal Expense insurance</strong> protects businesses from the financial burden of legal disputes,
          including defense costs, settlement fees, and regulatory claims.
        </p>
        <p>
          Morison brokers help businesses secure coverage tailored to their operations and potential legal exposures.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Legal Expense Insurance Is Essential</h2>
        <p>
          Legal disputes can be costly and time-consuming, potentially impacting business operations and finances.
          Standard business insurance often does not cover legal fees for defending claims.
        </p>
        <p>
          Legal Expense insurance ensures your business can handle lawsuits, regulatory investigations,
          and contractual disputes without financial strain.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Legal Expense Insurance</h2>
        <ul>
          <li>Coverage for legal defense costs and settlements</li>
          <li>Protection for contractual, employment, and regulatory disputes</li>
          <li>Tailored policies for small, medium, and large businesses</li>
          <li>Expert guidance on claims and legal risk management</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Legal Expense Insurance Coverage Options</h2>
        <ul>
          <li>Defense costs for lawsuits and legal proceedings</li>
          <li>Coverage for employment and contract disputes</li>
          <li>Regulatory investigation and compliance support</li>
          <li>Alternative dispute resolution coverage</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Extended coverage for historic disputes</li>
          <li>Cyber and data-related legal claims</li>
          <li>Excess or umbrella legal expense coverage</li>
          <li>Professional consultation and legal advisory support</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Legal Expense Insurance</h2>
        <ul>
          <li>Implementing strong compliance and internal policies</li>
          <li>Bundling with other business insurance policies</li>
          <li>Maintaining a clean legal and claims history</li>
          <li>Training employees on dispute prevention and risk management</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Legal Expense Insurance?</h2>
        <ul>
          <li>Small and medium business owners</li>
          <li>Companies exposed to employment, regulatory, or contractual disputes</li>
          <li>Professional service providers</li>
          <li>Organizations seeking financial protection against legal risks</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Business Against Legal Risks Today</h2>
        <p>
          Morison brokers provide tailored Legal Expense insurance coverage,
          ensuring your business can manage disputes and claims without financial disruption.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default LegalExpenseInsurance;
