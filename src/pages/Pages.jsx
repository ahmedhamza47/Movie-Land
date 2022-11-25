import React from "react";
import { Route, Routes } from "react-router-dom";
import Searched from "./Searched";
import Home from "./Home";
import Details from "./Details";
import TVShows from "./TVShows";
function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tvshows" element={<TVShows />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/details/:detail" element={<Details />} />
    </Routes>
  );
}

export default Pages;
