// src/Pages/Recreation/RecreationalVehicles/ATVInsurance/ATVInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./ATVInsurance.css";

const ATVInsurance = () => {
  return (
    <PageLayout
      title="ATV Insurance"
      subtitle="Specialized coverage for all-terrain vehicles, on and off the trail."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>ATV Insurance</strong> protects your all-terrain vehicle against accidents, theft, and liability while riding on trails, private land, or designated recreational areas.
        </p>
        <p>
          Morison brokers customize ATV insurance for recreational, utility, and performance ATVs.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> to speak with an insurance specialist today.
        </p>
      </section>

      {/* WHY */}
      <section>
        <h2>Why ATV Insurance Is Important</h2>
        <p>
          ATVs are powerful machines that can cause serious damage or injury. Many standard home or auto policies do not cover ATV-related risks.
        </p>
        <p>
          Dedicated ATV insurance ensures proper protection wherever you ride.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for ATV Insurance</h2>
        <ul>
          <li>Coverage for recreational and utility ATVs</li>
          <li>Flexible liability limits</li>
          <li>Protection on and off-road</li>
          <li>Experienced recreation insurance brokers</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>ATV Insurance Coverage Options</h2>
        <ul>
          <li>Collision and comprehensive coverage</li>
          <li>Third-party liability protection</li>
          <li>Theft, fire, and vandalism coverage</li>
          <li>Coverage for accessories and modifications</li>
        </ul>
      </section>

      {/* OPTIONAL */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Roadside and trail assistance</li>
          <li>Medical payments coverage</li>
          <li>Uninsured or underinsured motorist coverage</li>
          <li>Trailer and transport coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on ATV Insurance</h2>
        <ul>
          <li>Safe riding history</li>
          <li>ATV safety training certifications</li>
          <li>Secure storage and anti-theft devices</li>
          <li>Bundling with home or auto insurance</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider ATV Insurance?</h2>
        <ul>
          <li>Recreational ATV riders</li>
          <li>Utility and farm ATV owners</li>
          <li>Families with multiple off-road vehicles</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your ATV Today</h2>
        <p>
          Morison brokers ensure your ATV is insured for every ride and every adventure.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
  );
};

export default ATVInsurance;
