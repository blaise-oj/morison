import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";

const HomeInsurance = () => {
  return (
    <PageLayout
      title="Home Insurance"
      subtitle="Safeguard your most valuable investment with the right insurance coverage — just for you!"
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p><strong>Personalized coverage:</strong> comprehensive protection that fits your life</p>
        <p><strong>Claims advocacy:</strong> on-your-side support when it matters</p>
        <p><strong>Bundle options:</strong> bigger savings (home + auto + extras)</p>

        <p>
          Complete the form or call <strong>1-800-463-8074</strong> to speak with a
          licensed broker about Home Insurance today.
        </p>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Compare the Right Coverage, Save with a Broker</h2>
        <p>
          Finding the right home insurance in Ontario shouldn't be complicated.
          Morison Insurance works with dozens of trusted insurers to compare
          coverage options and secure competitive rates.
        </p>
        <p>
          Whether you're protecting a family home, newly built property, or an
          investment, our licensed brokers personalize your policy to fit your needs.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Home Insurance</h2>
        <ul>
          <li>4,500+ 5-Star Reviews</li>
          <li>Dozens of Top Canadian Insurer Partners</li>
          <li>Dedicated Licensed Brokers (not a call center)</li>
          <li>On-Site Claims Specialists</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>Ontario Home Insurance Coverage at a Glance</h2>
        <p>
          Ontario home insurance typically includes building protection,
          contents coverage, and liability — but the right coverage depends on
          your unique situation.
        </p>
      </section>

      {/* COVERAGE TYPES */}
      <section>
        <h3>Comprehensive (All-Risk)</h3>
        <p>
          Provides the broadest level of protection for your home and belongings
          unless specifically excluded.
        </p>
        <ul>
          <li>Building & permanent structures</li>
          <li>Contents & personal belongings</li>
          <li>Personal liability protection</li>
          <li>Additional living expenses</li>
        </ul>
      </section>

      <section>
        <h3>Property Protection</h3>
        <ul>
          <li>Fire and smoke</li>
          <li>Theft and vandalism</li>
          <li>Wind and hail</li>
          <li>Falling trees or objects</li>
          <li>Lightning or explosions</li>
        </ul>
      </section>

      <section>
        <h3>Personal Liability Insurance</h3>
        <p>
          Protects you if you unintentionally cause property damage or injury to others.
        </p>
        <ul>
          <li>Legal defence costs</li>
          <li>Settlements or judgments</li>
        </ul>
      </section>

      <section>
        <h3>Water Protection</h3>
        <p>
          One of the most common claim types in Ontario. Optional add-ons available.
        </p>
        <ul>
          <li>Sudden water escape (burst pipes)</li>
          <li>Overland water flooding</li>
          <li>Sewer backup</li>
          <li>Ground water seepage</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Coverages</h3>
        <ul>
          <li>Guaranteed Replacement Cost</li>
          <li>By-Law Coverage</li>
          <li>Jewellery & Valuables</li>
          <li>Outbuildings</li>
          <li>Identity Theft & Umbrella Liability</li>
        </ul>
      </section>

      {/* BUNDLING */}
      <section>
        <h2>Bundle Your Home with Auto & More</h2>
        <ul>
          <li>Home + Auto (Most Popular)</li>
          <li>Home + Umbrella Liability</li>
          <li>Home + Personal Articles</li>
          <li>Home + Secondary or Vacation Home</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Ready to Protect Your Home?</h2>
        <p>
          Speak with a dedicated Morison broker today and discover how much peace
          of mind really costs.
        </p>
        <p>
          Call <strong>1-800-463-8074</strong> or complete the form on this page.
        </p>
      </section>

    </PageLayout>
  );
};

export default HomeInsurance;
