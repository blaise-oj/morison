// src/Pages/Recreation/RecreationalVehicles/TravelTrailerInsurance/TravelTrailerInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./TravelTrailerInsurance.css";

const TravelTrailerInsurance = () => {
  return (
    <PageLayout
      title="Travel Trailer Insurance"
      subtitle="Reliable coverage for travel trailers, campers, and towable RVs."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Travel Trailer Insurance</strong> protects your towable RV against accidents, damage, theft, and liability while traveling or parked at a campsite.
        </p>
        <p>
          Morison brokers offer customized insurance for travel trailers, fifth wheels, and camper trailers of all sizes.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY */}
      <section>
        <h2>Why Travel Trailer Insurance Is Essential</h2>
        <p>
          Travel trailers are not automatically covered by auto insurance once detached from the towing vehicle.
        </p>
        <p>
          Specialized coverage ensures protection for both the trailer itself and your personal belongings inside.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Travel Trailer Insurance</h2>
        <ul>
          <li>Coverage for all types of travel trailers</li>
          <li>Protection while parked or in transit</li>
          <li>Flexible coverage limits</li>
          <li>Experienced recreational insurance brokers</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Travel Trailer Insurance Coverage Options</h2>
        <ul>
          <li>Collision and comprehensive coverage</li>
          <li>Liability protection at campsites</li>
          <li>Personal belongings coverage</li>
          <li>Fire, theft, and vandalism protection</li>
        </ul>
      </section>

      {/* OPTIONAL */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Emergency expense coverage</li>
          <li>Roadside assistance and towing</li>
          <li>Total loss replacement coverage</li>
          <li>Accessory and customization coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Travel Trailer Insurance</h2>
        <ul>
          <li>Secure storage and safety devices</li>
          <li>Claims-free discounts</li>
          <li>Bundling with auto or home insurance</li>
          <li>Seasonal usage discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Travel Trailer Insurance?</h2>
        <ul>
          <li>Owners of travel trailers and campers</li>
          <li>Seasonal travelers and vacationers</li>
          <li>Families who camp frequently</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Travel Trailer Today</h2>
        <p>
          Morison brokers ensure your travel trailer is protected wherever your adventures take you.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
  );
};

export default TravelTrailerInsurance;
