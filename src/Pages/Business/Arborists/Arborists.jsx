import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./Arborists.css";

const Arborists = () => {
  return (
    <PageLayout
      title="Arborists Insurance"
      subtitle="Specialized insurance coverage designed for tree care and arborist professionals."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Arborists insurance</strong> provides essential protection for
          professionals involved in tree care, pruning, removal, and maintenance
          services.
        </p>
        <p>
          Morison brokers help arborists secure coverage that protects against
          property damage, bodily injury, equipment loss, and professional liability.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Arborists Need Specialized Insurance</h2>
        <p>
          Arborists work in high-risk environments involving heavy equipment,
          elevated work, and public property. Even a small accident can result
          in significant financial loss.
        </p>
        <p>
          Specialized arborists insurance ensures coverage that reflects the
          unique hazards of tree care and landscaping operations.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Arborists Insurance</h2>
        <ul>
          <li>Access to insurers experienced in tree service risks</li>
          <li>Coverage tailored for residential and commercial projects</li>
          <li>Flexible liability limits and equipment protection</li>
          <li>Expert claims and risk management support</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Arborists Insurance Coverage Options</h2>
        <ul>
          <li>Commercial General Liability</li>
          <li>Tools & Equipment Insurance</li>
          <li>Commercial Auto for service vehicles</li>
          <li>Workers’ Compensation</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Equipment Breakdown Insurance</li>
          <li>Business Interruption Coverage</li>
          <li>Environmental & Pollution Liability</li>
          <li>Umbrella & Excess Liability Coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Arborists Insurance</h2>
        <ul>
          <li>Safety training and certification programs</li>
          <li>Claims-free operating history</li>
          <li>Bundling multiple business policies</li>
          <li>Proper equipment maintenance</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Arborists Insurance?</h2>
        <ul>
          <li>Tree removal and pruning professionals</li>
          <li>Certified arborists</li>
          <li>Tree care and maintenance companies</li>
          <li>Landscaping businesses offering tree services</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Arborist Business Today</h2>
        <p>
          Morison brokers help arborists secure reliable insurance coverage
          tailored to the risks of tree care and outdoor operations.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default Arborists;
