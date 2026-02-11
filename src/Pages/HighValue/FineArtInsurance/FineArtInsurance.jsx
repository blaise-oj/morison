// src/Pages/HighValue/Valuables/FineArtInsurance/FineArtInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // Hero image as requested
import "./FineArtInsurance.css";

const FineArtInsurance = () => {
  return (
      <div className="fine-art-insurance-page">
    <PageLayout
      title="Fine Art Insurance"
      subtitle="Protect your valuable art collection with specialized insurance coverage."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Fine Art Insurance</strong> provides comprehensive coverage for paintings, sculptures, antiques, and other valuable art pieces against theft, damage, or loss.
        </p>
        <p>
          Morison brokers offer tailored policies for collectors, galleries, and high-net-worth individuals to ensure every piece is protected.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or fill out our form to speak with a licensed art insurance broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Fine Art Requires Specialized Insurance</h2>
        <p>
          Art collections are often irreplaceable and extremely valuable. Standard insurance may not cover restoration costs, transit, or exhibition risks.
        </p>
        <p>
          Our policies ensure full coverage for loss, damage, and specialized handling or transportation.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Fine Art Insurance</h2>
        <ul>
          <li>Coverage for paintings, sculptures, antiques, and collectibles</li>
          <li>Worldwide protection, including in transit and exhibitions</li>
          <li>Optional appraisal and valuation updates</li>
          <li>Protection against accidental damage, theft, or deterioration</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Fine Art Insurance Coverage Options</h2>
        <ul>
          <li>Theft, loss, and accidental damage coverage</li>
          <li>Transit and exhibition protection</li>
          <li>Restoration and repair coverage</li>
          <li>Optional coverage for private and corporate collections</li>
          <li>Worldwide claims support</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Extended transit protection for shipping or exhibitions</li>
          <li>Appraisal updates and valuation protection</li>
          <li>Environmental risk coverage (fire, water, humidity)</li>
          <li>Coverage for loaned or consigned artworks</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Fine Art Insurance</h2>
        <ul>
          <li>Bundle with other high-value insurance policies</li>
          <li>Enhanced security and monitoring discounts</li>
          <li>Claims-free history discounts</li>
          <li>Regular appraisals for accurate valuation</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Fine Art Insurance?</h2>
        <ul>
          <li>Private collectors of high-value art</li>
          <li>Gallery owners and museums</li>
          <li>High-net-worth individuals with rare or valuable pieces</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Art Collection Today</h2>
        <p>
          Morison brokers provide full insurance coverage tailored to the value and uniqueness of your art collection.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default FineArtInsurance;
