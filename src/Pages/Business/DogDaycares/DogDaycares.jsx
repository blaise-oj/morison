import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./DogDaycares.css";

const DogDaycares = () => {
  return (
    <PageLayout
      title="Dog Daycares Insurance"
      subtitle="Specialized insurance coverage for dog daycares, pet care facilities, and canine services."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Dog daycares insurance</strong> protects pet care businesses from liability claims,
          property damage, employee injuries, and pet-related incidents.
        </p>
        <p>
          Morison brokers help dog daycare owners secure coverage tailored to staff, facility safety,
          and client pets.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Dog Daycares Need Specialized Insurance</h2>
        <p>
          Dog daycares face unique risks including pet injuries, property damage, and liability claims.
          Standard business insurance may not fully cover these specialized exposures.
        </p>
        <p>
          Specialized insurance ensures protection for pets, staff, clients, and your facility.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Dog Daycares Insurance</h2>
        <ul>
          <li>Liability coverage for pet injuries and property damage</li>
          <li>Workers’ Compensation for staff</li>
          <li>Business property and equipment protection</li>
          <li>Expert claims support and risk management guidance</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Dog Daycares Insurance Coverage Options</h2>
        <ul>
          <li>Commercial General Liability</li>
          <li>Workers’ Compensation</li>
          <li>Business Property & Contents Insurance</li>
          <li>Pet Injury & Care Liability Coverage</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Business Interruption Coverage</li>
          <li>Cyber Liability (for online bookings/payments)</li>
          <li>Umbrella / Excess Liability Coverage</li>
          <li>Equipment & Facility Breakdown Protection</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Dog Daycares Insurance</h2>
        <ul>
          <li>Implementing safety protocols for pets and staff</li>
          <li>Bundling multiple business insurance policies</li>
          <li>Maintaining claims-free operational history</li>
          <li>Training staff on pet handling and facility safety</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Dog Daycares Insurance?</h2>
        <ul>
          <li>Independent dog daycare operators</li>
          <li>Pet care facilities and boarding centers</li>
          <li>Staffed canine service providers</li>
          <li>Mobile dog care or training businesses</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Dog Daycare Today</h2>
        <p>
          Morison brokers provide tailored insurance coverage for dog daycares,
          ensuring pets, staff, and facilities are fully protected.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default DogDaycares;
