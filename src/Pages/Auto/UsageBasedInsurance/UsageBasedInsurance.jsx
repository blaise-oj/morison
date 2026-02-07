import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./UsageBasedInsurance.css";

const UsageBasedInsurance = () => {
  return (
    <PageLayout
      title="Usage-Based Insurance"
      subtitle="Auto insurance that adjusts to how much and how safely you drive."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Drive less, pay less:</strong> premiums based on actual usage
          and driving behaviour.
        </p>
        <p>
          <strong>Fair pricing:</strong> safer drivers are rewarded with lower
          rates.
        </p>
        <p>
          <strong>Smart technology:</strong> simple tracking through an app or
          device.
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with a
          licensed broker about usage-based insurance today.
        </p>
      </section>

      {/* WHAT IS UBI */}
      <section>
        <h2>What Is Usage-Based Insurance?</h2>
        <p>
          Usage-based insurance (UBI) uses telematics technology to track driving
          habits such as distance driven, braking, acceleration, and time of
          day.
        </p>
        <p>
          Insurers then adjust premiums based on real-world driving behaviour
          rather than estimates.
        </p>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Why Choose Morison for Usage-Based Insurance</h2>
        <ul>
          <li>Access to Multiple Telematics Programs</li>
          <li>Transparent Savings Opportunities</li>
          <li>Licensed Brokers to Guide You</li>
          <li>No-Obligation Program Reviews</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <h2>How Usage-Based Insurance Works</h2>
        <ol>
          <li>Enroll in a usage-based program</li>
          <li>Track driving via app or plug-in device</li>
          <li>Monitor driving habits over time</li>
          <li>Earn discounts for safe driving</li>
        </ol>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Coverage Remains the Same</h2>
        <p>
          Usage-based insurance does not reduce your protection. Your policy
          still includes standard auto coverages.
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

      {/* WHO BENEFITS */}
      <section>
        <h2>Who Benefits Most from Usage-Based Insurance?</h2>
        <ul>
          <li>Low-mileage drivers</li>
          <li>Safe and defensive drivers</li>
          <li>Students and new drivers</li>
          <li>Remote or hybrid workers</li>
        </ul>
      </section>

      {/* CONSIDERATIONS */}
      <section>
        <h2>Things to Consider</h2>
        <ul>
          <li>Driving behaviour may affect discounts</li>
          <li>Programs vary by insurer</li>
          <li>Data collection policies differ</li>
          <li>Participation is optional</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>See If Usage-Based Insurance Is Right for You</h2>
        <p>
          A Morison broker can help you compare usage-based insurance programs
          and determine whether it fits your driving style.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page.
        </p>
      </section>
    </PageLayout>
  );
};

export default UsageBasedInsurance;
