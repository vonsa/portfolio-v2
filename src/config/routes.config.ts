import { NavbarConfig } from "./../Components/Navbar/Navbar";
import React from "react";
// import { blogRoutesConfig } from "./blog.routes.config";

const HomePage = React.lazy(() =>
  import("../pages/Home").then((res) => {
    console.warn("IMPORT DONE");
    return res;
  })
);
const PortfolioPage = React.lazy(() => import("../pages/Portfolio/Portfolio"));

interface RouteConfig {
  component: React.LazyExoticComponent<() => JSX.Element>;
  path: string;
  navbarConfig?: NavbarConfig;
}

// TODO: check if navigation should stem from this config
export const routeConfig: RouteConfig[] = [
  {
    component: HomePage,
    path: "/",
    navbarConfig: { position: "fixed", bg: "transparent" },
  },
  {
    component: PortfolioPage,
    path: "/portfolio",
    navbarConfig: {
      position: "fixed",
      bg: "transparent",
    },
  },
  // ...blogRoutesConfig,
];
