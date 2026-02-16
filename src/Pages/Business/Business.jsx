import PageLayout from "../Shared/PageLayout/PageLayout";
import "./Business.css";

const Business = () => {
  return (
    <div className="business-insurance-page">
      <PageLayout
        title="Business Insurance"
        subtitle="Protecting your business at every stage of growth"
        headerClass="hero"
      >
        <div className="business-page">

          {/* INTRO */}
          <section className="business-intro">
            <h2>Insurance Built for Modern Businesses</h2>
            <p>
              Every business faces unique risks. At Morison Insurance, we help
              entrepreneurs, startups, and established companies safeguard
              their operations, employees, and assets with tailored protection.
            </p>
            <p>
              Whether you operate locally or across multiple locations,
              our scalable solutions evolve alongside your business.
            </p>
          </section>

          {/* WHO WE INSURE */}
          <section className="business-types">
            <h2>Who We Protect</h2>
            <div className="business-grid">

              <div className="business-card">
                <h3>Small & Medium Businesses</h3>
                <p>
                  Flexible coverage for SMEs including property, liability,
                  inventory, and employee protection.
                </p>
              </div>

              <div className="business-card">
                <h3>Professional Services</h3>
                <p>
                  Protection for consultants, agencies, and professionals
                  against errors, omissions, and legal claims.
                </p>
              </div>

              <div className="business-card">
                <h3>Commercial Property Owners</h3>
                <p>
                  Comprehensive protection for office buildings, retail
                  spaces, warehouses, and rental properties.
                </p>
              </div>

              <div className="business-card">
                <h3>Growing Enterprises</h3>
                <p>
                  Scalable insurance programs designed to support expansion,
                  new hires, and multi-location operations.
                </p>
              </div>

            </div>
          </section>

          {/* COVERAGE OPTIONS */}
          <section className="business-coverages">
            <h2>Coverage Options</h2>
            <div className="coverage-list">
              <ul>
                <li>General & Commercial Liability</li>
                <li>Professional Indemnity</li>
                <li>Commercial Property Insurance</li>
                <li>Workers’ Compensation</li>
                <li>Cyber & Data Protection</li>
                <li>Business Interruption Coverage</li>
              </ul>
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section className="business-why-us">
            <h2>Why Choose Morison Insurance?</h2>
            <p>
              We partner with leading insurers to provide competitive,
              industry-specific coverage tailored to your company’s
              risk profile and long-term goals.
            </p>
            <ul>
              <li>Customized solutions for your industry</li>
              <li>Access to leading commercial insurers</li>
              <li>Expert risk assessment & advisory</li>
              <li>Fast, reliable claims support</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="business-cta">
            <button>Request a Business Quote</button>
          </div>

        </div>
      </PageLayout>
    </div>
  );
};

export default Business;
