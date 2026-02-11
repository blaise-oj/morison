import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./Chiropractors.css";

const Chiropractors = () => {
  return (
    <div className="chiropractors-page">
    <PageLayout
      title="Chiropractors Insurance"
      subtitle="Comprehensive insurance coverage for chiropractors and spinal care professionals."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Chiropractors insurance</strong> provides protection for chiropractic clinics,
          practitioners, and staff against professional liability, property damage, and business risks.
        </p>
        <p>
          Morison brokers help chiropractors secure coverage tailored to patient care,
          clinic operations, and professional services.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Chiropractors Need Specialized Insurance</h2>
        <p>
          Chiropractors handle patient care that carries potential risks for injury claims,
          professional liability, and regulatory scrutiny. Standard business insurance may not
          fully cover these specialized risks.
        </p>
        <p>
          Specialized insurance ensures protection against malpractice claims, clinic liability,
          and property or equipment damage.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Chiropractors Insurance</h2>
        <ul>
          <li>Professional liability coverage for patient care</li>
          <li>Protection for clinic property, equipment, and staff</li>
          <li>Business interruption coverage for clinic operations</li>
          <li>Expert claims and risk management support</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Chiropractors Insurance Coverage Options</h2>
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
          <li>Cyber Liability & Data Protection</li>
          <li>Business Interruption Coverage</li>
          <li>Umbrella / Excess Liability Coverage</li>
          <li>Equipment Breakdown Protection</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Chiropractors Insurance</h2>
        <ul>
          <li>Implementing clinic safety protocols</li>
          <li>Maintaining patient documentation and compliance</li>
          <li>Bundling multiple professional and business policies</li>
          <li>Maintaining a claims-free operating history</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Chiropractors Insurance?</h2>
        <ul>
          <li>Independent chiropractors</li>
          <li>Chiropractic clinics and wellness centers</li>
          <li>Staffed practices offering spinal care services</li>
          <li>Mobile chiropractic service providers</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Chiropractic Practice Today</h2>
        <p>
          Morison brokers provide tailored insurance coverage for chiropractors,
          ensuring professional, operational, and property risks are fully managed.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default Chiropractors;
