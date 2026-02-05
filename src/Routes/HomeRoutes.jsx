// src/Routes/HomeRoutes.jsx
import { Route } from "react-router-dom";

// Main page
import Home from "../Pages/Home/Home";

// Subpages
import HomeInsurance from "../Pages/Home/HomeInsurance/HomeInsurance";
import ApartmentInsurance from "../Pages/Home/ApartmentInsurance/ApartmentInsurance";
import BundledHomeAutoInsurance from "../Pages/Home/BundledHomeAutoInsurance/BundledHomeAutoInsurance";
import CondoInsurance from "../Pages/Home/CondoInsurance/CondoInsurance";
import ContentsInsuranceCoverage from "../Pages/Home/ContentsInsuranceCoverage/ContentsInsuranceCoverage";
import TownhouseInsurance from "../Pages/Home/TownhouseInsurance/TownhouseInsurance";
import TenantsInsurance from "../Pages/Home/TenantsInsurance/TenantsInsurance";

export const HomeRoutes = (
  <>
    {/* MAIN HOME PAGE */}
    <Route path="/home" element={<Home />} />

    {/* SUBPAGES */}
    <Route path="/home/home-insurance" element={<HomeInsurance />} />
    <Route path="/home/apartment-insurance" element={<ApartmentInsurance />} />
    <Route
      path="/home/bundled-home-auto-insurance"
      element={<BundledHomeAutoInsurance />}
    />
    <Route path="/home/condo-insurance" element={<CondoInsurance />} />
    <Route
      path="/home/contents-insurance-coverage"
      element={<ContentsInsuranceCoverage />}
    />
    <Route path="/home/townhouse-insurance" element={<TownhouseInsurance />} />
    <Route path="/home/tenants-insurance" element={<TenantsInsurance />} />
  </>
);
