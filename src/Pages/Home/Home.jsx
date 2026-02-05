// src/Pages/Home/Home.jsx
import React from "react";
import PageLayout from "../Shared/PageLayout/PageLayout";
import "./Home.css";

const Home = () => {
  return (
    <PageLayout
      title="Welcome to Morison Insurance"
      subtitle="We protect what matters most to you"
      cta={<button>Get a Free Quote</button>}
    >
      {/* Hero info section */}
      <section className="home-intro">
        <h2>Your trusted insurance partner in Kenya</h2>
        <p>
          At Morison Insurance, we understand that life is full of surprises. Our
          goal is to provide you with peace of mind by offering comprehensive
          insurance solutions tailored to your needs. From home to auto, high-value
          assets, and business coverage, we are here to protect what matters.
        </p>
      </section>

      {/* Services section */}
      <section className="home-services">
        <h2>Our Key Services</h2>
        <div className="home-services-grid">
          <div className="home-service-card">
            <h3>Home Insurance</h3>
            <p>Protect your home, belongings, and loved ones with our customizable plans.</p>
          </div>
          <div className="home-service-card">
            <h3>Auto Insurance</h3>
            <p>Drive worry-free with coverage for all types of vehicles and drivers.</p>
          </div>
          <div className="home-service-card">
            <h3>High-Value Assets</h3>
            <p>Specialized insurance for luxury cars, jewelry, fine art, and more.</p>
          </div>
          <div className="home-service-card">
            <h3>Business Coverage</h3>
            <p>Comprehensive protection for your business, employees, and property.</p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="home-why-us">
        <h2>Why Choose Morison Insurance?</h2>
        <ul>
          <li>Trusted by thousands of clients across Kenya</li>
          <li>Fast and transparent claims process</li>
          <li>Customizable insurance solutions</li>
          <li>Dedicated customer support team</li>
          <li>Strong partnerships with top insurers</li>
        </ul>
      </section>
    </PageLayout>
  );
};

export default Home;
