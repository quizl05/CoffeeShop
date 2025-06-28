import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

import SpaLayout from "../pages/spa-layout/SpaLayout";
import CoffeeHouse from "../pages/coffee-house/CoffeeHouse";
import NotFound from "../pages/not-found/NotFound";
import ForYourPleasure from "../pages/for-your-pleasure/ForYourPleasure";
import OurCoffee from "../pages/our-coffee/OurCoffee";

const SingleCoffeePage = React.lazy(() =>
  import("../pages/single-coffee-page/SingleCoffeePage")
);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={<div style={{ fontSize: "3rem" }}>Page loading...</div>}
      >
        <Routes>
          <Route path="/" element={<SpaLayout />}>
            <Route index element={<CoffeeHouse />} />
            <Route path="ourcoffee" element={<OurCoffee />} />
            <Route path="pleasure" element={<ForYourPleasure />} />
            <Route path="ourcoffee/:id" element={<SingleCoffeePage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
