import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./BentleyInsurance.css";

const BentleyInsurance = () => {
  return (
    <PageLayout
      title="Bentley Insurance"
      subtitle="Luxury coverage for Bentley vehicles that matches performance and prestige."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Bentley insurance</strong> provides tailored protection for one of the
          world’s most luxurious and high-performance vehicles.
        </p>
        <p>
          From Continental GTs to Flying Spurs, Morison ensures your Bentley is covered
          with policies that reflect its value, technology, and exclusivity.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a
          licensed broker today.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Bentley Cars Require Specialized Insurance</h2>
        <p>
          Bentleys have bespoke craftsmanship, advanced systems, and high repair costs.
          Standard coverage may not fully protect your investment.
        </p>
        <p>
          Specialized Bentley insurance ensures OEM parts, certified repairs, and higher
          liability limits.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Bentley Insurance</h2>
        <ul>
          <li>Agreed Value & Premium Coverage Options</li>
          <li>OEM Parts & Approved Repair Facilities</li>
          <li>Specialist Luxury Auto Insurers</li>
          <li>Dedicated Claims Support for High-Value Vehicles</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Bentley Insurance Coverage Options</h2>
        <ul>
          <li>Collision and comprehensive coverage</li>
          <li>Theft, fire, and vandalism protection</li>
          <li>High liability limits for peace of mind</li>
          <li>Accident benefits coverage</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Add-Ons</h2>
        <ul>
          <li>Loss of Use & Rental Vehicle Coverage</li>
          <li>Roadside Assistance</li>
          <li>Replacement Cost for OEM Parts</li>
          <li>Worldwide Coverage Extensions</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Bentley Insurance</h2>
        <ul>
          <li>Bundling home and auto policies</li>
          <li>Secure parking & alarm system discounts</li>
          <li>Safe driving record benefits</li>
          <li>Multi-vehicle household discounts</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Bentley Insurance?</h2>
        <ul>
          <li>Owners of Bentleys and other luxury vehicles</li>
          <li>High-performance car enthusiasts</li>
          <li>Drivers wanting full OEM coverage and expert claims support</li>
          <li>Anyone looking for white-glove insurance service</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Bentley with Confidence</h2>
        <p>
          Morison brokers ensure your Bentley is insured with coverage that matches
          its value, technology, and prestige.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default BentleyInsurance;
