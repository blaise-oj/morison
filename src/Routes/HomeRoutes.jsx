// src/Routes/HomeRoutes.jsx
import { Route } from "react-router-dom";

// Main page
import Home from "../Pages/Home/Home";

// Subpages
import HomeInsurance from "../Pages/Home/HomeInsurance/HomeInsurance";
import ApartmentInsurance from "../Pages/Home/ApartmentInsurance/ApartmentInsurance";
import BundledHomeAutoInsurance from "../Pages/Home/BundledHomeAutoInsurance/BundledHomeAutoInsurance";
import CondoInsurance from "../Pages/Home/CondoInsurance/CondoInsurance";
import TownhouseInsurance from "../Pages/Home/TownhouseInsurance/TownhouseInsurance";
import TenantsInsurance from "../Pages/Home/TenantsInsurance/TenantsInsurance";
import SecondHomeInsurance from "../Pages/Home/SecondHomeInsurance/SecondHomeInsurance";
import HighValueHomeInsurance from "../Pages/Home/HighValueHomeInsurance/HighValueHomeInsurance";
import StudentRentalInsurance from "../Pages/Home/StudentRentalInsurance/StudentRentalInsurance";
import RentedCondoInsurance from "../Pages/Home/RentedCondoInsurance/RentedCondoInsurance";
import RentedDwellingInsurance from "../Pages/Home/RentedDwellingInsurance/RentedDwellingInsurance";
import LandlordInsurance from "../Pages/Home/LandlordInsurance/LandlordInsurance";
import DuplexTriplexFourplexInsurance from "../Pages/Home/DuplexTriplexFourplexInsurance/DuplexTriplexFourplexInsurance";
import GardenInsurance from "../Pages/Home/GardenInsurance/GardenInsurance";
import ChaletInsurance from "../Pages/Home/ChaletInsurance/ChaletInsurance";
import CottageInsurance from "../Pages/Home/CottageInsurance/CottageInsurance";
import PersonalLiabilityInsurance from "../Pages/Home/PersonalLiabilityInsurance/PersonalLiabilityInsurance";
import HomeEquipmentBreakdown from "../Pages/Home/HomeEquipmentBreakdown/HomeEquipmentBreakdown";
import OutbuildingInsurance from "../Pages/Home/OutbuildingInsurance/OutbuildingInsurance";
import PhotographyEquipmentInsurance from "../Pages/Home/PhotographyEquipmentInsurance/PhotographyEquipmentInsurance";
import HomeDaycareInsurance from "../Pages/Home/HomeDaycareInsurance/HomedaycareInsurance";
import Discounts from "../Pages/Home/Discounts/Discounts";


export const HomeRoutes = (
  <>
    {/* MAIN HOME PAGE */}
    <Route path="/home" element={<Home />} />

    {/* SUBPAGES */}
    <Route path="/home/home-insurance" element={<HomeInsurance />} />
    <Route path="/home/apartment-insurance" element={<ApartmentInsurance />} />
    <Route path="/home/bundled-home-auto-insurance"element={<BundledHomeAutoInsurance />}/>
    <Route path="/home/condo-insurance" element={<CondoInsurance />} />
    <Route path="/home/townhouse-insurance" element={<TownhouseInsurance />} />
    <Route path="/home/tenants-insurance" element={<TenantsInsurance />} />
    <Route path="/home/second-home-insurance" element={<SecondHomeInsurance />} />
    <Route path="/home/high-value-home-insurance" element={<HighValueHomeInsurance />} />
    <Route path="/home/student-rental-insurance" element={<StudentRentalInsurance />} />
    <Route path="/home/rented-condo-insurance" element={<RentedCondoInsurance />} />
    <Route path="/home/rented-dwelling-insurance" element={<RentedDwellingInsurance />} />
    <Route path="/home/landlord-insurance" element={<LandlordInsurance />} />
    <Route path="/home/duplex-triplex-fourplex-insurance" element={<DuplexTriplexFourplexInsurance />} />
    <Route path="/home/garden-insurance" element={<GardenInsurance />} />
    <Route path="/home/chalet-insurance" element={<ChaletInsurance />} />
    <Route path="/home/cottage-insurance" element={<CottageInsurance />} />
    <Route path="/home/personal-liability-insurance" element={<PersonalLiabilityInsurance />} />
    <Route path="/home/home-equipment-breakdown" element={<HomeEquipmentBreakdown />} />
    <Route path="/home/outbuilding-insurance" element={<OutbuildingInsurance />} />
    <Route path="/home/photography-equipment-insurance" element={<PhotographyEquipmentInsurance />} />
    <Route path="/home/home-daycare-insurance" element={<HomeDaycareInsurance />} />
    <Route path="/home/discounts" element={<Discounts />} />
    
  </>
);
