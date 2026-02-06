// src/Pages/Home/Discounts/Discounts.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // swap to savings / family image later
import "./Discounts.css";

const Discounts = () => {
  return (
    <PageLayout
      title="Home Insurance Discounts"
      subtitle="Save more on your home insurance with available discounts and bundled savings."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Lower your premiums:</strong> take advantage of available home insurance discounts
        </p>
        <p>
          <strong>Bundle & save:</strong> combine multiple policies for bigger savings
        </p>
        <p>
          <strong>Customized savings:</strong> discounts tailored to your property and lifestyle
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with
          a licensed broker and maximize your home insurance discounts today.
        </p>
      </section>

      {/* WHY DISCOUNTS MATTER */}
      <section>
        <h2>Why Home Insurance Discounts Matter</h2>
        <p>
          Many homeowners overpay simply because they aren’t aware of the
          discounts they qualify for. Insurers offer a variety of savings based
          on your home, risk profile, and bundled policies.
        </p>
        <p>
          Morison Insurance helps identify every available discount to ensure
          you’re paying the lowest possible premium — without sacrificing coverage.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Home Insurance Savings</h2>
        <ul>
          <li>Access to discounts from multiple insurers</li>
          <li>Personalized savings based on your home and lifestyle</li>
          <li>Expert brokers who negotiate on your behalf</li>
          <li>No-fee policy reviews to uncover hidden savings</li>
        </ul>
      </section>

      {/* COMMON DISCOUNTS */}
      <section>
        <h2>Common Home Insurance Discounts</h2>
      </section>

      <section>
        <h3>Bundling Discounts</h3>
        <ul>
          <li>Home + Auto (most popular)</li>
          <li>Home + Umbrella Liability</li>
          <li>Home + Secondary or Vacation Property</li>
        </ul>
      </section>

      <section>
        <h3>Property-Based Discounts</h3>
        <ul>
          <li>New or recently renovated homes</li>
          <li>Updated plumbing, electrical, or roofing</li>
          <li>Protective devices (smoke alarms, alarms, sprinklers)</li>
        </ul>
      </section>

      <section>
        <h3>Lifestyle & Risk Reduction Discounts</h3>
        <ul>
          <li>Claims-free history</li>
          <li>Non-smoking households</li>
          <li>Senior or retiree discounts</li>
        </ul>
      </section>

      {/* SPECIALTY SAVINGS */}
      <section>
        <h3>Additional Savings Opportunities</h3>
        <ul>
          <li>Loyalty discounts</li>
          <li>Payment method discounts (annual or automatic payments)</li>
          <li>Group or employer-based discounts</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Start Saving on Your Home Insurance</h2>
        <p>
          You may qualify for more discounts than you think. Let Morison brokers
          review your policy and help you unlock maximum savings.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page to get started today.
        </p>
      </section>
    </PageLayout>
  );
};

export default Discounts;
