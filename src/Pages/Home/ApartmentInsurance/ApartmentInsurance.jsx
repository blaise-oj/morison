import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import apartmentHero from "../../../assets/apartmenthero.jpg"; // use a different image

const ApartmentInsurance = () => {
  return (
    <PageLayout
      title="Apartment Insurance Ontario"
      subtitle="Protect your personal belongings with customized apartment insurance coverage."
      image={apartmentHero}
    >
      {/* INTRO */}
      <h2>Apartment Insurance Ontario</h2>
      <p>
        Apartment living offers flexibility, affordability, and fewer
        responsibilities compared to owning a home. However, while your
        landlord insures the building itself, your personal belongings,
        liability, and living expenses are your responsibility.
      </p>

      <p>
        Apartment insurance — also known as tenant insurance — ensures you are
        financially protected if something unexpected happens.
      </p>

      {/* KEY BENEFITS */}
      <h2>Why Get Apartment Insurance?</h2>
      <ul>
        <li>Protect your contents including electronics, furniture, and appliances</li>
        <li>Coverage for personal liability claims</li>
        <li>Protection for additional living expenses</li>
        <li>Competitive quotes and personalized coverage options</li>
        <li>Prompt, professional, and personal service</li>
      </ul>

      {/* WHAT IT IS */}
      <h2>What Is Apartment Insurance?</h2>
      <p>
        While your landlord is responsible for insuring the physical building,
        their policy does not protect your personal belongings or liability.
        Apartment insurance fills this gap.
      </p>

      <p>
        For example, if a fire damages your apartment, your landlord’s insurance
        covers the structure — but without apartment insurance, you would be
        responsible for replacing your belongings and paying for temporary
        accommodation.
      </p>

      {/* WHO NEEDS IT */}
      <h2>Who Needs Apartment Insurance?</h2>
      <p>
        Anyone renting an apartment, basement unit, or rental property can
        benefit from apartment insurance. It protects you from unexpected
        financial losses and legal claims, even those that may be unfounded.
      </p>

      {/* MANDATORY */}
      <h2>Is Apartment Insurance Mandatory in Ontario?</h2>
      <p>
        Apartment insurance is not legally mandatory in Ontario. However, many
        landlords require tenants to carry insurance as part of their lease
        agreement.
      </p>

      <p>
        Without coverage, you may face limited rental options and significant
        financial risk in the event of a loss.
      </p>

      {/* COVERAGE */}
      <h2>What Does Apartment Insurance Cover?</h2>
      <ul>
        <li><strong>Personal Property Coverage</strong> – protects your belongings from insured perils</li>
        <li><strong>Additional Living Expenses</strong> – covers temporary housing if your unit becomes unlivable</li>
        <li><strong>Personal Liability Coverage</strong> – protects you against legal claims</li>
        <li><strong>Voluntary Medical & Property Damage</strong></li>
        <li><strong>Sewer Backup Coverage</strong> (optional)</li>
        <li><strong>Overland Water Coverage</strong> (optional)</li>
      </ul>

      {/* NOT COVERED */}
      <h2>What Is Not Covered?</h2>
      <ul>
        <li>Intentional damage</li>
        <li>Wear and tear</li>
        <li>Poor maintenance by the tenant</li>
        <li>Certain natural disasters (e.g. earthquakes)</li>
        <li>Roommates not listed on the policy</li>
      </ul>

      {/* COST */}
      <h2>How Much Does Apartment Insurance Cost?</h2>
      <p>
        Apartment insurance is affordable and often costs less than $60 per
        month. Pricing depends on several factors including location, coverage
        level, claims history, and building condition.
      </p>

      {/* SAVINGS */}
      <h2>How Can I Lower My Apartment Insurance Cost?</h2>
      <ul>
        <li>Increase your deductible</li>
        <li>Avoid small claims</li>
        <li>Maintain continuous coverage</li>
        <li>Improve your credit score</li>
        <li>Bundle with car insurance</li>
      </ul>

      {/* CTA */}
      <h2>Get Your Apartment Insurance Quote Today</h2>
      <p>
        Morison Insurance has been providing trusted insurance solutions for
        over a century. Speak with one of our licensed brokers today to get
        coverage that fits your needs.
      </p>

      <p>
        <strong>Call:</strong> 1-800-463-8074 <br />
        <strong>Or complete the form below to get your quote in minutes.</strong>
      </p>
    </PageLayout>
  );
};

export default ApartmentInsurance;
