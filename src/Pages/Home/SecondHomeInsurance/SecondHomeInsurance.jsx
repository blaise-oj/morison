// src/Pages/Home/SecondHomeInsurance/SecondHomeInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // you can swap later
import "./SecondHomeInsurance.css";

const SecondHomeInsurance = () => {
  return (
    <div className="second-home-insurance-page">
    <PageLayout
      title="Second Home Insurance"
      subtitle="Specialized insurance coverage for vacation, seasonal, and secondary homes."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Tailored protection:</strong> coverage designed for homes not
          occupied year-round
        </p>
        <p>
          <strong>Vacancy-aware policies:</strong> protection that accounts for
          seasonal use
        </p>
        <p>
          <strong>Bundling options:</strong> save more when combined with your
          primary home or auto insurance
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with
          a licensed broker about Second Home Insurance today.
        </p>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Insurance Built for Seasonal & Secondary Properties</h2>
        <p>
          Second homes face different risks than primary residences — including
          extended vacancy, weather exposure, and limited monitoring.
        </p>
        <p>
          Morison Insurance works with leading insurers across Ontario to secure
          coverage designed specifically for cottages, vacation homes, and
          seasonal properties.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Second Home Insurance</h2>
        <ul>
          <li>Access to multiple insurers that specialize in seasonal homes</li>
          <li>Advice on vacancy requirements and loss prevention</li>
          <li>Licensed brokers — not automated call centers</li>
          <li>Claims advocacy when you need it most</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>Second Home Insurance Coverage Overview</h2>
        <p>
          Coverage for a second home is similar to standard home insurance but
          adjusted to reflect how often the property is occupied and maintained.
        </p>
      </section>

      {/* COVERAGE TYPES */}
      <section>
        <h3>Building Coverage</h3>
        <p>
          Protects the physical structure of your second home and attached
          structures.
        </p>
        <ul>
          <li>Main dwelling and permanent structures</li>
          <li>Attached decks and porches</li>
          <li>Fire, wind, hail, and insured perils</li>
        </ul>
      </section>

      <section>
        <h3>Contents Insurance</h3>
        <p>
          Covers personal belongings kept at your second home.
        </p>
        <ul>
          <li>Furniture and appliances</li>
          <li>Electronics and recreational equipment</li>
          <li>Seasonal or stored personal items</li>
        </ul>
      </section>

      <section>
        <h3>Personal Liability Insurance</h3>
        <p>
          Provides protection if someone is injured on your property and you are
          found legally responsible.
        </p>
        <ul>
          <li>Legal defence costs</li>
          <li>Settlements or court judgments</li>
        </ul>
      </section>

      <section>
        <h3>Water & Weather Protection</h3>
        <p>
          Seasonal properties are especially vulnerable to water damage and
          weather-related claims.
        </p>
        <ul>
          <li>Burst pipes due to freezing</li>
          <li>Sewer backup (optional)</li>
          <li>Overland water and storm damage</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Coverages for Second Homes</h3>
        <ul>
          <li>Extended vacancy coverage</li>
          <li>Outbuildings (garages, sheds, boathouses)</li>
          <li>Guaranteed Replacement Cost</li>
          <li>Personal articles & valuables</li>
        </ul>
      </section>

      {/* BUNDLING */}
      <section>
        <h2>Bundle Your Second Home & Save</h2>
        <ul>
          <li>Primary Home + Second Home</li>
          <li>Second Home + Auto Insurance</li>
          <li>Multiple Properties on One Policy</li>
          <li>Second Home + Umbrella Liability</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Second Home with Confidence</h2>
        <p>
          Whether it’s a cottage, vacation property, or seasonal residence, our
          brokers will help you secure the right coverage.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page
          to get started.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default SecondHomeInsurance;
