// src/Pages/Recreation/Watercraft/BoatInsurance/BoatInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./BoatInsurance.css";

const BoatInsurance = () => {
  return (
    <PageLayout
      title="Boat Insurance"
      subtitle="Reliable coverage for personal, recreational, and luxury boats."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Boat Insurance</strong> provides protection for recreational and private boats against accidents, theft, weather damage, and liability risks.
        </p>
        <p>
          Morison brokers tailor policies for powerboats, sailboats, and personal watercraft to ensure you enjoy the water with peace of mind.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete our online form to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Boat Insurance Is Important</h2>
        <p>
          Boats face unique risks including collisions, storms, theft, and liability on the water. Standard home insurance often does not provide adequate protection.
        </p>
        <p>
          Boat insurance ensures coverage for your vessel, passengers, and third parties while on water or in storage.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Boat Insurance</h2>
        <ul>
          <li>Coverage for powerboats, sailboats, and recreational vessels</li>
          <li>Liability protection for passengers and third parties</li>
          <li>Optional coverage for equipment and accessories</li>
          <li>Flexible policies tailored to boat usage</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Boat Insurance Coverage Options</h2>
        <ul>
          <li>Collision and comprehensive coverage</li>
          <li>Theft, fire, and weather damage protection</li>
          <li>Liability coverage for bodily injury and property damage</li>
          <li>Coverage for onboard equipment and accessories</li>
          <li>Optional coverage for trailers and storage</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Towing and roadside assistance</li>
          <li>Personal effects coverage</li>
          <li>Uninsured boater protection</li>
          <li>Navigation area extensions</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Boat Insurance</h2>
        <ul>
          <li>Bundle with home, auto, or other recreational policies</li>
          <li>Boating safety course discounts</li>
          <li>Secure storage and anti-theft system discounts</li>
          <li>Claims-free history discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Boat Insurance?</h2>
        <ul>
          <li>Owners of recreational or private boats</li>
          <li>Seasonal or frequent boat users</li>
          <li>Individuals seeking liability protection on the water</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Insure Your Boat Today</h2>
        <p>
          Morison brokers provide comprehensive boat insurance tailored to your vessel and lifestyle.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
  );
};

export default BoatInsurance;
