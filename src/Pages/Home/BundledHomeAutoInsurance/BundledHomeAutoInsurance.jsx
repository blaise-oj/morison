import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import carap from "../../../assets/carap.jpg";
import "./BundledHomeAutoInsurance.css";

const BundledHomeAutoInsurance = () => {
  return (
    <div className="bundled-home-auto-insurance-page">
      <PageLayout
        title="Bundle Your Home & Motor Insurance in Kenya"
        subtitle="Save more when you combine your home and comprehensive motor insurance."
        headerClass="hero"
      >

        {/* INTRO */}
        <section>
          <p>
            Protect your home and vehicle under one trusted insurance solution.
            Bundling your Home Insurance and Comprehensive Motor Insurance with 
            the same provider can unlock discounts, simplify policy management, 
            and improve your overall coverage.
          </p>

          <ul>
            <li>Cost savings through multi-policy discounts</li>
            <li>One renewal date for easier management</li>
            <li>Dedicated claims support</li>
          </ul>

          <p>
            Call <strong>+1 343 512 7761</strong> to speak with a licensed broker
            about bundled insurance options today.
          </p>
        </section>

        {/* WHAT IS BUNDLING */}
        <section>
          <h2>What Is Home & Motor Insurance Bundling?</h2>
          <p>
            Bundling means purchasing both your Home Insurance and Comprehensive 
            Motor Insurance from the same insurer. This allows you to benefit from 
            multi-policy discounts and streamlined coverage management.
          </p>
        </section>

        {/* WHY BUNDLE */}
        <section>
          <h2>Why Bundle Your Policies?</h2>

          <h3>Lower Overall Premiums</h3>
          <p>
            Insurers in Kenya often offer multi-policy discounts when you insure
            multiple assets with them. This can result in meaningful annual savings.
          </p>

          <h3>Simplified Policy Management</h3>
          <p>
            One insurer means one renewal date, fewer documents, and easier updates.
          </p>

          <h3>Better Risk Assessment</h3>
          <p>
            When your home and vehicle are insured together, insurers may offer
            enhanced coverage terms based on your full risk profile.
          </p>

          <h3>Streamlined Claims Process</h3>
          <p>
            In the event of a major incident affecting both assets, dealing with
            one insurer simplifies the claims process.
          </p>
        </section>

        {/* WHY MORISON */}
        <section>
          <h2>Why Choose Morison for Your Insurance Bundle?</h2>
          <ul>
            <li>Access to Leading Kenyan Insurance Providers</li>
            <li>Competitive Quote Comparisons</li>
            <li>Professional Risk Advisory</li>
            <li>Dedicated Claims Assistance</li>
          </ul>
          <p>
            We work on your behalf — not the insurer’s. Our brokers compare options
            across trusted Kenyan insurance companies to ensure you receive the
            right protection at a competitive premium.
          </p>
        </section>

        {/* OPTIONAL EXTRAS */}
        <section>
          <h2>Optional Add-Ons for Your Bundle</h2>

          <ul>
            <li>Political Violence & Terrorism Cover</li>
            <li>Excess Buy-Back Protection</li>
            <li>Loss of Use (Alternative Accommodation)</li>
            <li>Flood & Water Damage Cover</li>
            <li>Personal Accident Cover</li>
            <li>Windscreen & Entertainment System Cover</li>
          </ul>
        </section>

        {/* FAQ */}
        <section>
          <h2>Frequently Asked Questions</h2>

          <h4>How much can I save by bundling?</h4>
          <p>
            Savings vary depending on the insurer, value of your assets, and
            your risk profile. Our brokers will compare options to maximize value.
          </p>

          <h4>Do both policies need to be with the same insurer?</h4>
          <p>
            Yes. Multi-policy discounts apply when both Home and Motor policies
            are issued by the same insurance company.
          </p>

          <h4>Can I switch my policies before renewal?</h4>
          <p>
            Yes. We can assess whether switching mid-term or waiting until renewal
            provides better financial benefit.
          </p>
        </section>

        {/* CTA */}
        <section>
          <h2>Ready to Save on Your Insurance?</h2>
          <p>
            Let our brokers compare Kenya’s leading insurers and build a bundle
            that protects your home and vehicle — while helping you save.
          </p>

          <p>
            Call <strong>+1 343 512 7761</strong> or request your free quote today.
          </p>
        </section>

      </PageLayout>
    </div>
  );
};

export default BundledHomeAutoInsurance;
