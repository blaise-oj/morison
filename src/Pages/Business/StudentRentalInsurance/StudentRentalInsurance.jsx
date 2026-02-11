import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./StudentRentalInsurance.css";

const StudentRentalInsurance = () => {
  return (
    <div className="student-rental-insurance-page">
    <PageLayout
      title="Student Rental Insurance"
      subtitle="Protect student rental properties and tenants from property damage, liability, and loss of belongings."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Student Rental Insurance</strong> safeguards property owners and student tenants
          against financial losses due to property damage, theft, or liability incidents in student rentals.
        </p>
        <p>
          Morison brokers help landlords and student tenants secure coverage tailored to the unique risks
          of student accommodations.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY SPECIAL */}
      <section>
        <h2>Why Student Rental Insurance Is Essential</h2>
        <p>
          Student rental properties face higher risks of accidental damage, theft, or liability claims.
          Standard homeowners insurance may not fully cover student tenants or rental activity.
        </p>
        <p>
          Student Rental Insurance ensures protection for the property, tenants’ belongings, and liability,
          reducing financial exposure for landlords and students alike.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Student Rental Insurance</h2>
        <ul>
          <li>Protection for property damage caused by tenants</li>
          <li>Coverage for theft or loss of student belongings</li>
          <li>Liability coverage for accidents or injuries on the premises</li>
          <li>Expert guidance on landlord and tenant insurance needs</li>
        </ul>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>Student Rental Insurance Coverage Options</h2>
        <ul>
          <li>Building and property coverage</li>
          <li>Contents insurance for student belongings</li>
          <li>Liability protection for accidents on the property</li>
          <li>Loss of rental income coverage</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Extended coverage for natural disasters</li>
          <li>Coverage for off-campus student belongings</li>
          <li>Umbrella liability coverage</li>
          <li>Equipment breakdown or appliances coverage</li>
        </ul>
      </section>

      {/* SAVINGS */}
      <section>
        <h2>Ways to Save on Student Rental Insurance</h2>
        <ul>
          <li>Implementing property maintenance and safety measures</li>
          <li>Bundling with other landlord or property insurance policies</li>
          <li>Maintaining a low-claims history</li>
          <li>Installing locks, fire alarms, and security systems</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Student Rental Insurance?</h2>
        <ul>
          <li>Landlords renting properties to students</li>
          <li>Students renting off-campus housing</li>
          <li>Universities or institutions managing student accommodations</li>
          <li>Property owners seeking protection for student-occupied rentals</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Student Rental Property Today</h2>
        <p>
          Morison brokers provide tailored Student Rental Insurance coverage,
          ensuring both landlords and tenants are fully protected from damage, loss, and liability.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default StudentRentalInsurance;
