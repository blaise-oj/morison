import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import "./HomeInsurance.css";

const HomeInsurance = () => {
  return (
    <div className="home-insurance-page">
      <PageLayout
        title="Home Insurance"
        subtitle="Protect your home, belongings, and lifestyle with coverage tailored to you."
        headerClass="hero"
      >
        <div className="home-page">

          {/* QUICK BENEFITS */}
          <section className="home-highlights">
            <div className="highlight-card">
              <h3>Personalized Coverage</h3>
              <p>Comprehensive protection designed around your property and lifestyle.</p>
            </div>

            <div className="highlight-card">
              <h3>Claims Advocacy</h3>
              <p>Dedicated support when you need it most — we’re on your side.</p>
            </div>

            <div className="highlight-card">
              <h3>Bundle & Save</h3>
              <p>Combine home, auto, and additional policies for greater savings.</p>
            </div>
          </section>

          {/* INTRO */}
          <section className="home-intro">
            <h2>Compare the Right Coverage & Save</h2>
            <p>
              Finding the right home insurance in Ontario shouldn’t be complicated.
              Morison Insurance compares dozens of trusted insurers to secure
              competitive rates and tailored protection.
            </p>
            <p>
              Whether you're protecting a family home, new build, or investment
              property, our licensed brokers personalize your policy to fit your needs.
            </p>
          </section>

          {/* CORE COVERAGE */}
          <section className="home-coverage">
            <h2>What Home Insurance Covers</h2>

            <div className="coverage-grid">

              <div className="coverage-card">
                <h3>Building Protection</h3>
                <p>Coverage for your home’s structure and permanent fixtures.</p>
                <ul>
                  <li>Fire & smoke</li>
                  <li>Wind & hail</li>
                  <li>Lightning</li>
                  <li>Falling objects</li>
                </ul>
              </div>

              <div className="coverage-card">
                <h3>Contents Coverage</h3>
                <p>Protection for personal belongings inside your home.</p>
                <ul>
                  <li>Furniture & electronics</li>
                  <li>Clothing & valuables</li>
                  <li>Theft & vandalism</li>
                </ul>
              </div>

              <div className="coverage-card">
                <h3>Personal Liability</h3>
                <p>Financial protection if you cause injury or property damage.</p>
                <ul>
                  <li>Legal defence costs</li>
                  <li>Settlements & judgments</li>
                </ul>
              </div>

              <div className="coverage-card">
                <h3>Water Protection</h3>
                <p>Optional add-ons for one of Ontario’s most common claim types.</p>
                <ul>
                  <li>Burst pipes</li>
                  <li>Overland flooding</li>
                  <li>Sewer backup</li>
                  <li>Ground water seepage</li>
                </ul>
              </div>

            </div>
          </section>

          {/* OPTIONAL COVERAGE */}
          <section className="home-optional">
            <h2>Optional Enhancements</h2>
            <ul>
              <li>Guaranteed Replacement Cost</li>
              <li>By-Law Coverage</li>
              <li>Jewellery & High-Value Items</li>
              <li>Outbuildings & Detached Structures</li>
              <li>Identity Theft & Umbrella Liability</li>
            </ul>
          </section>

          {/* BUNDLING */}
          <section className="home-bundle">
            <h2>Bundle & Save</h2>
            <ul>
              <li>Home + Auto (Most Popular)</li>
              <li>Home + Umbrella Liability</li>
              <li>Home + Personal Articles</li>
              <li>Home + Secondary/Vacation Property</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="home-cta">
            <h2>Ready to Protect Your Home?</h2>
            <p>
              Speak with a licensed Morison broker today and discover
              how affordable peace of mind can be.
            </p>
            <button>Call +1 343-512-7761</button>
          </section>

        </div>
      </PageLayout>
    </div>
  );
};

export default HomeInsurance;
