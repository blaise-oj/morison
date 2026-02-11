import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./OurInsurancePartners.css";

const OurInsurancePartners = () => {
  return (
      <div className="our-insurance-partners-page">
    <PageLayout
      title="Our Insurance Partners"
      subtitle="Collaborating with leading insurers to provide the best coverage options."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Morison Insurance</strong> works closely with a network of
          reputable insurance providers to ensure our clients have access to
          comprehensive and reliable coverage solutions.
        </p>
        <p>
          Our partnerships allow us to tailor insurance products to your unique
          needs, offering flexibility, choice, and peace of mind.
        </p>
      </section>

      {/* PARTNER VALUE */}
      <section>
        <h2>Why Our Insurance Partners Matter</h2>
        <p>
          Partnering with leading insurers enables us to provide policies that
          balance competitive pricing with robust protection.
        </p>
        <p>
          These partnerships ensure you receive expert guidance, trusted coverage,
          and a seamless insurance experience.
        </p>
      </section>

      {/* PROVIDER TYPES */}
      <section>
        <h2>Our Partner Network</h2>
        <ul>
          <li>National and regional insurance providers</li>
          <li>Specialty insurers for high-value assets</li>
          <li>Commercial and business-focused insurance companies</li>
          <li>Personal lines insurers for home, auto, and life coverage</li>
        </ul>
      </section>

      {/* BENEFITS */}
      <section>
        <h2>Benefits of Our Partnerships</h2>
        <ul>
          <li>Access to a wide range of insurance products</li>
          <li>Competitive rates and customized coverage</li>
          <li>Trusted claims support from experienced insurers</li>
          <li>Ongoing collaboration to stay ahead of industry trends</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Work With Trusted Insurance Partners</h2>
        <p>
          By choosing Morison Insurance, you benefit from our strong relationships
          with leading insurers, ensuring your coverage meets your needs and
          exceeds expectations.
        </p>
        <p>
          Contact a Morison broker today to explore your insurance options.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default OurInsurancePartners;
