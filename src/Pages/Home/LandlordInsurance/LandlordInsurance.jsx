// src/Pages/Home/LandlordInsurance/LandlordInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // replace with landlord/property image later
import "./LandlordInsurance.css";

const LandlordInsurance = () => {
  return (
    <PageLayout
      title="Landlord Insurance"
      subtitle="Protect your rental property, income, and liability with specialized landlord coverage."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Comprehensive property protection:</strong> coverage designed
          for rental buildings and investment properties
        </p>
        <p>
          <strong>Rental income protection:</strong> ensures you’re covered if
          a tenant leaves the property uninhabitable
        </p>
        <p>
          <strong>Liability coverage:</strong> safeguards against tenant claims
          and accidents
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with
          a licensed broker about Landlord Insurance today.
        </p>
      </section>

      {/* WHY LANDLORD INSURANCE */}
      <section>
        <h2>Why Landlord Insurance Matters</h2>
        <p>
          Owning rental property comes with unique risks. Landlord insurance
          protects your building, rental income, and your personal liability in
          case of accidents or damage caused by tenants.
        </p>
        <p>
          Morison Insurance partners with top insurers to provide policies
          tailored for property owners, ensuring your investment is safeguarded.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Landlord Insurance</h2>
        <ul>
          <li>Coverage designed for rental properties and landlords</li>
          <li>Protection for building, contents, and personal liability</li>
          <li>Loss of rental income coverage for uninhabitable units</li>
          <li>Licensed brokers with experience in landlord policies</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>Landlord Insurance Coverage Overview</h2>
        <p>
          A typical landlord insurance policy covers property damage, liability,
          and loss of rental income, but optional add-ons can be tailored to
          your specific property type and tenants.
        </p>
      </section>

      {/* COVERAGE TYPES */}
      <section>
        <h3>Building & Property Protection</h3>
        <p>
          Protects the physical structure of your rental property against
          fire, theft, storms, and other insured perils.
        </p>
        <ul>
          <li>Main dwelling and attached structures</li>
          <li>Garages, sheds, and other outbuildings</li>
          <li>Fire, lightning, wind, and hail</li>
        </ul>
      </section>

      <section>
        <h3>Liability Coverage</h3>
        <p>
          Safeguards you if a tenant or visitor is injured on your property or
          if damage occurs to neighboring properties.
        </p>
        <ul>
          <li>Tenant injury liability</li>
          <li>Legal defence and settlement costs</li>
          <li>Accidental property damage</li>
        </ul>
      </section>

      <section>
        <h3>Loss of Rental Income</h3>
        <p>
          Provides compensation for lost rent if your property becomes
          uninhabitable due to an insured loss.
        </p>
        <ul>
          <li>Fire or water damage</li>
          <li>Storm-related loss</li>
          <li>Tenant-caused damage</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Landlord Coverage</h3>
        <ul>
          <li>Tenant default / rent guarantee</li>
          <li>Equipment breakdown</li>
          <li>Extended water damage protection</li>
          <li>Contents for furnished rental units</li>
        </ul>
      </section>

      {/* BUNDLING */}
      <section>
        <h2>Bundle & Save as a Landlord</h2>
        <ul>
          <li>Landlord + Liability Umbrella</li>
          <li>Landlord + Multi-Unit Properties</li>
          <li>Landlord + Auto Insurance</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Investment Property</h2>
        <p>
          Ensure your rental property, income, and liability are covered with a
          tailored landlord policy.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page
          to get started today.
        </p>
      </section>
    </PageLayout>
  );
};

export default LandlordInsurance;
