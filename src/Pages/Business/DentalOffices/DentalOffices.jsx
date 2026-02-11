import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./DentalOffices.css";

const DentalOffices = () => {
  return (
    <div className="dental-offices-page">
    <PageLayout
      title="Dental Offices Insurance"
      subtitle="Comprehensive insurance coverage for dental practices, clinics, and oral health professionals."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Dental offices insurance</strong> protects dental practices from professional liability,
          property damage, workplace incidents, and operational risks.
        </p>
        <p>
          Morison brokers help dental offices secure coverage tailored to patient care,
          equipment, and clinic operations.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Dental Offices Need Specialized Insurance</h2>
        <p>
          Dental practices face unique risks, including malpractice claims, patient injuries,
          and costly equipment damage. Standard business insurance may not fully cover these exposures.
        </p>
        <p>
          Specialized dental insurance ensures protection for patient care, clinic property,
          staff, and professional liability.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Dental Offices Insurance</h2>
        <ul>
          <li>Professional Liability (Malpractice) coverage</li>
          <li>Protection for clinic property and equipment</li>
          <li>Workers’ Compensation for staff</li>
          <li>Business Interruption Coverage</li>
          <li>Expert claims and risk management support</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Dental Offices Insurance Coverage Options</h2>
        <ul>
          <li>Professional Liability (Malpractice)</li>
          <li>Commercial General Liability</li>
          <li>Business Property & Contents Insurance</li>
          <li>Workers’ Compensation (if employing staff)</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Cyber Liability & Patient Data Protection</li>
          <li>Business Interruption Coverage</li>
          <li>Equipment Breakdown Protection</li>
          <li>Umbrella / Excess Liability Coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Dental Offices Insurance</h2>
        <ul>
          <li>Maintaining clinic safety and sterilization protocols</li>
          <li>Bundling multiple professional and business policies</li>
          <li>Maintaining a claims-free operational history</li>
          <li>Regular equipment maintenance and staff training</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Dental Offices Insurance?</h2>
        <ul>
          <li>Independent dental practitioners</li>
          <li>Dental clinics and multi-dentist offices</li>
          <li>Specialized oral health service providers</li>
          <li>Staffed dental practices offering patient care</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Dental Practice Today</h2>
        <p>
          Morison brokers provide tailored insurance coverage for dental offices,
          ensuring your patients, staff, and property are fully protected.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default DentalOffices;
