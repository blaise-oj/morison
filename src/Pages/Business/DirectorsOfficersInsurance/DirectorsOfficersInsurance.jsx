import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./DirectorsOfficersInsurance.css";

const DirectorsOfficersInsurance = () => {
  return (
    <div className="directors-officers-insurance-page">
    <PageLayout
      title="Directors & Officers Insurance"
      subtitle="Protect company leaders from personal financial loss due to management decisions and legal claims."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Directors & Officers (D&O) insurance</strong> safeguards company executives, board members,
          and officers against claims arising from alleged wrongful acts in managing the business.
        </p>
        <p>
          Morison brokers help businesses secure D&O coverage to protect leaders from lawsuits,
          regulatory actions, and shareholder disputes.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Directors & Officers Insurance Is Essential</h2>
        <p>
          Executives and board members can be personally liable for decisions impacting the company or its stakeholders.
          Standard business insurance often does not cover these exposures.
        </p>
        <p>
          D&O insurance provides financial protection for legal defense, settlements, and judgments,
          ensuring leaders can manage the company confidently.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Directors & Officers Insurance</h2>
        <ul>
          <li>Protection against lawsuits and shareholder claims</li>
          <li>Coverage for regulatory actions and wrongful acts</li>
          <li>Tailored policies for companies of all sizes</li>
          <li>Expert support for claims and risk management</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Directors & Officers Insurance Coverage Options</h2>
        <ul>
          <li>Defense costs for lawsuits and claims</li>
          <li>Indemnification for financial losses due to management decisions</li>
          <li>Coverage for employment practices claims</li>
          <li>Protection against regulatory investigations and fines</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Employment Practices Liability (EPL) add-on</li>
          <li>Cyber liability for executive decisions impacting data</li>
          <li>Excess or umbrella liability coverage</li>
          <li>Reputation and crisis management support</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Directors & Officers Insurance</h2>
        <ul>
          <li>Implementing strong corporate governance policies</li>
          <li>Bundling with other business insurance policies</li>
          <li>Maintaining accurate financial reporting and compliance</li>
          <li>Conducting regular board training and risk assessments</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Directors & Officers Insurance?</h2>
        <ul>
          <li>Company directors and officers</li>
          <li>Board members of private and public companies</li>
          <li>Executives of startups and large corporations</li>
          <li>Businesses seeking to protect leaders from personal liability</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Company Leaders Today</h2>
        <p>
          Morison brokers provide tailored Directors & Officers insurance coverage,
          ensuring executives and board members are protected from financial loss due to management claims.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default DirectorsOfficersInsurance;
