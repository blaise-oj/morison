import PageLayout from "../Shared/PageLayout/PageLayout";
import "./Recreation.css";

const Recreation = () => {
  return (
    <div className="recreation-insurance-pages">
    <PageLayout
      title="Recreation Insurance"
      subtitle="Protecting your adventures, water sports, and leisure activities"
      headerClass="hero"
    >
      <div className="recreation-page">
        {/* INTRODUCTION */}
        <section className="recreation-intro">
          <h2>Adventure with Confidence</h2>
          <p>
            At Morison Insurance, we understand that recreation comes in many forms.
            From water sports to snow adventures and everything in between, we provide
            insurance solutions that protect your equipment, vehicles, and experiences.
          </p>
          <p>
            Explore our recreation coverage options designed to give you peace of mind
            so you can enjoy your favorite activities safely.
          </p>
        </section>

        {/* TYPES OF INSURANCE */}
        <section className="recreation-types">
          <h2>What We Cover</h2>
          <div className="recreation-grid">
            <div className="recreation-card">
              <h3>Watercraft & Boats</h3>
              <p>Insurance for boats, yachts, seadoos, and other watercraft with full liability protection.</p>
            </div>

            <div className="recreation-card">
              <h3>Snow & Winter Sports</h3>
              <p>Covering ski equipment, snowboards, and snowmobiles so you can enjoy winter safely.</p>
            </div>

            <div className="recreation-card">
              <h3>Land Vehicles</h3>
              <p>ATVs, RVs, and travel trailers protected for both adventures and everyday use.</p>
            </div>

            <div className="recreation-card">
              <h3>Travel & Adventure</h3>
              <p>Coverage for travel-related risks, including rentals, trips, and special recreational events.</p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="recreation-why-us">
          <h2>Why Choose Morison Recreation Insurance?</h2>
          <ul>
            <li>Customizable coverage tailored to your lifestyle</li>
            <li>Specialized protection for valuable recreational equipment</li>
            <li>Worldwide coverage for international adventures</li>
            <li>Expert guidance and dedicated claims support</li>
          </ul>
        </section>

        {/* CALL TO ACTION */}
        <div className="recreation-cta">
          <button>Get a Quote for Your Adventure</button>
        </div>
      </div>
    </PageLayout>
    </div>
  );
};

export default Recreation;
