import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category/Category";
import DetailCategory from "../pages/Category/DetailCategory";

function RoutesComponent () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Category />} />
      <Route path="/categories/add" element={<DetailCategory />} />
    </Routes>
  );
};

export default RoutesComponent;