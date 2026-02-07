// src/Pages/HighValue/Valuables/WineCellarInsurance/WineCellarInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // Hero image as requested
import "./WineCellarInsurance.css";

const WineCellarInsurance = () => {
  return (
    <PageLayout
      title="Wine Cellar Insurance"
      subtitle="Protect your valuable wine collection with specialized insurance coverage."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Wine Cellar Insurance</strong> provides comprehensive protection for private wine collections, including rare, vintage, and high-value bottles.
        </p>
        <p>
          Morison brokers offer tailored policies ensuring coverage against theft, accidental damage, spoilage, or loss during storage or transit.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete our online form to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Wine Collections Require Specialized Insurance</h2>
        <p>
          Wine collections are often high-value, temperature-sensitive, and difficult to replace. Standard home insurance may not fully protect against spoilage or loss.
        </p>
        <p>
          Our policies provide full replacement value, climate-control considerations, and protection for storage, tasting, or transit.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Wine Cellar Insurance</h2>
        <ul>
          <li>Coverage for rare, vintage, and high-value wines</li>
          <li>Protection against theft, loss, or accidental damage</li>
          <li>Worldwide coverage for transit or events</li>
          <li>Optional appraisal and inventory updates</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Wine Cellar Insurance Coverage Options</h2>
        <ul>
          <li>Theft, loss, and accidental damage protection</li>
          <li>Coverage for storage, transit, and tasting events</li>
          <li>Replacement cost coverage</li>
          <li>Optional coverage for rare and collectible wines</li>
          <li>Worldwide claims support</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Extended transit protection</li>
          <li>Climate-control and storage-related protection</li>
          <li>Appraisal and inventory updates</li>
          <li>Coverage for wines on loan or consignment</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Wine Cellar Insurance</h2>
        <ul>
          <li>Bundle with home or high-value insurance policies</li>
          <li>Secure storage and climate-control discounts</li>
          <li>Claims-free history discounts</li>
          <li>Regular inventory and appraisal updates</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Wine Cellar Insurance?</h2>
        <ul>
          <li>Private collectors of fine wines</li>
          <li>High-net-worth individuals with rare bottles</li>
          <li>Wine enthusiasts with valuable or large collections</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Wine Collection Today</h2>
        <p>
          Morison brokers provide complete insurance coverage tailored to your wine collection’s value and uniqueness.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
  );
};

export default WineCellarInsurance;
