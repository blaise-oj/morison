// src/Pages/HighValue/Valuables/WhiskyCollectionInsurance/WhiskyCollectionInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // Hero image as requested
import "./ScotchAndWhiskyCollectionInsurance.css";

const ScotchAndWhiskyCollectionInsurance = () => {
  return (
    <PageLayout
      title="Scotch & Whisky Collection Insurance"
      subtitle="Comprehensive protection for your valuable whisky and scotch collections."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Scotch & Whisky Collection Insurance</strong> provides coverage for rare, vintage, and high-value bottles against theft, accidental damage, or loss.
        </p>
        <p>
          Morison brokers offer bespoke policies to protect your collection at home, during transport, or while on display.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or fill out our online form to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Whisky Collections Require Specialized Insurance</h2>
        <p>
          High-value whisky and scotch collections are often rare, irreplaceable, and sensitive to storage conditions. Standard home insurance may not provide sufficient protection.
        </p>
        <p>
          Our policies provide full replacement value, protection for climate-controlled storage, and coverage for transportation or special events.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Whisky Collection Insurance</h2>
        <ul>
          <li>Coverage for rare, vintage, and high-value bottles</li>
          <li>Theft, loss, and accidental damage protection</li>
          <li>Worldwide coverage during transport or exhibitions</li>
          <li>Optional appraisal and inventory updates</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Whisky Collection Insurance Coverage Options</h2>
        <ul>
          <li>Theft, loss, and accidental damage protection</li>
          <li>Coverage for storage, transit, and display</li>
          <li>Replacement cost coverage</li>
          <li>Optional coverage for rare and collectible bottles</li>
          <li>Worldwide claims support</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Extended transit protection</li>
          <li>Climate-controlled storage coverage</li>
          <li>Appraisal and inventory updates</li>
          <li>Coverage for bottles on loan or consignment</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Whisky Collection Insurance</h2>
        <ul>
          <li>Bundle with home or high-value insurance policies</li>
          <li>Secure storage and climate-control discounts</li>
          <li>Claims-free history discounts</li>
          <li>Regular inventory and appraisal updates</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Whisky Collection Insurance?</h2>
        <ul>
          <li>Collectors of rare and vintage whisky or scotch</li>
          <li>High-net-worth individuals with valuable bottles</li>
          <li>Anyone seeking worldwide coverage for premium collections</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Whisky Collection Today</h2>
        <p>
          Morison brokers provide complete insurance coverage tailored to your whisky collection’s value and uniqueness.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
  );
};

export default ScotchAndWhiskyCollectionInsurance;
