import PageLayout from "../Shared/PageLayout/PageLayout";
import "./Auto.css";

const Auto = () => {
  return (
    <PageLayout
      title="Auto Insurance"
      subtitle="Smart protection for every journey"
    >
      <div className="auto-page">
        {/* INTRO */}
        <section className="auto-intro">
          <h2>Auto Insurance Made Simple</h2>
          <p>
            Whether you drive a personal car, a luxury vehicle, or a commercial fleet,
            Morison Insurance helps you stay protected on the road.
            Our auto insurance solutions are designed to give you confidence,
            flexibility, and peace of mind every time you drive.
          </p>
        </section>

        {/* COVERAGE TYPES */}
        <section className="auto-coverages">
          <h2>Our Auto Insurance Options</h2>

          <div className="auto-coverages-grid">
            <div className="auto-card">
              <h3>Private Car Insurance</h3>
              <p>
                Comprehensive and third-party coverage for everyday drivers,
                tailored to your lifestyle and budget.
              </p>
            </div>

            <div className="auto-card">
              <h3>Luxury & High-Value Vehicles</h3>
              <p>
                Specialized protection for premium and exotic cars with higher value
                and customized risk coverage.
              </p>
            </div>

            <div className="auto-card">
              <h3>Electric & Hybrid Vehicles</h3>
              <p>
                Modern insurance solutions designed specifically for electric and
                hybrid cars, including battery coverage.
              </p>
            </div>

            <div className="auto-card">
              <h3>Commercial & Fleet Insurance</h3>
              <p>
                Reliable coverage for business vehicles, taxis, delivery fleets,
                and company-owned cars.
              </p>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="auto-why-us">
          <h2>Why Choose Morison Auto Insurance?</h2>
          <ul>
            <li>Access to Kenya’s leading insurance providers</li>
            <li>Flexible cover options — comprehensive or third party</li>
            <li>Fast claims support and expert guidance</li>
            <li>Competitive pricing with bundling discounts</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="auto-cta">
          <button>Get an Auto Insurance Quote</button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Auto;

