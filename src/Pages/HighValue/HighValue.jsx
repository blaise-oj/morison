import PageLayout from "../Shared/PageLayout/PageLayout";
import "./HighValue.css";

const HighValue = () => {
  return (
    <div className="highvalue-pages">
      <PageLayout
        title="High-Value & Private Client Insurance"
        subtitle="Bespoke protection for luxury assets, exclusive properties, and high-net-worth lifestyles."
        headerClass="hero"
        cta={<button>Schedule a Private Consultation</button>}
      >
        <div className="highvalue-page">
          {/* INTRO */}
          <section className="highvalue-intro">
            <h2>Protection Beyond Standard Insurance</h2>
            <p>
              High-value assets demand more than ordinary coverage.
              At Morison Insurance, we design bespoke insurance
              solutions tailored to protect your wealth, lifestyle,
              and legacy.
            </p>
            <p>
              From luxury residences and exotic vehicles to fine art
              and rare collections, we work with specialized insurers
              to provide enhanced limits, agreed value protection,
              and discreet claims handling.
            </p>
          </section>

          {/* ASSET TYPES */}
          <section className="highvalue-assets">
            <h2>What We Protect</h2>

            <div className="highvalue-grid">
              <div className="highvalue-card">
                <h3>Luxury Residences</h3>
                <p>
                  Comprehensive cover for high-end homes, holiday
                  properties, and exclusive estates with extended
                  rebuilding and contents protection.
                </p>
              </div>

              <div className="highvalue-card">
                <h3>Luxury & Collector Vehicles</h3>
                <p>
                  Agreed value insurance for premium, exotic,
                  and collectible vehicles with worldwide
                  coverage options.
                </p>
              </div>

              <div className="highvalue-card">
                <h3>Jewellery & Timepieces</h3>
                <p>
                  Specialized protection for engagement rings,
                  bespoke jewellery, and luxury watches —
                  including worldwide cover.
                </p>
              </div>

              <div className="highvalue-card">
                <h3>Fine Art & Private Collections</h3>
                <p>
                  Tailored insurance for art collections,
                  antiques, rare memorabilia, and
                  investment-grade collectibles.
                </p>
              </div>
            </div>
          </section>

          {/* WHY US */}
          <section className="highvalue-why-us">
            <h2>Why Choose Morison Private Client Insurance?</h2>
            <ul>
              <li>Access to specialist high-net-worth insurers</li>
              <li>Customized policies with higher coverage limits</li>
              <li>Agreed value and worldwide protection options</li>
              <li>Confidential, priority claims handling</li>
              <li>Dedicated advisory support</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="highvalue-cta">
            <button>Speak to a Private Client Advisor</button>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default HighValue;
