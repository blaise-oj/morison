import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./ErrorsOmissionsInsurance.css";

const ErrorsOmissionsInsurance = () => {
  return (
    <PageLayout
      title="Errors & Omissions Insurance"
      subtitle="Protect your business against claims of professional negligence, mistakes, or inadequate work."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Errors & Omissions (E&O) insurance</strong> safeguards professionals and businesses
          from financial losses due to claims of mistakes, negligence, or failure to perform professional duties.
        </p>
        <p>
          Morison brokers help businesses secure E&O coverage tailored to their services, clients, and risk exposure.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Errors & Omissions Insurance Is Essential</h2>
        <p>
          Professionals face potential claims from clients alleging errors, negligence, or inadequate work.
          Standard business insurance may not cover these exposures.
        </p>
        <p>
          E&O insurance provides protection for legal defense costs, settlements, and damages,
          helping maintain your business reputation and financial security.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Errors & Omissions Insurance</h2>
        <ul>
          <li>Coverage for claims of professional negligence or mistakes</li>
          <li>Protection for legal defense costs and settlements</li>
          <li>Tailored policies for consultants, service providers, and professionals</li>
          <li>Expert claims support and risk management guidance</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Errors & Omissions Insurance Coverage Options</h2>
        <ul>
          <li>Professional liability coverage</li>
          <li>Defense costs for claims and lawsuits</li>
          <li>Coverage for financial losses due to errors or omissions</li>
          <li>Claims made and reported policies</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Extended reporting periods for past services</li>
          <li>Cyber liability add-on for data handling errors</li>
          <li>Excess or umbrella liability coverage</li>
          <li>Consulting or advisory errors coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Errors & Omissions Insurance</h2>
        <ul>
          <li>Implementing professional standards and quality controls</li>
          <li>Bundling with other business insurance policies</li>
          <li>Maintaining a claims-free operational history</li>
          <li>Training staff and documenting professional processes</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Errors & Omissions Insurance?</h2>
        <ul>
          <li>Consultants, advisors, and professional service providers</li>
          <li>Freelancers offering specialized expertise</li>
          <li>Companies providing professional services to clients</li>
          <li>Businesses seeking protection against professional liability claims</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Professional Services Today</h2>
        <p>
          Morison brokers provide tailored Errors & Omissions insurance coverage,
          ensuring your professional services are fully protected against claims of mistakes or negligence.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default ErrorsOmissionsInsurance;
