import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./CommercialContentsInsurance.css";

const CommercialContentsInsurance = () => {
  return (
    <PageLayout
      title="Commercial Contents Insurance"
      subtitle="Protect your business equipment, furniture, stock, and other contents against loss or damage."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Commercial contents insurance</strong> safeguards your business’s movable assets, including office equipment,
          furniture, stock, and tools, against theft, fire, or accidental damage.
        </p>
        <p>
          Morison brokers help businesses tailor contents coverage to their operations, ensuring all valuable items are protected.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Commercial Contents Insurance Is Essential</h2>
        <p>
          Businesses risk losing valuable contents due to theft, fire, or accidental damage. Without proper coverage,
          replacing these assets can be costly and disrupt operations.
        </p>
        <p>
          Commercial contents insurance ensures your business can continue operating smoothly
          after unexpected losses.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Commercial Contents Insurance</h2>
        <ul>
          <li>Protection for office equipment, furniture, stock, and tools</li>
          <li>Coverage against theft, fire, and accidental damage</li>
          <li>Tailored policies for small, medium, and large businesses</li>
          <li>Expert guidance on claims and risk management</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Commercial Contents Insurance Coverage Options</h2>
        <ul>
          <li>Office equipment and furniture coverage</li>
          <li>Stock and inventory protection</li>
          <li>Tools and machinery coverage</li>
          <li>Property in transit protection</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Business Interruption Coverage</li>
          <li>Cyber liability add-on</li>
          <li>Extended theft or accidental damage coverage</li>
          <li>Equipment breakdown protection</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Commercial Contents Insurance</h2>
        <ul>
          <li>Implementing security systems and fire prevention measures</li>
          <li>Bundling with other business insurance policies</li>
          <li>Maintaining a claims-free operational history</li>
          <li>Regular inventory and equipment maintenance</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Commercial Contents Insurance?</h2>
        <ul>
          <li>Business owners with office equipment, stock, or inventory</li>
          <li>Retail stores, offices, and manufacturing facilities</li>
          <li>Service providers with valuable tools or equipment</li>
          <li>Companies seeking protection against contents loss or damage</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Business Contents Today</h2>
        <p>
          Morison brokers provide tailored Commercial Contents insurance coverage,
          ensuring your valuable business assets are fully protected from loss or damage.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default CommercialContentsInsurance;
