import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./VacantPropertyInsurance.css";

const VacantPropertyInsurance = () => {
  return (
    <PageLayout
      title="Vacant Property Insurance"
      subtitle="Protect unoccupied properties from damage, theft, and liability risks."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Vacant Property insurance</strong> safeguards property owners
          against financial losses from damage, theft, vandalism, or liability
          claims for unoccupied buildings.
        </p>
        <p>
          Morison brokers help property owners secure coverage tailored to vacant residential,
          commercial, or investment properties.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Vacant Property Insurance Is Essential</h2>
        <p>
          Unoccupied properties are more vulnerable to fire, theft, vandalism, and liability claims.
          Standard homeowners or commercial insurance may not cover vacant buildings.
        </p>
        <p>
          Vacant Property insurance ensures financial protection while the property is unoccupied,
          minimizing risk and potential loss.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Vacant Property Insurance</h2>
        <ul>
          <li>Protection against fire, theft, and vandalism</li>
          <li>Liability coverage for visitors or contractors</li>
          <li>Coverage for commercial and residential vacant properties</li>
          <li>Expert guidance on risk management and property protection</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Vacant Property Insurance Coverage Options</h2>
        <ul>
          <li>Building and structural coverage</li>
          <li>Liability coverage for accidents or injuries</li>
          <li>Protection against theft and vandalism</li>
          <li>Optional coverage for appliances, fixtures, and contents</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Extended coverage for natural disasters</li>
          <li>Coverage for tenant or contractor-caused damage</li>
          <li>Umbrella or excess liability coverage</li>
          <li>Loss of rental income protection if property is leased later</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Vacant Property Insurance</h2>
        <ul>
          <li>Implementing security systems and alarms</li>
          <li>Regular property inspections and maintenance</li>
          <li>Bundling with other property or business insurance policies</li>
          <li>Maintaining a low-claims history</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Vacant Property Insurance?</h2>
        <ul>
          <li>Property investors with unoccupied residential or commercial buildings</li>
          <li>Landlords between tenants or leases</li>
          <li>Owners of seasonal properties or second homes</li>
          <li>Anyone seeking protection for unoccupied properties against loss or liability</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Vacant Property Today</h2>
        <p>
          Morison brokers provide tailored Vacant Property insurance coverage,
          ensuring your unoccupied properties are fully protected from damage, theft, and liability risks.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default VacantPropertyInsurance;
