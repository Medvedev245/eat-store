import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../../Pages/Home/Home"));
const Layout = lazy(() => import("../Layout/Layout"));

const App = () => {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
    // </Suspense>
  );
};

export default App;
