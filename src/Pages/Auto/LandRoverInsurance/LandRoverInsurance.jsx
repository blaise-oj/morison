import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./LandRoverInsurance.css";

const LandRoverInsurance = () => {
  return (
      <div className="land-rover-insurance-page">
    <PageLayout
      title="Land Rover Insurance"
      subtitle="Comprehensive coverage for Land Rover vehicles, whether on-road or off-road."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Land Rover insurance</strong> provides tailored protection for your luxury SUV, covering both daily driving and off-road adventures.
        </p>
        <p>
          Morison brokers help you find policies that match your Land Rover’s premium build and off-road capabilities.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Land Rover Vehicles Need Specialized Insurance</h2>
        <p>
          Land Rovers combine luxury and off-road performance. Standard auto insurance may not cover repairs, aftermarket modifications, or off-road damage.
        </p>
        <p>
          Specialized insurance ensures OEM parts, certified repairs, and high liability protection for both on and off-road use.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Land Rover Insurance</h2>
        <ul>
          <li>Coverage for on-road and off-road use</li>
          <li>OEM Parts & Certified Repair Facility Coverage</li>
          <li>High liability protection for luxury vehicles</li>
          <li>Expert claims support from licensed brokers</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Land Rover Insurance Coverage Options</h2>
        <ul>
          <li>Comprehensive coverage (fire, theft, natural disasters)</li>
          <li>Collision coverage</li>
          <li>Third-party liability</li>
          <li>Accident benefits & optional add-ons</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Roadside Assistance</li>
          <li>Rental Vehicle Coverage</li>
          <li>Aftermarket Accessories Protection</li>
          <li>Towing & Trailer Coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Land Rover Insurance</h2>
        <ul>
          <li>Bundling home and auto policies</li>
          <li>Safe driving discounts</li>
          <li>Garage & anti-theft system discounts</li>
          <li>Multi-vehicle household discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Land Rover Insurance?</h2>
        <ul>
          <li>Owners of Land Rover SUVs and luxury models</li>
          <li>Drivers who frequently go off-road</li>
          <li>Luxury SUV enthusiasts seeking OEM repair coverage</li>
          <li>Anyone wanting high liability limits and specialized service</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Land Rover Today</h2>
        <p>
          Morison brokers ensure your Land Rover is fully protected for on-road and off-road adventures.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default LandRoverInsurance;
