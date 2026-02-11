import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./ToolsEquipmentInsurance.css";

const ToolsEquipmentInsurance = () => {
  return (
    <div className="tools-equipment-insurance-page">
    <PageLayout
      title="Tools & Equipment Insurance"
      subtitle="Protect your business tools and equipment from damage, theft, or loss, ensuring uninterrupted operations."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Tools & Equipment insurance</strong> safeguards businesses and tradespeople
          against financial losses caused by damage, theft, or breakdown of tools and equipment.
        </p>
        <p>
          Morison brokers help businesses secure coverage tailored to the types of tools, machinery, and equipment used daily.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Tools & Equipment Insurance Is Essential</h2>
        <p>
          Tools and equipment are critical for business operations. Loss, theft, or damage can halt projects,
          lead to delays, and cause financial setbacks.
        </p>
        <p>
          Tools & Equipment Insurance ensures your operations can continue smoothly by protecting these essential assets.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Tools & Equipment Insurance</h2>
        <ul>
          <li>Coverage for theft, loss, or accidental damage</li>
          <li>Protection for tools, machinery, and portable equipment</li>
          <li>Tailored policies for tradespeople and businesses</li>
          <li>Expert claims support and risk management guidance</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Tools & Equipment Insurance Coverage Options</h2>
        <ul>
          <li>Theft protection for on-site and off-site equipment</li>
          <li>Accidental damage and breakdown coverage</li>
          <li>Replacement cost or repair coverage</li>
          <li>Coverage for rented or borrowed equipment</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Extended coverage for tools in transit</li>
          <li>Coverage for seasonal or spare equipment</li>
          <li>Excess or umbrella liability add-on</li>
          <li>Business interruption coverage due to equipment breakdown</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Tools & Equipment Insurance</h2>
        <ul>
          <li>Implementing secure storage and tracking for tools</li>
          <li>Bundling with other business insurance policies</li>
          <li>Maintaining a low-claims history</li>
          <li>Regular maintenance and inspections of equipment</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Tools & Equipment Insurance?</h2>
        <ul>
          <li>Tradespeople such as electricians, plumbers, and carpenters</li>
          <li>Construction and contracting businesses</li>
          <li>Companies using portable or fixed machinery</li>
          <li>Business owners seeking protection for essential tools and equipment</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Tools & Equipment Today</h2>
        <p>
          Morison brokers provide tailored Tools & Equipment insurance coverage,
          ensuring your essential business assets are fully protected from theft, damage, or loss.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default ToolsEquipmentInsurance;
