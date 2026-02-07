import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./BundledHomeAuto.css";

const BundledHomeAuto = () => {
  return (
    <PageLayout
      title="Bundled Home & Auto Insurance"
      subtitle="Simpler coverage, better protection, and bigger savings when you bundle."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>One policy, more savings:</strong> combining home and auto
          insurance is one of the easiest ways to reduce your premiums.
        </p>
        <p>
          <strong>Streamlined coverage:</strong> fewer renewals, one broker, and
          coordinated protection.
        </p>
        <p>
          <strong>Priority claims support:</strong> expert guidance when you need
          it most.
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with a
          licensed broker about bundling your home and auto insurance today.
        </p>
      </section>

      {/* WHY BUNDLE */}
      <section>
        <h2>Why Bundle Home & Auto Insurance?</h2>
        <p>
          Insurance providers reward loyalty and lower risk. When you bundle
          home and auto insurance with the same insurer, you unlock meaningful
          discounts while keeping strong coverage.
        </p>
        <p>
          Morison Insurance compares bundled options across multiple insurers to
          ensure you get the best value — not just the lowest price.
        </p>
      </section>

      {/* BENEFITS */}
      <section>
        <h2>Benefits of Bundling Your Insurance</h2>
        <ul>
          <li>Lower combined premiums</li>
          <li>Single renewal date</li>
          <li>Fewer deductibles in some claims</li>
          <li>Better coverage coordination</li>
          <li>One dedicated licensed broker</li>
        </ul>
      </section>

      {/* WHAT CAN BE BUNDLED */}
      <section>
        <h2>What Can You Bundle?</h2>
        <ul>
          <li>Home + Auto (Most Popular)</li>
          <li>Condo + Auto</li>
          <li>Tenant + Auto</li>
          <li>Auto + Second or Vacation Home</li>
          <li>Auto + Umbrella Liability</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>How Much Can You Save?</h2>
        <p>
          Savings vary depending on your home type, vehicle, and driving history,
          but many clients save <strong>10%–25%</strong> by bundling policies.
        </p>
        <p>
          Our brokers review your full insurance profile to maximize discounts
          without leaving coverage gaps.
        </p>
      </section>

      {/* WHO SHOULD BUNDLE */}
      <section>
        <h2>Is Bundled Insurance Right for You?</h2>
        <ul>
          <li>Homeowners with one or more vehicles</li>
          <li>Condo owners and tenants who drive</li>
          <li>Families insuring multiple vehicles</li>
          <li>Anyone looking for simpler insurance management</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Bundle Today. Save Tomorrow.</h2>
        <p>
          Let a Morison broker compare bundled home and auto insurance options
          and help you secure the right coverage at the right price.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page.
        </p>
      </section>
    </PageLayout>
  );
};

export default BundledHomeAuto;
