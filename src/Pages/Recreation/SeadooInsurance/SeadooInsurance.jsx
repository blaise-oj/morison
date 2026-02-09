// src/Pages/Recreation/Watercraft/SeadooInsurance/SeadooInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./SeadooInsurance.css";

const SeadooInsurance = () => {
  return (
    <PageLayout
      title="Seadoo Insurance"
      subtitle="Specialized coverage for personal watercraft and jet skis."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Seadoo Insurance</strong> provides essential protection for personal watercraft such as jet skis, wave runners, and Seadoos against accidents, theft, and liability risks.
        </p>
        <p>
          Whether used recreationally or seasonally, Morison offers tailored insurance solutions designed to keep you protected on the water.
        </p>
        <p>
          Speak to a licensed broker today by calling <strong>+1 343-512-7761</strong>.
        </p>
      </section>

      {/* WHY */}
      <section>
        <h2>Why Seadoo Insurance Matters</h2>
        <p>
          Personal watercraft are fast, powerful, and exposed to higher accident risks. Standard boat or home insurance often does not fully cover Seadoos.
        </p>
        <p>
          Dedicated Seadoo insurance ensures protection for your watercraft, passengers, and third parties.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Insure Your Seadoo with Morison</h2>
        <ul>
          <li>Coverage tailored specifically for personal watercraft</li>
          <li>Liability protection for passengers and third parties</li>
          <li>Flexible seasonal and annual policy options</li>
          <li>Protection during storage and transportation</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Seadoo Insurance Coverage Options</h2>
        <ul>
          <li>Collision and comprehensive coverage</li>
          <li>Theft, fire, and vandalism protection</li>
          <li>Liability coverage for bodily injury and property damage</li>
          <li>Coverage for accessories and safety equipment</li>
          <li>Trailer coverage (optional)</li>
        </ul>
      </section>

      {/* OPTIONAL */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Towing and emergency assistance</li>
          <li>Uninsured or underinsured boater coverage</li>
          <li>Personal effects coverage</li>
          <li>Extended navigation areas</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Reduce Seadoo Insurance Costs</h2>
        <ul>
          <li>Complete an approved watercraft safety course</li>
          <li>Bundle with boat, home, or auto insurance</li>
          <li>Secure storage and anti-theft devices</li>
          <li>Claims-free riding history</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Seadoo Insurance?</h2>
        <ul>
          <li>Owners of Seadoos, jet skis, and wave runners</li>
          <li>Recreational and seasonal watercraft riders</li>
          <li>Individuals seeking liability protection on the water</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Seadoo Today</h2>
        <p>
          Morison brokers provide customized Seadoo insurance to keep you riding confidently.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a personalized quote online.
        </p>
      </section>
    </PageLayout>
  );
};

export default SeadooInsurance;
