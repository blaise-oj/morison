// src/Pages/Recreation/SportsTravelProtection/SkiEquipmentInsurance/SkiEquipmentInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./SkiEquipmentInsurance.css";

const SkiEquipmentInsurance = () => {
  return (
    <div className="ski-equipment-insurance-page">
    <PageLayout
      title="Ski Equipment Insurance"
      subtitle="Specialized coverage for skis, snowboards, and winter sports equipment."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Ski Equipment Insurance</strong> protects your skis, boots, poles, helmets, and related gear against theft, loss, and accidental damage.
        </p>
        <p>
          Morison brokers provide tailored coverage whether you ski locally or travel internationally.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY */}
      <section>
        <h2>Why Ski Equipment Insurance Matters</h2>
        <p>
          Ski equipment is costly and frequently transported, increasing the risk of loss or damage during travel.
        </p>
        <p>
          Standard home insurance may limit coverage for sports equipment away from home.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Ski Equipment Insurance</h2>
        <ul>
          <li>Coverage for skis, boots, and winter gear</li>
          <li>Worldwide protection</li>
          <li>Flexible coverage limits</li>
          <li>Experienced sports and travel insurance brokers</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Ski Equipment Insurance Coverage Options</h2>
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
          <li>Tournament or competition extensions</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Ski Equipment Insurance</h2>
        <ul>
          <li>Secure storage and anti-theft devices</li>
          <li>Claims-free discounts</li>
          <li>Bundling with home or high-value insurance</li>
          <li>Documented equipment valuations</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Ski Equipment Insurance?</h2>
        <ul>
          <li>Recreational skiers</li>
          <li>Professional or competitive skiers</li>
          <li>Travelers who ski internationally</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Ski Equipment Today</h2>
        <p>
          Morison brokers ensure your ski equipment is protected on and off the slopes.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default SkiEquipmentInsurance;

