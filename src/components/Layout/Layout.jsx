import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { ComponentLayout } from "./Layout.styled";

const Layout = () => {
  return (
    <ComponentLayout>
      <Header>thrth</Header>
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
    </ComponentLayout>
  );
};

export default Layout;