// src/Pages/Home/StudentRentalInsurance/StudentRentalInsurance.jsx
import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png"; // swap to student/lifestyle image later
import "./StudentRentalInsurance.css";

const StudentRentalInsurance = () => {
  return (
    <PageLayout
      title="Student Rental Insurance"
      subtitle="Affordable tenant insurance designed for students living away from home."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Budget-friendly protection:</strong> coverage designed to fit
          a student lifestyle
        </p>
        <p>
          <strong>Essential coverage:</strong> protects belongings and personal
          liability
        </p>
        <p>
          <strong>Peace of mind:</strong> protection for both students and
          parents
        </p>

        <p>
          Complete the form or call <strong>+1 343-512-7761</strong> to speak with
          a licensed broker about Student Rental Insurance today.
        </p>
      </section>

      {/* WHY STUDENT RENTAL INSURANCE */}
      <section>
        <h2>Why Do Students Need Rental Insurance?</h2>
        <p>
          Many students assume their belongings are covered under a parent’s
          home insurance policy — but that’s often not the case.
        </p>
        <p>
          Student rental insurance provides affordable coverage for personal
          property and liability while living in dorms, shared houses, or
          off-campus apartments.
        </p>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2>Why Choose Morison for Student Rental Insurance</h2>
        <ul>
          <li>Low-cost policies designed for students</li>
          <li>Simple, easy-to-understand coverage</li>
          <li>Flexible monthly payment options</li>
          <li>Licensed brokers available for guidance</li>
        </ul>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section>
        <h2>Student Rental Insurance Coverage Overview</h2>
        <p>
          Even with minimal belongings, unexpected events can be costly. Student
          rental insurance helps protect against common risks.
        </p>
      </section>

      {/* COVERAGE TYPES */}
      <section>
        <h3>Contents Insurance</h3>
        <p>
          Covers personal belongings kept in your rental unit.
        </p>
        <ul>
          <li>Laptops, tablets, and phones</li>
          <li>Clothing and textbooks</li>
          <li>Furniture and personal items</li>
        </ul>
      </section>

      <section>
        <h3>Personal Liability Insurance</h3>
        <p>
          Protects you if you accidentally cause injury or property damage to
          others.
        </p>
        <ul>
          <li>Damage to the rental unit</li>
          <li>Injury to guests or roommates</li>
          <li>Legal defence costs</li>
        </ul>
      </section>

      <section>
        <h3>Additional Living Expenses</h3>
        <p>
          Helps cover extra costs if your rental becomes uninhabitable due to an
          insured loss.
        </p>
        <ul>
          <li>Temporary accommodation</li>
          <li>Meal and transportation expenses</li>
        </ul>
      </section>

      {/* OPTIONAL COVERAGES */}
      <section>
        <h3>Optional Add-Ons</h3>
        <ul>
          <li>Higher limits for electronics</li>
          <li>Bicycle coverage</li>
          <li>Worldwide protection for belongings</li>
        </ul>
      </section>

      {/* BUNDLING */}
      <section>
        <h2>Bundle & Save on Insurance</h2>
        <ul>
          <li>Student Rental + Auto Insurance</li>
          <li>Student Rental + Tenant Insurance (Post-Graduation)</li>
          <li>Multiple Policies with One Broker</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Affordable Protection for Student Living</h2>
        <p>
          Whether you’re moving into a dorm, apartment, or shared house, student
          rental insurance helps protect what matters.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form on this page
          to get started today.
        </p>
      </section>
    </PageLayout>
  );
};

export default StudentRentalInsurance;
