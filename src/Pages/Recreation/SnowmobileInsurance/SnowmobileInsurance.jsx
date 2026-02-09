// src/Pages/Recreation/RecreationalVehicles/SnowmobileInsurance/SnowmobileInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./SnowmobileInsurance.css";

const SnowmobileInsurance = () => {
  return (
    <PageLayout
      title="Snowmobile Insurance"
      subtitle="Specialized coverage for snowmobiles, trails, and winter adventures."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Snowmobile Insurance</strong> provides protection for your sled against accidents, theft, damage, and liability while riding on trails or private property.
        </p>
        <p>
          Morison brokers tailor snowmobile insurance for recreational riders and performance snowmobiles.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> to speak with a licensed broker today.
        </p>
      </section>

      {/* WHY */}
      <section>
        <h2>Why Snowmobile Insurance Is Important</h2>
        <p>
          Snowmobiles operate in challenging winter conditions, increasing the risk of accidents and mechanical damage.
        </p>
        <p>
          Many home or auto policies do not cover snowmobile-related risks without specialized insurance.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Snowmobile Insurance</h2>
        <ul>
          <li>Coverage for recreational and performance snowmobiles</li>
          <li>Protection on trails and private property</li>
          <li>Flexible liability options</li>
          <li>Expert recreational insurance brokers</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Snowmobile Insurance Coverage Options</h2>
        <ul>
          <li>Collision and comprehensive coverage</li>
          <li>Third-party liability protection</li>
          <li>Theft, fire, and vandalism coverage</li>
          <li>Coverage for accessories and modifications</li>
        </ul>
      </section>

      {/* OPTIONAL */}
      <section>
        <h2>Optional Coverages</h2>
        <ul>
          <li>Medical payments coverage</li>
          <li>Uninsured or underinsured rider coverage</li>
          <li>Roadside and trail assistance</li>
          <li>Trailer and transport coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Snowmobile Insurance</h2>
        <ul>
          <li>Safe riding history</li>
          <li>Snowmobile safety course discounts</li>
          <li>Secure off-season storage</li>
          <li>Bundling with home or auto insurance</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Snowmobile Insurance?</h2>
        <ul>
          <li>Recreational and trail snowmobile riders</li>
          <li>Performance and mountain sled owners</li>
          <li>Families with multiple snowmobiles</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Snowmobile Today</h2>
        <p>
          Morison brokers ensure your snowmobile is protected for every winter adventure.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online now.
        </p>
      </section>
    </PageLayout>
  );
};

export default SnowmobileInsurance;
