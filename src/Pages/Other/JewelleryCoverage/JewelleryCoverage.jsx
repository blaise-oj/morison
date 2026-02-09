import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./JewelleryCoverage.css";

const JewelleryCoverage = () => {
  return (
    <PageLayout
      title="Jewellery Coverage"
      subtitle="Protect your valuable jewelry against loss, theft, or damage."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Jewellery coverage</strong> provides financial protection for your
          valuable jewelry, including rings, necklaces, watches, and other precious
          items.
        </p>
        <p>
          This coverage ensures you can repair or replace your jewelry if it is lost,
          stolen, or damaged, giving you peace of mind for your most treasured items.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section>
        <h2>Why Jewellery Coverage Is Important</h2>
        <p>
          Jewellery often carries both significant monetary and sentimental value.
          Standard homeowners or renters insurance may not fully cover loss or
          damage.
        </p>
        <p>
          Jewellery coverage ensures your valuable items are properly insured and
          quickly replaced if something unexpected occurs.
        </p>
      </section>

      {/* WHAT IT COVERS */}
      <section>
        <h2>What Jewellery Coverage Includes</h2>
        <ul>
          <li>Theft or burglary protection</li>
          <li>Loss or accidental damage</li>
          <li>Fire and natural disaster coverage</li>
          <li>Worldwide protection in many policies</li>
          <li>Appraisal and valuation support</li>
        </ul>
      </section>

      {/* OPTIONAL ENHANCEMENTS */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Replacement cost coverage instead of actual cash value</li>
          <li>Coverage for newly acquired jewelry</li>
          <li>Extended protection for multiple items or sets</li>
          <li>Secure storage advice and appraisal assistance</li>
        </ul>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Why Choose Morison for Jewellery Coverage</h2>
        <ul>
          <li>Specialized policies for jewelry of all types and values</li>
          <li>Flexible coverage limits to match appraised values</li>
          <li>Expert claims support for fast replacement or repair</li>
          <li>Trusted relationships with insurers and jewelers</li>
        </ul>
      </section>

      {/* WHO NEEDS IT */}
      <section>
        <h2>Who Should Consider Jewellery Coverage?</h2>
        <ul>
          <li>Owners of engagement, wedding, or heirloom jewelry</li>
          <li>Collectors of watches, necklaces, and other valuables</li>
          <li>Anyone wanting to protect items with high sentimental value</li>
          <li>Individuals seeking peace of mind for valuable possessions</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Valuables Today</h2>
        <p>
          Jewellery coverage ensures your precious items are protected against loss,
          theft, or damage, giving you confidence and peace of mind.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default JewelleryCoverage;
