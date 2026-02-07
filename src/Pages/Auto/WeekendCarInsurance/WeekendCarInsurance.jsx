import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./WeekendCarInsurance.css";

const WeekendCarInsurance = () => {
  return (
    <PageLayout
      title="Weekend Car Insurance"
      subtitle="Affordable auto insurance for vehicles driven occasionally or on weekends."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Lower mileage, lower premiums:</strong> vehicles driven only on
          weekends may qualify for reduced rates.
        </p>
        <p>
          <strong>Flexible coverage:</strong> protect your car without paying for
          daily-use risk.
        </p>
        <p>
          <strong>Broker-guided savings:</strong> coverage structured around how
          you actually drive.
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with a
          licensed broker about weekend car insurance today.
        </p>
      </section>

      {/* WHY WEEKEND CAR INSURANCE */}
      <section>
        <h2>What Is Weekend Car Insurance?</h2>
        <p>
          Weekend car insurance is designed for vehicles that are driven
          infrequently — typically for leisure, errands, or short trips outside
          the workweek.
        </p>
        <p>
          Insurers may offer lower premiums based on reduced mileage and lower
          overall risk.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Weekend Car Insurance</h2>
        <ul>
          <li>Access to Low-Mileage Insurance Programs</li>
          <li>Customized Coverage Based on Usage</li>
          <li>Multi-Vehicle Discount Opportunities</li>
          <li>Licensed Auto Insurance Brokers</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>Weekend Car Insurance Coverage at a Glance</h2>
        <p>
          Even if you drive less, proper coverage is still essential to protect
          against unexpected losses.
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
          <li>Bodily injury and property damage</li>
          <li>Legal defence costs</li>
        </ul>
      </section>

      <section>
        <h3>Collision Coverage</h3>
        <p>
          Covers damage to your vehicle resulting from a collision.
        </p>
        <ul>
          <li>Accidents with other vehicles</li>
          <li>Single-vehicle incidents</li>
          <li>Optional deductibles</li>
        </ul>
      </section>

      <section>
        <h3>Comprehensive Coverage</h3>
        <p>
          Protects your car from non-collision related risks.
        </p>
        <ul>
          <li>Theft and vandalism</li>
          <li>Fire and weather damage</li>
          <li>Falling objects</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Coverages</h3>
        <ul>
          <li>Low-Mileage Discounts</li>
          <li>Roadside Assistance</li>
          <li>Rental Car Coverage</li>
          <li>Waiver of Depreciation</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Who Benefits from Weekend Car Insurance?</h2>
        <ul>
          <li>Households with multiple vehicles</li>
          <li>Vehicles used for leisure or short trips</li>
          <li>Drivers with low annual mileage</li>
          <li>Seasonal or secondary vehicles</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Pay Less for How You Drive</h2>
        <p>
          Let a Morison broker help you structure weekend car insurance that
          matches your lifestyle — and your budget.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page.
        </p>
      </section>
    </PageLayout>
  );
};

export default WeekendCarInsurance;
