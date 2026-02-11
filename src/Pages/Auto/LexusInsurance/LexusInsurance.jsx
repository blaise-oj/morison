import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./LexusInsurance.css";

const LexusInsurance = () => {
  return (
      <div className="lexus-insurance-page">
    <PageLayout
      title="Lexus Insurance"
      subtitle="Tailored insurance coverage for Lexus vehicles, combining luxury with protection."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Lexus insurance</strong> protects your luxury vehicle against accidents, theft, and liability, ensuring premium coverage for sedans, SUVs, and hybrids.
        </p>
        <p>
          Morison brokers tailor policies to your Lexus model and driving needs, providing comprehensive and collision coverage options.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Lexus Vehicles Require Specialized Insurance</h2>
        <p>
          Lexus vehicles are high-value and come with advanced technology and luxury finishes. Standard insurance may not cover OEM repairs or replacement costs.
        </p>
        <p>
          Specialized Lexus insurance ensures OEM parts, certified repair facilities, and liability coverage that matches the vehicle’s value.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Lexus Insurance</h2>
        <ul>
          <li>OEM Parts & Certified Repair Coverage</li>
          <li>Comprehensive & Collision Protection</li>
          <li>High Liability Coverage for Luxury Vehicles</li>
          <li>Expert Claims Support from Licensed Brokers</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Lexus Insurance Coverage Options</h2>
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
        <h2>Ways to Save on Lexus Insurance</h2>
        <ul>
          <li>Bundle home and auto policies</li>
          <li>Safe driving discounts</li>
          <li>Garage & anti-theft system discounts</li>
          <li>Multi-vehicle household discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Lexus Insurance?</h2>
        <ul>
          <li>Owners of sedans, SUVs, and hybrid Lexus models</li>
          <li>Luxury vehicle drivers seeking OEM-quality repairs</li>
          <li>High-value car owners looking for comprehensive liability protection</li>
          <li>Anyone who wants tailored, premium coverage</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Lexus Vehicle</h2>
        <p>
          Morison brokers ensure your Lexus is fully covered with insurance tailored to its luxury and technology.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default LexusInsurance;
