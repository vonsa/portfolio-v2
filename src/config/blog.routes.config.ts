import React from "react";

const BlogManagePage = React.lazy(() => import("../pages/Blog/BlogManagePage"));
const BlogEditorPage = React.lazy(() => import("../pages/Blog/BlogEditorPage"));
const BlogLoginPage = React.lazy(() => import("../pages/Blog/BlogLoginPage"));
const BlogOverviewPage = React.lazy(
  () => import("../pages/Blog/BlogOverviewPage")
);
const BlogPostPage = React.lazy(() => import("../pages/Blog/BlogPostPage"));

export const blogRoutesConfig = [
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
