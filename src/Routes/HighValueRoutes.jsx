// src/Routes/HighValueRoutes.jsx
import { Route } from "react-router-dom";

// Main High-Value page
import HighValue from "../Pages/HighValue/HighValue";

// Property
//import HighValueHomeInsurance from "../Pages/HighValue/HighValueHomeInsurance/HighValueHomeInsurance";
//import PenthouseInsurance from "../Pages/HighValue/PenthouseInsurance/PenthouseInsurance";
//import YachtInsurance from "../Pages/HighValue/YachtInsurance/YachtInsurance";

// Vehicles
//import LuxuryCarInsurance from "../Pages/HighValue/Vehicles/LuxuryCarInsurance/LuxuryCarInsurance";
//import AudiInsurance from "../Pages/HighValue/Vehicles/AudiInsurance/AudiInsurance";
//import BentleyInsurance from "../Pages/HighValue/Vehicles/BentleyInsurance/BentleyInsurance";
//import LandRoverInsurance from "../Pages/HighValue/Vehicles/LandRoverInsurance/LandRoverInsurance";
//import LexusInsurance from "../Pages/HighValue/Vehicles/LexusInsurance/LexusInsurance";
//import MercedesInsurance from "../Pages/HighValue/Vehicles/MercedesInsurance/MercedesInsurance";
//import PorscheInsurance from "../Pages/HighValue/Vehicles/PorscheInsurance/PorscheInsurance";
//import TeslaInsurance from "../Pages/HighValue/Vehicles/TeslaInsurance/TeslaInsurance";

// Valuables
//import JewelleryInsurance from "../Pages/HighValue/Valuables/JewelleryInsurance/JewelleryInsurance";
//import EngagementRingInsurance from "../Pages/HighValue/Valuables/EngagementRingInsurance/EngagementRingInsurance";
//import WatchInsurance from "../Pages/HighValue/Valuables/WatchInsurance/WatchInsurance";
//import FineArtInsurance from "../Pages/HighValue/Valuables/FineArtInsurance/FineArtInsurance";
//import MusicalInstrumentInsurance from "../Pages/HighValue/Valuables/MusicalInstrumentInsurance/MusicalInstrumentInsurance";
//import WineCellarInsurance from "../Pages/HighValue/Valuables/WineCellarInsurance/WineCellarInsurance";
//import WhiskyCollectionInsurance from "../Pages/HighValue/Valuables/WhiskyCollectionInsurance/WhiskyCollectionInsurance";

// Placeholder for pages not ready
const Placeholder = ({ title }) => (
  <div style={{ padding: "120px 40px" }}>
    <h1>{title}</h1>
    <p>Sorry, this page is under maintenance.</p>
  </div>
);

export const HighValueRoutes = (
  <>
    {/* MAIN HIGH-VALUE PAGE */}
    <Route path="/high-value" element={<HighValue />} />

    {/*
    =====================================
    PROPERTY
    =====================================
    <Route path="/high-value/high-value-home-insurance" element={<HighValueHomeInsurance />} />
    <Route path="/high-value/penthouse-insurance" element={<PenthouseInsurance />} />
    <Route path="/high-value/yacht-insurance" element={<YachtInsurance />} />

    =====================================
    VEHICLES
    =====================================
    <Route path="/high-value/luxury-car-insurance" element={<LuxuryCarInsurance />} />
    <Route path="/high-value/audi-insurance" element={<AudiInsurance />} />
    <Route path="/high-value/bentley-insurance" element={<BentleyInsurance />} />
    <Route path="/high-value/land-rover-insurance" element={<LandRoverInsurance />} />
    <Route path="/high-value/lexus-insurance" element={<LexusInsurance />} />
    <Route path="/high-value/mercedes-insurance" element={<MercedesInsurance />} />
    <Route path="/high-value/porsche-insurance" element={<PorscheInsurance />} />
    <Route path="/high-value/tesla-insurance" element={<TeslaInsurance />} />

    =====================================
    VALUABLES & COLLECTIONS
    =====================================
    <Route path="/high-value/jewellery-insurance" element={<JewelleryInsurance />} />
    <Route path="/high-value/engagement-ring-insurance" element={<EngagementRingInsurance />} />
    <Route path="/high-value/watch-insurance" element={<WatchInsurance />} />
    <Route path="/high-value/fine-art-insurance" element={<FineArtInsurance />} />
    <Route path="/high-value/musical-instrument-insurance" element={<MusicalInstrumentInsurance />} />
    <Route path="/high-value/wine-cellar-insurance" element={<WineCellarInsurance />} />
    <Route
      path="/high-value/scotch-whisky-collection-insurance"
      element={<WhiskyCollectionInsurance />}
    />
    */}
  </>

);
