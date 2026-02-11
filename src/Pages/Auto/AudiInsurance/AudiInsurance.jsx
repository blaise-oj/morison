import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./AudiInsurance.css";

const AudiInsurance = () => {
  return (
      <div className="audi-insurance-page">
    <PageLayout
      title="Audi Insurance"
      subtitle="Tailored coverage for Audi vehicles, combining performance with protection."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Audi insurance</strong> is designed for drivers who own Audi vehicles,
          providing coverage that matches the premium build, performance, and technology
          of your car.
        </p>
        <p>
          Morison brokers help you find policies with the right limits, repair standards,
          and optional coverage to protect your Audi investment.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Audi Vehicles Need Specialized Insurance</h2>
        <p>
          Audi cars feature high-performance engines, advanced safety systems, and
          cutting-edge technology. Standard auto insurance may not fully cover repairs
          or replacement costs.
        </p>
        <p>
          Specialized Audi coverage ensures OEM parts, approved repair shops, and high
          liability protection for peace of mind.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Audi Insurance</h2>
        <ul>
          <li>OEM Parts & Approved Repair Facilities</li>
          <li>High Liability Limits Available</li>
          <li>Access to Specialty Insurers Familiar with Luxury Brands</li>
          <li>Expert Claims Support</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Audi Insurance Coverage Options</h2>
        <ul>
          <li>Collision coverage</li>
          <li>Comprehensive coverage (theft, fire, vandalism, natural disasters)</li>
          <li>Liability protection</li>
          <li>Accident benefits</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Audi Coverage Enhancements</h2>
        <ul>
          <li>Agreed Value Coverage</li>
          <li>Loss of Use & Rental Vehicle Coverage</li>
          <li>Roadside Assistance</li>
          <li>Replacement Cost for OEM Parts</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Audi Insurance</h2>
        <ul>
          <li>Bundling home and auto policies</li>
          <li>Safe driving record discounts</li>
          <li>Anti-theft system & secure garage discounts</li>
          <li>Multi-vehicle household discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Audi Insurance?</h2>
        <ul>
          <li>Owners of Audi sedans, SUVs, and performance models</li>
          <li>Drivers seeking OEM-quality repairs and coverage</li>
          <li>Luxury car enthusiasts wanting specialized protection</li>
          <li>Anyone who values premium service and claims support</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Get the Right Coverage for Your Audi</h2>
        <p>
          Morison brokers ensure your Audi is fully protected with insurance
          tailored to its performance, value, and technology.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default AudiInsurance;
