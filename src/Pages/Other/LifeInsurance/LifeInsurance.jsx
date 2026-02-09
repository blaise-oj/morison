import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./LifeInsurance.css";

const LifeInsurance = () => {
  return (
    <PageLayout
      title="Life Insurance"
      subtitle="Financial protection for your loved ones when it matters most."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Life insurance</strong> provides financial security to your family
          and dependents in the event of your passing.
        </p>
        <p>
          It helps ensure that loved ones can maintain their lifestyle, cover
          everyday expenses, and manage long-term financial obligations.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section>
        <h2>Why Life Insurance Is Important</h2>
        <p>
          The loss of income can place a significant financial burden on families,
          especially when dealing with mortgages, debts, or education costs.
        </p>
        <p>
          Life insurance provides peace of mind knowing your loved ones are protected
          financially during difficult times.
        </p>
      </section>

      {/* TYPES */}
      <section>
        <h2>Types of Life Insurance Coverage</h2>
        <ul>
          <li>Term life insurance for affordable, temporary protection</li>
          <li>Permanent life insurance with lifelong coverage</li>
          <li>Whole life insurance with guaranteed benefits</li>
          <li>Universal life insurance with flexible premiums</li>
        </ul>
      </section>

      {/* OPTIONAL BENEFITS */}
      <section>
        <h2>Optional Benefits and Riders</h2>
        <ul>
          <li>Critical illness and disability riders</li>
          <li>Accidental death benefit</li>
          <li>Child and family coverage options</li>
          <li>Premium waiver in case of disability</li>
        </ul>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Why Choose Morison for Life Insurance</h2>
        <ul>
          <li>Access to multiple trusted life insurance providers</li>
          <li>Personalized advice based on your financial goals</li>
          <li>Flexible coverage options to fit every life stage</li>
          <li>Ongoing support as your needs change</li>
        </ul>
      </section>

      {/* WHO NEEDS IT */}
      <section>
        <h2>Who Should Consider Life Insurance?</h2>
        <ul>
          <li>Parents and caregivers supporting dependents</li>
          <li>Homeowners with mortgages or loans</li>
          <li>Business owners protecting succession plans</li>
          <li>Anyone wanting to secure their family’s future</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Family’s Future Today</h2>
        <p>
          Life insurance is a cornerstone of financial planning and long-term
          security for your loved ones.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default LifeInsurance;
