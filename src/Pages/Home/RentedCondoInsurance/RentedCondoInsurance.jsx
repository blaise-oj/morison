// src/Pages/Home/RentedCondoInsurance/RentedCondoInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // swap to condo/lifestyle image later
import "./RentedCondoInsurance.css";

const RentedCondoInsurance = () => {
  return (
    <PageLayout
      title="Rented Condo Insurance"
      subtitle="Tenant insurance designed specifically for renters living in condominium units."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Condo-specific coverage:</strong> protection tailored for
          renters in condo buildings
        </p>
        <p>
          <strong>Personal property protection:</strong> covers belongings inside
          your rented unit
        </p>
        <p>
          <strong>Liability coverage:</strong> protection if damage extends to
          other units or common areas
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with
          a licensed broker about Rented Condo Insurance today.
        </p>
      </section>

      {/* WHY RENTED CONDO INSURANCE */}
      <section>
        <h2>Why Do Condo Renters Need Insurance?</h2>
        <p>
          While the condo corporation insures the building, it does not cover
          your personal belongings or personal liability.
        </p>
        <p>
          Rented condo insurance ensures you’re protected against losses inside
          your unit and potential liability claims involving neighbouring units
          or common areas.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Rented Condo Insurance</h2>
        <ul>
          <li>Coverage designed specifically for condo renters</li>
          <li>Understanding of condo bylaws and insurance gaps</li>
          <li>Affordable, flexible tenant policies</li>
          <li>Licensed brokers to guide your coverage choices</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>Rented Condo Insurance Coverage Overview</h2>
        <p>
          Condo renters face unique risks, especially when damage affects
          neighbouring units or shared spaces.
        </p>
      </section>

      {/* COVERAGE TYPES */}
      <section>
        <h3>Contents Insurance</h3>
        <p>
          Covers your personal belongings within your condo unit.
        </p>
        <ul>
          <li>Furniture, clothing, and electronics</li>
          <li>Appliances and personal items</li>
          <li>Belongings stored in lockers or storage units</li>
        </ul>
      </section>

      <section>
        <h3>Personal Liability Insurance</h3>
        <p>
          Protects you if accidental damage or injury occurs due to your actions
          within the condo.
        </p>
        <ul>
          <li>Damage to neighbouring units</li>
          <li>Injury to guests or visitors</li>
          <li>Legal defence and settlement costs</li>
        </ul>
      </section>

      <section>
        <h3>Additional Living Expenses</h3>
        <p>
          Covers extra costs if your condo becomes uninhabitable due to an
          insured loss.
        </p>
        <ul>
          <li>Temporary accommodation</li>
          <li>Food and transportation expenses</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Coverages for Condo Renters</h3>
        <ul>
          <li>Higher liability limits</li>
          <li>Electronics and valuables coverage</li>
          <li>Water damage add-ons</li>
        </ul>
      </section>

      {/* BUNDLING */}
      <section>
        <h2>Bundle Your Insurance & Save</h2>
        <ul>
          <li>Rented Condo + Auto Insurance</li>
          <li>Rented Condo + Personal Articles</li>
          <li>Multiple Policies with One Broker</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Condo Rental</h2>
        <p>
          Renting a condo doesn’t mean going without protection. Ensure your
          belongings and liability are covered.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page
          to get started today.
        </p>
      </section>
    </PageLayout>
  );
};

export default RentedCondoInsurance;
