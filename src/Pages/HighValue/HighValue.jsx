import PageLayout from "../Shared/PageLayout/PageLayout";
import "./HighValue.css";

const HighValue = () => {
  return (
    <PageLayout
      title="High-Value Insurance"
      subtitle="Specialized protection for what matters most"
    >
      <div className="highvalue-page">
        {/* INTRO */}
        <section className="highvalue-intro">
          <h2>Protection Designed for High-Value Assets</h2>
          <p>
            High-value assets require more than standard insurance.
            At Morison Insurance, we provide tailored coverage solutions
            for luxury homes, premium vehicles, fine art, jewellery,
            and other valuable possessions.
          </p>
          <p>
            Our high-value insurance solutions are crafted to protect
            your lifestyle, preserve your wealth, and deliver peace of mind
            with personalized risk management.
          </p>
        </section>

        {/* ASSET TYPES */}
        <section className="highvalue-assets">
          <h2>What We Protect</h2>

          <div className="highvalue-grid">
            <div className="highvalue-card">
              <h3>Luxury Homes</h3>
              <p>
                Bespoke coverage for high-end residences, vacation homes,
                and exclusive properties with extended rebuilding protection.
              </p>
            </div>

            <div className="highvalue-card">
              <h3>Luxury & Exotic Vehicles</h3>
              <p>
                Specialized auto insurance for premium, exotic,
                and collector vehicles with agreed value coverage.
              </p>
            </div>

            <div className="highvalue-card">
              <h3>Jewellery & Watches</h3>
              <p>
                Comprehensive protection for engagement rings,
                fine jewellery, and luxury timepieces.
              </p>
            </div>

            <div className="highvalue-card">
              <h3>Fine Art & Collectibles</h3>
              <p>
                Tailored insurance for art collections, antiques,
                rare items, and valuable personal collections.
              </p>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="highvalue-why-us">
          <h2>Why Morison High-Value Insurance?</h2>
          <ul>
            <li>Access to specialized high-net-worth insurers</li>
            <li>Customized coverage with higher policy limits</li>
            <li>Worldwide protection options</li>
            <li>Discreet claims handling and expert support</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="highvalue-cta">
          <button>Request a Private Consultation</button>
        </div>
      </div>
    </PageLayout>
  );
};

export default HighValue;
