import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./MercedesInsurance.css";

const MercedesInsurance = () => {
  return (
      <div className="mercedes-insurance-page">
    <PageLayout
      title="Mercedes Insurance"
      subtitle="Premium insurance coverage for your Mercedes vehicle, designed for luxury and protection."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Mercedes insurance</strong> provides comprehensive protection for your luxury vehicle, covering sedans, SUVs, coupes, and hybrids.
        </p>
        <p>
          Morison brokers tailor policies to your Mercedes model, usage, and driving needs, ensuring you have the right coverage for value and technology.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Mercedes Vehicles Require Specialized Insurance</h2>
        <p>
          Mercedes vehicles are high-value and equipped with advanced technology and luxury features. Standard insurance may not cover OEM repairs or replacement costs.
        </p>
        <p>
          Specialized Mercedes insurance ensures OEM parts, certified repairs, and liability coverage suitable for high-end vehicles.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Mercedes Insurance</h2>
        <ul>
          <li>OEM Parts & Certified Repair Coverage</li>
          <li>Comprehensive & Collision Protection</li>
          <li>High Liability Coverage for Luxury Vehicles</li>
          <li>Expert Claims Support from Licensed Brokers</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Mercedes Insurance Coverage Options</h2>
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
        <h2>Ways to Save on Mercedes Insurance</h2>
        <ul>
          <li>Bundle home and auto policies</li>
          <li>Safe driving discounts</li>
          <li>Garage & anti-theft system discounts</li>
          <li>Multi-vehicle household discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Mercedes Insurance?</h2>
        <ul>
          <li>Owners of sedans, SUVs, coupes, and hybrid Mercedes models</li>
          <li>Luxury vehicle drivers seeking OEM-quality repairs</li>
          <li>High-value car owners looking for comprehensive liability protection</li>
          <li>Anyone wanting tailored, premium coverage for their Mercedes</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Mercedes Vehicle</h2>
        <p>
          Morison brokers ensure your Mercedes is fully covered with insurance tailored to its luxury and technology.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default MercedesInsurance;
