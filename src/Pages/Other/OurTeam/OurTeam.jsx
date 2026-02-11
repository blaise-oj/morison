import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./OurTeam.css";

const OurTeam = () => {
  return (
      <div className="our-team-page">
    <PageLayout
      title="Our Team"
      subtitle="Experienced, dedicated, and committed to putting clients first."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          The team at <strong>Morison Insurance</strong> is made up of licensed
          insurance professionals who are passionate about helping clients make
          informed and confident decisions.
        </p>
        <p>
          Our brokers take the time to understand your needs and provide clear,
          practical advice tailored to your situation.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section>
        <h2>Experienced Insurance Professionals</h2>
        <p>
          Our team brings years of industry experience across personal,
          commercial, high-value, and specialty insurance solutions.
        </p>
        <p>
          We stay current with evolving risks, regulations, and market trends to
          ensure our clients receive knowledgeable and reliable guidance.
        </p>
      </section>

      {/* APPROACH */}
      <section>
        <h2>Our Client-First Approach</h2>
        <ul>
          <li>Personalized coverage recommendations</li>
          <li>Clear explanations with no jargon</li>
          <li>Ongoing policy reviews and support</li>
          <li>Dedicated claims advocacy</li>
        </ul>
      </section>

      {/* CULTURE */}
      <section>
        <h2>A Team You Can Trust</h2>
        <p>
          We believe strong relationships are the foundation of great service.
          Our team works collaboratively to ensure every client receives
          consistent, high-quality support.
        </p>
        <p>
          From your first quote to claims assistance, you can rely on our team to
          be responsive, professional, and dependable.
        </p>
      </section>

      {/* COMMUNITY */}
      <section>
        <h2>Committed to Our Community</h2>
        <p>
          Our team is actively involved in the communities we serve, supporting
          local initiatives and building long-term partnerships.
        </p>
        <p>
          This connection allows us to better understand the needs of our
          clients and deliver insurance solutions that truly fit.
        </p>
      </section>

      {/* CTA */}
      <section>
        <h2>Meet the Team That Works for You</h2>
        <p>
          When you work with Morison Insurance, you gain a team of advocates
          focused on protecting what matters most to you.
        </p>
        <p>
          Contact a Morison broker today to get started.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default OurTeam;
