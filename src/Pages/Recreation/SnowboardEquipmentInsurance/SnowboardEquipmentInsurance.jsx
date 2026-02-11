// src/Pages/Recreation/SportsTravelProtection/SnowboardEquipmentInsurance/SnowboardEquipmentInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./SnowboardEquipmentInsurance.css";

const SnowboardEquipmentInsurance = () => {
  return (
    <div className="snowboard-equipment-insurance-page">
    <PageLayout
      title="Snowboard Equipment Insurance"
      subtitle="Comprehensive protection for snowboards, boots, and winter sports gear."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Snowboard Equipment Insurance</strong> protects your snowboard, boots, bindings, and accessories against theft, loss, and accidental damage.
        </p>
        <p>
          Morison brokers provide tailored coverage whether you ride locally or travel internationally.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY */}
      <section>
        <h2>Why Snowboard Equipment Insurance Matters</h2>
        <p>
          Snowboard gear is frequently transported and used in demanding conditions, increasing the risk of damage or loss.
        </p>
        <p>
          Standard home insurance may not fully cover winter sports equipment away from home.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Snowboard Equipment Insurance</h2>
        <ul>
          <li>Coverage for boards, boots, and accessories</li>
          <li>Worldwide protection</li>
          <li>Flexible coverage limits</li>
          <li>Experienced sports and travel insurance brokers</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Snowboard Equipment Insurance Coverage Options</h2>
        <ul>
          <li>Theft, loss, and accidental damage protection</li>
          <li>Coverage at home, in transit, and on the slopes</li>
          <li>Worldwide travel coverage</li>
          <li>Replacement cost coverage</li>
        </ul>
      </section>

      {/* OPTIONAL */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Rental equipment reimbursement</li>
          <li>Equipment shipping protection</li>
          <li>Coverage for custom-fitted gear</li>
          <li>Competition or event extensions</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Snowboard Equipment Insurance</h2>
        <ul>
          <li>Secure storage and anti-theft devices</li>
          <li>Claims-free discounts</li>
          <li>Bundling with home or high-value insurance</li>
          <li>Documented equipment valuations</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Snowboard Equipment Insurance?</h2>
        <ul>
          <li>Recreational snowboarders</li>
          <li>Competitive or professional riders</li>
          <li>Travelers who snowboard internationally</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Snowboard Equipment Today</h2>
        <p>
          Morison brokers ensure your snowboard equipment is protected wherever you ride.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default SnowboardEquipmentInsurance;
