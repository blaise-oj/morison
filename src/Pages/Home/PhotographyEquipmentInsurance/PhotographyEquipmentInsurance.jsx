// src/Pages/Home/PhotographyEquipmentInsurance/PhotographyEquipmentInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // swap to camera / photography image later
import "./PhotographyEquipmentInsurance.css";

const PhotographyEquipmentInsurance = () => {
  return (
    <PageLayout
      title="Photography Equipment Insurance"
      subtitle="Specialized protection for cameras, lenses, and professional photography gear."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Specialized equipment coverage:</strong> protects cameras, lenses, and accessories
        </p>
        <p>
          <strong>Worldwide protection:</strong> coverage at home, on location, or while travelling
        </p>
        <p>
          <strong>Professional & hobbyist friendly:</strong> coverage for personal or business use
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with
          a licensed broker about Photography Equipment Insurance today.
        </p>
      </section>

      {/* WHY IT MATTERS */}
      <section>
        <h2>Why Photography Equipment Insurance Matters</h2>
        <p>
          Photography equipment is expensive, delicate, and often used outside
          the home. Standard home insurance policies typically have low limits
          or exclusions for professional or high-value equipment.
        </p>
        <p>
          Dedicated Photography Equipment Insurance ensures your gear is protected
          against theft, accidental damage, or loss — wherever you are.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Photography Equipment Insurance</h2>
        <ul>
          <li>Coverage tailored to photography equipment</li>
          <li>Protection against theft, loss, and accidental damage</li>
          <li>Worldwide coverage options</li>
          <li>Flexible limits for growing gear collections</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>What Does Photography Equipment Insurance Cover?</h2>
        <p>
          Coverage protects your photography gear against sudden and unexpected
          loss or damage.
        </p>
      </section>

      {/* COVERED ITEMS */}
      <section>
        <h3>Covered Equipment</h3>
        <ul>
          <li>Cameras (DSLR, mirrorless, film)</li>
          <li>Lenses and lens accessories</li>
          <li>Lighting equipment and flashes</li>
          <li>Tripods, stabilizers, and mounts</li>
          <li>Memory cards and essential accessories</li>
        </ul>
      </section>

      {/* COVERED RISKS */}
      <section>
        <h3>Covered Risks</h3>
        <ul>
          <li>Theft or loss</li>
          <li>Accidental damage</li>
          <li>Fire and water damage</li>
          <li>Damage during transport or travel</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Coverage Enhancements</h3>
        <ul>
          <li>Replacement cost coverage</li>
          <li>Worldwide travel coverage</li>
          <li>Professional use endorsements</li>
          <li>Higher limits for studio or commercial gear</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Photography Gear</h2>
        <p>
          Whether you're a professional photographer or a passionate hobbyist,
          ensure your valuable equipment is properly protected.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page to get started.
        </p>
      </section>
    </PageLayout>
  );
};

export default PhotographyEquipmentInsurance;
