// src/Pages/Recreation/SportsTravelProtection/GolfEquipmentInsurance/GolfEquipmentInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./GolfEquipmentInsurance.css";

const GolfEquipmentInsurance = () => {
  return (
    <PageLayout
      title="Golf Equipment Insurance"
      subtitle="Specialized coverage for golf clubs, bags, and high-value equipment."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Golf Equipment Insurance</strong> protects your golf clubs, bags, and accessories against theft, loss, and accidental damage.
        </p>
        <p>
          Morison brokers provide tailored coverage whether you play locally, travel internationally, or store your equipment at a club.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY */}
      <section>
        <h2>Why Golf Equipment Insurance Matters</h2>
        <p>
          Golf equipment can be expensive and is often transported, increasing the risk of loss or damage.
        </p>
        <p>
          Standard home insurance may limit coverage or exclude items while in transit or abroad.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Golf Equipment Insurance</h2>
        <ul>
          <li>Coverage for clubs, bags, and accessories</li>
          <li>Worldwide protection</li>
          <li>Flexible coverage limits</li>
          <li>Experienced sports insurance brokers</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Golf Equipment Insurance Coverage Options</h2>
        <ul>
          <li>Theft, loss, and accidental damage protection</li>
          <li>Coverage at home, at the club, or in transit</li>
          <li>Worldwide travel coverage</li>
          <li>Replacement cost coverage</li>
        </ul>
      </section>

      {/* OPTIONAL */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Coverage for custom-fitted clubs</li>
          <li>Rental equipment reimbursement</li>
          <li>Equipment shipping protection</li>
          <li>Tournament and travel extensions</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Golf Equipment Insurance</h2>
        <ul>
          <li>Secure storage and anti-theft measures</li>
          <li>Claims-free discounts</li>
          <li>Bundling with home or high-value insurance</li>
          <li>Documented equipment valuations</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Golf Equipment Insurance?</h2>
        <ul>
          <li>Recreational and professional golfers</li>
          <li>Golfers who travel with their equipment</li>
          <li>Owners of high-value golf clubs and accessories</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Golf Equipment Today</h2>
        <p>
          Morison brokers ensure your golf equipment is protected wherever the game takes you.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
  );
};

export default GolfEquipmentInsurance;
