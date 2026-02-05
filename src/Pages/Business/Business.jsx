import PageLayout from "../Shared/PageLayout/PageLayout";
import "./Business.css";

const Business = () => {
  return (
    <PageLayout
      title="Business Insurance"
      subtitle="Protecting your business at every stage of growth"
    >
      <div className="business-page">

        {/* INTRO */}
        <section className="business-intro">
          <h2>Insurance Built for Modern Businesses</h2>
          <p>
            Every business faces unique risks. At Morison Insurance, we help
            entrepreneurs, startups, and established companies safeguard
            their operations, people, and assets with tailored insurance
            solutions.
          </p>
          <p>
            Whether you run a small business, manage commercial property,
            or operate a growing enterprise, our business insurance
            solutions are designed to adapt as your business evolves.
          </p>
        </section>

        {/* BUSINESS TYPES */}
        <section className="business-types">
          <h2>Who We Insure</h2>

          <div className="business-grid">
            <div className="business-card">
              <h3>Small & Medium Businesses</h3>
              <p>
                Flexible insurance solutions for SMEs covering property,
                liability, equipment, and employee risks.
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
                Comprehensive coverage for office buildings, retail spaces,
                warehouses, and rental properties.
              </p>
            </div>

            <div className="business-card">
              <h3>Growing Enterprises</h3>
              <p>
                Scalable insurance programs designed to support expanding
                operations and multi-location businesses.
              </p>
            </div>
          </div>
        </section>

        {/* COVERAGE */}
        <section className="business-coverages">
          <h2>Coverage Options</h2>
          <ul>
            <li>General & Commercial Liability Insurance</li>
            <li>Professional Indemnity Insurance</li>
            <li>Commercial Property Insurance</li>
            <li>Workers’ Compensation</li>
            <li>Cyber & Data Protection Insurance</li>
            <li>Business Interruption Coverage</li>
          </ul>
        </section>

        {/* WHY US */}
        <section className="business-why-us">
          <h2>Why Choose Morison Insurance?</h2>
          <p>
            We work with trusted insurers to deliver competitive coverage
            tailored to your industry, risk profile, and business goals.
          </p>
          <ul>
            <li>Customized business insurance solutions</li>
            <li>Access to leading commercial insurers</li>
            <li>Risk assessment and expert advice</li>
            <li>Fast, reliable claims support</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="business-cta">
          <button>Get a Business Insurance Quote</button>
        </div>

      </div>
    </PageLayout>
  );
};

export default Business;
