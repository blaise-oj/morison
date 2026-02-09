import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./CommercialGeneralLiability.css";

const CommercialGeneralLiability = () => {
  return (
    <PageLayout
      title="Commercial General Liability Insurance"
      subtitle="Protect your business from third-party claims of bodily injury, property damage, and legal liability."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Commercial General Liability (CGL) insurance</strong> protects businesses from financial losses
          due to third-party claims, including bodily injury, property damage, and legal defense costs.
        </p>
        <p>
          Morison brokers help businesses secure coverage tailored to their operations, reducing exposure to lawsuits and liability claims.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Commercial General Liability Is Essential</h2>
        <p>
          Businesses face potential claims from customers, vendors, or visitors for injuries or property damage.
          Standard insurance may not cover these exposures fully.
        </p>
        <p>
          CGL insurance ensures financial protection, covering legal fees, settlements, and judgments.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Commercial General Liability Insurance</h2>
        <ul>
          <li>Coverage for bodily injury and property damage claims</li>
          <li>Protection against lawsuits and legal defense costs</li>
          <li>Tailored policies for small, medium, and large businesses</li>
          <li>Expert guidance on risk management and claims handling</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Commercial General Liability Coverage Options</h2>
        <ul>
          <li>Bodily injury liability</li>
          <li>Property damage liability</li>
          <li>Medical payments coverage</li>
          <li>Personal and advertising injury coverage</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Products and completed operations coverage</li>
          <li>Cyber liability add-on</li>
          <li>Excess / umbrella liability coverage</li>
          <li>Equipment and tools protection</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Commercial General Liability Insurance</h2>
        <ul>
          <li>Implementing safety protocols and risk management strategies</li>
          <li>Bundling with other business insurance policies</li>
          <li>Maintaining a claims-free operational history</li>
          <li>Training employees to prevent accidents</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Commercial General Liability Insurance?</h2>
        <ul>
          <li>Small, medium, and large businesses</li>
          <li>Service providers, contractors, and retailers</li>
          <li>Businesses with customer or client interactions</li>
          <li>Companies seeking protection against lawsuits and liability claims</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Business Today</h2>
        <p>
          Morison brokers provide tailored Commercial General Liability insurance,
          ensuring your business is fully protected from third-party claims and financial loss.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default CommercialGeneralLiability;
