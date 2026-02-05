import { Route } from "react-router-dom";

// Main Recreation page
import Recreation from "../Pages/Recreation/Recreation";

{/*// Subpages
import ATVInsurance from "../Pages/Recreation/ATVInsurance/ATVInsurance";
import BoatInsurance from "../Pages/Recreation/BoatInsurance/BoatInsurance";
import GolfEquipmentInsurance from "../Pages/Recreation/GolfEquipmentInsurance/GolfEquipmentInsurance";
import RVInsurance from "../Pages/Recreation/RVInsurance/RVInsurance";
import SeadooInsurance from "../Pages/Recreation/SeadooInsurance/SeadooInsurance";
import SkiEquipmentInsurance from "../Pages/Recreation/SkiEquipmentInsurance/SkiEquipmentInsurance";
import SnowboardEquipmentInsurance from "../Pages/Recreation/SnowboardEquipmentInsurance/SnowboardEquipmentInsurance";
import SnowmobileInsurance from "../Pages/Recreation/SnowmobileInsurance/SnowmobileInsurance";
import TravelInsurance from "../Pages/Recreation/TravelInsurance/TravelInsurance";
import TravelTrailerInsurance from "../Pages/Recreation/TravelTrailerInsurance/TravelTrailerInsurance";
import YachtInsurance from "../Pages/Recreation/YachtInsurance/YachtInsurance";
*/}

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

    {/*}
    <Route path="/recreation/atv-insurance" element={<ATVInsurance />} />
    <Route path="/recreation/boat-insurance" element={<BoatInsurance />} />
    <Route path="/recreation/golf-equipment-insurance" element={<GolfEquipmentInsurance />} />
    <Route path="/recreation/rv-insurance" element={<RVInsurance />} />
    <Route path="/recreation/seadoo-insurance" element={<SeadooInsurance />} />
    <Route path="/recreation/ski-equipment-insurance" element={<SkiEquipmentInsurance />} />
    <Route path="/recreation/snowboard-equipment-insurance" element={<SnowboardEquipmentInsurance />} />
    <Route path="/recreation/snowmobile-insurance" element={<SnowmobileInsurance />} />
    <Route path="/recreation/travel-insurance" element={<TravelInsurance />} />
    <Route path="/recreation/travel-trailer-insurance" element={<TravelTrailerInsurance />} />
    <Route path="/recreation/yacht-insurance" element={<YachtInsurance />} />

    
    <Route path="/recreation/extreme-sports-insurance" element={<Placeholder title="Extreme Sports Insurance" />} />
    <Route path="/recreation/other-recreation-insurance" element={<Placeholder title="Other Recreation Insurance" />} />
    */}
  </>
);
