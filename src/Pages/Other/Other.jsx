import PageLayout from "../Shared/PageLayout/PageLayout";
import "./Other.css";

const Other = () => {
  return (
    <div className="other-page">
      <PageLayout
        title="Comprehensive Insurance Solutions"
        subtitle="Explore a wide range of coverage tailored for every need"
        headerClass="hero"
      >
        {/* INTRO */}
        <section className="other-intro">
          <h2>Welcome to Morison Other Insurance</h2>
          <p>
            Our "Other" insurance offerings cover a variety of specialized needs
            beyond standard home and auto protection.
          </p>
          <p>
            Explore our extensive range of insurance options and discover how
            Morison Insurance ensures your peace of mind.
          </p>
        </section>

        {/* COVERAGE HIGHLIGHTS */}
        <section className="other-highlights">
          <h2>What We Offer</h2>
          <div className="other-grid">
            <div className="other-card">
              <h3>Personal Coverage</h3>
              <p>Jewelry, watches, engagement rings, fine art, wine collections.</p>
            </div>

            <div className="other-card">
              <h3>Property & Liability</h3>
              <p>Outbuildings, water damage, overland water, umbrella coverage.</p>
            </div>

            <div className="other-card">
              <h3>Group & Life</h3>
              <p>Group insurance, life, disability & critical illness coverage.</p>
            </div>

            <div className="other-card">
              <h3>Special Events</h3>
              <p>Wedding insurance, party liability, hole-in-one insurance.</p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="other-why-us">
          <h2>Why Choose Morison Insurance?</h2>
          <ul>
            <li>Expert advice and personalized coverage</li>
            <li>Specialized protection for niche risks</li>
            <li>Professional claims handling</li>
            <li>Dedicated client support</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="other-cta">
          <button>Request a Consultation</button>
        </div>
      </PageLayout>
    </div>
  );
};

export default Other;
