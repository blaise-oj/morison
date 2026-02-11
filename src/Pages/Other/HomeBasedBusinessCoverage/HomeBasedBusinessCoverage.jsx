import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./HomeBasedBusinessCoverage.css";

const HomeBasedBusinessCoverage = () => {
  return (
      <div className="home-based-business-coverage-page">
    <PageLayout
      title="Home Based Business Coverage"
      subtitle="Comprehensive insurance solutions for businesses operating from home."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Home Based Business Coverage</strong> protects small businesses
          operating from your home against unexpected risks such as property damage,
          liability claims, or business interruption.
        </p>
        <p>
          Whether you provide services, sell products, or work online, this coverage
          ensures your business assets and operations are safeguarded.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section>
        <h2>Why Home Based Business Coverage Is Important</h2>
        <p>
          Standard homeowners insurance often does not cover business-related risks.
          Without proper coverage, your equipment, inventory, or client liabilities
          may be unprotected.
        </p>
        <p>
          Home Based Business Coverage ensures your business can continue operating
          even after unexpected events like fire, theft, or equipment damage.
        </p>
      </section>

      {/* WHAT IT COVERS */}
      <section>
        <h2>What Home Based Business Coverage Includes</h2>
        <ul>
          <li>Business property protection (equipment, inventory, furniture)</li>
          <li>General liability coverage for client or visitor incidents</li>
          <li>Business interruption coverage for lost income</li>
          <li>Cyber liability for home-based online businesses</li>
          <li>Optional professional liability for advice-based services</li>
        </ul>
      </section>

      {/* OPTIONAL ENHANCEMENTS */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Extended business property limits</li>
          <li>Business vehicle coverage</li>
          <li>Equipment breakdown protection</li>
          <li>Identity theft protection for business owners</li>
        </ul>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Why Choose Morison for Home Based Business Coverage</h2>
        <ul>
          <li>Tailored policies for your unique business risks</li>
          <li>Access to specialized insurers for home-based operations</li>
          <li>Expert guidance on liability, property, and cyber coverage</li>
          <li>Support through claims and risk management planning</li>
        </ul>
      </section>

      {/* WHO NEEDS IT */}
      <section>
        <h2>Who Should Consider Home Based Business Coverage?</h2>
        <ul>
          <li>Freelancers and consultants working from home</li>
          <li>Online retailers and e-commerce businesses</li>
          <li>Service providers like tutors, designers, or therapists</li>
          <li>Entrepreneurs operating small home-based ventures</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Home Business Today</h2>
        <p>
          Home Based Business Coverage ensures your business is resilient against
          unexpected events, allowing you to focus on growth and operations.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default HomeBasedBusinessCoverage;
