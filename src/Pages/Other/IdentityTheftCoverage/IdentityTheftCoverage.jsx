import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./IdentityTheftCoverage.css";

const IdentityTheftCoverage = () => {
  return (
      <div className="identity-theft-coverage-page">
    <PageLayout
      title="Identity Theft Coverage"
      subtitle="Protect your personal and financial identity against fraud and misuse."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Identity Theft Coverage</strong> helps safeguard your personal
          information, financial accounts, and credit history from unauthorized use
          or fraud.
        </p>
        <p>
          This coverage provides financial protection and professional support if
          your identity is stolen, helping you recover quickly and securely.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section>
        <h2>Why Identity Theft Coverage Is Important</h2>
        <p>
          Identity theft can cause significant financial loss, credit damage, and
          emotional stress. Victims often face months of recovery and costly
          legal or administrative work.
        </p>
        <p>
          Identity Theft Coverage helps cover the costs associated with restoring
          your identity, providing peace of mind and financial security.
        </p>
      </section>

      {/* WHAT IT COVERS */}
      <section>
        <h2>What Identity Theft Coverage Includes</h2>
        <ul>
          <li>Assistance with restoring your identity and credit history</li>
          <li>Reimbursement for stolen funds and fraudulent transactions</li>
          <li>Legal fees and professional support for resolving identity disputes</li>
          <li>Coverage for lost wages due to time spent resolving fraud</li>
          <li>Monitoring and alerts for potential identity theft risks</li>
        </ul>
      </section>

      {/* OPTIONAL ENHANCEMENTS */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Extended credit monitoring services</li>
          <li>Fraud resolution for multiple family members</li>
          <li>Identity recovery for online accounts and digital assets</li>
          <li>Additional legal assistance for complex cases</li>
        </ul>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Why Choose Morison for Identity Theft Coverage</h2>
        <ul>
          <li>Specialized policies to protect your personal information</li>
          <li>Expert guidance during recovery and claims processes</li>
          <li>Access to professional identity restoration services</li>
          <li>Peace of mind knowing your finances and credit are protected</li>
        </ul>
      </section>

      {/* WHO NEEDS IT */}
      <section>
        <h2>Who Should Consider Identity Theft Coverage?</h2>
        <ul>
          <li>Individuals concerned about personal or financial identity theft</li>
          <li>Homeowners and renters with valuable personal information</li>
          <li>Frequent online shoppers or those active on digital platforms</li>
          <li>Families seeking protection for all household members</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Secure Your Identity Today</h2>
        <p>
          Identity Theft Coverage helps you respond quickly and effectively
          to fraud, minimizing financial loss and stress.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default IdentityTheftCoverage;
