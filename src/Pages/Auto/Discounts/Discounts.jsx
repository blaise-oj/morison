import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./Discounts.css";

const Discounts = () => {
  return (
      <div className="discounts-auto-page">
    <PageLayout
      title="Auto Insurance Discounts"
      subtitle="Smart ways to lower your auto insurance premiums without sacrificing coverage."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Pay less, stay protected:</strong> many drivers qualify for
          discounts they don’t even know about.
        </p>
        <p>
          <strong>Broker expertise:</strong> we identify every possible saving
          opportunity.
        </p>
        <p>
          <strong>No shortcuts on coverage:</strong> discounts should never mean
          reduced protection.
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with a
          licensed broker about auto insurance discounts today.
        </p>
      </section>

      {/* WHY DISCOUNTS MATTER */}
      <section>
        <h2>Why Auto Insurance Discounts Matter</h2>
        <p>
          Auto insurance premiums are influenced by many factors — but discounts
          can significantly reduce your overall cost when applied correctly.
        </p>
        <p>
          Morison Insurance reviews your profile annually to ensure you never
          miss out on new savings.
        </p>
      </section>

      {/* COMMON DISCOUNTS */}
      <section>
        <h2>Common Auto Insurance Discounts</h2>
        <ul>
          <li>Multi-Vehicle Discount</li>
          <li>Bundled Home & Auto Discount</li>
          <li>Claims-Free or Accident-Free Discount</li>
          <li>Conviction-Free Driving Discount</li>
          <li>Low Mileage Discount</li>
          <li>Telematics / Usage-Based Discount</li>
        </ul>
      </section>

      {/* VEHICLE & DRIVER BASED */}
      <section>
        <h2>Vehicle & Driver-Based Savings</h2>
        <ul>
          <li>Winter tire discount</li>
          <li>Anti-theft device discount</li>
          <li>New vehicle discount</li>
          <li>Safe driver programs</li>
          <li>Driver training discounts</li>
        </ul>
      </section>

      {/* POLICY DISCOUNTS */}
      <section>
        <h2>Policy & Payment Discounts</h2>
        <ul>
          <li>Paperless policy discount</li>
          <li>Annual or pre-authorized payment savings</li>
          <li>Loyalty discounts</li>
          <li>Early renewal incentives</li>
        </ul>
      </section>

      {/* WHO QUALIFIES */}
      <section>
        <h2>Who Qualifies for Auto Insurance Discounts?</h2>
        <ul>
          <li>Drivers with clean records</li>
          <li>Households with multiple vehicles</li>
          <li>Low-mileage or occasional drivers</li>
          <li>Safe and defensive drivers</li>
        </ul>
      </section>

      {/* BROKER VALUE */}
      <section>
        <h2>Why Work With a Broker?</h2>
        <p>
          Not all insurers offer the same discounts. A licensed broker compares
          multiple providers to apply every available discount to your policy.
        </p>
        <p>
          We don’t just quote once — we review your policy as your life changes.
        </p>
      </section>

      {/* CTA */}
      <section>
        <h2>Start Saving on Auto Insurance</h2>
        <p>
          Let a Morison broker review your policy and uncover every discount
          available to you.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default Discounts;
