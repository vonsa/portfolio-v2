import { NavigationItem } from "../components/Navbar/Navbar";

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    to: "/",
    end: true,
  },
  {
    label: "Portfolio",
    to: "/portfolio",
    end: true,
  },
  ...(process.env.REACT_APP_BLOG
    ? [
        {
          label: "Blog",
          to: "/blog",
        },
      ]
    : []), // disabled on production for now
];
