// src/Routes/BusinessRoutes.jsx
import { Route } from "react-router-dom";

// MAIN BUSINESS PAGE
import Business from "../Pages/Business/Business";
import Accountants from "../Pages/Business/Accountants/Accountants";
import Arborists from "../Pages/Business/Arborists/Arborists";
import Audiologists from "../Pages/Business/Audiologists/Audiologists";
import BnB from "../Pages/Business/BnB/BnB";
import Bakeries from "../Pages/Business/Bakeries/Bakeries";
import BarberShops from "../Pages/Business/BarberShops/BarberShops";
import Breweries from "../Pages/Business/Breweries/Breweries";
import Bricklayers from "../Pages/Business/Bricklayers/Bricklayers";
import Carpenters from "../Pages/Business/Carpenters/Carpenters";
import Chiropractors from "../Pages/Business/Chiropractors/Chiropractors";
import CleaningProfessionals from "../Pages/Business/CleaningProfessionals/CleaningProfessionals";
import CoffeeShops from "../Pages/Business/CoffeeShops/CoffeeShops";
import ConstructionCompanies from "../Pages/Business/ConstructionCompanies/ConstructionCompanies";
import Consultants from "../Pages/Business/Consultants/Consultants";
import Contractors from "../Pages/Business/Contractors/Contractors";
import DentalOffices from "../Pages/Business/DentalOffices/DentalOffices";
import DoctorsOffices from "../Pages/Business/DoctorsOffices/DoctorsOffices";
import DogDaycares from "../Pages/Business/DogDaycares/DogDaycares";
import Drywallers from "../Pages/Business/Drywallers/Drywallers";
import Electricians from "../Pages/Business/Electricians/Electricians";
import CargoInsurance from "../Pages/Business/CargoInsurance/CargoInsurance";
import CommercialGeneralLiability from "../Pages/Business/CommercialGeneralLiability/CommercialGeneralLiability";
import CommercialPropertyInsurance from "../Pages/Business/CommercialPropertyInsurance/CommercialPropertyInsurance";
import CommercialContentsInsurance from "../Pages/Business/CommercialContentsInsurance/CommercialContentsInsurance";
import DirectorsOfficersInsurance from "../Pages/Business/DirectorsOfficersInsurance/DirectorsOfficersInsurance";
import EnvironmentalPollutionLiability from "../Pages/Business/EnvironmentalPollutionLiability/EnvironmentalPollutionLiability";
import EquipmentBreakdownInsurance from "../Pages/Business/EquipmentBreakdownInsurance/EquipmentBreakdownInsurance";
import ErrorsOmissionsInsurance from "../Pages/Business/ErrorsOmissionsInsurance/ErrorsOmissionsInsurance";
import HomeBasedBusinessInsurance from "../Pages/Business/HomeBasedBusinessInsurance/HomeBasedBusinessInsurance";
import LegalExpenseInsurance from "../Pages/Business/LegalExpenseInsurance/LegalExpenseInsurance";
import ProductLiabilityInsurance from "../Pages/Business/ProductLiabilityInsurance/ProductLiabilityInsurance";
import ProfessionalLiabilityInsurance from "../Pages/Business/ProfessionalLiabilityInsurance/ProfessionalLiabilityInsurance";
import PublicLiabilityInsurance from "../Pages/Business/PublicLiabilityInsurance/PublicLiabilityInsurance";
import RentedDwellingInsurance from "../Pages/Business/RentedDwellingInsurance/RentedDwellingInsurance";
import StudentRentalInsurance from "../Pages/Business/StudentRentalInsurance/StudentRentalInsurance";
import ToolsEquipmentInsurance from "../Pages/Business/ToolsEquipmentInsurance/ToolsEquipmentInsurance";
import VacantPropertyInsurance from "../Pages/Business/VacantPropertyInsurance/VacantPropertyInsurance";
import BusinessInterruptionCoverage from "../Pages/Business/BusinessInterruptionCoverage/BusinessInterruptionCoverage";
import CommercialCyberCoverage from "../Pages/Business/CommercialCyberCoverage/CommercialCyberCoverage";
import CommercialUmbrellaInsurance from "../Pages/Business/CommercialUmbrellaInsurance/CommercialUmbrellaInsurance";


export const BusinessRoutes = (
  <>
    {/* MAIN BUSINESS PAGE */}
    <Route path="/business" element={<Business />} />
    <Route path="/business/accountants" element={<Accountants />} />
    <Route path="/business/arborists" element={<Arborists />} />
    <Route path="/business/audiologists" element={<Audiologists />} />
    <Route path="/business/bnb" element={<BnB />} />
    <Route path="/business/bakeries" element={<Bakeries />} />
    <Route path="/business/barber-shops" element={<BarberShops />} />
    <Route path="/business/breweries" element={<Breweries />} />
    <Route path="/business/bricklayers" element={<Bricklayers />} />
    <Route path="/business/carpenters" element={<Carpenters />} />
    <Route path="/business/chiropractors" element={<Chiropractors />} />
    <Route path="/business/cleaning-professionals" element={<CleaningProfessionals />} />
    <Route path="/business/coffee-shops" element={<CoffeeShops />} />
    <Route path="/business/construction-companies" element={<ConstructionCompanies />} />
    <Route path="/business/consultants" element={<Consultants />} />
    <Route path="/business/contractors" element={<Contractors />} />
    <Route path="/business/dental-offices" element={<DentalOffices />} />
    <Route path="/business/doctors-offices" element={<DoctorsOffices />} />
    <Route path="/business/dog-daycares" element={<DogDaycares />} />
    <Route path="/business/drywallers" element={<Drywallers />} />
    <Route path="/business/electricians" element={<Electricians />} />
    <Route path="/business/cargo-insurance" element={<CargoInsurance />} />
    <Route path="/business/commercial-general-liability" element={<CommercialGeneralLiability />} />
    <Route path="/business/commercial-property-insurance" element={<CommercialPropertyInsurance />} />
    <Route path="/business/commercial-contents-insurance" element={<CommercialContentsInsurance />} />
    <Route path="/business/directors-officers-insurance" element={<DirectorsOfficersInsurance />} />
    <Route path="/business/environmental-pollution-liability" element={<EnvironmentalPollutionLiability />} />
    <Route path="/business/equipment-breakdown-insurance" element={<EquipmentBreakdownInsurance />} />
    <Route path="/business/errors-omissions-insurance" element={<ErrorsOmissionsInsurance />} />
    <Route path="/business/home-based-business-insurance" element={<HomeBasedBusinessInsurance />} />
    <Route path="/business/legal-expense-insurance" element={<LegalExpenseInsurance />} />
    <Route path="/business/product-liability-insurance" element={<ProductLiabilityInsurance />} />
    <Route path="/business/professional-liability-insurance" element={<ProfessionalLiabilityInsurance />} />
    <Route path="/business/public-liability-insurance" element={<PublicLiabilityInsurance />} />
    <Route path="/business/rented-dwelling-insurance" element={<RentedDwellingInsurance />} />
    <Route path="/business/student-rental-insurance" element={<StudentRentalInsurance />} />
    <Route path="/business/tools-equipment-insurance" element={<ToolsEquipmentInsurance />} />
    <Route path="/business/vacant-property-insurance" element={<VacantPropertyInsurance />} />
    <Route path="/business/business-interruption-Coverage" element={<BusinessInterruptionCoverage />} />
    <Route path="/business/commercial-cyber-coverage" element={<CommercialCyberCoverage />} />
    <Route path="/business/commercial-umbrella-insurance" element={<CommercialUmbrellaInsurance />} />
    


  </>
);
