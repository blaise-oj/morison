// src/Pages/Recreation/RecreationalVehicles/RVInsurance/RVInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./RVInsurance.css";

const RVInsurance = () => {
  return (
    <PageLayout
      title="RV Insurance"
      subtitle="Comprehensive protection for motorhomes, campers, and recreational vehicles."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>RV Insurance</strong> provides specialized coverage for recreational vehicles, protecting you on the road, at campsites, and while in storage.
        </p>
        <p>
          Morison brokers tailor RV insurance for motorhomes, camper vans, and travel-ready recreational vehicles.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY */}
      <section>
        <h2>Why RV Insurance Is Different</h2>
        <p>
          RVs combine features of both vehicles and homes. Standard auto insurance often does not cover living space, personal belongings, or campsite liability.
        </p>
        <p>
          RV insurance ensures complete protection wherever your journey takes you.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for RV Insurance</h2>
        <ul>
          <li>Coverage for motorhomes and camper vans</li>
          <li>Flexible liability limits</li>
          <li>Coverage while parked or in use</li>
          <li>Experienced recreational insurance specialists</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>RV Insurance Coverage Options</h2>
        <ul>
          <li>Collision and comprehensive coverage</li>
          <li>Third-party liability protection</li>
          <li>Personal belongings coverage</li>
          <li>Vacation and campsite liability</li>
          <li>Emergency expense coverage</li>
        </ul>
      </section>

      {/* OPTIONAL */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Roadside assistance and towing</li>
          <li>Full-timer RV coverage</li>
          <li>Total loss replacement coverage</li>
          <li>Accessory and customization coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on RV Insurance</h2>
        <ul>
          <li>Safe driving record</li>
          <li>RV safety and driver training courses</li>
          <li>Secure storage discounts</li>
          <li>Bundling with auto or home insurance</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider RV Insurance?</h2>
        <ul>
          <li>Motorhome and camper van owners</li>
          <li>Seasonal or full-time RV travelers</li>
          <li>Families who travel frequently by RV</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your RV Today</h2>
        <p>
          Morison brokers ensure your RV is fully protected for life on the road and beyond.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
  );
};

export default RVInsurance;
