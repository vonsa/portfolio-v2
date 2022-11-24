import { env } from "process";
import React from "react";
import { NavbarConfig } from "../../navigation/components/Navbar/Navbar";
import { blogRoutesConfig } from "./blog.routes.config";

const HomePage = React.lazy(() => import("../../../pages/Home"));
const PortfolioPage = React.lazy(() => import("../../../pages/Portfolio"));

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
  ...(process.env.REACT_APP_BLOG ? blogRoutesConfig : []), // disabled on production for now
];
