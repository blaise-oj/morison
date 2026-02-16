import PageLayout from "../Shared/PageLayout/PageLayout";
import "./Auto.css";

const Auto = () => {
  return (
    <div className="auto-page">
      <PageLayout
        title="Auto Insurance You Can Rely On"
        subtitle="Comprehensive, affordable, and flexible motor insurance solutions across Kenya."
        cta={<button>Request an Auto Quote</button>}
        headerClass="hero"
      >
        {/* INTRO */}
        <section className="auto-intro">
          <h2>Drive With Confidence</h2>
          <p>
            Whether you own a personal vehicle, manage a commercial fleet, or
            drive a high-value car, Morison Insurance ensures you are protected
            against accidents, theft, third-party liability, and unexpected risks.
            We simplify the process, compare top insurers, and help you secure
            the right cover at the right price.
          </p>
        </section>

        {/* COVERAGE TYPES */}
        <section className="auto-coverages">
          <h2>Our Motor Insurance Solutions</h2>

          <div className="auto-coverages-grid">
            <div className="auto-card">
              <h3>Private Car Insurance</h3>
              <p>
                Comprehensive and third-party coverage for personal vehicles,
                offering financial protection against accidents, fire, and theft.
              </p>
            </div>

            <div className="auto-card">
              <h3>Luxury & High-Performance Vehicles</h3>
              <p>
                Tailored protection for premium vehicles with higher insured
                values and specialized risk management.
              </p>
            </div>

            <div className="auto-card">
              <h3>Electric & Hybrid Vehicles</h3>
              <p>
                Modern coverage solutions designed for electric and hybrid cars,
                including battery and specialized component protection.
              </p>
            </div>

            <div className="auto-card">
              <h3>Commercial & Fleet Insurance</h3>
              <p>
                Reliable cover for taxis, delivery vehicles, trucks, and
                company fleets to keep your business moving without disruption.
              </p>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="auto-why-us">
          <h2>Why Choose Morison for Motor Insurance?</h2>
          <ul>
            <li>Access to Kenya’s leading insurance underwriters</li>
            <li>Flexible cover options — Comprehensive or Third Party</li>
            <li>Competitive premiums with structured payment options</li>
            <li>Fast claims assistance and professional guidance</li>
            <li>Dedicated support throughout your policy period</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="auto-cta">
          <button>Get Your Auto Insurance Quote Today</button>
        </div>
      </PageLayout>
    </div>
  );
};

export default Auto;
