import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/carap.jpg"; // update image if needed
import "./HybridCarInsurance.css";

const HybridCarInsurance = () => {
  return (
    <PageLayout
      title="Hybrid Car Insurance"
      subtitle="Protect your hybrid vehicle with insurance designed for efficiency, innovation, and long-term savings."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p><strong>Hybrid-specific protection:</strong> coverage for electric batteries and advanced systems</p>
        <p><strong>Claims advocacy:</strong> licensed brokers on your side when it matters most</p>
        <p><strong>Bundle options:</strong> bigger savings when you combine auto + home</p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with a
          licensed broker about Hybrid Car Insurance today.
        </p>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Compare Hybrid Car Insurance, Save More</h2>
        <p>
          Hybrid vehicles come with advanced technology and higher repair costs.
          Morison Insurance compares dozens of top Canadian insurers to find
          coverage that protects your vehicle properly — without overpaying.
        </p>
        <p>
          Whether you drive a Toyota Prius, Lexus Hybrid, Hyundai, or a plug-in
          hybrid, our brokers tailor coverage to your driving habits and vehicle type.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Hybrid Car Insurance</h2>
        <ul>
          <li>4,500+ 5-Star Reviews</li>
          <li>Access to Top Canadian Auto Insurers</li>
          <li>Licensed Brokers — Not a Call Centre</li>
          <li>Dedicated Claims Support</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>Hybrid Auto Insurance Coverage at a Glance</h2>
        <p>
          Ontario auto insurance is mandatory, but hybrid vehicles often require
          enhanced protection due to battery systems, sensors, and higher repair costs.
        </p>
      </section>

      {/* COVERAGE TYPES */}
      <section>
        <h3>Collision Coverage</h3>
        <p>
          Covers repair or replacement of your hybrid vehicle after an at-fault accident.
        </p>
        <ul>
          <li>Vehicle repairs</li>
          <li>Hybrid battery and drivetrain components</li>
          <li>Single-vehicle collisions</li>
        </ul>
      </section>

      <section>
        <h3>Comprehensive Coverage</h3>
        <ul>
          <li>Theft and vandalism</li>
          <li>Fire and explosions</li>
          <li>Weather damage (hail, flooding, wind)</li>
          <li>Falling objects</li>
        </ul>
      </section>

      <section>
        <h3>Third-Party Liability Insurance</h3>
        <p>
          Mandatory in Ontario, this coverage protects you if you cause injury
          or property damage to others.
        </p>
        <ul>
          <li>Legal defence costs</li>
          <li>Settlements or court judgments</li>
        </ul>
      </section>

      <section>
        <h3>Accident Benefits</h3>
        <p>
          Provides medical, rehabilitation, and income replacement benefits
          regardless of fault.
        </p>
        <ul>
          <li>Medical and rehabilitation expenses</li>
          <li>Income replacement</li>
          <li>Caregiver benefits</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Hybrid Insurance Enhancements</h3>
        <ul>
          <li>Replacement Cost Coverage</li>
          <li>Waiver of Depreciation</li>
          <li>Roadside Assistance</li>
          <li>Rental Vehicle Coverage</li>
          <li>Accident Forgiveness</li>
        </ul>
      </section>

      {/* BUNDLING */}
      <section>
        <h2>Bundle Your Hybrid with Home & More</h2>
        <ul>
          <li>Hybrid Auto + Home (Most Popular)</li>
          <li>Hybrid Auto + Umbrella Liability</li>
          <li>Multi-Vehicle Discounts</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Ready to Insure Your Hybrid Vehicle?</h2>
        <p>
          Speak with a Morison broker today and get insurance that understands
          your hybrid vehicle.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page.
        </p>
      </section>

    </PageLayout>
  );
};

export default HybridCarInsurance;
