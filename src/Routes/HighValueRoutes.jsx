// src/Routes/HighValueRoutes.jsx
import { Route } from "react-router-dom";

// Main High-Value page
import HighValue from "../Pages/HighValue/HighValue";


import HighValueHomeInsurance from "../Pages/HighValue/HighValueHomeInsurance/HighValueHomeInsurance";
import PenthouseInsurance from "../Pages/HighValue/PenthouseInsurance/PenthouseInsurance";
import YachtInsurance from "../Pages/HighValue/YachtInsurance/YachtInsurance";
import LuxuryCarInsurance from "../Pages/HighValue/LuxuryCarInsurance/LuxuryCarInsurance";
import AudiInsurance from "../Pages/HighValue/AudiInsurance/AudiInsurance";
import BentleyInsurance from "../Pages/HighValue/BentleyInsurance/BentleyInsurance";
import LandRoverInsurance from "../Pages/HighValue/LandRoverInsurance/LandRoverInsurance";
import LexusInsurance from "../Pages/HighValue/LexusInsurance/LexusInsurance";
import MercedesInsurance from "../Pages/HighValue/MercedesInsurance/MercedesInsurance";
import PorscheInsurance from "../Pages/HighValue/PorscheInsurance/PorscheInsurance";
import TeslaInsurance from "../Pages/HighValue/TeslaInsurance/TeslaInsurance";
import JewelleryInsurance from "../Pages/HighValue/JewelleryInsurance/JewelleryInsurance";
import EngagementRingInsurance from "../Pages/HighValue/EngagementRingInsurance/EngagementRingInsurance";
import WatchInsurance from "../Pages/HighValue/WatchInsurance/WatchInsurance";
import FineArtInsurance from "../Pages/HighValue/FineArtInsurance/FineArtInsurance";
import MusicalInstrumentInsurance from "../Pages/HighValue/MusicalInstrumentInsurance/MusicalInstrumentInsurance";
import WineCellarInsurance from "../Pages/HighValue/WineCellarInsurance/WineCellarInsurance";
import ScotchAndWhiskyCollectionInsurance from "../Pages/HighValue/ScotchAndWhiskyCollectionInsurance/ScotchAndWhiskyCollectionInsurance";


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

    {/* SUBPAGES */}
    <Route path="/high-value/high-value-home-insurance" element={<HighValueHomeInsurance />} />
    <Route path="/high-value/penthouse-insurance" element={<PenthouseInsurance />} />
    <Route path="/high-value/yacht-insurance" element={<YachtInsurance />} />
    <Route path="/high-value/luxury-car-insurance" element={<LuxuryCarInsurance />} />
    <Route path="/high-value/audi-insurance" element={<AudiInsurance />} />
    <Route path="/high-value/bentley-insurance" element={<BentleyInsurance />} />
    <Route path="/high-value/land-rover-insurance" element={<LandRoverInsurance />} />
    <Route path="/high-value/lexus-insurance" element={<LexusInsurance />} />
    <Route path="/high-value/mercedes-insurance" element={<MercedesInsurance />} />
    <Route path="/high-value/porsche-insurance" element={<PorscheInsurance />} />
    <Route path="/high-value/tesla-insurance" element={<TeslaInsurance />} />
    <Route path="/high-value/jewellery-insurance" element={<JewelleryInsurance />} />
    <Route path="/high-value/engagement-ring-insurance" element={<EngagementRingInsurance />} />
    <Route path="/high-value/watch-insurance" element={<WatchInsurance />} />
    <Route path="/high-value/fine-art-insurance" element={<FineArtInsurance />} />
    <Route path="/high-value/musical-instrument-insurance" element={<MusicalInstrumentInsurance />} />
    <Route path="/high-value/wine-cellar-insurance" element={<WineCellarInsurance />} />
    <Route path="/high-value/scotch-whisky-collection-insurance" element={<ScotchAndWhiskyCollectionInsurance />} />
  </>

);
