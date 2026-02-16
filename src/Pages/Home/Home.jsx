// src/Pages/Home/Home.jsx
import React from "react";
import PageLayout from "../Shared/PageLayout/PageLayout";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <PageLayout
        title="Insurance Made Simple. Protection Made Personal."
        subtitle="Reliable insurance solutions tailored for individuals, families, and businesses across Kenya."
        cta={<button>Request a Free Quote</button>}
        headerClass="hero"
      >
        {/* Hero intro */}
        <section className="home-intro">
          <h2>Your Trusted Insurance Partner in Kenya</h2>
          <p>
            At Morison Insurance, we believe insurance should give you confidence —
            not confusion. Whether you're protecting your home, your vehicle,
            your business, or your most valuable assets, we provide clear guidance,
            competitive coverage options, and dependable support when you need it most.
          </p>
        </section>

        {/* Services section */}
        <section className="home-services">
          <h2>Comprehensive Insurance Solutions</h2>
          <div className="home-services-grid">
            <div className="home-service-card">
              <h3>Home Insurance</h3>
              <p>
                Protect your house, rental property, and personal belongings
                against fire, theft, and unexpected damage.
              </p>
            </div>

            <div className="home-service-card">
              <h3>Auto Insurance</h3>
              <p>
                From private cars to commercial vehicles, enjoy reliable
                coverage that keeps you moving with confidence.
              </p>
            </div>

            <div className="home-service-card">
              <h3>High-Value Assets</h3>
              <p>
                Specialized protection for luxury vehicles, jewelry,
                electronics, fine art, and other high-value possessions.
              </p>
            </div>

            <div className="home-service-card">
              <h3>Business Insurance</h3>
              <p>
                Comprehensive solutions to safeguard your business,
                employees, property, and operations from unexpected risks.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="home-why-us">
          <h2>Why Choose Morison Insurance?</h2>
          <ul>
            <li>Personalized insurance advice tailored to your needs</li>
            <li>Fast, transparent, and stress-free claims support</li>
            <li>Strong partnerships with leading insurance underwriters</li>
            <li>Competitive premiums with flexible coverage options</li>
            <li>Professional customer support you can rely on</li>
          </ul>
        </section>
      </PageLayout>
    </div>
  );
};

export default Home;
