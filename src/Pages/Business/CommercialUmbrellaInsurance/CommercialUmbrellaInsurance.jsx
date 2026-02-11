import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./CommercialUmbrellaInsurance.css";

const CommercialUmbrellaInsurance = () => {
  return (
    <div className="commercial-umbrella-insurance-page">
    <PageLayout
      title="Commercial Umbrella / Excess Liability Insurance"
      subtitle="Extend your liability coverage beyond standard policy limits for enhanced protection."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Commercial Umbrella / Excess Liability insurance</strong> provides an extra layer of liability protection
          above the limits of your existing business insurance policies, covering unexpected claims and lawsuits.
        </p>
        <p>
          Morison brokers help businesses secure umbrella coverage tailored to their operations,
          industry risks, and existing insurance policies.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Commercial Umbrella Insurance Is Essential</h2>
        <p>
          Standard liability policies may not cover large claims or multiple lawsuits.
          Umbrella insurance extends protection, providing peace of mind for high-risk scenarios.
        </p>
        <p>
          It ensures your business can handle significant liability claims without jeopardizing financial stability.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Commercial Umbrella Insurance</h2>
        <ul>
          <li>Extends liability coverage beyond standard policy limits</li>
          <li>Protection against large claims or multiple lawsuits</li>
          <li>Coverage across general, auto, and employer’s liability policies</li>
          <li>Expert guidance on risk assessment and claims handling</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Commercial Umbrella / Excess Liability Coverage Options</h2>
        <ul>
          <li>Excess coverage over general liability policies</li>
          <li>Additional limits for employer’s liability or commercial auto</li>
          <li>Coverage for large legal settlements and judgments</li>
          <li>Worldwide liability protection for covered incidents</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Broader coverage for specific high-risk operations</li>
          <li>Excess limits for professional liability claims</li>
          <li>Defense costs outside standard policy limits</li>
          <li>Additional insured endorsements for partners or subsidiaries</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Commercial Umbrella Insurance</h2>
        <ul>
          <li>Maintaining strong risk management practices</li>
          <li>Bundling with existing liability policies</li>
          <li>Reducing claims frequency through safety and training</li>
          <li>Reviewing and consolidating policies for optimal coverage</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Commercial Umbrella Insurance?</h2>
        <ul>
          <li>Businesses with high exposure to liability claims</li>
          <li>Companies in industries with significant legal risks</li>
          <li>Organizations seeking additional protection beyond standard policies</li>
          <li>Business owners wanting peace of mind against large settlements</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Secure Extended Liability Coverage Today</h2>
        <p>
          Morison brokers provide tailored Commercial Umbrella / Excess Liability insurance,
          ensuring your business has enhanced protection against large claims and unexpected lawsuits.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default CommercialUmbrellaInsurance;
