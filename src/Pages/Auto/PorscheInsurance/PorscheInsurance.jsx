import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./PorscheInsurance.css";

const PorscheInsurance = () => {
  return (
    <PageLayout
      title="Porsche Insurance"
      subtitle="Premium coverage for Porsche vehicles, protecting performance and luxury."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Porsche insurance</strong> provides tailored protection for high-performance sports cars and luxury SUVs.
        </p>
        <p>
          Morison brokers design policies that cover your Porsche’s value, performance, and specialized features.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Porsche Vehicles Require Specialized Insurance</h2>
        <p>
          Porsches are high-value, high-performance vehicles. Standard auto insurance may not cover repair costs, specialized parts, or high liability claims.
        </p>
        <p>
          Porsche insurance ensures OEM parts, certified repairs, and coverage tailored to luxury and sports models.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Porsche Insurance</h2>
        <ul>
          <li>OEM Parts & Certified Repair Coverage</li>
          <li>Comprehensive & Collision Protection</li>
          <li>High Liability Limits for Luxury Vehicles</li>
          <li>Expert Claims Support & Licensed Brokers</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Porsche Insurance Coverage Options</h2>
        <ul>
          <li>Comprehensive coverage (fire, theft, natural disasters)</li>
          <li>Collision coverage</li>
          <li>Third-party liability coverage</li>
          <li>Accident benefits & optional enhancements</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Roadside Assistance</li>
          <li>Rental Vehicle Coverage</li>
          <li>Agreed Value Coverage</li>
          <li>Enhanced Theft & Vandalism Protection</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Porsche Insurance</h2>
        <ul>
          <li>Bundle home and auto policies</li>
          <li>Safe driving discounts</li>
          <li>Garage & anti-theft system discounts</li>
          <li>Multi-vehicle household discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Porsche Insurance?</h2>
        <ul>
          <li>Owners of sports cars and luxury SUVs</li>
          <li>Drivers seeking high-value OEM coverage</li>
          <li>Performance car enthusiasts looking for comprehensive liability</li>
          <li>Anyone wanting specialized coverage for their Porsche</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Porsche Today</h2>
        <p>
          Morison brokers ensure your Porsche is fully insured with coverage tailored to its performance, luxury, and value.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
  );
};

export default PorscheInsurance;
