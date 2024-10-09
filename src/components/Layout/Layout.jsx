import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        thrth
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
      </header>
    </div>
  );
};

export default Layout;
