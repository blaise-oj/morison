import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./Carpenters.css";

const Carpenters = () => {
  return (
    <PageLayout
      title="Carpenters Insurance"
      subtitle="Comprehensive insurance coverage for carpenters, joiners, and woodworking professionals."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Carpenters insurance</strong> protects carpenters and woodworking businesses
          from property damage, liability, workplace injuries, and equipment loss.
        </p>
        <p>
          Morison brokers help carpenters secure coverage tailored to workshops,
          on-site projects, and staff safety.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Carpenters Need Specialized Insurance</h2>
        <p>
          Carpenters face risks including tool-related injuries, property damage,
          and client liability claims. Standard business insurance may not cover
          all woodworking-specific exposures.
        </p>
        <p>
          Specialized coverage protects against workplace accidents, equipment loss,
          and project-related liabilities.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Carpenters Insurance</h2>
        <ul>
          <li>Coverage tailored to woodworking and carpentry businesses</li>
          <li>Protection against on-site accidents and client liability</li>
          <li>Tools and workshop equipment insurance</li>
          <li>Expert support for claims and risk management</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Carpenters Insurance Coverage Options</h2>
        <ul>
          <li>Commercial General Liability</li>
          <li>Workers’ Compensation</li>
          <li>Tools & Equipment Insurance</li>
          <li>Business Property & Contents Insurance</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Professional Liability (for design or consulting work)</li>
          <li>Contractor’s Equipment Breakdown Protection</li>
          <li>Business Interruption Coverage</li>
          <li>Umbrella / Excess Liability Coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Carpenters Insurance</h2>
        <ul>
          <li>Implementing proper workshop safety measures</li>
          <li>Bundling multiple business policies</li>
          <li>Maintaining claims-free operating history</li>
          <li>Training staff on tools and risk management</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Carpenters Insurance?</h2>
        <ul>
          <li>Independent carpenters and joiners</li>
          <li>Small woodworking shops</li>
          <li>Contractors providing custom woodworking services</li>
          <li>Staffed carpentry and construction businesses</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Carpentry Business Today</h2>
        <p>
          Morison brokers provide tailored insurance solutions for carpenters,
          ensuring your business, staff, and clients are fully protected.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default Carpenters;
