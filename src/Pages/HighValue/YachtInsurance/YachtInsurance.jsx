// src/Pages/HighValue/YachtInsurance/YachtInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // Hero image as requested
import "./YachtInsurance.css";

const YachtInsurance = () => {
  return (
      <div className="yacht-insurance-page">
    <PageLayout
      title="Yacht Insurance"
      subtitle="Comprehensive insurance for luxury yachts and private vessels."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Yacht Insurance</strong> provides full coverage for luxury yachts, sailboats, and motorboats, protecting against accidents, theft, and environmental hazards.
        </p>
        <p>
          Morison brokers design policies tailored to your vessel’s value, onboard equipment, and cruising areas.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or fill out our form to speak with a licensed marine insurance broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Yachts Require Specialized Insurance</h2>
        <p>
          Yachts are high-value assets with complex navigation systems, onboard luxury amenities, and specialized maintenance. Standard boat insurance often falls short.
        </p>
        <p>
          Our policies cover hull, machinery, liability, and high-value onboard equipment for comprehensive protection.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Yacht Insurance</h2>
        <ul>
          <li>Hull and machinery coverage for luxury vessels</li>
          <li>Liability protection for passengers and third parties</li>
          <li>Coverage for onboard electronics and luxury equipment</li>
          <li>Optional coverage for charter or racing activities</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Yacht Insurance Coverage Options</h2>
        <ul>
          <li>Comprehensive hull and machinery protection</li>
          <li>Liability coverage for passengers and guests</li>
          <li>Theft, fire, and collision coverage</li>
          <li>Optional coverage for navigation in foreign waters</li>
          <li>Onboard equipment and luxury item coverage</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Charter and rental liability insurance</li>
          <li>Racing and regatta coverage</li>
          <li>Environmental and pollution liability coverage</li>
          <li>Enhanced theft and vandalism protection</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Yacht Insurance</h2>
        <ul>
          <li>Bundle with high-value home and vehicle policies</li>
          <li>Claims-free and safe navigation discounts</li>
          <li>Enhanced onboard security and tracking systems discounts</li>
          <li>Multi-yacht household discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Yacht Insurance?</h2>
        <ul>
          <li>Owners of luxury yachts, sailboats, and motorboats</li>
          <li>High-net-worth individuals with expensive onboard equipment</li>
          <li>Those navigating international waters or chartering their yacht</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Yacht Today</h2>
        <p>
          Morison brokers provide full insurance coverage tailored for luxury vessels and their unique features.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default YachtInsurance;
