import { Route } from "react-router-dom";

// Main Other page
import Other from "../Pages/Other/Other";
import AdditionalLivingExpenses from "../Pages/Other/AdditionalLivingExpenses/AdditionalLivingExpenses";
import ContentsInsurance from "../Pages/Other/ContentsInsurance/ContentsInsurance";
import CyberCoverage from "../Pages/Other/CyberCoverage/CyberCoverage"; 
import EngagementRingInsurance from "../Pages/Other/EngagementRingInsurance/EngagementRingInsurance";
import HomeBasedBusinessCoverage from "../Pages/Other/HomeBasedBusinessCoverage/HomebasedBusinessCoverage";
import IdentityTheftCoverage from "../Pages/Other/IdentityTheftCoverage/IdentityTheftCoverage";
import JewelleryCoverage from "../Pages/Other/JewelleryCoverage/JewelleryCoverage";
import OutbuildingInsurance from "../Pages/Other/OutbuildingInsurance/OutbuildingInsurance";
import OverlandWaterCoverage from "../Pages/Other/OverlandWaterCoverage/OverlandWaterCoverage";
import RentalCarInsurance from "../Pages/Other/RentalCarInsurance/RentalCarInsurance";
import LifeInsurance from "../Pages/Other/LifeInsurance/LifeInsurance";
import DisabilityCriticalIllness from "../Pages/Other/DisabilityCriticalIllness/DisabilityCriticalIllness";
import PartyAlcoholLiability from "../Pages/Other/PartyAlcoholLiability/PartyAlcoholLiability";
import WeddingInsurance from "../Pages/Other/WeddingInsurance/WeddingInsurance";
import AwardsRecognition from "../Pages/Other/AwardsRecognition/AwardsRecognition";
import OurStory from "../Pages/Other/OurStory/OurStory";
import OurTeam from "../Pages/Other/OurTeam/OurTeam";
import OurValues from "../Pages/Other/OurValues/OurValues";
import OurCommunityPartners from "../Pages/Other/OurCommunityPartners/OurCommunityPartners";
import OurInsurancePartners from "../Pages/Other/OurInsurancePartners/OurInsurancePartners";
import WhyChooseMorison from "../Pages/Other/WhyChooseMorison/WhyChooseMorison";

// Subpages placeholders (you can replace these with actual pages later)
const Placeholder = ({ title }) => (
  <div style={{ padding: "120px 40px", textAlign: "center" }}>
    <h1>{title}</h1>
    <p>Sorry, this page is under maintenance.</p>
  </div>
);

export const OtherRoutes = (
  <>
    {/* MAIN OTHER PAGE */}
    <Route path="/other" element={<Other />} />
    {/* SUBPAGES */}
    <Route path="/other/additional-living-expenses" element={<AdditionalLivingExpenses />} />
    <Route path="/other/contents-insurance" element={<ContentsInsurance />} />
    <Route path="/other/cyber-coverage" element={<CyberCoverage />} />
    <Route path="/other/engagement-ring-insurance" element={<EngagementRingInsurance />} />
    <Route path="/other/home-based-business-coverage" element={<HomeBasedBusinessCoverage />} />
    <Route path="/other/identity-theft-coverage" element={<IdentityTheftCoverage />} />
    <Route path="/other/jewellery-coverage" element={<JewelleryCoverage />} />
    <Route path="/other/outbuilding-insurance" element={<OutbuildingInsurance />} />
    <Route path="/other/overland-water-coverage" element={<OverlandWaterCoverage />} />
    <Route path="/other/rental-car-insurance" element={<RentalCarInsurance />} />
    <Route path="/other/life-insurance" element={<LifeInsurance />} />
    <Route path="/other/disability-critical-illness" element={<DisabilityCriticalIllness />} />
    <Route path="/other/party-alcohol-liability" element={<PartyAlcoholLiability />} />
    <Route path="/other/wedding-insurance" element={<WeddingInsurance />} />
    <Route path="/other/awards-recognition" element={<AwardsRecognition />} />
    <Route path="/other/our-story" element={<OurStory />} />
    <Route path="/other/our-team" element={<OurTeam />} />
    <Route path="/other/our-values" element={<OurValues />} />
    <Route path="/other/our-community-partners" element={<OurCommunityPartners />} />
    <Route path="/other/our-insurance-partners" element={<OurInsurancePartners />} />
    <Route path="/other/why-choose-morison" element={<WhyChooseMorison />} />

  </>
  
);
