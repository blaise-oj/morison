import { Route } from "react-router-dom";

// Main Recreation page
import Recreation from "../Pages/Recreation/Recreation";
import BoatInsurance from "../Pages/Recreation/BoatInsurance/BoatInsurance";
import SeadooInsurance from "../Pages/Recreation/SeadooInsurance/SeadooInsurance";
import YachtInsurance from "../Pages/Recreation/YachtInsurance/YachtInsurance";
import ATVInsurance from "../Pages/Recreation/ATVInsurance/ATVInsurance";
import RVInsurance from "../Pages/Recreation/RVInsurance/RVInsurance";
import TravelTrailerInsurance from "../Pages/Recreation/TravelTrailerInsurance/TravelTrailerInsurance";
import SnowmobileInsurance from "../Pages/Recreation/SnowmobileInsurance/SnowmobileInsurance";
import GolfEquipmentInsurance from "../Pages/Recreation/GolfEquipmentInsurance/GolfEquipmentInsurance";
import SkiEquipmentInsurance from "../Pages/Recreation/SkiEquipmentInsurance/SkiEquipmentInsurance";
import SnowboardEquipmentInsurance from "../Pages/Recreation/SnowboardEquipmentInsurance/SnowboardEquipmentInsurance";
import TravelInsurance from "../Pages/Recreation/TravelInsurance/TravelInsurance";

// Subpages



// Placeholder for pages not ready yet
const Placeholder = ({ title }) => (
  <div style={{ padding: "120px 40px" }}>
    <h1>{title}</h1>
    <p>Sorry, this page is under maintenance.</p>
  </div>
);

export const RecreationRoutes = (
  <>
    
    <Route path="/recreation" element={<Recreation />} />
    <Route path="/recreation/boat-insurance" element={<BoatInsurance />} />
    <Route path="/recreation/seadoo-insurance" element={<SeadooInsurance />} />
    <Route path="/recreation/yacht-insurance" element={<YachtInsurance />} />
    <Route path="/recreation/atv-insurance" element={<ATVInsurance />} />
    <Route path="/recreation/rv-insurance" element={<RVInsurance />} />
    <Route path="/recreation/travel-trailer-insurance" element={<TravelTrailerInsurance />} />
    <Route path="/recreation/snowmobile-insurance" element={<SnowmobileInsurance />} />
    <Route path="/recreation/golf-equipment-insurance" element={<GolfEquipmentInsurance />} />
    <Route path="/recreation/ski-equipment-insurance" element={<SkiEquipmentInsurance />} />
    <Route path="/recreation/snowboard-equipment-insurance" element={<SnowboardEquipmentInsurance />} />
    <Route path="/recreation/travel-insurance" element={<TravelInsurance />} />
    

    
  </>
);
