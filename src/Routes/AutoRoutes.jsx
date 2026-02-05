// src/Routes/AutoRoutes.jsx
import { Route } from "react-router-dom";

// Main Auto page
import Auto from "../Pages/Auto/Auto";

// Subpages
import HybridCarInsurance from "../Pages/Auto/HybridCarInsurance/HybridCarInsurance";
import LuxuryCarInsurance from "../Pages/Auto/LuxuryCarInsurance/LuxuryCarInsurance";
import TeslaInsurance from "../Pages/Auto/TeslaInsurance/TeslaInsurance";

// Placeholder for subpages you haven’t built yet
//import Placeholder from "../Components/Placeholder/Placeholder";
const Placeholder = ({ title }) => (
  <div style={{ padding: "120px 40px" }}>
    <h1>{title}</h1>
    <p>Sorry, this page is under maintenance.</p>
  </div>
);

export const AutoRoutes = (
  <>
    {/* MAIN AUTO PAGE */}
    <Route path="/auto" element={<Auto />} />

    {/* SUBPAGES */}
    <Route path="/auto/hybrid-car-insurance" element={<HybridCarInsurance />} />
    <Route path="/auto/luxury-car-insurance" element={<LuxuryCarInsurance />} />

    {/* Placeholder for pages not ready yet */}
    <Route path="/auto/tesla-insurance" element={<Placeholder title="Tesla Insurance" />} />
    <Route path="/auto/second-car-insurance" element={<Placeholder title="Second Car Insurance" />} />
    <Route path="/auto/weekend-car-insurance" element={<Placeholder title="Weekend Car Insurance" />} />
    <Route path="/auto/usage-based-insurance" element={<Placeholder title="Usage-Based Insurance" />} />
    <Route path="/auto/telematics-insurance" element={<Placeholder title="Telematics Insurance" />} />
  </>
);
