// src/Pages/Recreation/Watercraft/YachtInsurance/YachtInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./YachtInsurance.css";

const YachtInsurance = () => {
  return (
    <PageLayout
      title="Yacht Insurance"
      subtitle="Comprehensive protection for recreational yachts and luxury watercraft."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Yacht Insurance</strong> provides specialized coverage for recreational yachts, protecting your vessel against physical damage, liability risks, and unexpected marine incidents.
        </p>
        <p>
          Whether you sail locally or internationally, Morison brokers tailor yacht insurance solutions to suit your cruising lifestyle.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> to speak with a licensed marine insurance specialist.
        </p>
      </section>

      {/* WHY */}
      <section>
        <h2>Why Yacht Insurance Is Essential</h2>
        <p>
          Yachts face unique risks including collisions, grounding, storms, and marina-related liabilities. Standard insurance often does not provide adequate protection.
        </p>
        <p>
          Yacht insurance ensures peace of mind on and off the water.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Yacht Insurance</h2>
        <ul>
          <li>Tailored coverage for recreational and pleasure yachts</li>
          <li>Worldwide or extended cruising area options</li>
          <li>Agreed value or market value coverage</li>
          <li>Experienced marine insurance advisors</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Yacht Insurance Coverage Options</h2>
        <ul>
          <li>Hull and machinery coverage</li>
          <li>Collision and comprehensive protection</li>
          <li>Marine liability coverage</li>
          <li>Fire, theft, and vandalism protection</li>
          <li>Personal effects and onboard equipment</li>
        </ul>
      </section>

      {/* OPTIONAL */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Salvage and wreck removal</li>
          <li>Towing and emergency assistance</li>
          <li>Crew and guest liability</li>
          <li>Charter and racing endorsements</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Yacht Insurance</h2>
        <ul>
          <li>Certified skipper or boating qualifications</li>
          <li>Secure marina storage and safety equipment</li>
          <li>Claims-free boating history</li>
          <li>Bundling with home or auto insurance</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Yacht Insurance?</h2>
        <ul>
          <li>Owners of recreational yachts and pleasure craft</li>
          <li>Seasonal and full-time cruising enthusiasts</li>
          <li>Yacht owners seeking liability and hull protection</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Insure Your Yacht with Confidence</h2>
        <p>
          Morison brokers deliver customized yacht insurance designed for your lifestyle on the water.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default YachtInsurance;
