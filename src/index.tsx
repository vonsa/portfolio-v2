import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { setAuthHeadersFromStorage } from "./services/auth.service";
import { routeConfig } from "./config/routes.config";
import { Navbar } from "./Components/Navbar/Navbar";
import { Layout } from "./Components/UI/Layout";
import { navigationItems } from "./config/navigation.config";
import LazyFallback from "./pages/LazyFallback";

setAuthHeadersFromStorage();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      {routeConfig.map((route) => {
        return (
          <Route
            key={route.path}
            element={
              <>
                <Layout>
                  <Navbar
                    navigationItems={navigationItems}
                    config={route.navbarConfig}
                  />
                  <React.Suspense fallback={<LazyFallback />}>
                    <route.component />
                  </React.Suspense>
                </Layout>
              </>
            }
            path={route.path}
          />
        );
      })}
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
