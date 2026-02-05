// src/Routes/BusinessRoutes.jsx
import { Route } from "react-router-dom";

// MAIN BUSINESS PAGE
import Business from "../Pages/Business/Business";

export const BusinessRoutes = (
  <>
    {/* MAIN BUSINESS PAGE */}
    <Route path="/business" element={<Business />} />

    {/*
    =====================================
    BUSINESS SUBPAGES (COMING LATER)
    =====================================

    <Route path="/business/small-business-insurance" element={<SmallBusinessInsurance />} />
    <Route path="/business/commercial-property-insurance" element={<CommercialPropertyInsurance />} />
    <Route path="/business/liability-insurance" element={<LiabilityInsurance />} />
    <Route path="/business/professional-indemnity" element={<ProfessionalIndemnity />} />
    <Route path="/business/workers-compensation" element={<WorkersCompensation />} />
    <Route path="/business/cyber-insurance" element={<CyberInsurance />} />
    */}
  </>
);
