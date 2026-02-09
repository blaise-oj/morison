import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./BarberShops.css";

const BarberShops = () => {
  return (
    <PageLayout
      title="Barber Shops Insurance"
      subtitle="Comprehensive insurance coverage tailored for barber shops and hair salons."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Barber shops insurance</strong> protects your business from property damage,
          liability claims, and operational interruptions.
        </p>
        <p>
          Morison brokers help barber shop owners secure coverage designed specifically for
          personal grooming businesses, staff, and clients.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Barber Shops Need Specialized Insurance</h2>
        <p>
          Barber shops face unique risks such as slips, cuts, allergic reactions, and equipment
          damage. Standard business insurance may not fully protect against these exposures.
        </p>
        <p>
          Specialized insurance ensures your staff, clients, and property are properly covered.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Barber Shops Insurance</h2>
        <ul>
          <li>Coverage for property, equipment, and salon tools</li>
          <li>Protection against customer liability claims</li>
          <li>Business interruption coverage for unexpected events</li>
          <li>Expert support for claims and risk management</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Barber Shops Insurance Coverage Options</h2>
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
          <li>Professional Liability (malpractice claims)</li>
          <li>Equipment Breakdown Protection</li>
          <li>Cyber Liability (if accepting digital payments)</li>
          <li>Umbrella / Excess Liability Coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Barber Shops Insurance</h2>
        <ul>
          <li>Implementing safety protocols for staff and clients</li>
          <li>Bundling multiple business policies</li>
          <li>Maintaining a clean, compliant salon environment</li>
          <li>Claims-free operating history</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Barber Shops Insurance?</h2>
        <ul>
          <li>Independent barbers and hair stylists</li>
          <li>Full-service barber shops and grooming salons</li>
          <li>Mobile barber services</li>
          <li>Small chain or franchise barber shops</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Barber Shop Today</h2>
        <p>
          Morison brokers provide insurance coverage tailored to barber shops, ensuring
          your business, staff, and clients are fully protected.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default BarberShops;
