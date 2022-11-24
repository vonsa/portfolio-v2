import "./index.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./features/navigation/components/Navbar/Navbar";
import LazyFallback from "./Components/LazyFallback";
import { navigationItems } from "./features/navigation/config/navigation.config";
import { setAuthHeadersFromStorage } from "./features/auth/services/auth.service";
import Analytics from "./features/analytics/components/Analytics";
import { routeConfig } from "./features/routes/config/routes.config";
import { Layout } from "./Components/Layout";

setAuthHeadersFromStorage();

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
