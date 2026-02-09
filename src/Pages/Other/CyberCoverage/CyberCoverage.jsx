import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./CyberCoverage.css";

const CyberCoverage = () => {
  return (
    <PageLayout
      title="Cyber Coverage"
      subtitle="Protecting your digital assets, personal data, and online operations from cyber threats."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Cyber coverage</strong> helps protect individuals and businesses
          from the financial and operational impact of cyber attacks, data breaches,
          and online fraud.
        </p>
        <p>
          With cyber threats on the rise, this coverage ensures that sensitive
          information and digital operations are safeguarded, reducing potential
          losses from hacking, ransomware, or identity theft.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section>
        <h2>Why Cyber Coverage Is Important</h2>
        <p>
          Cyber attacks can cause significant financial losses, legal liabilities,
          and reputational damage.
        </p>
        <p>
          Even minor breaches can result in data loss, system downtime, or regulatory
          penalties. Cyber coverage helps mitigate these risks and provides support
          during recovery.
        </p>
      </section>

      {/* WHAT IT COVERS */}
      <section>
        <h2>What Cyber Coverage Includes</h2>
        <ul>
          <li>Data breach response and notification costs</li>
          <li>Cyber extortion and ransomware payments</li>
          <li>Business interruption due to cyber incidents</li>
          <li>Legal and regulatory fines related to data breaches</li>
          <li>Third-party liability for data loss or privacy breaches</li>
        </ul>
      </section>

      {/* OPTIONAL ENHANCEMENTS */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Enhanced breach response services</li>
          <li>Cyber crime and fraud coverage</li>
          <li>Social engineering and phishing protection</li>
          <li>Technology errors & omissions coverage</li>
        </ul>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Why Choose Morison for Cyber Coverage</h2>
        <ul>
          <li>Access to insurers specializing in cyber risk</li>
          <li>Customizable coverage based on your business or personal needs</li>
          <li>Expert guidance for incident response planning</li>
          <li>Dedicated claims support and risk management advice</li>
        </ul>
      </section>

      {/* WHO NEEDS IT */}
      <section>
        <h2>Who Should Consider Cyber Coverage?</h2>
        <ul>
          <li>Small and medium-sized businesses</li>
          <li>Home-based businesses and freelancers</li>
          <li>Individuals with significant digital assets or sensitive data</li>
          <li>Organizations storing customer or employee personal information</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Digital World Today</h2>
        <p>
          Cyber coverage provides financial protection and expert support to help
          recover from cyber incidents quickly and effectively.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default CyberCoverage;
