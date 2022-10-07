import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import PortfolioPage from "./pages/Portfolio/Portfolio";
import "./index.css";
import { navigationItems } from "./config/navigation";
import { Navbar } from "./Components/Navbar/Navbar";
import { Content } from "./Components/UI/Content";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Navbar navigationItems={navigationItems} />
    <Content>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<PortfolioPage />} path="/portfolio" />
      </Routes>
    </Content>
  </BrowserRouter>
  // </React.StrictMode>
);
