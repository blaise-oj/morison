import { Route } from "react-router-dom";

// Main Other page
import Other from "../Pages/Other/Other";

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
    {/*

    {/* COVERAGE & INSURANCE TYPES 
    <Route path="/other/additional-charges" element={<Placeholder title="Additional Charges" />} />
    <Route path="/other/additional-living-expenses-coverage" element={<Placeholder title="Additional Living Expenses Coverage" />} />
    <Route path="/other/contents-insurance-coverage" element={<Placeholder title="Contents Insurance Coverage" />} />
    <Route path="/other/cyber-coverage" element={<Placeholder title="Cyber Coverage" />} />
    <Route path="/other/engagement-ring-insurance" element={<Placeholder title="Engagement Ring Insurance" />} />
    <Route path="/other/home-based-business-coverage" element={<Placeholder title="Home Based Business Coverage" />} />
    <Route path="/other/identity-theft-coverage" element={<Placeholder title="Identity Theft Coverage" />} />
    <Route path="/other/jewellery-coverage" element={<Placeholder title="Jewellery Coverage" />} />
    <Route path="/other/outbuilding-insurance-coverage" element={<Placeholder title="Outbuilding Insurance Coverage" />} />
    <Route path="/other/overland-water-coverage" element={<Placeholder title="Overland Water Coverage" />} />
    <Route path="/other/rental-car-insurance" element={<Placeholder title="Rental Car Insurance" />} />
    <Route path="/other/umbrella-coverage" element={<Placeholder title="Umbrella Coverage" />} />
    <Route path="/other/watch-insurance" element={<Placeholder title="Watch Insurance" />} />
    <Route path="/other/water-damage-coverage" element={<Placeholder title="Water Damage Coverage" />} />
    <Route path="/other/wine-cellar-insurance" element={<Placeholder title="Wine Cellar Insurance" />} />

    
    <Route path="/other/group-insurance" element={<Placeholder title="Group Insurance" />} />
    <Route path="/other/grand-erie-district-school-board" element={<Placeholder title="Grand Erie District School Board" />} />
    <Route path="/other/haldimand-county-group-insurance" element={<Placeholder title="Haldimand County Group Insurance" />} />
    <Route path="/other/norfolk-county" element={<Placeholder title="Norfolk County" />} />
    <Route path="/other/special-events" element={<Placeholder title="Special Events" />} />
    <Route path="/other/party-alcohol-liability-insurance" element={<Placeholder title="Party Alcohol Liability Insurance" />} />
    <Route path="/other/wedding-insurance" element={<Placeholder title="Wedding Insurance" />} />

    
    <Route path="/other/life-insurance" element={<Placeholder title="Life Insurance" />} />
    <Route path="/other/disability-critical-illness-insurance" element={<Placeholder title="Disability & Critical Illness Insurance" />} />

    
    <Route path="/other/why-us" element={<Placeholder title="Why Us" />} />
    <Route path="/other/awards-recognition" element={<Placeholder title="Awards & Recognition" />} />
    <Route path="/other/our-story" element={<Placeholder title="Our Story" />} />
    <Route path="/other/our-team" element={<Placeholder title="Our Team" />} />
    <Route path="/other/our-values" element={<Placeholder title="Our Values" />} />
    <Route path="/other/our-community-partners" element={<Placeholder title="Our Community Partners" />} />
    <Route path="/other/our-insurance-partners" element={<Placeholder title="Our Insurance Partners" />} />
    <Route path="/other/our-insurance-extras" element={<Placeholder title="Our Insurance Extras" />} />
    <Route path="/other/why-choose-morison-insurance" element={<Placeholder title="Why Choose Morison Insurance" />} />

    
    <Route path="/other/hole-in-one-insurance" element={<Placeholder title="Hole-In-One Insurance" />} />
    */}
  </>
  
);
