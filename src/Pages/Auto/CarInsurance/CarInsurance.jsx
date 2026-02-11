import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // change if needed
import "./CarInsurance.css";

const CarInsurance = () => {
  return (
      <div className="car-insurance-page">
    <PageLayout
      title="Car Insurance"
      subtitle="Reliable auto insurance coverage tailored to how, where, and what you drive."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Customized auto coverage:</strong> protection built around your
          driving habits and vehicle.
        </p>
        <p>
          <strong>Claims support:</strong> real people advocating for you when
          accidents happen.
        </p>
        <p>
          <strong>Bundle & save:</strong> combine auto with home or other policies
          for better rates.
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with a
          licensed broker about car insurance today.
        </p>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Compare Car Insurance Quotes, Not Guesswork</h2>
        <p>
          Finding the right car insurance doesn’t have to be complicated.
          Morison Insurance compares policies from multiple top insurers to help
          you secure competitive rates without sacrificing coverage.
        </p>
        <p>
          Whether you commute daily, drive occasionally, or insure multiple
          vehicles, our brokers tailor your policy to your needs.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Car Insurance</h2>
        <ul>
          <li>4,500+ 5-Star Reviews</li>
          <li>Access to Dozens of Trusted Insurers</li>
          <li>Dedicated Licensed Auto Brokers</li>
          <li>Claims Support When You Need It Most</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>Car Insurance Coverage at a Glance</h2>
        <p>
          Auto insurance policies are built from several key coverages. The
          right combination depends on your vehicle, driving history, and
          lifestyle.
        </p>
      </section>

      {/* COVERAGE TYPES */}
      <section>
        <h3>Third-Party Liability</h3>
        <p>
          Mandatory coverage that protects you if you cause injury or damage to
          others.
        </p>
        <ul>
          <li>Legal defence costs</li>
          <li>Property damage coverage</li>
          <li>Bodily injury protection</li>
        </ul>
      </section>

      <section>
        <h3>Accident Benefits</h3>
        <p>
          Covers medical expenses and income replacement regardless of fault.
        </p>
        <ul>
          <li>Medical and rehabilitation expenses</li>
          <li>Income replacement benefits</li>
          <li>Caregiver and attendant care benefits</li>
        </ul>
      </section>

      <section>
        <h3>Collision Coverage</h3>
        <p>
          Pays for damage to your vehicle caused by a collision with another
          vehicle or object.
        </p>
        <ul>
          <li>Accidents with other vehicles</li>
          <li>Single-vehicle collisions</li>
          <li>Optional deductibles</li>
        </ul>
      </section>

      <section>
        <h3>Comprehensive Coverage</h3>
        <p>
          Protects against non-collision related losses.
        </p>
        <ul>
          <li>Theft or attempted theft</li>
          <li>Fire and vandalism</li>
          <li>Weather damage (hail, wind, flooding)</li>
          <li>Falling objects</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Auto Coverages</h3>
        <ul>
          <li>Accident Forgiveness</li>
          <li>Waiver of Depreciation</li>
          <li>Rental Car Coverage</li>
          <li>Roadside Assistance</li>
          <li>Increased Liability Limits</li>
        </ul>
      </section>

      {/* BUNDLING */}
      <section>
        <h2>Bundle Auto Insurance & Save More</h2>
        <ul>
          <li>Auto + Home (Most Popular)</li>
          <li>Auto + Tenant or Condo Insurance</li>
          <li>Multi-Vehicle Discounts</li>
          <li>Auto + Umbrella Liability</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Get the Right Car Insurance Today</h2>
        <p>
          Speak with a Morison auto insurance broker and discover coverage that
          fits your life — not just your vehicle.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default CarInsurance;
