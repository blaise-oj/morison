import PageLayout from "../Shared/PageLayout/PageLayout";
import "./Other.css";

const Other = () => {
  return (
    <PageLayout
      title="Comprehensive Insurance Solutions"
      subtitle="Explore a wide range of coverage tailored for every need"
    >
      <div className="other-page">
        {/* INTRO */}
        <section className="other-intro">
          <h2>Welcome to Morison Other Insurance</h2>
          <p>
            Our "Other" insurance offerings cover a variety of specialized needs
            beyond standard home and auto protection. From personal valuables to
            group plans, we provide solutions designed to keep you covered in
            every aspect of life.
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
              <p>
                Jewelry, watches, engagement rings, fine art, wine collections,
                and more – insured with care and expertise.
              </p>
            </div>

            <div className="other-card">
              <h3>Property & Liability</h3>
              <p>
                Outbuildings, water damage, overland water coverage, and umbrella
                policies for extra protection.
              </p>
            </div>

            <div className="other-card">
              <h3>Group & Life</h3>
              <p>
                Group insurance for organizations, life insurance, disability,
                and critical illness coverage tailored for your needs.
              </p>
            </div>

            <div className="other-card">
              <h3>Special Events & Extras</h3>
              <p>
                Wedding insurance, hole-in-one insurance, party liability coverage,
                and other specialty insurance solutions.
              </p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="other-why-us">
          <h2>Why Choose Morison Insurance?</h2>
          <ul>
            <li>Expert advice and personalized coverage plans</li>
            <li>High-quality protection for niche and specialized risks</li>
            <li>Quick, discreet, and professional claims handling</li>
            <li>Dedicated support for both individuals and organizations</li>
          </ul>
        </section>

        {/* CALL TO ACTION */}
        <div className="other-cta">
          <button>Request a Consultation</button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Other;
 