// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";

import { HomeRoutes } from "./Routes/HomeRoutes";
import { AutoRoutes } from "./Routes/AutoRoutes";
import { BusinessRoutes } from "./Routes/BusinessRoutes";
import { HighValueRoutes } from "./Routes/HighValueRoutes";
import { OtherRoutes } from "./Routes/OtherRoutes";
import { RecreationRoutes } from "./Routes/RecreationRoutes";

const Placeholder = ({ title }) => (
  <div style={{ padding: "120px 40px" }}>
    <h1>{title}</h1>
    <p>Sorry, this page is under maintenance.</p>
  </div>
);

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Redirect root to home */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Home & Auto */}
        {HomeRoutes}
        {AutoRoutes}
        {/* High Value Assets */}
        {HighValueRoutes}
        {BusinessRoutes}
        {OtherRoutes}
        {RecreationRoutes}


         {/* Catch-all */}
        <Route path="*" element={<Placeholder title="Page Not Found" />} />

      </Route>
    </Routes>
  );
}

export default App;
