// src/Pages/Home/CottageInsurance/CottageInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // swap to cottage/lake image later
import "./CottageInsurance.css";

const CottageInsurance = () => {
  return (
    <PageLayout
      title="Cottage Insurance"
      subtitle="Comprehensive coverage for your seasonal or waterfront property."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Protect your getaway property:</strong> coverage for cottages, cabins, and seasonal homes
        </p>
        <p>
          <strong>Property & contents protection:</strong> safeguards your building, furnishings, and personal belongings
        </p>
        <p>
          <strong>Liability coverage:</strong> protects against accidents on your property
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with
          a licensed broker about Cottage Insurance today.
        </p>
      </section>

      {/* WHY COTTAGE INSURANCE */}
      <section>
        <h2>Why Cottage Insurance Matters</h2>
        <p>
          Seasonal and waterfront properties are exposed to unique risks including storms, water damage, theft, and vandalism during unoccupied periods. Standard home insurance usually does not fully cover these risks.
        </p>
        <p>
          Cottage insurance ensures your property, belongings, and liability are protected year-round.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Cottage Insurance</h2>
        <ul>
          <li>Coverage designed for seasonal and waterfront homes</li>
          <li>Protection for property, contents, and liability</li>
          <li>Optional add-ons for theft, water, and recreational equipment</li>
          <li>Expert brokers for personalized coverage</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>Cottage Insurance Coverage Overview</h2>
        <p>
          Cottage insurance combines building protection, contents coverage, and liability, with optional seasonal coverage tailored for waterfront and recreational properties.
        </p>
      </section>

      {/* COVERAGE TYPES */}
      <section>
        <h3>Building & Property Protection</h3>
        <p>
          Covers the structure and attached elements of your cottage or cabin.
        </p>
        <ul>
          <li>Fire, wind, hail, and lightning</li>
          <li>Storm or snow damage</li>
          <li>Theft or vandalism</li>
          <li>Accidental damage during maintenance or renovations</li>
        </ul>
      </section>

      <section>
        <h3>Contents & Personal Belongings</h3>
        <p>
          Protects furniture, appliances, electronics, and personal items stored in your cottage.
        </p>
        <ul>
          <li>Furniture, décor, and electronics</li>
          <li>Appliances and recreational equipment</li>
          <li>Seasonal items, boats, or watercraft (optional)</li>
        </ul>
      </section>

      <section>
        <h3>Liability Coverage</h3>
        <p>
          Protects you in case someone is injured on your property or if your property damages neighboring properties.
        </p>
        <ul>
          <li>Injury to guests or visitors</li>
          <li>Property damage to neighbors</li>
          <li>Legal defence and settlement costs</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Cottage Coverage</h3>
        <ul>
          <li>Theft or vandalism during unoccupied periods</li>
          <li>Watercraft or dock equipment coverage</li>
          <li>Equipment breakdown</li>
          <li>Seasonal liability extensions</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Cottage</h2>
        <p>
          Ensure your seasonal or waterfront property is fully protected against property damage, theft, or liability claims. Morison brokers can design a policy that fits your cottage perfectly.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page to get started today.
        </p>
      </section>
    </PageLayout>
  );
};

export default CottageInsurance;
