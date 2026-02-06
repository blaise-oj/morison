// src/Pages/Home/GardenInsurance/GardenInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // swap to garden/landscaping image later
import "./GardenInsurance.css";

const GardenInsurance = () => {
  return (
    <PageLayout
      title="Garden Insurance"
      subtitle="Protect your outdoor spaces, landscaping, and garden equipment from unexpected damage."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Peace of mind for your garden:</strong> coverage for plants, landscaping, and structures
        </p>
        <p>
          <strong>Protection from risks:</strong> fire, theft, vandalism, storm damage, and more
        </p>
        <p>
          <strong>Equipment coverage:</strong> optional protection for tools, irrigation systems, and outdoor furniture
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with
          a licensed broker about Garden Insurance today.
        </p>
      </section>

      {/* WHY GARDEN INSURANCE */}
      <section>
        <h2>Why Garden Insurance Matters</h2>
        <p>
          Your garden, landscaping, and outdoor structures are a valuable part of your home.
          Standard home insurance may not fully cover them. Garden insurance ensures your outdoor investment is protected.
        </p>
        <p>
          Morison Insurance helps tailor policies to cover plants, trees, outdoor structures, and landscaping equipment.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Garden Insurance</h2>
        <ul>
          <li>Protection for plants, trees, and shrubs</li>
          <li>Coverage for fences, decks, and garden structures</li>
          <li>Optional equipment coverage for tools and irrigation systems</li>
          <li>Flexible add-ons to suit your outdoor lifestyle</li>
        </ul>
      </section>

      {/* COVERAGE TYPES */}
      <section>
        <h3>Plant & Landscaping Protection</h3>
        <p>
          Covers damage or loss to plants, trees, shrubs, lawns, and gardens caused by insured perils.
        </p>
        <ul>
          <li>Storm or wind damage</li>
          <li>Fire or lightning</li>
          <li>Theft or vandalism</li>
          <li>Accidental damage</li>
        </ul>
      </section>

      <section>
        <h3>Garden Structures & Features</h3>
        <p>
          Protects outdoor structures such as decks, gazebos, pergolas, and fences.
        </p>
        <ul>
          <li>Damage from weather events</li>
          <li>Vandalism or accidental damage</li>
          <li>Fire or lightning</li>
        </ul>
      </section>

      <section>
        <h3>Garden Equipment & Tools</h3>
        <p>
          Optional coverage for garden tools, irrigation systems, and outdoor equipment.
        </p>
        <ul>
          <li>Lawnmowers and garden tools</li>
          <li>Irrigation and sprinkler systems</li>
          <li>Portable outdoor furniture and accessories</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Enhancements</h3>
        <ul>
          <li>Extended coverage for high-value plants or trees</li>
          <li>Seasonal protection for flowers and shrubs</li>
          <li>Equipment breakdown coverage</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Outdoor Investment</h2>
        <p>
          Ensure your garden, landscaping, and equipment are fully covered against unexpected events.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page to get started today.
        </p>
      </section>
    </PageLayout>
  );
};

export default GardenInsurance;
