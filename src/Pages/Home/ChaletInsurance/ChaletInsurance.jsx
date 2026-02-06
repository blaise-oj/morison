// src/Pages/Home/ChaletInsurance/ChaletInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // swap to chalet/vacation property image later
import "./ChaletInsurance.css";

const ChaletInsurance = () => {
  return (
    <PageLayout
      title="Chalet Insurance"
      subtitle="Protect your mountain or seasonal getaway property with comprehensive coverage."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Peace of mind for your chalet:</strong> coverage designed for seasonal or vacation homes
        </p>
        <p>
          <strong>Property & contents protection:</strong> ensures your chalet, furnishings, and personal belongings are covered
        </p>
        <p>
          <strong>Liability coverage:</strong> protection if accidents or injuries occur on your property
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with
          a licensed broker about Chalet Insurance today.
        </p>
      </section>

      {/* WHY CHALET INSURANCE */}
      <section>
        <h2>Why Chalet Insurance Matters</h2>
        <p>
          Seasonal properties face unique risks including storms, theft during vacant periods, and accidental damage. Standard home insurance often does not provide adequate coverage.
        </p>
        <p>
          Morison Insurance works with top insurers to ensure your chalet, cabin, or seasonal property is protected year-round.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Chalet Insurance</h2>
        <ul>
          <li>Comprehensive coverage for seasonal homes</li>
          <li>Protection for furnishings, appliances, and personal belongings</li>
          <li>Liability coverage for accidents and injuries on the property</li>
          <li>Optional add-ons for theft, water damage, and equipment breakdown</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>Chalet Insurance Coverage Overview</h2>
        <p>
          Chalet insurance combines property, contents, liability, and optional seasonal coverages to ensure your getaway property is protected in all circumstances.
        </p>
      </section>

      {/* COVERAGE TYPES */}
      <section>
        <h3>Building & Property Protection</h3>
        <p>
          Covers the physical structure of your chalet or vacation home.
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
          Protects furniture, appliances, electronics, and personal items.
        </p>
        <ul>
          <li>Furniture, décor, and electronics</li>
          <li>Appliances and outdoor equipment</li>
          <li>Seasonal items and recreational gear</li>
        </ul>
      </section>

      <section>
        <h3>Liability Coverage</h3>
        <p>
          Protects you in case someone is injured on your property or if your property damages neighboring properties.
        </p>
        <ul>
          <li>Injury to guests or visitors</li>
          <li>Property damage to neighboring chalets</li>
          <li>Legal defence and settlement costs</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Chalet Coverage</h3>
        <ul>
          <li>Theft protection for periods when unoccupied</li>
          <li>Water damage / burst pipe protection</li>
          <li>Equipment breakdown and outdoor structures coverage</li>
          <li>Seasonal liability extension</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Chalet</h2>
        <p>
          Enjoy peace of mind knowing your seasonal property is fully insured. Let Morison brokers tailor a policy to your chalet’s specific needs.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page to get started today.
        </p>
      </section>
    </PageLayout>
  );
};

export default ChaletInsurance;
