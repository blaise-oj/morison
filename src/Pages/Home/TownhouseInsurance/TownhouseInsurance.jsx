// TownhouseInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./TownhouseInsurance.css";

const TownhouseInsurance = () => {
  return (
    <div className="townhouse-insurance-page">
      <PageLayout
        title="Townhouse Insurance in Kenya"
        subtitle="Comprehensive protection for your townhouse, belongings, and liability."
        headerClass="hero"
      >

        {/* Key Features */}
        <section className="insurance-features">
          <ul>
            <li><strong>Full building coverage:</strong> Protects both structure and contents</li>
            <li><strong>Flexible premiums:</strong> Monthly or annual payment options</li>
            <li><strong>Fast claims support:</strong> Dedicated assistance when you need it</li>
          </ul>
        </section>

        {/* Introduction */}
        <section className="insurance-intro">
          <h2>Protect Your Townhouse Investment</h2>
          <p>
            Owning a townhouse in Kenya comes with greater responsibility than a condo. 
            You are typically responsible for both the structure and your personal belongings. 
            Morison Insurance helps you compare competitive quotes from trusted Kenyan insurers 
            to ensure your property is fully protected against unexpected risks.
          </p>
        </section>

        {/* Why Choose Morison */}
        <section className="why-choose">
          <h2>Why Choose Morison for Townhouse Insurance?</h2>
          <ul>
            <li>Access to Leading Kenyan Insurance Providers</li>
            <li>Tailored Coverage Based on Property Value</li>
            <li>Professional Risk Assessment Advice</li>
            <li>Dedicated Claims Assistance</li>
          </ul>
          <p>
            We work on your behalf to compare policies, explain coverage clearly, and ensure 
            you get the right protection at a competitive premium. In case of damage or loss, 
            we guide you through the claims process from start to finish.
          </p>
        </section>

        {/* Coverage Details */}
        <section className="coverage-details">
          <h2>What Townhouse Insurance Covers</h2>
          <ul>
            <li>Building structure (walls, roof, floors, fixtures)</li>
            <li>Personal belongings (furniture, electronics, appliances)</li>
            <li>Fire, theft, lightning, and power surge damage</li>
            <li>Flood and water damage (optional add-on)</li>
            <li>Public liability if someone is injured on your property</li>
            <li>Alternative accommodation if your home becomes uninhabitable</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="insurance-faq">
          <h2>Frequently Asked Questions</h2>

          <p>
            <strong>Is townhouse insurance mandatory in Kenya?</strong><br />
            While not legally mandatory, lenders and mortgage providers often require it. 
            It is strongly recommended to protect your investment.
          </p>

          <p>
            <strong>How much does townhouse insurance cost?</strong><br />
            Premiums typically start from KES 15,000 – KES 60,000 annually, 
            depending on the value of the property, location, and coverage options.
          </p>

          <p>
            <strong>Does it cover rental townhouses?</strong><br />
            Yes. We offer coverage options for both owner-occupied and rented townhouses.
          </p>
        </section>

        {/* CTA */}
        <section className="insurance-cta">
          <h2>Ready to Protect Your Townhouse?</h2>
          <p>
            Get a fast, no-obligation quote from trusted Kenyan insurers today.
          </p>
          <p>
            Call +1 343 512 7761 or request a quote online to get started.
          </p>
        </section>

      </PageLayout>
    </div>
  );
};

export default TownhouseInsurance;
