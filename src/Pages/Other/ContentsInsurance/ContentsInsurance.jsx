import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./ContentsInsurance.css";

const ContentsInsurance = () => {
  return (
    <div className="contents-insurance-page">
    <PageLayout
      title="Contents Insurance Coverage"
      subtitle="Protecting your personal belongings against loss, damage, or theft."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Contents insurance coverage</strong> protects your personal
          belongings inside your home, including furniture, electronics,
          clothing, and valuables, against covered risks such as fire, theft,
          and water damage.
        </p>
        <p>
          Whether you own or rent your home, contents insurance helps ensure
          you can replace what matters most after an unexpected loss.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section>
        <h2>Why Contents Insurance Is Important</h2>
        <p>
          Many people underestimate the total value of their personal belongings.
          Replacing everyday items after a loss can be surprisingly expensive.
        </p>
        <p>
          Contents insurance provides financial protection and peace of mind,
          helping you recover quickly without significant out-of-pocket costs.
        </p>
      </section>

      {/* WHAT IT COVERS */}
      <section>
        <h2>What Contents Insurance Covers</h2>
        <ul>
          <li>Furniture and household items</li>
          <li>Electronics and appliances</li>
          <li>Clothing and personal effects</li>
          <li>Jewellery and valuables (within policy limits)</li>
          <li>Theft, fire, vandalism, and certain water damage</li>
        </ul>
      </section>

      {/* OPTIONAL ENHANCEMENTS */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Scheduled coverage for high-value items</li>
          <li>Replacement cost coverage</li>
          <li>Identity theft protection</li>
          <li>Off-premises contents coverage</li>
        </ul>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Why Choose Morison for Contents Insurance</h2>
        <ul>
          <li>Personalized coverage based on your lifestyle</li>
          <li>Access to trusted insurers with flexible options</li>
          <li>Expert advice on protecting high-value belongings</li>
          <li>Dedicated claims support when you need it most</li>
        </ul>
      </section>

      {/* WHO NEEDS IT */}
      <section>
        <h2>Who Should Consider Contents Insurance?</h2>
        <ul>
          <li>Homeowners and condominium owners</li>
          <li>Tenants and renters</li>
          <li>Landlords furnishing rental properties</li>
          <li>Anyone with valuable personal belongings</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect What Matters Most</h2>
        <p>
          Contents insurance helps safeguard your belongings and financial
          security after unexpected events.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default ContentsInsurance;
