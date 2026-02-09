import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./PartyAlcoholLiability.css";

const PartyAlcoholLiability = () => {
  return (
    <PageLayout
      title="Party Alcohol Liability Insurance"
      subtitle="Protection for hosts serving alcohol at private events and celebrations."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Party alcohol liability insurance</strong> protects hosts from
          legal and financial responsibility if alcohol-related incidents occur
          during a private event.
        </p>
        <p>
          Whether you are hosting a birthday, fundraiser, or private celebration,
          this coverage helps protect you if a guest causes injury or damage
          after consuming alcohol.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section>
        <h2>Why Party Alcohol Liability Insurance Is Important</h2>
        <p>
          Hosts can be held legally responsible for alcohol-related accidents,
          injuries, or property damage caused by guests.
        </p>
        <p>
          Even a single incident can result in costly legal fees and claims.
          This coverage provides peace of mind when hosting events involving alcohol.
        </p>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>What Does Party Alcohol Liability Cover?</h2>
        <ul>
          <li>Bodily injury caused by intoxicated guests</li>
          <li>Property damage resulting from alcohol-related incidents</li>
          <li>Legal defense costs</li>
          <li>Claims arising from serving or providing alcohol</li>
        </ul>
      </section>

      {/* EVENTS */}
      <section>
        <h2>Events That May Require Coverage</h2>
        <ul>
          <li>Private parties and celebrations</li>
          <li>Weddings and receptions</li>
          <li>Fundraisers and charity events</li>
          <li>Corporate or office parties</li>
        </ul>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Why Choose Morison</h2>
        <ul>
          <li>Quick and affordable event-based coverage</li>
          <li>Flexible limits tailored to your event size</li>
          <li>Access to trusted insurers</li>
          <li>Guidance on alcohol-related risk management</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Party Alcohol Liability Insurance?</h2>
        <ul>
          <li>Private individuals hosting events</li>
          <li>Event organizers and planners</li>
          <li>Non-profit organizations hosting fundraisers</li>
          <li>Anyone serving alcohol at a private event</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Host Your Event With Confidence</h2>
        <p>
          Party alcohol liability insurance helps protect you from unexpected
          legal and financial risks.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
  );
};

export default PartyAlcoholLiability;
