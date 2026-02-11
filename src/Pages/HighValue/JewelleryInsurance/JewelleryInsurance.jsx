// src/Pages/HighValue/Valuables/JewelleryInsurance/JewelleryInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // Hero image as requested
import "./JewelleryInsurance.css";

const JewelleryInsurance = () => {
  return (
      <div className="jewellery-insurance-page">
    <PageLayout
      title="Jewellery Insurance"
      subtitle="Protect your precious jewellery with comprehensive coverage."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Jewellery Insurance</strong> provides protection for rings, necklaces, bracelets, watches, and other valuable pieces against loss, theft, or damage.
        </p>
        <p>
          Morison brokers offer tailored policies that cover your collection, whether at home, in transit, or while traveling.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete our online form to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Jewellery Requires Specialized Insurance</h2>
        <p>
          High-value jewellery often has unique craftsmanship and precious stones that standard home insurance may not fully cover.
        </p>
        <p>
          Our policies ensure full replacement value, worldwide coverage, and protection against all risks, including accidental loss or damage.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Jewellery Insurance</h2>
        <ul>
          <li>Full coverage for precious metals and gemstones</li>
          <li>Worldwide protection, including during travel</li>
          <li>Optional appraisal updates for high-value items</li>
          <li>Protection for accidental loss, theft, or damage</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Jewellery Insurance Coverage Options</h2>
        <ul>
          <li>Theft, loss, and accidental damage protection</li>
          <li>Coverage for home, transit, and travel</li>
          <li>Replacement cost coverage</li>
          <li>Optional coverage for custom or heirloom pieces</li>
          <li>Worldwide claims support</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Extended travel coverage for international trips</li>
          <li>Appraisal and valuation updates</li>
          <li>Protection for repair, loss, or mysterious disappearance</li>
          <li>Coverage for pieces worn publicly or at events</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Jewellery Insurance</h2>
        <ul>
          <li>Bundle with home or high-value insurance policies</li>
          <li>Install home safes or secure storage for discounts</li>
          <li>Regular appraisal and documentation for claims ease</li>
          <li>Claims-free history discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Jewellery Insurance?</h2>
        <ul>
          <li>Owners of high-value jewellery and watches</li>
          <li>Collectors of precious metals or gemstones</li>
          <li>Individuals seeking worldwide protection for valuable items</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Jewellery Today</h2>
        <p>
          Morison brokers ensure your precious pieces are fully insured with policies tailored to their value and uniqueness.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default JewelleryInsurance;
