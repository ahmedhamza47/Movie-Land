import React from "react";
import { Route, Routes } from "react-router-dom";
import Searched from "./Searched";
function Pages() {
  return (
    <Routes>
      <Route path="/searched/:search" element={<Searched />} />
    </Routes>
  );
}

export default Pages;
