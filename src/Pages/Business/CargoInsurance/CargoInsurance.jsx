import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./CargoInsurance.css";

const CargoInsurance = () => {
  return (
    <div className="cargo-insurance-page">
    <PageLayout
      title="Cargo Insurance"
      subtitle="Comprehensive coverage for goods in transit, protecting your shipments and logistics operations."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Cargo insurance</strong> protects businesses and shippers from financial loss due to damaged,
          lost, or stolen goods during transport.
        </p>
        <p>
          Morison brokers help businesses secure cargo coverage tailored to domestic and international
          shipping needs.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Cargo Insurance Is Essential</h2>
        <p>
          Goods in transit are exposed to risks such as theft, fire, accidents, or natural disasters.
          Standard commercial insurance may not fully cover shipment losses.
        </p>
        <p>
          Cargo insurance ensures protection for the value of goods and reduces financial exposure
          for businesses handling logistics.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Cargo Insurance</h2>
        <ul>
          <li>Coverage for domestic and international shipments</li>
          <li>Protection against theft, damage, or loss during transit</li>
          <li>Tailored policies for freight, logistics, and supply chain businesses</li>
          <li>Expert claims support and risk management guidance</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Cargo Insurance Coverage Options</h2>
        <ul>
          <li>All-risk cargo coverage</li>
          <li>Named perils coverage</li>
          <li>Transit delay and spoilage protection</li>
          <li>Warehouse-to-warehouse protection</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Coverage for high-value or fragile items</li>
          <li>Extended liability for subcontracted carriers</li>
          <li>Cyber and tracking system protection</li>
          <li>Loss prevention and risk consulting services</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Cargo Insurance</h2>
        <ul>
          <li>Implementing strong packaging and handling protocols</li>
          <li>Bundling with other business insurance policies</li>
          <li>Maintaining a claims-free shipping record</li>
          <li>Using trusted carriers and logistics partners</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Cargo Insurance?</h2>
        <ul>
          <li>Manufacturers shipping products domestically or internationally</li>
          <li>Importers and exporters handling valuable goods</li>
          <li>Logistics and freight companies</li>
          <li>Any business transporting goods or materials</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Shipments Today</h2>
        <p>
          Morison brokers provide tailored cargo insurance coverage,
          ensuring your goods in transit are fully protected from loss or damage.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default CargoInsurance;
