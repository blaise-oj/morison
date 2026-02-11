// CondoInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // replace with your actual hero image
import "./TownhouseInsurance.css";

const TownhouseInsurance = () => {
  return (
      <div className="townhouse-insurance-page">
    <PageLayout
      title="Condo Insurance in Ontario"
      subtitle="Our brokers compare Canada's top insurers to find customized condo coverage for you."
      headerClass="hero"
    >
      {/* Key Features */}
      <section className="insurance-features">
        <ul>
          <li><strong>Personalized coverage:</strong> Comprehensive protection that fits your life</li>
          <li><strong>Claims advocacy:</strong> On-your-side support when it matters</li>
          <li><strong>Bundle options:</strong> Bigger savings when you combine home + auto + extras</li>
        </ul>
      </section>

      {/* Introduction */}
      <section className="insurance-intro">
        <h2>Compare Quotes and Save Money with Morison</h2>
        <p>
          Protecting your condo investment starts with the right insurance coverage. At Morison Insurance, our dedicated brokers compare quotes from dozens of Canada's leading insurers to find comprehensive protection tailored to your needs. Whether you own a high-rise unit or a townhouse-style condo, we'll ensure you get competitive rates and coverage that fits your lifestyle.
        </p>
      </section>

      {/* Why Choose Morison */}
      <section className="why-choose">
        <h2>Why Choose Morison for Your Condo Insurance?</h2>
        <ul>
          <li>4,600+ 5-Star Reviews</li>
          <li>Ontario Brokerage of the Year</li>
          <li>Dozens of Insurer Partners</li>
          <li>Dedicated Brokers & In-House Claims Team</li>
        </ul>
        <p>
          Our team of dedicated insurance brokers works exclusively for you, not the insurance companies. We compare coverage options from multiple insurers, negotiate on your behalf, and provide ongoing support. With our in-house claims team, you'll have expert advocates when you need them most.
        </p>
      </section>

      {/* Coverage Details */}
      <section className="coverage-details">
        <h2>What Condo Insurance Covers</h2>
        <ul>
          <li>Unit betterments and improvements</li>
          <li>Personal belongings, including storage items</li>
          <li>Additional living expenses if your condo is uninhabitable</li>
          <li>Personal liability for damage or injury to others</li>
          <li>Optional add-ons: Sewer Backup, Overland Flood, Earthquake, Identity Theft, Unit Improvements, Classic Coverage</li>
        </ul>
      </section>

      {/* FAQ / Tips */}
      <section className="insurance-faq">
        <h2>Frequently Asked Questions</h2>
        <p><strong>Do I need condo insurance?</strong> While not legally required, condo insurance protects your investment, belongings, and liability.</p>
        <p><strong>What does it cost?</strong> Typical annual cost ranges from $500–$1,200 depending on coverage, location, and unit type.</p>
        <p><strong>Is condo insurance enough if my corporation has a master policy?</strong> No, the corporation covers the building structure and common areas, not your personal unit or belongings.</p>
      </section>

      {/* CTA Section */}
      <section className="insurance-cta">
        <h2>Ready to Protect Your Condo?</h2>
        <p>Compare quotes from Ontario's leading insurers and get personalized coverage today.</p>
        <p>Call 1-800-463-8074 or fill out the form to get started.</p>
      </section>
    </PageLayout>
    </div>
  );
};

export default TownhouseInsurance;
