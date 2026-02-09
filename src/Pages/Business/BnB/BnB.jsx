import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./BnB.css";

const BnB = () => {
  return (
    <PageLayout
      title="B&B Insurance"
      subtitle="Tailored insurance coverage for bed and breakfast owners and small hospitality businesses."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>B&B insurance</strong> provides protection for bed and breakfast owners
          against property damage, liability, guest injuries, and business interruption.
        </p>
        <p>
          Morison brokers help B&B operators secure coverage that safeguards guests, property,
          and revenue streams.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why B&Bs Need Specialized Insurance</h2>
        <p>
          Bed and breakfast businesses face unique risks such as guest accidents,
          property damage, and liability for food services. Standard commercial insurance
          may not cover these hospitality-specific exposures.
        </p>
        <p>
          Specialized B&B insurance ensures comprehensive protection for owners, staff,
          and guests.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for B&B Insurance</h2>
        <ul>
          <li>Coverage for guest injuries and liability claims</li>
          <li>Protection for property, furnishings, and equipment</li>
          <li>Business interruption and loss of income coverage</li>
          <li>Expert claims support and risk management advice</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>B&B Insurance Coverage Options</h2>
        <ul>
          <li>Commercial Property Insurance</li>
          <li>General Liability Insurance</li>
          <li>Business Interruption Coverage</li>
          <li>Workers’ Compensation (if employing staff)</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Food Liability Insurance</li>
          <li>Cyber Liability for booking systems</li>
          <li>Umbrella / Excess Liability Coverage</li>
          <li>Equipment Breakdown Protection</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on B&B Insurance</h2>
        <ul>
          <li>Maintaining safety and fire protection measures</li>
          <li>Bundling multiple business policies</li>
          <li>Claims-free operating history</li>
          <li>Security and monitoring systems for guest safety</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider B&B Insurance?</h2>
        <ul>
          <li>Independent bed and breakfast owners</li>
          <li>Small inns and guesthouses</li>
          <li>Vacation rental operators providing hospitality services</li>
          <li>Hospitality entrepreneurs managing overnight accommodations</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your B&B Today</h2>
        <p>
          Morison brokers ensure bed and breakfast operators have insurance coverage
          that protects guests, property, and revenue, giving peace of mind.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default BnB;
