import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "./MenuIcon/MenuIcon";
import "./navbar.css";

export interface NavigationItem {
  label: string;
  to: string;
}

export const Navbar = ({
  navigationItems,
}: {
  navigationItems: NavigationItem[];
}) => {
  let [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-screen flex justify-center fixed z-10">
      <div className="w-full md:max-w-6xl flex justify-between p-6 leading-normal">
        <div className="hidden md:flex">
          {navigationItems.map((item) => {
            return (
              <span className="mr-4 last:mr-0">
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) => {
                    return isActive
                      ? "font-bold hover:text-red-100 text-red-700"
                      : "hover:text-red-100";
                  }}
                >
                  {item.label}
                </NavLink>
              </span>
            );
          })}
        </div>

        <div className="md:hidden z-20 pr-6">
          <div
            className={`flex ${mobileMenuOpen ? "text-black" : "text-white"}`}
          >
            <MenuIcon open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
          </div>
        </div>
        <div
          id="mobile-background"
          className={`${
            mobileMenuOpen && "open"
          } pl-8 md:hidden fixed bg-white w-screen h-screen top-0 left-0 touch-none`}
        >
          <div className="mt-28 text-3xl flex gap-4 flex-col text-black">
            {navigationItems.map((item) => {
              return (
                <span id="nav-link">
                  <NavLink
                    to={item.to}
                    end
                    className={({ isActive }) => {
                      return isActive
                        ? "font-bold hover:text-red-100"
                        : "hover:text-red-100";
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </span>
              );
            })}
          </div>
        </div>
        {/* <a href="/" className="flex items-center gap-2 flex-wrap justify-end">
          <p className="font-bold">COEN DE WAAL</p>
          <div className="hidden md:block">|</div>
          <p className="text-xs">Frontend developer</p>
        </a> */}
      </div>
    </div>
  );
};
