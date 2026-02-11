import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./ClassicCarInsurance.css";

const ClassicCarInsurance = () => {
  return (
      <div className="classic-car-insurance-page">
    <PageLayout
      title="Classic Car Insurance"
      subtitle="Specialized coverage for collectible and vintage vehicles."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Classic car insurance</strong> protects vintage, collectible, and
          antique vehicles with policies tailored to their unique value and use.
        </p>
        <p>
          From restored muscle cars to antique roadsters, Morison connects you
          with insurers who understand the collector car market.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to get started.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Classic Cars Require Specialized Insurance</h2>
        <p>
          Classic vehicles are valued differently than modern cars. Standard
          insurance may undervalue your car or limit repair options.
        </p>
        <p>
          Agreed value coverage ensures your vehicle is insured for its true
          collectible worth.
        </p>
      </section>

      {/* BENEFITS */}
      <section>
        <h2>Why Choose Morison for Classic Car Insurance</h2>
        <ul>
          <li>Agreed Value Coverage</li>
          <li>Specialist Insurers Experienced With Collectibles</li>
          <li>OEM & Custom Parts Coverage</li>
          <li>Claims Support With Collector Car Expertise</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Coverage Options for Classic Cars</h2>
        <p>
          Policies are designed for occasional driving, storage, and collector
          needs.
        </p>
      </section>

      <section>
        <h3>Agreed Value Coverage</h3>
        <p>
          Ensures your classic car is insured for its appraised value rather than
          standard depreciation.
        </p>
      </section>

      <section>
        <h3>Comprehensive & Collision Coverage</h3>
        <ul>
          <li>Fire, theft, and vandalism</li>
          <li>Natural disasters & falling objects</li>
          <li>Accident collision coverage</li>
          <li>Glass & windshield protection</li>
        </ul>
      </section>

      <section>
        <h3>Optional Add-Ons</h3>
        <ul>
          <li>Roadside Assistance</li>
          <li>Transport Coverage (to shows or events)</li>
          <li>Spare Parts Coverage</li>
          <li>Agreed Value Adjustments as car appreciates</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Classic Car Insurance?</h2>
        <ul>
          <li>Collectors and enthusiasts</li>
          <li>Owners of restored or antique vehicles</li>
          <li>Occasional drivers and show participants</li>
          <li>Investors in vintage vehicles</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Classic Vehicle</h2>
        <p>
          Morison brokers ensure your collectible car is valued correctly and
          insured properly. Get peace of mind with coverage tailored for your
          classic car.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default ClassicCarInsurance;
