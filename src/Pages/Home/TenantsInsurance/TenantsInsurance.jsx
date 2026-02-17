import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./TenantsInsurance.css";

const TenantsInsurance = () => {
  return (
    <div className="tenants-insurance-page">
      <PageLayout
        title="Tenants (Renters) Insurance in Kenya"
        subtitle="Affordable protection for your belongings and personal liability while renting."
        headerClass="hero"
      >

        {/* Key Features */}
        <section className="insurance-features">
          <ul>
            <li><strong>Contents protection:</strong> Covers your personal belongings</li>
            <li><strong>Personal liability:</strong> Protection if someone is injured in your rented home</li>
            <li><strong>Affordable premiums:</strong> Budget-friendly coverage options</li>
          </ul>
        </section>

        {/* Introduction */}
        <section className="insurance-intro">
          <h2>Protect What’s Yours — Even If You Don’t Own the Property</h2>
          <p>
            If you are renting an apartment, bedsitter, townhouse, or house in Kenya, 
            your landlord’s insurance does not cover your personal belongings. 
            Tenants Insurance ensures your furniture, electronics, clothes, and valuables 
            are protected against unexpected events like fire, theft, or water damage.
          </p>
        </section>

        {/* Why Choose Morison */}
        <section className="why-choose">
          <h2>Why Choose Morison for Renters Insurance?</h2>
          <ul>
            <li>Access to Trusted Kenyan Insurance Providers</li>
            <li>Simple & Fast Quote Process</li>
            <li>Clear Coverage Explanations</li>
            <li>Dedicated Claims Support</li>
          </ul>
          <p>
            Our team helps you choose the right level of protection based on the value 
            of your belongings and your budget. We ensure you understand exactly 
            what is covered before you commit.
          </p>
        </section>

        {/* Coverage Details */}
        <section className="coverage-details">
          <h2>What Tenants Insurance Covers</h2>
          <ul>
            <li>Furniture, electronics, appliances, and clothing</li>
            <li>Protection against fire, theft, and burglary</li>
            <li>Lightning and power surge damage</li>
            <li>Water damage (optional add-on)</li>
            <li>Personal liability if you accidentally cause damage to the property</li>
            <li>Temporary accommodation if your rented home becomes uninhabitable</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="insurance-faq">
          <h2>Frequently Asked Questions</h2>

          <p>
            <strong>Is tenants insurance mandatory in Kenya?</strong><br />
            It is not legally required, but some landlords may request proof of coverage.
            It is strongly recommended to protect your belongings.
          </p>

          <p>
            <strong>How much does tenants insurance cost in Kenya?</strong><br />
            Premiums typically start from KES 5,000 – KES 20,000 annually,
            depending on the value of your contents and coverage selected.
          </p>

          <p>
            <strong>Does my landlord’s insurance cover my belongings?</strong><br />
            No. The landlord’s policy covers the building structure only.
            Your personal items require separate coverage.
          </p>
        </section>

        {/* CTA */}
        <section className="insurance-cta">
          <h2>Ready to Protect Your Belongings?</h2>
          <p>
            Get a quick, no-obligation quote from trusted Kenyan insurers today.
          </p>
          <p>
            Call +1 343 512 7761 or request your quote online.
          </p>
        </section>

      </PageLayout>
    </div>
  );
};

export default TenantsInsurance;
