import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import carap from "../../../assets/carap.jpg"; // change image as needed

const BundledHomeAutoInsurance = () => {
  return (
    <PageLayout
      title="Bundle Your Home and Auto Insurance in Ontario"
      subtitle="We shop top Canadian insurers to tailor coverage for your home and car."
      image={carap}
    >
      {/* INTRO */}
      <section>
        <p>
          Tailored coverage, claims advocacy, and real savings — bundling your
          home and auto insurance in Ontario helps you protect what matters most
          while paying less. Morison Insurance compares quotes from dozens of
          trusted Canadian insurers to find coverage that fits your life.
        </p>

        <ul>
          <li>Tailored coverage for your exact needs</li>
          <li>On-your-side claims advocacy</li>
          <li>Save up to 25% by bundling home and auto</li>
        </ul>

        <p>
          Complete the form or call <strong>1-800-463-8074</strong> to speak with
          a licensed broker about bundled home and auto insurance today.
        </p>
      </section>

      {/* WHAT IS BUNDLING */}
      <section>
        <h2>What Is Bundled Home and Auto Insurance?</h2>
        <p>
          A home and auto insurance bundle combines both policies with the same
          insurer, unlocking exclusive multi-policy discounts. Bundling
          simplifies your coverage, reduces paperwork, and lowers your overall
          premiums.
        </p>
      </section>

      {/* WHY BUNDLE */}
      <section>
        <h2>Why Bundle Home and Auto Insurance?</h2>

        <h3>Lower Premiums</h3>
        <p>
          Insurance companies reward customers who consolidate coverage.
          Bundling can save you up to 25% while maintaining comprehensive
          protection.
        </p>

        <h3>Save Time</h3>
        <p>
          One insurer means fewer renewal dates, simpler updates, and less
          stress managing your policies.
        </p>

        <h3>Single Deductible</h3>
        <p>
          In some cases, bundled policies require only one deductible if both
          your home and vehicle are damaged in the same incident.
        </p>

        <h3>Improved Coverage</h3>
        <p>
          Bundling often unlocks enhanced protection like umbrella liability
          and excess coverage options.
        </p>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Why Choose Morison for Your Bundle?</h2>
        <ul>
          <li>4,500+ 5-Star Reviews</li>
          <li>Ontario Brokerage of the Year</li>
          <li>Dozens of insurer partners</li>
          <li>On-site claims specialists</li>
          <li>Dedicated brokers — not call centers</li>
        </ul>
      </section>

      {/* OPTIONAL EXTRAS */}
      <section>
        <h2>Optional Add-Ons for Your Bundle</h2>

        <ul>
          <li>Equipment Breakdown</li>
          <li>Loss of Use Protection</li>
          <li>Accident Forgiveness</li>
          <li>Water Damage Coverage</li>
          <li>Identity Theft Protection</li>
          <li>Uninsured Motorist Coverage</li>
        </ul>
      </section>

      {/* FAQ */}
      <section>
        <h2>Frequently Asked Questions</h2>

        <h4>How much can I save?</h4>
        <p>
          Savings vary by profile, but bundling home and auto insurance can save
          up to 25%.
        </p>

        <h4>Do both policies need to be with the same insurer?</h4>
        <p>
          Yes. Bundled discounts apply when home and auto policies are issued by
          the same insurer.
        </p>

        <h4>Can I switch my existing policies?</h4>
        <p>
          Absolutely. A Morison broker will compare switching now versus waiting
          until renewal to maximize savings.
        </p>
      </section>

      {/* CTA */}
      <section>
        <h2>Ready to Save on Your Home and Auto Insurance?</h2>
        <p>
          Our brokers compare Ontario’s leading insurers to build a bundle that
          delivers the right protection at the right price.
        </p>

        <p>
          Call <strong>1-800-463-8074</strong> or complete the form on this page
          to get your free quote today.
        </p>
      </section>
    </PageLayout>
  );
};

export default BundledHomeAutoInsurance;
