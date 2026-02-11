import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./TeslaInsurance.css";

const TeslaInsurance = () => {
  return (
      <div className="tesla-insurance-page">
    <PageLayout
      title="Tesla Insurance"
      subtitle="Comprehensive coverage for Tesla vehicles, protecting your electric car and technology."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Tesla insurance</strong> provides protection for your electric vehicle, covering accidents, theft, and advanced technology features.
        </p>
        <p>
          Morison brokers tailor policies for all Tesla models — Model S, Model 3, Model X, Model Y — with comprehensive, collision, and liability coverage.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Tesla Vehicles Require Specialized Insurance</h2>
        <p>
          Tesla vehicles have advanced electric powertrains, autopilot features, and high repair costs. Standard insurance may not cover battery replacement or software-related damage.
        </p>
        <p>
          Tesla insurance ensures OEM repairs, certified service, and coverage for all specialized features.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Tesla Insurance</h2>
        <ul>
          <li>OEM Parts & Certified Repair Coverage</li>
          <li>Comprehensive & Collision Protection</li>
          <li>Liability Coverage & Accident Benefits</li>
          <li>Specialized Coverage for Autopilot & Battery Systems</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Tesla Insurance Coverage Options</h2>
        <ul>
          <li>Comprehensive coverage (fire, theft, natural disasters)</li>
          <li>Collision coverage</li>
          <li>Third-party liability coverage</li>
          <li>Battery & electronics coverage</li>
          <li>Accident benefits & optional add-ons</li>
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
        <h2>Ways to Save on Tesla Insurance</h2>
        <ul>
          <li>Bundle home and auto policies</li>
          <li>Safe driving discounts</li>
          <li>Garage & anti-theft system discounts</li>
          <li>Multi-vehicle household discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Tesla Insurance?</h2>
        <ul>
          <li>Owners of Tesla sedans, SUVs, and performance models</li>
          <li>Drivers looking for battery and technology coverage</li>
          <li>Electric vehicle owners seeking OEM repair protection</li>
          <li>Anyone wanting specialized EV insurance</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Tesla Today</h2>
        <p>
          Morison brokers ensure your Tesla is fully insured with coverage tailored to its electric technology and high value.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default TeslaInsurance;
