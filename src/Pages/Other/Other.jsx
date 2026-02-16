import PageLayout from "../Shared/PageLayout/PageLayout";
import "./Other.css";

const Other = () => {
  return (
    <div className="other-insurance-page">
      <PageLayout
        title="Comprehensive Insurance Solutions"
        subtitle="Specialized protection for unique risks and valuable assets"
        headerClass="hero"
      >
        <div className="other-page">

          {/* INTRO */}
          <section className="other-intro">
            <h2>Specialized Coverage Beyond the Standard</h2>
            <p>
              Not every insurance need fits into a traditional category.
              At Morison Insurance, we provide tailored solutions for
              specialized assets, unique liabilities, and life’s
              important moments.
            </p>
            <p>
              Whether you need protection for high-value items,
              special events, or enhanced liability coverage,
              we ensure complete peace of mind.
            </p>
          </section>

          {/* COVERAGE GRID */}
          <section className="other-highlights">
            <h2>What We Cover</h2>
            <div className="other-grid">

              <div className="other-card">
                <h3>Valuable Personal Items</h3>
                <p>
                  Jewelry, watches, engagement rings, fine art,
                  wine collections, and other high-value belongings.
                </p>
              </div>

              <div className="other-card">
                <h3>Extended Property Protection</h3>
                <p>
                  Outbuildings, water damage, overland water,
                  sewer backup, and umbrella liability coverage.
                </p>
              </div>

              <div className="other-card">
                <h3>Life & Group Benefits</h3>
                <p>
                  Group insurance, life coverage, disability,
                  and critical illness protection for families and employees.
                </p>
              </div>

              <div className="other-card">
                <h3>Special Event Insurance</h3>
                <p>
                  Wedding insurance, party liability,
                  corporate events, and hole-in-one coverage.
                </p>
              </div>

            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section className="other-why-us">
            <h2>Why Choose Morison Insurance?</h2>
            <p>
              We specialize in protecting what matters most —
              even when the risks are unique. Our advisors ensure
              your coverage is precise, competitive, and comprehensive.
            </p>
            <ul>
              <li>Personalized advice tailored to your needs</li>
              <li>Specialized protection for niche risks</li>
              <li>Professional claims advocacy</li>
              <li>Dedicated client support</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="other-cta">
            <button>Request a Consultation</button>
          </div>

        </div>
      </PageLayout>
    </div>
  );
};

export default Other;
