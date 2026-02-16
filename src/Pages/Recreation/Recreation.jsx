import PageLayout from "../Shared/PageLayout/PageLayout";
import "./Recreation.css";

const Recreation = () => {
  return (
    <div className="recreation-insurance-pages">
      <PageLayout
        title="Recreation & Leisure Insurance"
        subtitle="Comprehensive protection for your adventures on land, water, and beyond."
        headerClass="hero"
        cta={<button>Request a Recreation Quote</button>}
      >
        <div className="recreation-page">
          {/* INTRODUCTION */}
          <section className="recreation-intro">
            <h2>Adventure Without Worry</h2>
            <p>
              Your leisure time should be about freedom and enjoyment —
              not risk. At Morison Insurance, we provide specialized
              coverage designed to protect your recreational vehicles,
              equipment, and travel experiences.
            </p>
            <p>
              Whether you’re exploring the open water, heading out on
              a road trip, or investing in high-value sporting equipment,
              we ensure your adventures are backed by reliable protection.
            </p>
          </section>

          {/* TYPES OF INSURANCE */}
          <section className="recreation-types">
            <h2>Our Recreation Insurance Solutions</h2>

            <div className="recreation-grid">
              <div className="recreation-card">
                <h3>Watercraft & Marine Cover</h3>
                <p>
                  Insurance for boats, yachts, jet skis, and other watercraft
                  including liability, accidental damage, and theft protection.
                </p>
              </div>

              <div className="recreation-card">
                <h3>Winter & Sporting Equipment</h3>
                <p>
                  Protection for ski equipment, snowboards, snowmobiles,
                  and specialized sporting gear.
                </p>
              </div>

              <div className="recreation-card">
                <h3>ATVs, RVs & Travel Trailers</h3>
                <p>
                  Comprehensive coverage for off-road vehicles, recreational
                  vehicles, and mobile travel units.
                </p>
              </div>

              <div className="recreation-card">
                <h3>Travel & Adventure Insurance</h3>
                <p>
                  Coverage for travel-related risks including trips,
                  rentals, and organized recreational events.
                </p>
              </div>
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section className="recreation-why-us">
            <h2>Why Choose Morison Recreation Insurance?</h2>
            <ul>
              <li>Flexible coverage tailored to your lifestyle</li>
              <li>Protection for high-value recreational equipment</li>
              <li>Worldwide coverage options for international travel</li>
              <li>Dedicated claims support when you need it most</li>
              <li>Access to leading specialized insurers</li>
            </ul>
          </section>

          {/* CALL TO ACTION */}
          <div className="recreation-cta">
            <button>Get Protected Before Your Next Adventure</button>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default Recreation;
