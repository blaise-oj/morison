import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./HybridCarInsurance.css";

const HybridCarInsurance = () => {
  return (
    <PageLayout
      title="Hybrid Car Insurance"
      subtitle="Smart insurance solutions for hybrid vehicles and modern drivers."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Tailored coverage:</strong> protection designed specifically
          for hybrid vehicles and their advanced technology.
        </p>
        <p>
          <strong>Affordable options:</strong> hybrid drivers often qualify for
          discounts due to fuel efficiency and safety features.
        </p>
        <p>
          <strong>Expert guidance:</strong> licensed brokers who understand
          hybrid vehicle insurance.
        </p>

        <p>
          Speak with a licensed broker today at{" "}
          <strong>+1 343-512-7761</strong> to get started.
        </p>
      </section>

      {/* WHY HYBRID */}
      <section>
        <h2>Why Hybrid Cars Need Specialized Insurance</h2>
        <p>
          Hybrid vehicles combine gasoline engines with electric motors,
          resulting in unique components such as battery packs, regenerative
          braking systems, and advanced onboard technology.
        </p>
        <p>
          Proper insurance ensures both systems are fully protected in case of
          damage or loss.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Hybrid Car Insurance</h2>
        <ul>
          <li>Access to Hybrid-Friendly Insurance Providers</li>
          <li>Coverage for Batteries & Electric Components</li>
          <li>Competitive Rates & Discount Opportunities</li>
          <li>Licensed Auto Insurance Brokers</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>Hybrid Car Insurance Coverage at a Glance</h2>
        <p>
          Hybrid car insurance includes standard auto coverage with added
          protection for electric and hybrid-specific components.
        </p>
      </section>

      {/* COVERAGE TYPES */}
      <section>
        <h3>Hybrid Battery Coverage</h3>
        <p>
          Covers damage to hybrid battery systems caused by an insured event.
        </p>
      </section>

      <section>
        <h3>Electric Motor & Powertrain</h3>
        <p>
          Protection for electric motors, regenerative braking systems, and
          related components.
        </p>
      </section>

      <section>
        <h3>Standard Auto Coverages</h3>
        <ul>
          <li>Third-party liability</li>
          <li>Accident benefits</li>
          <li>Collision coverage</li>
          <li>Comprehensive coverage</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Coverages</h3>
        <ul>
          <li>Waiver of Depreciation</li>
          <li>Replacement Cost Coverage</li>
          <li>Roadside Assistance</li>
          <li>Rental Vehicle Coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Hybrid Car Insurance</h2>
        <ul>
          <li>Eco-friendly vehicle discounts</li>
          <li>Low-mileage driving programs</li>
          <li>Bundling home and auto insurance</li>
          <li>Multi-vehicle discounts</li>
        </ul>
      </section>

      {/* WHO SHOULD CONSIDER */}
      <section>
        <h2>Who Should Consider Hybrid Car Insurance?</h2>
        <ul>
          <li>Hybrid sedan and SUV owners</li>
          <li>City commuters seeking fuel efficiency</li>
          <li>Environmentally conscious drivers</li>
          <li>Drivers transitioning from gas vehicles</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Insure Your Hybrid Vehicle with Confidence</h2>
        <p>
          Morison helps you find the right balance of coverage, value, and
          protection for your hybrid car.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page
          to receive a quote.
        </p>
      </section>
    </PageLayout>
  );
};

export default HybridCarInsurance;
