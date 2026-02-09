import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./PublicLiabilityInsurance.css";

const PublicLiabilityInsurance = () => {
  return (
    <PageLayout
      title="Public Liability Insurance"
      subtitle="Protect your business against claims from third parties for injury or property damage."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Public Liability insurance</strong> safeguards businesses from financial losses
          due to claims made by the public for bodily injury or property damage arising from your business operations.
        </p>
        <p>
          Morison brokers help businesses secure coverage tailored to their operations, client interactions,
          and potential third-party risks.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Public Liability Insurance Is Essential</h2>
        <p>
          Businesses are exposed to claims from clients, visitors, or the general public
          for accidents or damages occurring on their premises or due to their operations.
          Legal fees and compensation costs can be significant.
        </p>
        <p>
          Public Liability insurance ensures your business is financially protected and can operate with confidence.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Public Liability Insurance</h2>
        <ul>
          <li>Coverage for bodily injury and property damage claims</li>
          <li>Legal defense costs for third-party claims</li>
          <li>Tailored policies for businesses interacting with the public</li>
          <li>Expert guidance on claims and risk management</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Public Liability Insurance Coverage Options</h2>
        <ul>
          <li>Bodily injury claims from customers, visitors, or the public</li>
          <li>Property damage claims from third parties</li>
          <li>Legal defense and settlement costs</li>
          <li>Premises and operational liability coverage</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Product liability add-on</li>
          <li>Event and temporary premises coverage</li>
          <li>Excess or umbrella liability coverage</li>
          <li>Contractual liability coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Public Liability Insurance</h2>
        <ul>
          <li>Implementing health and safety policies</li>
          <li>Bundling with other business insurance policies</li>
          <li>Maintaining a clean claims history</li>
          <li>Training staff on risk prevention and customer safety</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Public Liability Insurance?</h2>
        <ul>
          <li>Businesses interacting with customers or the general public</li>
          <li>Retailers, restaurants, and service providers</li>
          <li>Event organizers and property owners</li>
          <li>Companies seeking protection against third-party claims</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Business From Third-Party Claims Today</h2>
        <p>
          Morison brokers provide tailored Public Liability insurance coverage,
          ensuring your business is fully protected against claims, injuries, and property damage.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default PublicLiabilityInsurance;
