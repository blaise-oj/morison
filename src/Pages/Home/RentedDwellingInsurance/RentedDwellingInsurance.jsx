// src/Pages/Home/RentedDwellingInsurance/RentedDwellingInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // swap to house rental image later
import "./RentedDwellingInsurance.css";

const RentedDwellingInsurance = () => {
  return (
      <div className="rented-dwelling-insurance-page">
    <PageLayout
      title="Rented Dwelling Insurance"
      subtitle="Tenant insurance designed for renters living in houses, townhomes, and non-condo dwellings."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Flexible coverage:</strong> designed for renters in houses and
          multi-unit dwellings
        </p>
        <p>
          <strong>Personal property protection:</strong> covers belongings inside
          your rented home
        </p>
        <p>
          <strong>Liability coverage:</strong> protection if damage affects the
          building or neighbouring properties
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with
          a licensed broker about Rented Dwelling Insurance today.
        </p>
      </section>

      {/* WHY RENTED DWELLING INSURANCE */}
      <section>
        <h2>Why Do Renters Need Dwelling Insurance?</h2>
        <p>
          Many renters believe their landlord’s insurance covers them — but it
          doesn’t. A landlord’s policy protects the building, not your personal
          belongings or liability.
        </p>
        <p>
          Rented dwelling insurance ensures you’re protected against losses and
          liability while living in a rented house, duplex, or similar property.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Rented Dwelling Insurance</h2>
        <ul>
          <li>Coverage designed for non-condo rental properties</li>
          <li>Protection for shared or private rental homes</li>
          <li>Affordable policies with flexible options</li>
          <li>Licensed brokers for personalized advice</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>Rented Dwelling Insurance Coverage Overview</h2>
        <p>
          Renters in houses or multi-unit dwellings face different risks than
          apartment or condo renters — especially when damage impacts the
          structure or neighbouring properties.
        </p>
      </section>

      {/* COVERAGE TYPES */}
      <section>
        <h3>Contents Insurance</h3>
        <p>
          Covers personal belongings located inside your rented dwelling.
        </p>
        <ul>
          <li>Furniture, clothing, and electronics</li>
          <li>Appliances and personal items</li>
          <li>Belongings in basements or garages</li>
        </ul>
      </section>

      <section>
        <h3>Personal Liability Insurance</h3>
        <p>
          Protects you if accidental damage or injury occurs within the rented
          property.
        </p>
        <ul>
          <li>Damage to the rented dwelling</li>
          <li>Injury to visitors or neighbours</li>
          <li>Legal defence and settlement costs</li>
        </ul>
      </section>

      <section>
        <h3>Additional Living Expenses</h3>
        <p>
          Helps cover extra costs if your rental becomes uninhabitable due to an
          insured loss.
        </p>
        <ul>
          <li>Temporary accommodation</li>
          <li>Food and transportation expenses</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Coverages for Rented Dwellings</h3>
        <ul>
          <li>Higher liability limits</li>
          <li>Electronics and valuables coverage</li>
          <li>Water damage add-ons</li>
        </ul>
      </section>

      {/* BUNDLING */}
      <section>
        <h2>Bundle & Save on Insurance</h2>
        <ul>
          <li>Rented Dwelling + Auto Insurance</li>
          <li>Rented Dwelling + Personal Articles</li>
          <li>Multiple Policies with One Broker</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Rental Home</h2>
        <p>
          Renting a house or dwelling doesn’t mean going without protection.
          Ensure your belongings and liability are covered.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page
          to get started today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default RentedDwellingInsurance;
