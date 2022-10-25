import React from "react";

const HomePage = React.lazy(() => import("../pages/Home"));
const PortfolioPage = React.lazy(() => import("../pages/Portfolio/Portfolio"));
const BlogManagePage = React.lazy(() => import("../pages/Blog/BlogManagePage"));
const BlogEditorPage = React.lazy(() => import("../pages/Blog/BlogEditorPage"));
const BlogLoginPage = React.lazy(() => import("../pages/Blog/BlogLoginPage"));

export const routeConfig = [
  { component: HomePage, path: "/", navbar: "fixed" },
  {
    component: PortfolioPage,
    path: "/portfolio",
    navbar: "fixed",
  },
  {
    component: BlogManagePage,
    path: "/blog/manage",
    navbar: "static",
  },
  {
    component: BlogEditorPage,
    path: "/blog/edit",
    navbar: "static",
  },
  {
    component: BlogLoginPage,
    path: "/blog/login",
    navbar: "static",
  },
];
