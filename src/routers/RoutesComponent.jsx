import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";

function RoutesComponent () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Category />} />
    </Routes>
  );
};

export default RoutesComponent;