import React from "react";
import PageLayout from "../../Shared/PageLayout/PageLayout";
import heroImg from "../../../assets/2.png";
import "./OutbuildingInsurance.css";

const OutbuildingInsurance = () => {
  return (
      <div className="outbuilding-insurance-page">
    <PageLayout
      title="Outbuilding Insurance Coverage"
      subtitle="Protecting detached structures on your property from unexpected damage or loss."
      headerClass="hero"
    >
      {/* INTRO */}
      <section>
        <p>
          <strong>Outbuilding insurance coverage</strong> protects detached
          structures on your property such as garages, sheds, workshops, and
          storage buildings.
        </p>
        <p>
          These structures often contain valuable tools, equipment, or vehicles,
          making proper insurance essential to avoid costly repairs or replacements.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or complete the form to speak with a licensed broker.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section>
        <h2>Why Outbuilding Insurance Is Important</h2>
        <p>
          Outbuildings are frequently excluded or limited under standard home
          insurance policies.
        </p>
        <p>
          Damage caused by fire, severe weather, vandalism, or theft can result in
          significant out-of-pocket expenses without proper coverage in place.
        </p>
      </section>

      {/* WHAT IT COVERS */}
      <section>
        <h2>What Outbuilding Insurance Covers</h2>
        <ul>
          <li>Detached garages, sheds, and workshops</li>
          <li>Fire, wind, hail, and storm damage</li>
          <li>Theft or vandalism</li>
          <li>Structural repairs or full replacement</li>
          <li>Optional contents stored within the outbuilding</li>
        </ul>
      </section>

      {/* OPTIONAL ENHANCEMENTS */}
      <section>
        <h2>Optional Coverage Enhancements</h2>
        <ul>
          <li>Increased coverage limits for high-value structures</li>
          <li>Coverage for business-use outbuildings</li>
          <li>Equipment and tool coverage</li>
          <li>Extended weather and water damage protection</li>
        </ul>
      </section>

      {/* WHY MORISON */}
      <section>
        <h2>Why Choose Morison for Outbuilding Insurance</h2>
        <ul>
          <li>Customized coverage based on property layout and usage</li>
          <li>Access to insurers with flexible outbuilding protection</li>
          <li>Expert advice on property and liability risks</li>
          <li>Support through claims and rebuilding processes</li>
        </ul>
      </section>

      {/* WHO NEEDS IT */}
      <section>
        <h2>Who Should Consider Outbuilding Insurance?</h2>
        <ul>
          <li>Homeowners with detached garages or sheds</li>
          <li>Property owners with workshops or storage buildings</li>
          <li>Rural and acreage property owners</li>
          <li>Anyone storing valuable items outside the main residence</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Protect Your Property Beyond Your Home</h2>
        <p>
          Outbuilding insurance coverage helps safeguard the full value of your
          property and the structures that support your lifestyle.
        </p>
        <p>
          Call <strong>+1 343-512-7761</strong> or request a quote online today.
        </p>
      </section>
    </PageLayout>
    </div>
  );
};

export default OutbuildingInsurance;
