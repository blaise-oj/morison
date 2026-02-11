import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./TelematicsInsurance.css";

const TelematicsInsurance = () => {
  return (
      <div className="telematics-insurance-page">
    <PageLayout
      title="Telematics Insurance"
      subtitle="Smart auto insurance that rewards safe driving through connected technology."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Behaviour-based savings:</strong> good driving habits can lead
          to lower insurance premiums.
        </p>
        <p>
          <strong>Real-time insights:</strong> understand how your driving affects
          your rates.
        </p>
        <p>
          <strong>Flexible programs:</strong> participation is optional and
          insurer-specific.
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with a
          licensed broker about telematics insurance today.
        </p>
      </section>

      {/* WHAT IS TELEMATICS */}
      <section>
        <h2>What Is Telematics Insurance?</h2>
        <p>
          Telematics insurance uses connected technology — such as a mobile app
          or plug-in device — to monitor driving habits including speed,
          braking, acceleration, mileage, and time of day.
        </p>
        <p>
          Insurers use this data to reward safe drivers with potential discounts.
        </p>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Why Choose Morison for Telematics Insurance</h2>
        <ul>
          <li>Access to Multiple Telematics Programs</li>
          <li>Transparent Discount Structures</li>
          <li>Licensed Brokers to Guide Enrollment</li>
          <li>No Obligation to Stay Enrolled</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <h2>How Telematics Insurance Works</h2>
        <ol>
          <li>Enroll in a telematics program through your insurer</li>
          <li>Install an app or plug-in device</li>
          <li>Track driving behaviour over a set period</li>
          <li>Earn discounts for safe driving</li>
        </ol>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Your Coverage Doesn’t Change</h2>
        <p>
          Telematics programs adjust pricing — not protection. Your auto policy
          still includes standard coverages.
        </p>
      </section>

      <section>
        <h3>Standard Auto Coverages</h3>
        <ul>
          <li>Third-party liability</li>
          <li>Accident benefits</li>
          <li>Collision coverage</li>
          <li>Comprehensive coverage</li>
        </ul>
      </section>

      {/* WHO BENEFITS */}
      <section>
        <h2>Who Benefits from Telematics Insurance?</h2>
        <ul>
          <li>Safe and defensive drivers</li>
          <li>Low-mileage drivers</li>
          <li>New or young drivers</li>
          <li>Drivers looking for usage-based discounts</li>
        </ul>
      </section>

      {/* PRIVACY */}
      <section>
        <h2>Privacy & Data Considerations</h2>
        <ul>
          <li>Data collected varies by insurer</li>
          <li>Information is used for rating and feedback</li>
          <li>Programs are voluntary</li>
          <li>You can opt out at renewal</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>See If Telematics Insurance Is Right for You</h2>
        <p>
          A Morison broker can compare telematics insurance options and help you
          decide if it fits your driving style.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default TelematicsInsurance;
