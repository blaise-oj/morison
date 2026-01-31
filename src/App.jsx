// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

// Import your pages
import HomeInsurance from "./Pages/Home/HomeInsurance/HomeInsurance";
// Later you can import ApartmentInsurance, CarInsurance, AccountantsInsurance, etc.
import ApartmentInsurance from "./Pages/Home/ApartmentInsurance/ApartmentInsurance";
import BundledHomeAutoInsurance from "./Pages/Home/BundledHomeAutoInsurance/BundledHomeAutoInsurance";
import CondoInsurance from "./Pages/Home/CondoInsurance/CondoInsurance";
import ContentsInsuranceCoverage from "./Pages/Home/ContentsInsuranceCoverage/ContentsInsuranceCoverage";
import TownhouseInsurance from "./Pages/Home/TownhouseInsurance/TownhouseInsurance";
import TenantsInsurance from "./Pages/Home/TenantsInsurance/TenantsInsurance";


// Generic placeholder for pages not ready yet
const Placeholder = ({ title }) => (
  <div style={{ padding: "120px 40px" }}>
    <h1>{title}</h1>
    <p>Sorry the page is under maintainance</p>
  </div>
);

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Placeholder title="Home" />
            </>
          }
        />
        <Route
          path="/home/home-insurance"
          element={<HomeInsurance />}
        />
        <Route
        path="/home/apartment-insurance"
        element={<ApartmentInsurance />}
        />
        <Route
        path="/home/bundled-home-auto-insurance"
        element={<BundledHomeAutoInsurance />}
        />
        <Route
          path="/home/condo-insurance"
          element={<CondoInsurance/>}
        />
        <Route
          path="/home/contents-insurance-coverage"
          element={<ContentsInsuranceCoverage />}
        />
        <Route
          path="/home/townhouse-insurance"
          element={<TownhouseInsurance />}
        />
        <Route
          path="/home/tenants-insurance"
          element={<TenantsInsurance />}
        />
        <Route
          path="/home/second-home-insurance"
          element={<Placeholder title="Second Home Insurance" />}
        />

        {/* AUTO */}
        <Route
          path="/auto/car-insurance"
          element={<Placeholder title="Car Insurance" />}
        />
        <Route
          path="/auto/hybrid-car-insurance"
          element={<Placeholder title="Hybrid Car Insurance" />}
        />

        {/* BUSINESS */}
        <Route
          path="/business/accountants"
          element={<Placeholder title="Accountants Insurance" />}
        />
        <Route
          path="/business/arborists"
          element={<Placeholder title="Arborists Insurance" />}
        />

        {/* OTHER */}
        <Route
          path="/other/life-insurance"
          element={<Placeholder title="Life Insurance" />}
        />
        <Route
          path="/other/disability-insurance"
          element={<Placeholder title="Disability & Critical Illness Insurance" />}
        />

        {/* 404 - catch all */}
        <Route
          path="*"
          element={<Placeholder title="Page Not Found" />}
        />
      </Routes>
    </>
  );
};

export default App;
