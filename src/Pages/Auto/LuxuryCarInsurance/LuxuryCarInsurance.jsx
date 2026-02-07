import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./LuxuryCarInsurance.css";

const LuxuryCarInsurance = () => {
  return (
    <PageLayout
      title="Luxury Car Insurance"
      subtitle="Premium protection for high-end vehicles and discerning drivers."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Luxury car insurance</strong> is designed for high-value
          vehicles that require specialized coverage, higher limits, and
          expert claims handling.
        </p>
        <p>
          From exotic performance cars to premium sedans and SUVs, Morison
          connects you with insurers who understand the true value of your
          vehicle.
        </p>
        <p>
          Speak with a licensed broker at <strong>+1 343-512-7761</strong> to
          arrange your coverage.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Luxury Vehicles Require Specialized Insurance</h2>
        <p>
          Luxury vehicles often feature custom parts, advanced technology, and
          higher repair costs. Standard auto insurance may not provide adequate
          protection.
        </p>
        <p>
          Specialized coverage ensures your vehicle is repaired properly using
          OEM parts and certified repair facilities.
        </p>
      </section>

      {/* BENEFITS */}
      <section>
        <h2>Why Choose Morison for Luxury Car Insurance</h2>
        <ul>
          <li>Access to High-Value & Specialty Auto Insurers</li>
          <li>Agreed Value & High Liability Limits</li>
          <li>OEM Parts & Approved Repair Shops</li>
          <li>White-Glove Claims Service</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Luxury Car Insurance Coverage Options</h2>
        <p>
          Coverage goes beyond standard auto insurance to protect your
          investment.
        </p>
      </section>

      <section>
        <h3>Agreed Value Coverage</h3>
        <p>
          Ensures your vehicle is insured for a mutually agreed value, avoiding
          depreciation disputes in the event of a total loss.
        </p>
      </section>

      <section>
        <h3>OEM Parts & Specialized Repairs</h3>
        <p>
          Guarantees the use of original manufacturer parts and certified
          technicians for repairs.
        </p>
      </section>

      <section>
        <h3>High Liability Limits</h3>
        <p>
          Higher liability limits help protect your personal assets in the event
          of a serious accident.
        </p>
      </section>

      <section>
        <h3>Comprehensive & Collision Coverage</h3>
        <ul>
          <li>Collision damage</li>
          <li>Theft & vandalism</li>
          <li>Fire & natural disasters</li>
          <li>Glass & windshield protection</li>
        </ul>
      </section>

      {/* OPTIONAL */}
      <section>
        <h3>Optional Luxury Add-Ons</h3>
        <ul>
          <li>Waiver of Depreciation</li>
          <li>Replacement Cost Coverage</li>
          <li>Loss of Use & Rental Vehicle Coverage</li>
          <li>Worldwide Coverage Extensions</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Luxury Car Insurance</h2>
        <ul>
          <li>Multi-vehicle and multi-policy discounts</li>
          <li>Secure storage & anti-theft systems</li>
          <li>Low annual mileage programs</li>
          <li>Bundling home and auto insurance</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Needs Luxury Car Insurance?</h2>
        <ul>
          <li>Owners of high-end sedans and SUVs</li>
          <li>Exotic and performance vehicle drivers</li>
          <li>Collectors and enthusiasts</li>
          <li>Drivers seeking premium service and protection</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Luxury Vehicle with Confidence</h2>
        <p>
          Your vehicle deserves coverage that matches its value. Morison helps
          you secure insurance that protects both your car and your lifestyle.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default LuxuryCarInsurance;
