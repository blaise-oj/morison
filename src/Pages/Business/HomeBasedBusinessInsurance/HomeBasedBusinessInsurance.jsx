import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./HomeBasedBusinessInsurance.css";

const HomeBasedBusinessInsurance = () => {
  return (
    <PageLayout
      title="Home-Based Business Insurance"
      subtitle="Protect your home business from property damage, liability, and operational risks."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Home-Based Business insurance</strong> safeguards entrepreneurs running businesses from home
          against property damage, liability claims, and loss of income.
        </p>
        <p>
          Morison brokers help home-based businesses secure coverage tailored to home operations,
          equipment, and client interactions.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Home-Based Business Insurance Is Essential</h2>
        <p>
          Operating a business from home exposes owners to risks such as equipment damage, client injuries, and liability claims.
          Standard homeowners insurance may not fully cover business activities.
        </p>
        <p>
          Home-based business insurance ensures protection for property, liability, and income, keeping your business running smoothly.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Home-Based Business Insurance</h2>
        <ul>
          <li>Coverage for business equipment and inventory</li>
          <li>Protection against liability claims from clients or visitors</li>
          <li>Income protection in case of property damage or business interruption</li>
          <li>Expert guidance on risk management and claims handling</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Home-Based Business Insurance Coverage Options</h2>
        <ul>
          <li>Business property coverage (equipment, inventory, furniture)</li>
          <li>Liability protection for clients and visitors</li>
          <li>Business interruption coverage</li>
          <li>Cyber and data protection for home offices</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Professional liability add-on</li>
          <li>Extended equipment coverage</li>
          <li>Rented or off-site property coverage</li>
          <li>Cyber liability coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Home-Based Business Insurance</h2>
        <ul>
          <li>Implementing home safety measures and fire protection</li>
          <li>Bundling with homeowners or other business insurance policies</li>
          <li>Maintaining a claims-free operational history</li>
          <li>Using secure storage and backup systems for equipment and data</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Home-Based Business Insurance?</h2>
        <ul>
          <li>Entrepreneurs running businesses from home</li>
          <li>Freelancers or consultants working from home offices</li>
          <li>Small home-based retail or service businesses</li>
          <li>Business owners seeking protection for property, liability, and income</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Home Business Today</h2>
        <p>
          Morison brokers provide tailored Home-Based Business insurance coverage,
          ensuring your home operations are fully protected from risks and financial loss.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default HomeBasedBusinessInsurance;
