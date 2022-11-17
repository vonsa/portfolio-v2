import "./index.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { routeConfig } from "./config/routes.config";
import { Layout } from "./Components/UI/Layout";
import LazyFallback from "./pages/LazyFallback";
import { navigationItems } from "./config/navigation.config";
import Analytics from "./Components/Analytics/Analytics";
import ConditionalWrapper from "./Components/Hoc/ConditionalWrapper";

export const createApp = () => (
  // <React.StrictMode>

  <>
    {process.env.REACT_APP_ANALYTICS_DATA_DOMAIN && (
      <Analytics dataDomain={process.env.REACT_APP_ANALYTICS_DATA_DOMAIN} />
    )}
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
  </>
  // </React.StrictMode>
);
