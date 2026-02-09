import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./CommercialPropertyInsurance.css";

const CommercialPropertyInsurance = () => {
  return (
    <PageLayout
      title="Commercial Property Insurance"
      subtitle="Protect your business property, equipment, and assets against damage, theft, and natural disasters."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Commercial property insurance</strong> safeguards your business’s physical assets, including buildings,
          equipment, inventory, and furniture, against risks such as fire, theft, or natural disasters.
        </p>
        <p>
          Morison brokers help businesses secure property coverage tailored to their locations, assets, and operational needs.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Commercial Property Insurance Is Essential</h2>
        <p>
          Businesses are exposed to property damage from fires, storms, theft, and accidental incidents.
          Without proper coverage, repairs or replacement costs can be financially devastating.
        </p>
        <p>
          Commercial property insurance ensures your business assets are protected, keeping operations running smoothly.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Commercial Property Insurance</h2>
        <ul>
          <li>Coverage for buildings, equipment, and inventory</li>
          <li>Protection against natural disasters, theft, and fire</li>
          <li>Tailored policies for small, medium, and large businesses</li>
          <li>Expert guidance on claims and risk management</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Commercial Property Insurance Coverage Options</h2>
        <ul>
          <li>Building coverage</li>
          <li>Business contents and equipment coverage</li>
          <li>Inventory protection</li>
          <li>Tenant improvements and leased property coverage</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Business Interruption Coverage</li>
          <li>Cyber liability add-on</li>
          <li>Flood or earthquake coverage</li>
          <li>Equipment breakdown protection</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Commercial Property Insurance</h2>
        <ul>
          <li>Implementing security and fire prevention measures</li>
          <li>Bundling with other business insurance policies</li>
          <li>Maintaining a claims-free history</li>
          <li>Proper maintenance of buildings and equipment</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Commercial Property Insurance?</h2>
        <ul>
          <li>Business owners with physical assets</li>
          <li>Retail stores, offices, and manufacturing facilities</li>
          <li>Property managers and landlords</li>
          <li>Companies seeking protection against property loss or damage</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Business Property Today</h2>
        <p>
          Morison brokers provide tailored Commercial Property insurance coverage,
          ensuring your business assets are fully protected from damage, theft, or disasters.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default CommercialPropertyInsurance;
