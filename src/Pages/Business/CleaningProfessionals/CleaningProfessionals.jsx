import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./CleaningProfessionals.css";

const CleaningProfessionals = () => {
  return (
    <div className="cleaning-professionals-page">
    <PageLayout
      title="Cleaning Professionals Insurance"
      subtitle="Tailored insurance coverage for cleaning services, janitorial businesses, and housekeeping professionals."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Cleaning professionals insurance</strong> protects cleaning businesses
          from property damage, liability claims, and business interruptions.
        </p>
        <p>
          Morison brokers help cleaning service providers secure coverage for staff,
          equipment, and client properties.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Cleaning Professionals Need Specialized Insurance</h2>
        <p>
          Cleaning professionals face risks such as slip-and-fall accidents, property
          damage, and employee injuries. Standard business insurance may not cover
          these service-specific exposures.
        </p>
        <p>
          Specialized insurance ensures protection for both clients and staff while
          safeguarding your business operations.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Cleaning Professionals Insurance</h2>
        <ul>
          <li>Liability coverage for property damage and accidents</li>
          <li>Protection for cleaning equipment and supplies</li>
          <li>Workers’ Compensation for employees</li>
          <li>Expert claims support and risk management guidance</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Cleaning Professionals Insurance Coverage Options</h2>
        <ul>
          <li>Commercial General Liability</li>
          <li>Workers’ Compensation</li>
          <li>Business Property & Contents Insurance</li>
          <li>Equipment & Supplies Insurance</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Professional Liability (for client service errors)</li>
          <li>Business Interruption Coverage</li>
          <li>Cyber Liability (for online bookings and payments)</li>
          <li>Umbrella / Excess Liability Coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Cleaning Professionals Insurance</h2>
        <ul>
          <li>Implementing safety and training protocols</li>
          <li>Bundling multiple business policies</li>
          <li>Maintaining claims-free operational history</li>
          <li>Using high-quality equipment and protective gear</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Cleaning Professionals Insurance?</h2>
        <ul>
          <li>Independent cleaners and housekeeping professionals</li>
          <li>Janitorial service providers</li>
          <li>Commercial and residential cleaning companies</li>
          <li>Staffed cleaning businesses handling client properties</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Cleaning Business Today</h2>
        <p>
          Morison brokers provide tailored insurance coverage for cleaning professionals,
          ensuring clients, staff, and business operations are fully protected.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default CleaningProfessionals;
