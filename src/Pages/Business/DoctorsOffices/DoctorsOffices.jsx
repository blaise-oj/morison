import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./DoctorsOffices.css";

const DoctorsOffices = () => {
  return (
    <div className="doctors-offices-page">
    <PageLayout
      title="Doctors' Offices Insurance"
      subtitle="Comprehensive insurance coverage for medical practices, clinics, and healthcare professionals."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Doctors' offices insurance</strong> protects medical practices from professional liability,
          property damage, patient claims, and operational risks.
        </p>
        <p>
          Morison brokers help healthcare providers secure coverage tailored to patient care,
          staff, and clinic operations.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Doctors' Offices Need Specialized Insurance</h2>
        <p>
          Medical practices face risks including malpractice claims, patient injuries, and costly equipment damage.
          Standard business insurance may not fully cover these exposures.
        </p>
        <p>
          Specialized medical insurance ensures protection for patient care, clinic property,
          staff, and professional liability.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Doctors' Offices Insurance</h2>
        <ul>
          <li>Medical Professional Liability (Malpractice) coverage</li>
          <li>Protection for clinic property, medical equipment, and staff</li>
          <li>Workers’ Compensation for employees</li>
          <li>Business Interruption Coverage</li>
          <li>Expert claims and risk management support</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Doctors' Offices Insurance Coverage Options</h2>
        <ul>
          <li>Professional Liability (Malpractice)</li>
          <li>Commercial General Liability</li>
          <li>Business Property & Contents Insurance</li>
          <li>Workers’ Compensation</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Cyber Liability & Patient Data Protection</li>
          <li>Business Interruption Coverage</li>
          <li>Medical Equipment Breakdown Protection</li>
          <li>Umbrella / Excess Liability Coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Doctors' Offices Insurance</h2>
        <ul>
          <li>Maintaining clinic safety and hygiene protocols</li>
          <li>Bundling multiple professional and business policies</li>
          <li>Maintaining a claims-free operational history</li>
          <li>Regular equipment maintenance and staff training</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Doctors' Offices Insurance?</h2>
        <ul>
          <li>Independent doctors and physicians</li>
          <li>Medical clinics and multi-doctor offices</li>
          <li>Specialized healthcare service providers</li>
          <li>Staffed medical practices offering patient care</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Medical Practice Today</h2>
        <p>
          Morison brokers provide tailored insurance coverage for doctors' offices,
          ensuring patients, staff, and property are fully protected.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default DoctorsOffices;
