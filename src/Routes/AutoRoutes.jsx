// src/Routes/AutoRoutes.jsx
import { Route } from "react-router-dom";

// Main Auto page
import Auto from "../Pages/Auto/Auto";

// Subpages
import CarInsurance from "../Pages/Auto/CarInsurance/CarInsurance";
import BundledHomeAuto from "../Pages/Auto/BundledHomeAuto/BundledHomeAuto";
import SecondCarInsurance from "../Pages/Auto/SecondCarInsurance/SecondCarInsurance";
import WeekendCarInsurance from "../Pages/Auto/WeekendCarInsurance/WeekendCarInsurance";
import UsageBasedInsurance from "../Pages/Auto/UsageBasedInsurance/UsageBasedInsurance";
import TelematicsInsurance from "../Pages/Auto/TelematicsInsurance/TelematicsInsurance";
import Discounts from "../Pages/Auto/Discounts/Discounts";
import ElectricCarInsurance from "../Pages/Auto/ElectricCarInsurance/ElectricCarInsurance";
import HybridCarInsurance from "../Pages/Auto/HybridCarInsurance/HybridCarInsurance";
import LuxuryCarInsurance from "../Pages/Auto/LuxuryCarInsurance/LuxuryCarInsurance";
import SportsCarInsurance from "../Pages/Auto/SportsCarInsurance/SportsCarInsurance";
import ClassicCarInsurance from "../Pages/Auto/ClassicCarInsurance/ClassicCarInsurance";
import MotorcycleInsurance from "../Pages/Auto/MotorcycleInsurance/MotorcycleInsurance";
import PickupTruckInsurance from "../Pages/Auto/PickupTruckInsurance/PickupTruckInsurance";
import AudiInsurance from "../Pages/Auto/AudiInsurance/AudiInsurance";
import BentleyInsurance from "../Pages/Auto/BentleyInsurance/BentleyInsurance";
import FordInsurance from "../Pages/Auto/FordInsurance/FordInsurance";
import HondaInsurance from "../Pages/Auto/HondaInsurance/HondaInsurance";
import HyundaiInsurance from "../Pages/Auto/HyundaiInsurance/HyundaiInsurance";
import JeepInsurance from "../Pages/Auto/JeepInsurance/JeepInsurance";
import KiaInsurance from "../Pages/Auto/KiaInsurance/KiaInsurance";
import LandRoverInsurance from "../Pages/Auto/LandRoverInsurance/LandRoverInsurance";
import LexusInsurance from "../Pages/Auto/LexusInsurance/LexusInsurance";
import MercedesInsurance from "../Pages/Auto/MercedesInsurance/MercedesInsurance";
import NissanInsurance from "../Pages/Auto/NissanInsurance/NissanInsurance";
import PorscheInsurance from "../Pages/Auto/PorscheInsurance/PorscheInsurance";
import TeslaInsurance from "../Pages/Auto/TeslaInsurance/TeslaInsurance";
import ToyotaInsurance from "../Pages/Auto/ToyotaInsurance/ToyotaInsurance";

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
    

    {/* Placeholder for pages not ready yet */}
    <Route path="/auto/car-insurance" element={<CarInsurance />} /> 
    <Route path="/auto/bundled-home-auto" element={<BundledHomeAuto />} />
    <Route path="/auto/second-car-insurance" element={<SecondCarInsurance />} />
    <Route path="/auto/weekend-car-insurance" element={<WeekendCarInsurance />} />
    <Route path="/auto/usage-based-insurance" element={<UsageBasedInsurance />} />
    <Route path="/auto/telematics-insurance" element={<TelematicsInsurance />} />
    <Route path="/auto/discounts" element={<Discounts />} />
    <Route path="/auto/electric-car-insurance" element={<ElectricCarInsurance />} />
    <Route path="/auto/hybrid-car-insurance" element={<HybridCarInsurance />} />
    <Route path="/auto/luxury-car-insurance" element={<LuxuryCarInsurance />} />
    <Route path="/auto/sports-car-insurance" element={<SportsCarInsurance />} />
    <Route path="/auto/classic-car-insurance" element={<ClassicCarInsurance />} />
    <Route path="/auto/motorcycle-insurance" element={<MotorcycleInsurance />} />
    <Route path="/auto/pickup-truck-insurance" element={<PickupTruckInsurance />} />
    <Route path="/auto/audi-insurance" element={<AudiInsurance />} />
    <Route path="/auto/bentley-insurance" element={<BentleyInsurance />} />
    <Route path="/auto/ford-insurance" element={<FordInsurance />} />
    <Route path="/auto/honda-insurance" element={<HondaInsurance />} /> 
    <Route path="/auto/hyundai-insurance" element={<HyundaiInsurance />} />
    <Route path="/auto/jeep-insurance" element={<JeepInsurance />} />
    <Route path="/auto/kia-insurance" element={<KiaInsurance />} />
    <Route path="/auto/land-rover-insurance" element={<LandRoverInsurance />} />
    <Route path="/auto/lexus-insurance" element={<LexusInsurance />} />
    <Route path="/auto/mercedes-insurance" element={<MercedesInsurance />} />
    <Route path="/auto/nissan-insurance" element={<NissanInsurance />} />
    <Route path="/auto/porsche-insurance" element={<PorscheInsurance />} />
    <Route path="/auto/tesla-insurance" element={<TeslaInsurance />} />
    <Route path="/auto/toyota-insurance" element={<ToyotaInsurance />} />

  </>
);
