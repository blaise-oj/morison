import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./WhyChooseMorison.css";

const WhyChooseMorison = () => {
  return (
      <div className="why-choose-morison-page">
    <PageLayout
      title="Why Choose Morison Insurance"
      subtitle="Trusted, reliable, and client-focused insurance solutions."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          Choosing the right insurance partner is critical. At <strong>Morison Insurance</strong>, 
          we put our clients first, providing expert guidance, tailored solutions, 
          and unmatched support every step of the way.
        </p>
        <p>
          Our goal is simple: to protect what matters most to you with confidence and clarity.
        </p>
      </section>

      {/* EXPERTISE */}
      <section>
        <h2>Expertise You Can Trust</h2>
        <p>
          Our licensed brokers have years of experience across personal, business, high-value, 
          and specialty insurance. We understand the risks you face and know how to protect 
          your assets effectively.
        </p>
        <ul>
          <li>Personalized insurance strategies for every client</li>
          <li>Comprehensive knowledge of the insurance market</li>
          <li>Access to top-rated insurers and products</li>
        </ul>
      </section>

      {/* CLIENT-FIRST */}
      <section>
        <h2>Client-First Approach</h2>
        <p>
          Your needs are our priority. We listen, advise, and advocate on your behalf to 
          ensure coverage is comprehensive, clear, and suited to your lifestyle or business.
        </p>
        <ul>
          <li>Transparent advice with no hidden clauses</li>
          <li>Clear guidance through claims and policy management</li>
          <li>Dedicated support for questions or emergencies</li>
        </ul>
      </section>

      {/* FLEXIBILITY */}
      <section>
        <h2>Flexible and Tailored Solutions</h2>
        <p>
          No two clients are the same. We provide insurance solutions that fit your 
          unique needs, from coverage limits to optional enhancements.
        </p>
        <ul>
          <li>Customizable policies for personal and business coverage</li>
          <li>Optional add-ons for high-value or specialty risks</li>
          <li>Ongoing reviews to adjust coverage as needs evolve</li>
        </ul>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>The Morison Difference</h2>
        <ul>
          <li>Trusted relationships built on integrity and transparency</li>
          <li>Proactive guidance and claims advocacy</li>
          <li>Strong network of insurers and community partnerships</li>
          <li>Commitment to protecting what matters most to you</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect What Matters Most Today</h2>
        <p>
          At Morison Insurance, we make insurance simple, reliable, and tailored to you.
          Let our team guide you toward the coverage that gives peace of mind.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default WhyChooseMorison;
