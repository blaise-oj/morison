import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./PickupTruckInsurance.css";

const PickupTruckInsurance = () => {
  return (
      <div className="pickup-truck-insurance-page">
    <PageLayout
      title="Pickup Truck Insurance"
      subtitle="Protect your truck with coverage tailored for work, adventure, and daily driving."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Pickup truck insurance</strong> is designed to cover vehicles used
          for work, recreation, or daily driving, ensuring you and your truck are
          protected.
        </p>
        <p>
          Morison brokers help you find policies that account for truck-specific
          risks such as towing, cargo transport, and higher repair costs.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a
          licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Pickup Trucks Require Specialized Insurance</h2>
        <p>
          Pickup trucks are often used for both personal and commercial purposes.
          Standard auto insurance may not cover work-related risks, towing, or
          heavy loads.
        </p>
        <p>
          Tailored pickup truck insurance ensures coverage for accidents, liability,
          and cargo, depending on your truck’s use.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Pickup Truck Insurance</h2>
        <ul>
          <li>Customized Coverage for Personal & Work Use</li>
          <li>Liability, Collision, and Comprehensive Coverage</li>
          <li>Optional Cargo & Towing Protection</li>
          <li>Expert Brokers Familiar with Truck-Specific Risks</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Pickup Truck Insurance Coverage Overview</h2>
        <ul>
          <li>Third-party liability</li>
          <li>Collision coverage</li>
          <li>Comprehensive coverage (fire, theft, natural disasters)</li>
          <li>Accident benefits</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Towing & Trailer Coverage</li>
          <li>Cargo Protection</li>
          <li>Roadside Assistance</li>
          <li>Replacement Cost Coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Pickup Truck Insurance</h2>
        <ul>
          <li>Bundling home and auto policies</li>
          <li>Safe driving record discounts</li>
          <li>Multi-vehicle household discounts</li>
          <li>Anti-theft device & secure storage discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Pickup Truck Insurance?</h2>
        <ul>
          <li>Owners who use their truck for work or business purposes</li>
          <li>Recreational users (towing boats, trailers, etc.)</li>
          <li>Daily drivers seeking comprehensive protection</li>
          <li>Truck enthusiasts who want premium coverage</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Get the Right Coverage for Your Pickup Truck</h2>
        <p>
          Let Morison brokers match your truck’s unique usage with insurance that
          protects you, your vehicle, and your cargo.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the online form for a quote today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default PickupTruckInsurance;
