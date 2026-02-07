import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./JeepInsurance.css";

const JeepInsurance = () => {
  return (
    <PageLayout
      title="Jeep Insurance"
      subtitle="Coverage designed for Jeep vehicles — from city streets to rugged trails."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Jeep insurance</strong> protects your vehicle whether you’re off-roading or commuting.
        </p>
        <p>
          Morison brokers tailor coverage for all Jeep models — Wranglers, Cherokees, Grand Cherokees, and Gladiators — with options for comprehensive, collision, and liability protection.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Jeep Vehicles Need Specialized Insurance</h2>
        <p>
          Jeeps are often used for off-road adventures, towing, and heavy-duty activities. Standard auto insurance may not cover trail damage, aftermarket modifications, or specialized equipment.
        </p>
        <p>
          Jeep insurance ensures your vehicle, modifications, and liability are fully protected.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Jeep Insurance</h2>
        <ul>
          <li>Coverage for off-road and on-road use</li>
          <li>Collision & Comprehensive Protection</li>
          <li>Liability coverage for towing and trailers</li>
          <li>Expert claims support and licensed brokers</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Jeep Insurance Coverage Options</h2>
        <ul>
          <li>Comprehensive coverage (fire, theft, natural disasters)</li>
          <li>Collision coverage for on and off-road accidents</li>
          <li>Liability coverage</li>
          <li>Accident benefits & optional add-ons</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Roadside Assistance</li>
          <li>Rental Vehicle Coverage</li>
          <li>Aftermarket Accessories Coverage</li>
          <li>Towing & Trailer Protection</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Jeep Insurance</h2>
        <ul>
          <li>Bundle with home or other vehicles</li>
          <li>Safe driving discounts</li>
          <li>Garage & anti-theft device discounts</li>
          <li>Multi-vehicle household discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Jeep Insurance?</h2>
        <ul>
          <li>Off-road enthusiasts</li>
          <li>Daily drivers of Jeep SUVs and trucks</li>
          <li>Owners with aftermarket modifications</li>
          <li>Drivers towing trailers or boats</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Jeep Today</h2>
        <p>
          Morison brokers will match your Jeep’s unique use with insurance that covers everything from city streets to rugged trails.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
  );
};

export default JeepInsurance;
