import { Link, useLocation } from "react-router-dom";

export const BreadCrumb = () => {
  const location = useLocation();

  const crumbs = location.pathname
    .split("/")
    .filter(Boolean)
    .reduce((acc: { part: string; path?: string }[], part, i, arr) => {
      if (!acc[0]) {
        acc.push({ path: `/${part}`, part });
      } else if (arr.length - 1 === i) {
        acc.push({ part });
      } else {
        const prevPath = acc[acc.length - 1].path;
        const path = `${prevPath}/${part}`;
        acc.push({ path, part });
      }
      return acc;
    }, []);

  return (
    <ul className="flex">
      {crumbs.map((crumb) => {
        if (crumb.path) {
          return (
            <Link key={crumb.path} to={crumb.path}>
              <li>{crumb.part} /&nbsp;</li>
            </Link>
          );
        } else {
          return <li key={crumb.part}>{crumb.part}</li>;
        }
      })}
    </ul>
  );
};
