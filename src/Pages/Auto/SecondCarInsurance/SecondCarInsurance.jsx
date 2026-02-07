import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./SecondCarInsurance.css";

const SecondCarInsurance = () => {
  return (
    <PageLayout
      title="Second Car Insurance"
      subtitle="Smart coverage options for your additional vehicle — with opportunities to save."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Multi-vehicle savings:</strong> insuring a second car often
          unlocks valuable discounts.
        </p>
        <p>
          <strong>Flexible coverage:</strong> tailor protection based on how the
          second vehicle is used.
        </p>
        <p>
          <strong>One policy, one broker:</strong> simplified management for all
          your vehicles.
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with a
          licensed broker about second car insurance today.
        </p>
      </section>

      {/* WHY SECOND CAR INSURANCE */}
      <section>
        <h2>Why Insuring a Second Car Is Different</h2>
        <p>
          A second vehicle is often driven less frequently or by a different
          driver, which can affect how much coverage you need.
        </p>
        <p>
          Morison Insurance compares multiple insurers to help structure coverage
          that fits your household while maximizing multi-vehicle discounts.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Second Car Insurance</h2>
        <ul>
          <li>Multi-Vehicle & Loyalty Discounts</li>
          <li>Customized Coverage Per Vehicle</li>
          <li>Access to Top Canadian Insurers</li>
          <li>Dedicated Licensed Auto Brokers</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>Second Car Insurance Coverage at a Glance</h2>
        <p>
          Coverage can be adjusted depending on whether the vehicle is used
          daily, seasonally, or occasionally.
        </p>
      </section>

      {/* COVERAGE TYPES */}
      <section>
        <h3>Liability Coverage</h3>
        <p>
          Required coverage that protects you if you cause injury or property
          damage to others.
        </p>
        <ul>
          <li>Third-party bodily injury</li>
          <li>Property damage protection</li>
          <li>Legal defence costs</li>
        </ul>
      </section>

      <section>
        <h3>Collision Coverage</h3>
        <p>
          Covers damage to your second vehicle from a collision or rollover.
        </p>
        <ul>
          <li>Optional deductibles</li>
          <li>Single-vehicle and multi-vehicle accidents</li>
        </ul>
      </section>

      <section>
        <h3>Comprehensive Coverage</h3>
        <p>
          Protects against non-collision-related losses.
        </p>
        <ul>
          <li>Theft or vandalism</li>
          <li>Fire and weather damage</li>
          <li>Falling objects</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Coverages for a Second Vehicle</h3>
        <ul>
          <li>Waiver of Depreciation</li>
          <li>Accident Forgiveness</li>
          <li>Roadside Assistance</li>
          <li>Rental Car Coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>How to Save on Second Car Insurance</h2>
        <ul>
          <li>Multi-vehicle discounts</li>
          <li>Low mileage or occasional use rating</li>
          <li>Bundling auto with home or tenant insurance</li>
          <li>Higher deductibles where appropriate</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Insure Your Second Car with Confidence</h2>
        <p>
          Let a Morison broker help you structure cost-effective coverage for
          your second vehicle — without compromising protection.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page.
        </p>
      </section>
    </PageLayout>
  );
};

export default SecondCarInsurance;
