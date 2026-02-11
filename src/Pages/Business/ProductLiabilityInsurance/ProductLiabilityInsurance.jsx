import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./ProductLiabilityInsurance.css";

const ProductLiabilityInsurance = () => {
  return (
    <div className="product-liability-insurance-page">
    <PageLayout
      title="Product Liability Insurance"
      subtitle="Protect your business from claims arising from defective products, property damage, or injuries caused by your products."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Product Liability insurance</strong> safeguards businesses from financial losses due to claims
          of injury, property damage, or defects caused by products you manufacture, sell, or distribute.
        </p>
        <p>
          Morison brokers help businesses secure coverage tailored to their products, manufacturing processes,
          and distribution channels.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Product Liability Insurance Is Essential</h2>
        <p>
          Businesses face potential claims if their products cause harm to consumers, property, or the environment.
          Legal fees, settlements, and reputational damage can be substantial.
        </p>
        <p>
          Product Liability insurance provides financial protection and ensures your business can handle claims confidently.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Product Liability Insurance</h2>
        <ul>
          <li>Protection against injury, property damage, or defective product claims</li>
          <li>Coverage for legal defense costs and settlements</li>
          <li>Tailored policies for manufacturers, distributors, and retailers</li>
          <li>Expert guidance on product risk management and claims handling</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Product Liability Insurance Coverage Options</h2>
        <ul>
          <li>Third-party bodily injury and property damage</li>
          <li>Legal defense and settlement costs</li>
          <li>Products-completed operations coverage</li>
          <li>Recall coverage for defective products</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Extended product liability for exported products</li>
          <li>Cyber and technology product liability add-on</li>
          <li>Excess or umbrella liability coverage</li>
          <li>Contractual liability coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Product Liability Insurance</h2>
        <ul>
          <li>Implementing quality control and safety standards</li>
          <li>Bundling with other business insurance policies</li>
          <li>Maintaining a claims-free product history</li>
          <li>Training employees on product safety and compliance</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Product Liability Insurance?</h2>
        <ul>
          <li>Manufacturers, distributors, and retailers</li>
          <li>Businesses producing consumer goods or industrial products</li>
          <li>Companies seeking protection against product-related claims</li>
          <li>Organizations concerned about reputational and financial risk from defective products</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Products and Business Today</h2>
        <p>
          Morison brokers provide tailored Product Liability insurance coverage,
          ensuring your products and business are fully protected from claims and financial loss.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default ProductLiabilityInsurance;
