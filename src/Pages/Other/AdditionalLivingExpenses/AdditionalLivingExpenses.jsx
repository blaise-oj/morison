import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./AdditionalLivingExpenses.css";

const AdditionalLivingExpenses = () => {
  return (
    <div className="additional-living-expenses-page">
    <PageLayout
      title="Additional Living Expenses Coverage"
      subtitle="Financial protection for temporary living costs when your home becomes uninhabitable."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Additional Living Expenses (ALE) coverage</strong> helps cover
          the increased costs you may face if your home is damaged by a covered
          loss and you’re forced to live elsewhere temporarily.
        </p>
        <p>
          This coverage ensures that unexpected displacement doesn’t create
          financial strain while your home is being repaired or rebuilt.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section>
        <h2>Why Additional Living Expenses Coverage Is Important</h2>
        <p>
          A fire, flood, or major insured loss can make your home unsafe to live
          in for weeks or even months.
        </p>
        <p>
          Without ALE coverage, the cost of hotels, meals, transportation, and
          temporary housing can quickly add up and place stress on your finances.
        </p>
      </section>

      {/* WHAT IT COVERS */}
      <section>
        <h2>What Additional Living Expenses Coverage Includes</h2>
        <ul>
          <li>Temporary accommodation or hotel stays</li>
          <li>Increased food and meal expenses</li>
          <li>Extra transportation costs</li>
          <li>Laundry and storage expenses</li>
          <li>Pet boarding, where applicable</li>
        </ul>
      </section>

      {/* WHAT IT DOES NOT COVER */}
      <section>
        <h2>What Is Not Covered</h2>
        <ul>
          <li>Normal living expenses you would pay anyway</li>
          <li>Losses caused by uninsured or excluded events</li>
          <li>Long-term relocation costs beyond policy limits</li>
          <li>Luxury or non-essential upgrades</li>
        </ul>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Why Choose Morison for Additional Living Expenses Coverage</h2>
        <ul>
          <li>Customized coverage limits based on your lifestyle</li>
          <li>Access to insurers with flexible ALE benefits</li>
          <li>Clear guidance during claims and displacement</li>
          <li>Dedicated broker support from start to finish</li>
        </ul>
      </section>

      {/* WHO NEEDS IT */}
      <section>
        <h2>Who Should Consider Additional Living Expenses Coverage?</h2>
        <ul>
          <li>Homeowners and condominium owners</li>
          <li>Landlords with insured rental properties</li>
          <li>Families with higher temporary housing costs</li>
          <li>Anyone seeking financial stability after a major loss</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Lifestyle During the Unexpected</h2>
        <p>
          Additional Living Expenses coverage helps you maintain your standard
          of living when the unexpected happens.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default AdditionalLivingExpenses;
