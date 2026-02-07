import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./SportsCarInsurance.css";

const SportsCarInsurance = () => {
  return (
    <PageLayout
      title="Sports Car Insurance"
      subtitle="High-performance coverage for drivers who demand more from their insurance."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Sports car insurance</strong> is designed for high-performance
          vehicles that feature powerful engines, advanced technology, and
          higher-than-average repair costs.
        </p>
        <p>
          Whether you drive a coupe, roadster, or performance sedan, Morison
          helps you secure coverage built for speed, value, and precision.
        </p>
        <p>
          Speak with a licensed broker at <strong>+1 343-512-7761</strong> to
          explore your options.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Sports Cars Need Specialized Insurance</h2>
        <p>
          Sports cars often cost more to insure due to increased performance,
          specialized parts, and higher repair expenses. Standard auto insurance
          may leave important gaps.
        </p>
        <p>
          Specialized coverage ensures your vehicle is protected with the right
          limits, repair standards, and insurer expertise.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Sports Car Insurance</h2>
        <ul>
          <li>Access to Performance & Specialty Auto Insurers</li>
          <li>High Liability Limits Available</li>
          <li>OEM Parts & Approved Repair Facilities</li>
          <li>Expert Claims Support</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Sports Car Insurance Coverage Options</h2>
        <p>
          Policies can be customized to match how and how often you drive your
          vehicle.
        </p>
      </section>

      <section>
        <h3>Collision Coverage</h3>
        <p>
          Covers damage to your vehicle caused by a collision with another
          vehicle or object.
        </p>
      </section>

      <section>
        <h3>Comprehensive Coverage</h3>
        <ul>
          <li>Theft & vandalism</li>
          <li>Fire & natural disasters</li>
          <li>Falling objects</li>
          <li>Glass & windshield damage</li>
        </ul>
      </section>

      <section>
        <h3>High Liability Protection</h3>
        <p>
          Higher limits protect your personal assets if you’re found responsible
          for injuries or property damage.
        </p>
      </section>

      <section>
        <h3>Accident Benefits & Uninsured Motorist</h3>
        <p>
          Provides medical and income benefits following an accident, regardless
          of fault.
        </p>
      </section>

      {/* OPTIONAL */}
      <section>
        <h3>Optional Coverage Enhancements</h3>
        <ul>
          <li>Waiver of Depreciation</li>
          <li>Agreed Value Coverage</li>
          <li>Loss of Use & Rental Car Coverage</li>
          <li>Roadside Assistance</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>How to Save on Sports Car Insurance</h2>
        <ul>
          <li>Low annual mileage discounts</li>
          <li>Safe driving record</li>
          <li>Vehicle security & tracking systems</li>
          <li>Bundling auto and home insurance</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Sports Car Insurance?</h2>
        <ul>
          <li>Owners of high-performance vehicles</li>
          <li>Drivers of coupes, roadsters, and performance sedans</li>
          <li>Enthusiasts seeking specialized protection</li>
          <li>Drivers who value premium repair standards</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Performance Vehicle</h2>
        <p>
          Your sports car deserves insurance that keeps up. Morison delivers
          tailored coverage with confidence and control.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote today.
        </p>
      </section>
    </PageLayout>
  );
};

export default SportsCarInsurance;
