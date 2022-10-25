import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { setAuthHeadersFromStorage } from "./services/auth.service";
import { routeConfig } from "./config/routes.config";
import { Navbar } from "./Components/Navbar/Navbar";
import { Layout } from "./Components/UI/Layout";
import { navigationItems } from "./config/navigation.config";
import { Content } from "./Components/UI/Content";

setAuthHeadersFromStorage();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Layout>
    <BrowserRouter>
      <Navbar navigationItems={navigationItems} />
      <Content>
        <React.Suspense fallback={<>...</>}>
          <Routes>
            {routeConfig.map((route) => {
              return <Route element={<route.component />} path={route.path} />;
            })}
          </Routes>
        </React.Suspense>
      </Content>
    </BrowserRouter>
  </Layout>
  // </React.StrictMode>
);
