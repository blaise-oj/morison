import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./AwardsRecognition.css";

const AwardsRecognition = () => {
  return (
    <div className="awards-recognition-page">
    <PageLayout
      title="Awards & Recognition"
      subtitle="Trusted, recognized, and committed to excellence in insurance services."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          At <strong>Morison Insurance</strong>, our reputation is built on
          integrity, expertise, and a commitment to delivering exceptional
          service to our clients.
        </p>
        <p>
          Industry recognition and community trust reflect our dedication to
          providing reliable insurance solutions and outstanding customer care.
        </p>
      </section>

      {/* INDUSTRY */}
      <section>
        <h2>Industry Recognition</h2>
        <p>
          Morison Insurance is proud to be recognized within the insurance
          industry for professionalism, ethical practices, and service
          excellence.
        </p>
        <p>
          These acknowledgments highlight our ongoing commitment to staying at
          the forefront of insurance expertise and client advocacy.
        </p>
      </section>

      {/* SERVICE */}
      <section>
        <h2>Commitment to Service Excellence</h2>
        <ul>
          <li>Consistently high client satisfaction ratings</li>
          <li>Long-standing relationships with leading insurers</li>
          <li>Dedicated claims support and advocacy</li>
          <li>Personalized insurance solutions</li>
        </ul>
      </section>

      {/* COMMUNITY */}
      <section>
        <h2>Community & Professional Involvement</h2>
        <p>
          Beyond awards, our greatest recognition comes from the trust of our
          clients and the communities we serve.
        </p>
        <p>
          We actively participate in industry organizations and community
          initiatives that promote responsible insurance practices.
        </p>
      </section>

      {/* WHY IT MATTERS */}
      <section>
        <h2>Why Our Recognition Matters to You</h2>
        <ul>
          <li>Confidence you are working with a respected brokerage</li>
          <li>Access to reputable and financially strong insurers</li>
          <li>Assurance of ethical and transparent advice</li>
          <li>Support from experienced and knowledgeable brokers</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Award-Winning Service You Can Trust</h2>
        <p>
          Recognition reinforces our promise to put clients first and deliver
          dependable insurance solutions.
        </p>
        <p>
          Speak with a Morison broker today and experience the difference.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default AwardsRecognition;
