import React, { useEffect } from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ComponentLayout } from "./Layout.styled";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../Redux/ProductsSlice/ProductsSlice";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <ComponentLayout>
      <Header />

      <main>
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                marginTop: "100px",
              }}
            >
              LOADING
              {/* <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                  <CircularProgress color="success" />
                </div> */}
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </ComponentLayout>
  );
};

export default Layout;
