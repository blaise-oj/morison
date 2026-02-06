// src/Pages/Home/DuplexTriplexFourplexInsurance/DuplexTriplexFourplexInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // swap to multi-unit property image later
import "./DuplexTriplexFourplexInsurance.css";

const DuplexTriplexFourplexInsurance = () => {
  return (
    <PageLayout
      title="Duplex, Triplex & Fourplex Insurance"
      subtitle="Specialized insurance solutions for small multi-unit residential properties."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Multi-unit coverage:</strong> protection tailored for 2–4 unit buildings
        </p>
        <p>
          <strong>Property & liability:</strong> coverage for building, units, and tenants
        </p>
        <p>
          <strong>Rental income protection:</strong> compensation if units become uninhabitable
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with
          a licensed broker about Duplex, Triplex & Fourplex Insurance today.
        </p>
      </section>

      {/* WHY MULTI-UNIT INSURANCE */}
      <section>
        <h2>Why Multi-Unit Property Insurance Matters</h2>
        <p>
          Owners of duplexes, triplexes, or fourplexes face unique risks, including
          tenant-related claims, building damage, and potential loss of rental income.
        </p>
        <p>
          Proper insurance safeguards your investment and ensures smooth operations
          for each rental unit.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Multi-Unit Property Insurance</h2>
        <ul>
          <li>Coverage for 2–4 unit residential buildings</li>
          <li>Protection for building, contents, and tenant liability</li>
          <li>Loss of rental income coverage for vacant or damaged units</li>
          <li>Licensed brokers experienced with multi-unit properties</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>Coverage Overview</h2>
        <p>
          Multi-unit insurance policies combine building, liability, and income protection
          while allowing optional add-ons to fit your investment goals.
        </p>
      </section>

      {/* COVERAGE TYPES */}
      <section>
        <h3>Building & Property Protection</h3>
        <p>
          Covers the physical structure and attached elements of your multi-unit property.
        </p>
        <ul>
          <li>Main building and outbuildings</li>
          <li>Fire, lightning, wind, and hail</li>
          <li>Damage from tenants or vandalism</li>
        </ul>
      </section>

      <section>
        <h3>Liability Coverage</h3>
        <p>
          Protects against claims by tenants or visitors due to accidents or property damage.
        </p>
        <ul>
          <li>Tenant injury within units or common areas</li>
          <li>Damage to neighbouring properties</li>
          <li>Legal defence and settlement costs</li>
        </ul>
      </section>

      <section>
        <h3>Loss of Rental Income</h3>
        <p>
          Compensation for lost rent if any unit becomes uninhabitable due to an insured event.
        </p>
        <ul>
          <li>Fire or water damage</li>
          <li>Storm-related loss</li>
          <li>Tenant-caused damage</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Add-Ons</h3>
        <ul>
          <li>Higher liability limits</li>
          <li>Equipment breakdown for rented units</li>
          <li>Contents coverage for furnished units</li>
          <li>Extended water and weather protection</li>
        </ul>
      </section>

      {/* BUNDLING */}
      <section>
        <h2>Bundle & Save</h2>
        <ul>
          <li>Multi-unit + Auto Insurance</li>
          <li>Multi-unit + Umbrella Liability</li>
          <li>Multiple Properties with One Broker</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Multi-Unit Property</h2>
        <p>
          Ensure your duplex, triplex, or fourplex is covered for property damage, liability,
          and rental income loss. Let our brokers design the right policy.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page to get started today.
        </p>
      </section>
    </PageLayout>
  );
};

export default DuplexTriplexFourplexInsurance;
