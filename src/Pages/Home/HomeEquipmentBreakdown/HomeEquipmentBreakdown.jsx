// src/Pages/Home/HomeEquipmentBreakdown/HomeEquipmentBreakdown.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // swap to equipment / home systems image later
import "./HomeEquipmentBreakdown.css";

const HomeEquipmentBreakdown = () => {
  return (
    <PageLayout
      title="Home Equipment Breakdown Insurance"
      subtitle="Protection for unexpected mechanical or electrical failures in your home."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Unexpected breakdown coverage:</strong> protects essential home systems and appliances
        </p>
        <p>
          <strong>Cost-effective protection:</strong> helps cover repair or replacement costs
        </p>
        <p>
          <strong>Peace of mind:</strong> avoids out-of-pocket expenses for sudden failures
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with
          a licensed broker about Home Equipment Breakdown coverage today.
        </p>
      </section>

      {/* WHY IT MATTERS */}
      <section>
        <h2>Why Home Equipment Breakdown Coverage Matters</h2>
        <p>
          Modern homes rely heavily on electrical, mechanical, and smart systems.
          When these systems fail due to power surges or mechanical breakdown,
          standard home insurance often does not cover the repair.
        </p>
        <p>
          Home Equipment Breakdown Insurance fills that gap by protecting essential
          systems you rely on every day.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Equipment Breakdown Coverage</h2>
        <ul>
          <li>Coverage for major home systems and appliances</li>
          <li>Protection against mechanical, electrical, and pressure failures</li>
          <li>Affordable add-on to your home insurance policy</li>
          <li>Licensed brokers who tailor coverage to your home</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>What Does Equipment Breakdown Cover?</h2>
        <p>
          Coverage applies to sudden and accidental breakdowns caused by internal
          failure, power surges, or electrical arcing.
        </p>
      </section>

      {/* COVERED ITEMS */}
      <section>
        <h3>Home Systems</h3>
        <ul>
          <li>Heating, ventilation, and air conditioning (HVAC)</li>
          <li>Electrical panels and wiring</li>
          <li>Hot water heaters and boilers</li>
          <li>Smart home systems</li>
        </ul>
      </section>

      <section>
        <h3>Household Appliances</h3>
        <ul>
          <li>Refrigerators and freezers</li>
          <li>Washers and dryers</li>
          <li>Ovens, stoves, and dishwashers</li>
          <li>Home electronics</li>
        </ul>
      </section>

      {/* OPTIONAL BENEFITS */}
      <section>
        <h3>Additional Benefits</h3>
        <ul>
          <li>Coverage for power surge damage</li>
          <li>Replacement cost options</li>
          <li>Temporary living expense coverage (if applicable)</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Home’s Essential Systems</h2>
        <p>
          Don’t let a sudden equipment failure disrupt your home or budget.
          Let Morison brokers help you add Equipment Breakdown coverage to your policy.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page to get started.
        </p>
      </section>
    </PageLayout>
  );
};

export default HomeEquipmentBreakdown;
