// src/Pages/Home/HomeDaycareInsurance/HomeDaycareInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // swap to daycare / home business image later
import "./HomeDaycareInsurance.css";

const HomeDaycareInsurance = () => {
  return (
      <div className="home-daycare-insurance-page">
    <PageLayout
      title="Home Daycare Insurance"
      subtitle="Specialized insurance coverage for licensed and unlicensed home daycare providers."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Specialized liability coverage:</strong> protection for children in your care
        </p>
        <p>
          <strong>Property & equipment protection:</strong> covers toys, learning materials, and daycare equipment
        </p>
        <p>
          <strong>Compliant coverage:</strong> meets insurer and regulatory requirements for home daycare operations
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with
          a licensed broker about Home Daycare Insurance today.
        </p>
      </section>

      {/* WHY IT MATTERS */}
      <section>
        <h2>Why Home Daycare Insurance Matters</h2>
        <p>
          Operating a daycare from your home significantly increases your liability risk.
          Standard home insurance policies typically exclude business activities,
          including childcare services.
        </p>
        <p>
          Home Daycare Insurance ensures you are protected against liability claims,
          property damage, and unexpected incidents involving children in your care.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Home Daycare Insurance</h2>
        <ul>
          <li>Coverage tailored for in-home childcare providers</li>
          <li>Protection for both licensed and unlicensed daycares</li>
          <li>Liability, property, and equipment coverage options</li>
          <li>Experienced brokers who understand daycare risks</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>What Does Home Daycare Insurance Cover?</h2>
        <p>
          Coverage is designed to protect you, your property, and the children
          in your care from unexpected events.
        </p>
      </section>

      {/* COVERAGE TYPES */}
      <section>
        <h3>Liability Coverage</h3>
        <ul>
          <li>Injury to children while in your care</li>
          <li>Legal defence and settlement costs</li>
          <li>Accidental property damage caused during daycare activities</li>
        </ul>
      </section>

      <section>
        <h3>Property & Contents Coverage</h3>
        <ul>
          <li>Daycare equipment and furniture</li>
          <li>Toys, learning materials, and supplies</li>
          <li>Damage caused by fire, water, or theft</li>
        </ul>
      </section>

      <section>
        <h3>Business Interruption Coverage</h3>
        <p>
          Optional coverage to help replace lost income if your daycare
          must temporarily close due to an insured loss.
        </p>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Coverage Enhancements</h3>
        <ul>
          <li>Higher liability limits</li>
          <li>Abuse and molestation coverage (where applicable)</li>
          <li>Equipment breakdown coverage</li>
          <li>Additional insured endorsements</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Home Daycare</h2>
        <p>
          Running a daycare is a big responsibility. Make sure your insurance
          protects both your livelihood and the children you care for.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page to get started.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default HomeDaycareInsurance;
