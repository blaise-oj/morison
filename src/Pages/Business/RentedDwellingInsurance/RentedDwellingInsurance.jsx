import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./RentedDwellingInsurance.css";

const RentedDwellingInsurance = () => {
  return (
    <PageLayout
      title="Rented Dwelling Insurance"
      subtitle="Protect your rental properties from damage, liability, and loss of rental income."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Rented Dwelling insurance</strong> safeguards landlords and property owners
          against financial losses from property damage, liability claims, or loss of rental income.
        </p>
        <p>
          Morison brokers help property owners secure coverage tailored to their rental properties
          and tenant risks.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Rented Dwelling Insurance Is Essential</h2>
        <p>
          Rental properties face risks such as fire, vandalism, natural disasters, or tenant-related liability claims.
          Standard homeowners insurance may not fully cover rental activity.
        </p>
        <p>
          Rented Dwelling insurance ensures landlords can protect their property, recover lost rental income,
          and manage tenant-related risks.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Rented Dwelling Insurance</h2>
        <ul>
          <li>Protection for property damage from fire, vandalism, and natural disasters</li>
          <li>Liability coverage for tenant or visitor injuries</li>
          <li>Coverage for loss of rental income due to property damage</li>
          <li>Expert guidance on landlord insurance and risk management</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Rented Dwelling Insurance Coverage Options</h2>
        <ul>
          <li>Building and structural coverage</li>
          <li>Liability coverage for tenants and visitors</li>
          <li>Loss of rental income protection</li>
          <li>Optional coverage for appliances and fixtures</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Extended coverage for natural disasters</li>
          <li>Coverage for tenant-caused damage</li>
          <li>Umbrella liability coverage</li>
          <li>Equipment breakdown or property contents coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Rented Dwelling Insurance</h2>
        <ul>
          <li>Implementing property maintenance and safety measures</li>
          <li>Bundling with other landlord or business insurance policies</li>
          <li>Maintaining a low-claims history</li>
          <li>Installing fire alarms, security systems, and safety features</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Rented Dwelling Insurance?</h2>
        <ul>
          <li>Landlords and property investors</li>
          <li>Owners of single or multi-unit rental properties</li>
          <li>Individuals renting out vacation homes or short-term rentals</li>
          <li>Property owners seeking protection for income and liability risks</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Rental Property Today</h2>
        <p>
          Morison brokers provide tailored Rented Dwelling insurance coverage,
          ensuring your rental properties are fully protected from damage, liability, and income loss.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default RentedDwellingInsurance;
