import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./DisabilityCriticalIllness.css";

const DisabilityCriticalIllness = () => {
  return (
    <div className="disability-critical-illness-page">
    <PageLayout
      title="Disability & Critical Illness Insurance"
      subtitle="Income and health protection when life takes an unexpected turn."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Disability and critical illness insurance</strong> provides
          financial support if you are unable to work due to illness, injury,
          or a serious medical condition.
        </p>
        <p>
          These coverages help protect your income and savings while you focus
          on recovery and maintaining your quality of life.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section>
        <h2>Why Disability & Critical Illness Coverage Matters</h2>
        <p>
          A serious illness or injury can disrupt your ability to earn income
          and create unexpected medical and living expenses.
        </p>
        <p>
          This coverage helps ensure financial stability during recovery,
          reducing stress and protecting your long-term financial goals.
        </p>
      </section>

      {/* DISABILITY */}
      <section>
        <h2>Disability Insurance Coverage</h2>
        <ul>
          <li>Income replacement if you are unable to work</li>
          <li>Short-term and long-term disability options</li>
          <li>Coverage for illness and injury</li>
          <li>Flexible benefit periods and payout options</li>
        </ul>
      </section>

      {/* CRITICAL ILLNESS */}
      <section>
        <h2>Critical Illness Insurance Coverage</h2>
        <ul>
          <li>Lump-sum payout upon diagnosis of a covered illness</li>
          <li>Coverage for cancer, heart attack, stroke, and more</li>
          <li>Funds can be used for treatment, recovery, or daily expenses</li>
          <li>Helps offset costs not covered by traditional health plans</li>
        </ul>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Why Choose Morison</h2>
        <ul>
          <li>Access to top disability and critical illness insurers</li>
          <li>Customized coverage based on occupation and lifestyle</li>
          <li>Clear guidance on benefit amounts and waiting periods</li>
          <li>Support through policy selection and claims</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider This Coverage?</h2>
        <ul>
          <li>Professionals and self-employed individuals</li>
          <li>Primary income earners in a household</li>
          <li>Anyone without employer disability benefits</li>
          <li>Those looking to protect income and savings</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Income and Health Today</h2>
        <p>
          Disability and critical illness insurance provide financial security
          when you need it most.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default DisabilityCriticalIllness;
