// src/Pages/Recreation/SportsTravelProtection/TravelInsurance/TravelInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./TravelInsurance.css";

const TravelInsurance = () => {
  return (
    <PageLayout
      title="Travel Insurance"
      subtitle="Comprehensive protection for trips, travel disruptions, and medical emergencies."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Travel Insurance</strong> provides peace of mind when traveling by covering medical emergencies, trip cancellations, delays, and lost belongings.
        </p>
        <p>
          Morison brokers tailor travel insurance for leisure travel, business trips, and extended international stays.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY */}
      <section>
        <h2>Why Travel Insurance Is Essential</h2>
        <p>
          Unexpected events such as illness, flight cancellations, or lost baggage can turn a trip into a costly experience.
        </p>
        <p>
          Travel insurance ensures financial protection and support wherever you travel.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Travel Insurance</h2>
        <ul>
          <li>Worldwide coverage options</li>
          <li>Emergency medical and hospitalization protection</li>
          <li>Trip cancellation and interruption coverage</li>
          <li>24/7 emergency assistance services</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Travel Insurance Coverage Options</h2>
        <ul>
          <li>Emergency medical and dental coverage</li>
          <li>Trip cancellation and trip interruption</li>
          <li>Flight delays and missed connections</li>
          <li>Lost, stolen, or delayed baggage coverage</li>
          <li>Accidental death and dismemberment coverage</li>
        </ul>
      </section>

      {/* OPTIONAL */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Coverage for pre-existing medical conditions</li>
          <li>Multi-trip annual travel plans</li>
          <li>Coverage for adventure or sports activities</li>
          <li>Extended stay and expatriate coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Travel Insurance</h2>
        <ul>
          <li>Annual multi-trip plans for frequent travelers</li>
          <li>Family or group travel discounts</li>
          <li>Early purchase discounts</li>
          <li>Bundling with other insurance policies</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Travel Insurance?</h2>
        <ul>
          <li>Leisure and business travelers</li>
          <li>International and long-term travelers</li>
          <li>Families and group travelers</li>
          <li>Adventure and sports travelers</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Travel with Confidence</h2>
        <p>
          Morison brokers ensure you are protected from departure to return, no matter where you travel.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a travel insurance quote today.
        </p>
      </section>
    </PageLayout>
  );
};

export default TravelInsurance;
