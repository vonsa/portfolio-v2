import { NavbarConfig } from "./../Components/Navbar/Navbar";
import React from "react";
import { NavbarPosition } from "../Components/Navbar/Navbar";
import { ThemeColors } from "../styles/Theme.model";

const HomePage = React.lazy(() =>
  import("../pages/Home").then((res) => {
    console.warn("IMPORT DONE");
    return res;
  })
);
const PortfolioPage = React.lazy(() => import("../pages/Portfolio/Portfolio"));
const BlogManagePage = React.lazy(() => import("../pages/Blog/BlogManagePage"));
const BlogEditorPage = React.lazy(() => import("../pages/Blog/BlogEditorPage"));
const BlogLoginPage = React.lazy(() => import("../pages/Blog/BlogLoginPage"));
const BlogOverviewPage = React.lazy(
  () => import("../pages/Blog/BlogOverviewPage")
);
const BlogPostPage = React.lazy(() => import("../pages/Blog/BlogPostPage"));

interface RouteConfig {
  component: React.LazyExoticComponent<() => JSX.Element>;
  path: string;
  navbarConfig?: NavbarConfig;
}

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
  {
    component: BlogOverviewPage,
    path: "/blog",
  },
  {
    component: BlogManagePage,
    path: "/blog/manage",
  },
  {
    component: BlogEditorPage,
    path: "/blog/manage/create",
  },
  {
    component: BlogLoginPage,
    path: "/blog/manage/login",
  },
  {
    component: BlogPostPage,
    path: "/blog/post",
  },
];
