import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./OurStory.css";

const OurStory = () => {
  return (
    <PageLayout
      title="Our Story"
      subtitle="Built on trust, service, and a commitment to protecting what matters most."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Morison Insurance</strong> was founded with a simple belief:
          insurance should be clear, personal, and focused on protecting people,
          not just policies.
        </p>
        <p>
          From the beginning, our goal has been to build long-term relationships
          with clients by offering honest advice and dependable coverage
          solutions.
        </p>
      </section>

      {/* BEGINNING */}
      <section>
        <h2>How It All Began</h2>
        <p>
          Morison Insurance started as a community-focused brokerage dedicated
          to helping individuals, families, and businesses navigate complex
          insurance decisions.
        </p>
        <p>
          By listening first and understanding our clients’ needs, we earned
          trust and built a reputation for reliable service and expert guidance.
        </p>
      </section>

      {/* GROWTH */}
      <section>
        <h2>Growing With Our Clients</h2>
        <p>
          As our clients’ needs evolved, so did our services. We expanded our
          offerings to include personal, commercial, high-value, and specialty
          insurance solutions.
        </p>
        <p>
          Today, we continue to grow by investing in knowledge, technology, and
          strong partnerships with leading insurance providers.
        </p>
      </section>

      {/* VALUES */}
      <section>
        <h2>What Drives Us</h2>
        <ul>
          <li>Client-first advice and transparency</li>
          <li>Long-term relationships built on trust</li>
          <li>Access to quality insurers and coverage options</li>
          <li>Ongoing support before, during, and after a claim</li>
        </ul>
      </section>

      {/* DIFFERENCE */}
      <section>
        <h2>The Morison Difference</h2>
        <p>
          We believe insurance is about protecting livelihoods, families, and
          futures — not selling one-size-fits-all policies.
        </p>
        <p>
          Our brokers take the time to explain options clearly, advocate on your
          behalf, and ensure you feel confident in your coverage.
        </p>
      </section>

      {/* CTA */}
      <section>
        <h2>Be Part of Our Story</h2>
        <p>
          Whether you are protecting your home, business, or future, Morison
          Insurance is here to guide you every step of the way.
        </p>
        <p>
          Connect with a Morison broker today and experience insurance done right.
        </p>
      </section>
    </PageLayout>
  );
};

export default OurStory;
