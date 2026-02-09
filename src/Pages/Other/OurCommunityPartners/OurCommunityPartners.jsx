import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./OurCommunityPartners.css";

const OurCommunityPartners = () => {
  return (
    <PageLayout
      title="Our Community Partners"
      subtitle="Collaborating with organizations to strengthen the communities we serve."
      image={heroImg}
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Morison Insurance</strong> is proud to partner with local
          organizations, charities, and community initiatives that make a
          difference.
        </p>
        <p>
          These partnerships reflect our commitment to social responsibility
          and our belief that strong communities help everyone thrive.
        </p>
      </section>

      {/* PARTNERSHIP VALUE */}
      <section>
        <h2>Why We Partner</h2>
        <p>
          Working with community organizations allows us to support meaningful
          causes, contribute expertise, and help deliver positive outcomes
          beyond insurance services.
        </p>
        <p>
          Our partnerships align with our core values of service, integrity,
          and community impact.
        </p>
      </section>

      {/* AREAS OF INVOLVEMENT */}
      <section>
        <h2>Areas of Community Engagement</h2>
        <ul>
          <li>Local charitable initiatives and fundraising programs</li>
          <li>Educational and awareness campaigns</li>
          <li>Support for health, safety, and wellness programs</li>
          <li>Collaboration with non-profits to strengthen neighborhoods</li>
        </ul>
      </section>

      {/* WHY IT MATTERS */}
      <section>
        <h2>Impact for Our Clients and Community</h2>
        <p>
          By partnering with these organizations, we help create safer, stronger,
          and more connected communities.
        </p>
        <p>
          Clients benefit from our community involvement through access to
          trusted networks, enhanced services, and socially responsible practices.
        </p>
      </section>

      {/* CTA */}
      <section>
        <h2>Join Us in Making a Difference</h2>
        <p>
          Morison Insurance believes in the power of partnership and community.
          Explore how our community collaborations make an impact and how you
          can be part of it.
        </p>
        <p>
          Contact a Morison broker today to learn more.
        </p>
      </section>
    </PageLayout>
  );
};

export default OurCommunityPartners;
