import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./ProfessionalLiabilityInsurance.css";

const ProfessionalLiabilityInsurance = () => {
  return (
    <div className="professional-liability-insurance-page">
    <PageLayout
      title="Professional Liability Insurance"
      subtitle="Protect your business and professionals from claims of negligence, errors, or inadequate services."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Professional Liability insurance</strong> safeguards businesses and professionals against claims
          arising from errors, omissions, or failure to deliver professional services as promised.
        </p>
        <p>
          Morison brokers help businesses tailor coverage to their profession, client base, and risk exposure.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Professional Liability Insurance Is Essential</h2>
        <p>
          Professionals and service providers are exposed to potential claims from clients alleging mistakes,
          negligence, or inadequate service. Standard business insurance often does not cover these risks.
        </p>
        <p>
          Professional Liability insurance ensures financial protection and helps preserve your reputation
          in case of claims.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Professional Liability Insurance</h2>
        <ul>
          <li>Coverage for errors, omissions, or negligence claims</li>
          <li>Protection for legal defense costs and settlements</li>
          <li>Tailored policies for consultants, advisors, and service providers</li>
          <li>Expert guidance on claims management and risk mitigation</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Professional Liability Insurance Coverage Options</h2>
        <ul>
          <li>Legal defense costs for client claims</li>
          <li>Settlements for financial losses due to professional errors</li>
          <li>Coverage for consulting and advisory services</li>
          <li>Claims made and reported policies</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Cyber liability add-on for data breaches</li>
          <li>Extended reporting period for past services</li>
          <li>Excess or umbrella liability coverage</li>
          <li>Contractual liability coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Professional Liability Insurance</h2>
        <ul>
          <li>Implementing quality control and professional standards</li>
          <li>Bundling with other business insurance policies</li>
          <li>Maintaining a claims-free service history</li>
          <li>Training staff on compliance and risk management</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Professional Liability Insurance?</h2>
        <ul>
          <li>Consultants, advisors, and service providers</li>
          <li>Freelancers offering professional expertise</li>
          <li>Companies delivering specialized services to clients</li>
          <li>Businesses seeking protection against professional claims</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Professional Services Today</h2>
        <p>
          Morison brokers provide tailored Professional Liability insurance coverage,
          ensuring your services and business are fully protected from claims and financial loss.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default ProfessionalLiabilityInsurance;
