import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const ContactDetails = lazy(() => import("../ContactDetails/ContactDetails"));
const Home = lazy(() => import("../../Pages/Home/Home"));
// const ContactDetails = lazy(() => import("../../Pages/Home/Home"));
const Layout = lazy(() => import("../Layout/Layout"));

const App = () => {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact/:id" element={<ContactDetails />} />
      </Route>
    </Routes>
    // </Suspense>
  );
};

export default App;
