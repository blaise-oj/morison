import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./WeddingInsurance.css";

const WeddingInsurance = () => {
  return (
      <div className="wedding-insurance-page">  
    <PageLayout
      title="Wedding Insurance"
      subtitle="Financial protection for your wedding day and special celebration."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Wedding insurance</strong> helps protect your investment if
          unexpected issues arise before or during your wedding day.
        </p>
        <p>
          From vendor cancellations to property damage or liability claims,
          wedding insurance provides peace of mind so you can focus on your celebration.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section>
        <h2>Why Wedding Insurance Is Important</h2>
        <p>
          Weddings involve significant planning, deposits, and coordination
          with multiple vendors.
        </p>
        <p>
          Insurance helps protect against financial loss caused by cancellations,
          weather disruptions, accidents, or unforeseen emergencies.
        </p>
      </section>

      {/* COVERAGE */}
      <section>
        <h2>What Does Wedding Insurance Cover?</h2>
        <ul>
          <li>Cancellation or postponement due to unforeseen circumstances</li>
          <li>Vendor no-shows or service failures</li>
          <li>Property damage at the venue</li>
          <li>Liability coverage for injuries or accidents</li>
        </ul>
      </section>

      {/* OPTIONAL */}
      <section>
        <h2>Optional Wedding Coverage Enhancements</h2>
        <ul>
          <li>Alcohol liability coverage</li>
          <li>Coverage for wedding attire and rings</li>
          <li>Weather-related protection</li>
          <li>Destination wedding coverage options</li>
        </ul>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Why Choose Morison</h2>
        <ul>
          <li>Affordable, event-specific insurance solutions</li>
          <li>Flexible coverage limits based on your wedding size</li>
          <li>Access to trusted wedding insurance providers</li>
          <li>Guidance through planning and claims support</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who Should Consider Wedding Insurance?</h2>
        <ul>
          <li>Couples planning a wedding or reception</li>
          <li>Destination wedding planners</li>
          <li>Anyone making non-refundable deposits</li>
          <li>Hosts responsible for venue and guest safety</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Wedding Day</h2>
        <p>
          Wedding insurance ensures your special day is protected from
          unexpected disruptions and financial loss.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default WeddingInsurance;
