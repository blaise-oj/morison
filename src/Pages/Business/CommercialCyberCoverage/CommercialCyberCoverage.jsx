import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./CommercialCyberCoverage.css";

const CommercialCyberCoverage = () => {
  return (
    <PageLayout
      title="Commercial Cyber Insurance"
      subtitle="Protect your business from cyber threats, data breaches, and online risks."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Commercial Cyber insurance</strong> safeguards businesses
          against financial losses and liabilities caused by cyberattacks, data breaches,
          and technology-related risks.
        </p>
        <p>
          Morison brokers help businesses secure coverage tailored to their digital infrastructure,
          online operations, and data protection needs.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Commercial Cyber Insurance Is Essential</h2>
        <p>
          Cyber threats, hacking, ransomware, and data breaches can result in significant financial and reputational damage.
          Standard business insurance often does not cover these technology risks.
        </p>
        <p>
          Commercial Cyber insurance ensures your business can respond to cyber incidents effectively,
          covering financial losses, legal costs, and recovery efforts.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Commercial Cyber Insurance</h2>
        <ul>
          <li>Coverage for data breaches, cyberattacks, and ransomware</li>
          <li>Protection for legal defense costs and regulatory fines</li>
          <li>Business interruption coverage for cyber-related downtime</li>
          <li>Expert guidance on cybersecurity and risk mitigation</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Commercial Cyber Insurance Coverage Options</h2>
        <ul>
          <li>Data breach response and notification costs</li>
          <li>Cyber extortion and ransomware coverage</li>
          <li>Business interruption due to cyber incidents</li>
          <li>Network security liability and privacy liability coverage</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Third-party liability for client or partner data breaches</li>
          <li>Social engineering fraud coverage</li>
          <li>Extended coverage for cloud services and digital assets</li>
          <li>Cyber crime and funds transfer fraud protection</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Commercial Cyber Insurance</h2>
        <ul>
          <li>Implementing robust cybersecurity protocols</li>
          <li>Regular staff training on cyber threats and phishing</li>
          <li>Bundling with other business insurance policies</li>
          <li>Maintaining up-to-date software and security systems</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Commercial Cyber Insurance?</h2>
        <ul>
          <li>Businesses handling sensitive client or employee data</li>
          <li>Companies conducting online operations or e-commerce</li>
          <li>Organizations at risk of cyberattacks, ransomware, or hacking</li>
          <li>Businesses seeking protection against technology-related financial losses</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Business from Cyber Threats Today</h2>
        <p>
          Morison brokers provide tailored Commercial Cyber insurance coverage,
          ensuring your business is fully protected against cyber incidents, data breaches, and online risks.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default CommercialCyberCoverage;
