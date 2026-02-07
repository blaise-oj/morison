// src/Pages/HighValue/Valuables/WatchInsurance/WatchInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // Hero image as requested
import "./WatchInsurance.css";

const WatchInsurance = () => {
  return (
    <PageLayout
      title="Watch Insurance"
      subtitle="Comprehensive coverage for luxury and high-value watches."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Watch Insurance</strong> provides protection for luxury watches against loss, theft, damage, or mechanical failure.
        </p>
        <p>
          Morison brokers create tailored policies that cover your collection, whether at home, in transit, or during travel.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete our online form to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Watches Require Specialized Insurance</h2>
        <p>
          High-value watches often contain intricate mechanics and precious materials that standard home insurance may not fully cover.
        </p>
        <p>
          Our policies provide full replacement value, worldwide coverage, and protection for all risks, including accidental damage.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Watch Insurance</h2>
        <ul>
          <li>Full coverage for mechanical and luxury watches</li>
          <li>Worldwide protection for travel and transit</li>
          <li>Optional appraisal updates for high-value items</li>
          <li>Coverage against accidental loss or damage</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Watch Insurance Coverage Options</h2>
        <ul>
          <li>Theft, loss, and accidental damage protection</li>
          <li>Coverage at home, in transit, and during travel</li>
          <li>Replacement cost coverage</li>
          <li>Optional coverage for heirloom or limited edition watches</li>
          <li>Worldwide claims support</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Extended travel protection</li>
          <li>Coverage for repair or servicing mishaps</li>
          <li>Protection for watches worn at events or competitions</li>
          <li>Appraisal and valuation updates</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Watch Insurance</h2>
        <ul>
          <li>Bundle with home or high-value insurance policies</li>
          <li>Secure storage for discounts</li>
          <li>Claims-free history discounts</li>
          <li>Regular appraisal and documentation for easier claims</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Watch Insurance?</h2>
        <ul>
          <li>Owners of luxury and collectible watches</li>
          <li>Collectors seeking worldwide protection</li>
          <li>Individuals wanting comprehensive coverage for high-value timepieces</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Watches Today</h2>
        <p>
          Morison brokers provide complete insurance tailored to your watch collection’s value and uniqueness.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
  );
};

export default WatchInsurance;
