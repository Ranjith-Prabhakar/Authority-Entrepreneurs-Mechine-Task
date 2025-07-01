import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import AppLayout from "../layout/AppLayout";
import HomePage from "../pages/HomePage";
import useProductSetter from "../hooks/productSetter";
import ProductPage from "../pages/ProductPage";

export default function () {
  useProductSetter();
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/product:id" element={<ProductPage />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
