import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// const ContactDetails = lazy(() => import("../ContactDetails/ContactDetails"));
const Home = lazy(() => import("../../Pages/Home/Home"));
const AllReecipies = lazy(() =>
  import("../../Pages/AllReecipies/AllReecipies.jsx")
);
const AboutUs = lazy(() => import("../../Pages/AboutUs/AboutUs.jsx"));
const Contact = lazy(() => import("../../Pages/Contacts/Contacts.jsx"));
const Blog = lazy(() => import("../../Pages/Blog/Blog.jsx"));
const Layout = lazy(() => import("../Layout/Layout"));
const OneRecipePage = lazy(() =>
  import("../../Pages/OneRecipePage/OneRecipePage.jsx")
);

const App = () => {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route to="/AllReecipies" element={<AllReecipies />} />
        <Route to="/contact" element={<Contact />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="products/:id" element={<OneRecipePage />} />
      </Route>
    </Routes>
    // </Suspense>
  );
};

export default App;
