import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./OurValues.css";

const OurValues = () => {
  return (
    <PageLayout
      title="Our Values"
      subtitle="The principles that guide everything we do at Morison Insurance."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          At <strong>Morison Insurance</strong>, our values define who we are
          and how we serve our clients. They guide our decisions, relationships,
          and commitment to excellence.
        </p>
        <p>
          By putting our values into action every day, we build trust, reliability,
          and lasting partnerships with our clients and community.
        </p>
      </section>

      {/* CLIENT-FOCUSED */}
      <section>
        <h2>Client-Focused</h2>
        <p>
          Our clients’ needs always come first. We listen carefully, provide clear
          advice, and deliver solutions that are practical, tailored, and effective.
        </p>
      </section>

      {/* INTEGRITY */}
      <section>
        <h2>Integrity & Transparency</h2>
        <p>
          We operate with honesty, ethics, and transparency in all our dealings.
          Our clients trust us to provide unbiased guidance and to act in their
          best interests.
        </p>
      </section>

      {/* EXPERTISE */}
      <section>
        <h2>Expertise & Knowledge</h2>
        <p>
          Continuous learning and industry expertise allow us to provide innovative
          and informed solutions. Our brokers are well-versed in a wide range of
          insurance products and risks.
        </p>
      </section>

      {/* SERVICE */}
      <section>
        <h2>Excellence in Service</h2>
        <p>
          We strive for excellence in every interaction. From the first quote to
          claims support, our clients experience professionalism, responsiveness,
          and dedication.
        </p>
      </section>

      {/* COMMUNITY */}
      <section>
        <h2>Community & Responsibility</h2>
        <p>
          Morison Insurance values giving back. We actively participate in community
          initiatives and support programs that strengthen the neighborhoods
          we serve.
        </p>
      </section>

      {/* CTA */}
      <section>
        <h2>Experience the Morison Difference</h2>
        <p>
          Our values are more than words — they are the foundation of our
          relationships and the reason clients trust us to protect what matters
          most.
        </p>
        <p>
          Contact a Morison broker today to see our values in action.
        </p>
      </section>
    </PageLayout>
  );
};

export default OurValues;
